import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { query } = await req.json()

    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get Google API key from secrets
    const googleApiKey = Deno.env.get('GOOGLE_API_KEY')
    if (!googleApiKey) {
      throw new Error('Google API key not found')
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Generate embedding for the user's query
    const embeddingResponse = await fetch('https://generativelanguage.googleapis.com/v1beta/models/embedding-001:embedContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': googleApiKey,
      },
      body: JSON.stringify({
        model: 'models/embedding-001',
        content: {
          parts: [{
            text: query
          }]
        }
      })
    })

    if (!embeddingResponse.ok) {
      throw new Error('Failed to generate embedding')
    }

    const embeddingData = await embeddingResponse.json()
    const queryEmbedding = embeddingData.embedding.values

    // Search for relevant content in the knowledge base
    const { data: relevantContent, error: searchError } = await supabase.rpc(
      'match_portfolio_content',
      {
        query_embedding: queryEmbedding,
        match_threshold: 0.78,
        match_count: 3
      }
    )

    if (searchError) {
      console.error('Search error:', searchError)
      throw new Error('Failed to search knowledge base')
    }

    // Prepare context from relevant content
    const context = relevantContent
      ?.map((item: any) => item.content)
      .join('\n\n') || ''

    // Create enhanced prompt with context
    const systemPrompt = `You are an AI assistant representing Tong Duy Tan, an AI Engineer. You have access to his portfolio information and should answer questions based only on the provided context. Be professional, friendly, and accurate.

Context from Tan's portfolio:
${context}

Guidelines:
- Only answer based on the provided context
- If the information isn't in the context, politely say you don't have that specific information
- Be conversational but professional
- Highlight key achievements and skills when relevant
- Keep responses concise but informative`

    // Generate response using Gemini
    const chatResponse = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': googleApiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser question: ${query}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    })

    if (!chatResponse.ok) {
      throw new Error('Failed to generate response')
    }

    const chatData = await chatResponse.json()
    const answer = chatData.candidates[0]?.content?.parts[0]?.text || 'Sorry, I could not generate a response.'

    return new Response(
      JSON.stringify({ answer }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})