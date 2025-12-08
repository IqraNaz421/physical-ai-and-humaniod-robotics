# Chatbot Integration Guide

Complete guide for setting up and using the RAG-powered chatbot in the Physical AI & Humanoid Robotics textbook.

## Architecture Overview

### Backend (FastAPI)
- **Location**: `/api`
- **Framework**: FastAPI with `uv` package manager
- **LLM**: Gemini 1.5 Flash (free tier)
- **Embeddings**: Qdrant FastEmbed - BAAI/bge-small-en-v1.5 (384-dimensional, local, free)
- **Vector DB**: Qdrant Cloud (free tier)
- **Cost**: $0 (all free services)

### Frontend (React + Docusaurus)
- **Location**: `/docs/src/components/ChatWidget`
- **Framework**: React with TypeScript
- **Integration**: Swizzled Root component
- **Streaming**: Server-Sent Events (SSE)

## Backend Setup

### 1. Install Dependencies (Separate Terminal)

```bash
cd api
export PATH="$HOME/.local/bin:$PATH"

# Install dependencies
uv add fastapi uvicorn fastembed agents qdrant-client pydantic pydantic-settings python-dotenv httpx tiktoken sse-starlette

# Install dev dependencies
uv add --dev pytest pytest-asyncio httpx
```

### 2. Configure Environment Variables

Create `api/.env` file with your credentials:

```env
# Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Qdrant Configuration
QDRANT_URL=https://your-qdrant-instance.cloud.qdrant.io:6333
QDRANT_API_KEY=your_qdrant_api_key_here

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,https://IqraNaz421.github.io
```

### 3. Test Qdrant Connection

```bash
uv run python scripts/test_qdrant.py
```

Expected output:
```
✓ Qdrant connection successful
Collections: []
```

### 4. Index Textbook Content

```bash
uv run python scripts/index_content.py
```

This will:
- Scan all markdown files in `docs/docs/chapter-*/lesson-*.md`
- Chunk content by `##` headings
- Generate 384-dimensional embeddings using FastEmbed
- Upload to Qdrant with metadata (chapter, lesson, section, url)

### 5. Start API Server

```bash
uv run uvicorn src.main:app --reload --port 8000
```

API will be available at:
- http://localhost:8000
- Docs: http://localhost:8000/docs
- Health check: http://localhost:8000/api/health

## Frontend Setup

### 1. Configure API URL

The frontend automatically uses the API URL from `docusaurus.config.ts`:

```typescript
customFields: {
  chatbotApiUrl: process.env.CHATBOT_API_URL || 'http://localhost:8000/api',
}
```

For production deployment, set the `CHATBOT_API_URL` environment variable:

```bash
export CHATBOT_API_URL=https://your-production-api.com/api
npm run build
```

### 2. Start Development Server

```bash
cd docs
npm start
```

The chatbot widget will appear in the bottom-right corner of every page.

## Testing the Integration

### 1. Check Backend Health

```bash
curl http://localhost:8000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "version": "1.0.0"
}
```

### 2. Test Chat Endpoint (Sync)

```bash
curl -X POST http://localhost:8000/api/chat/sync \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is embodied intelligence?",
    "conversation_history": []
  }'
```

### 3. Test Streaming Chat

The streaming endpoint uses Server-Sent Events (SSE). You can test it in the browser by opening the Docusaurus site and using the chat widget.

## ChatWidget Features

### Core Features (Implemented)
- ✅ Floating chat button (bottom-right)
- ✅ Expandable chat panel
- ✅ Message history display
- ✅ Streaming responses via SSE
- ✅ Source citations with clickable links
- ✅ Dark mode support
- ✅ Responsive design (mobile-friendly)
- ✅ Typing indicator
- ✅ Conversation history maintained in session

### Planned Features
- Text selection context
- Page navigation awareness
- Learning path guidance
- Urdu language support

## API Endpoints

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0"
}
```

### POST /api/chat
Streaming chat endpoint using Server-Sent Events.

**Request:**
```json
{
  "message": "Your question here",
  "selected_text": "Optional selected text for context",
  "current_page": "Optional current page URL",
  "conversation_history": [
    {"role": "user", "content": "Previous question"},
    {"role": "assistant", "content": "Previous answer"}
  ]
}
```

**Response (SSE Stream):**
```
data: {"type": "sources", "sources": [...]}

data: {"type": "content", "chunk": "First "}

data: {"type": "content", "chunk": "chunk..."}

