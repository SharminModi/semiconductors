from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from .ingest import ingest_docx_to_faiss
from .ai import query_rag, run_agent, embeddings_create

app = FastAPI(title='DTS AI Backend')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

DOCX_PATH = Path('/mnt/data/DTS Website Contents Revised v4.docx')

@app.get('/api/content/raw')
async def get_raw_docx():
    if not DOCX_PATH.exists():
        raise HTTPException(status_code=404, detail='DOCX not found')
    return FileResponse(DOCX_PATH)

@app.post('/api/ai/rag')
async def api_rag(payload: dict):
    query = payload.get("query", "")
    res = query_rag(query)
    return JSONResponse(res)

@app.post('/api/ai/agent')
async def api_agent(payload: dict):
    prompt = payload.get("prompt", "")
    res = run_agent(prompt)
    return JSONResponse(res)
