-- Enable the pgvector extension for vector operations
create extension if not exists vector;

-- Create the portfolio content table for RAG knowledge base
create table portfolio_content (
  id bigserial primary key,
  content text not null,
  embedding vector(768) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create an index on the embedding column for fast similarity search
create index on portfolio_content using ivfflat (embedding vector_cosine_ops)
with (lists = 100);

-- Create a function to match portfolio content using similarity search
create or replace function match_portfolio_content (
  query_embedding vector(768),
  match_threshold float default 0.78,
  match_count int default 3
)
returns table (
  id bigint,
  content text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    portfolio_content.id,
    portfolio_content.content,
    1 - (portfolio_content.embedding <=> query_embedding) as similarity
  from portfolio_content
  where 1 - (portfolio_content.embedding <=> query_embedding) > match_threshold
  order by portfolio_content.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- Insert your portfolio content (you can add more entries as needed)
insert into portfolio_content (content, embedding) values 
-- About section
('Tong Duy Tan is an AI Engineer driven to bridge the gap between advanced AI research and tangible, real-world applications. His passion lies in leveraging this approach to tackle meaningful challenges, with a core focus on innovating within the EdTech and FinTech sectors.', 
 '[0]'::vector), -- Placeholder embedding - you will need to generate real embeddings

-- Experience content
('Tan has practical experience at Goline Financial Technology JSC as an AI Intern, where he developed Strategy Generator Agent and researched AI applications in FinTech. He is also conducting research in AI in Education under the supervision of Dr. Tran Van Khanh at UET University.',
 '[0]'::vector),

-- Project content  
('AI Storybook & Podcast Producer: Developed a platform to fully automate the process from idea generation to final story and podcast, utilizing LLMs, Image Diffusion, and TTS. This solution helps create quality educational content 10 times faster with professional-grade quality.',
 '[0]'::vector),

('Lightweight GANs for Medical Imaging: Successfully designed a lightweight GAN architecture, reducing 72.5 million parameters while maintaining 91% accuracy for medical imaging tasks. This research focuses on making AI models more efficient for healthcare applications.',
 '[0]'::vector),

('Churn Prediction and Analysis: Developed a customer churn prediction system with various survival analysis capabilities, helping to devise effective customer retention strategies for businesses in the financial sector.',
 '[0]'::vector),

-- Technical skills
('Tans core technical skills include Python, JavaScript, PyTorch, LangChain, LangGraph, LLMs, Django, Flask, Kafka, Hadoop, Docker and many other AI/ML technologies. He has strong experience in Generative AI and Full-Stack Development.',
 '[0]'::vector),

-- Education
('Tan is pursuing a Bachelors Degree in Artificial Intelligence at UET University of Engineering and Technology with a strong academic record. He demonstrates excellence in both theoretical understanding and practical application of AI technologies.',
 '[0]'::vector),

-- Contact and personal info
('Contact Information: Email: td.tan2711@gmail.com, Phone: 0327728199, Location: Đông Đa, Hà Nội, Vietnam. Date of Birth: 27/11/2004. Tan is currently available for work and responds within 24 hours. Languages: Vietnamese (Native), English (IELTS 6.5), Japanese (JLPT N4, pursuing N3).',
 '[0]'::vector);

-- Note: The embeddings above are placeholders. You will need to:
-- 1. Generate actual embeddings using Google's embedding model
-- 2. Update these rows with real vector values
-- 3. You can do this by calling your Edge Function with a special setup endpoint