data: {"type": "done"}
```

### POST /api/chat/sync
Non-streaming chat endpoint (for testing).

**Request:** Same as `/api/chat`

**Response:**
```json
{
  "content": "Complete response text",
  "sources": [
    {
      "chapter": 1,
      "lesson": 1,
      "section": "Introduction",
      "url": "/docs/chapter-01-foundations/lesson-01-intro-embodied-intelligence"
    }
  ]
}
```

## File Structure

### Backend (`/api`)
```
api/
├── src/
│   ├── main.py                 # FastAPI app entry point
│   ├── config/
│   │   └── settings.py         # Pydantic settings
│   ├── models/
│   │   └── schemas.py          # Request/response models
│   ├── services/
│   │   ├── embeddings.py       # FastEmbed service
│   │   ├── indexer.py          # Content indexing
│   │   ├── rag.py              # RAG retrieval
│   │   └── llm.py              # Gemini integration
│   ├── routes/
│   │   ├── health.py           # Health check
│   │   └── chat.py             # Chat endpoints
│   └── utils/
│       └── chunker.py          # Markdown chunking
├── scripts/
│   ├── test_qdrant.py          # Connection test
│   └── index_content.py        # Content indexing
├── .env                        # Environment variables (gitignored)
├── .env.example                # Example environment
├── pyproject.toml              # uv project config
└── README.md                   # Backend documentation
```

### Frontend (`/docs/src/components/ChatWidget`)
```
ChatWidget/
├── index.tsx                   # Main component
├── types.ts                    # TypeScript types
└── styles.module.css           # Component styles
```

### Integration (`/docs/src/theme/Root`)
```
Root/
└── index.tsx                   # Swizzled Root component
```

## Troubleshooting

### Backend Issues

**Issue**: `ModuleNotFoundError: No module named 'qdrant_client'`

**Solution**: Dependencies not installed. Run:
```bash
cd api
uv sync
```

**Issue**: `Connection refused` when testing Qdrant

**Solution**: Check your `.env` file has correct `QDRANT_URL` and `QDRANT_API_KEY`.

**Issue**: `No relevant content found in the textbook`

**Solution**: Index content first:
```bash
uv run python scripts/index_content.py
```

### Frontend Issues

**Issue**: Chat widget not appearing

**Solution**: Check that Root component is properly swizzled at `docs/src/theme/Root/index.tsx`.

**Issue**: `Failed to fetch` error when sending messages

**Solution**:
1. Ensure backend is running on port 8000
2. Check CORS configuration in `api/src/config/settings.py`
3. Verify API URL in `docusaurus.config.ts`

**Issue**: Dark mode styling broken

**Solution**: Ensure you have the latest `styles.module.css` with `[data-theme='dark']` selectors.

## Deployment

### Backend Deployment Options

1. **Render** (Recommended for free tier)
2. **Railway**
3. **Hugging Face Spaces** (with Docker)
4. **Fly.io**

See individual deployment guides in `/api/deployment/` directory (coming soon).

### Frontend Deployment

The frontend deploys to GitHub Pages automatically. To use the chatbot in production:

1. Deploy the backend to your chosen platform
2. Set `CHATBOT_API_URL` environment variable during build:
   ```bash
   export CHATBOT_API_URL=https://your-api.onrender.com/api
   npm run build
   ```

## Performance Considerations

### Embedding Generation
- FastEmbed runs locally, no API calls required
- Initial model load: ~2 seconds
- Embedding generation: ~50ms per chunk
- Model size: ~80MB (downloaded once)

### Vector Search
- Qdrant Cloud free tier: 1GB storage
- Typical query latency: <100ms
- Supports ~2,000 textbook chunks

### LLM Response Time
- Gemini 1.5 Flash: 50-200ms first token
- Streaming: 20-50 tokens/second
- Free tier: 15 RPM, 1M TPM, 1,500 RPD

## Security Notes

1. **Never commit `.env` files** - credentials are gitignored
2. **Use CORS properly** - configure `CORS_ORIGINS` for production domains
3. **Rate limiting** - Consider adding rate limiting in production
4. **API keys** - Rotate keys periodically
5. **Input validation** - All inputs validated via Pydantic models

## Next Steps

1. ✅ Basic chatbot functionality (Core Q&A)
2. 🔲 Text selection context
3. 🔲 Page navigation awareness
4. 🔲 Learning path guidance
5. 🔲 Urdu language support
6. 🔲 Production deployment

## Support

For issues or questions:
1. Check this documentation
2. Review backend logs: `uvicorn` output
3. Check browser console for frontend errors
4. Open an issue on GitHub

## License

Same as parent project - see main README.md
