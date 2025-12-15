from sqlalchemy import create_engine, text
import os

# Load environment variables from .env
from dotenv import load_dotenv
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL not found in .env file")

# Connect to the database
engine = create_engine(DATABASE_URL)

# SQL statements to create tables
create_tables_sql = """
-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User background table
CREATE TABLE IF NOT EXISTS user_backgrounds (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    software_experience TEXT,
    hardware_experience TEXT,
    programming_languages TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
"""

# Execute SQL
with engine.connect() as conn:
    conn.execute(text(create_tables_sql))
    conn.commit()

print("✅ Auth tables created successfully!")
