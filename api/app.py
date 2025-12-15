"""
Hugging Face Spaces entry point for Physical AI Chatbot API.
This file is required by Hugging Face Spaces to run the FastAPI app.
"""
import os
from src.main import app


port = int(os.getenv("PORT", 7860))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=port,
        log_level="info"
    )
