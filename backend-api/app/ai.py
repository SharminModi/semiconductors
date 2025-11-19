from sentence_transformers import SentenceTransformer
import faiss
import json
from pathlib import Path

INDEX_DIR = Path('/mnt/data/faiss_index')
INDEX_PATH = INDEX_DIR / 'dts_index.faiss'
META_PATH = INDEX_DIR / 'dts_meta.json'
MODEL_NAME = 'sentence-transformers/all-MiniLM-L6-v2'

embedder = SentenceTransformer(MODEL_NAME)

def load_index():
    if not INDEX_PATH.exists():
        raise RuntimeError("Index not found. Please ingest a DOCX first.")
    index = faiss.read_index(str(INDEX_PATH))
    meta = json.loads(META_PATH.read_text())
    return index, meta

def query_rag(query: str, top_k=4):
    index, meta = load_index()
    qv = embedder.encode([query])
    D, I = index.search(qv, top_k)
    ctx = [meta[x]["text"] for x in I[0]]
    answer = "\n\n".join(ctx)
    return {"query": query, "contexts": ctx, "answer": answer}

def run_agent(prompt: str):
    return {"result": f"Agent received: {prompt}"}

def embeddings_create(text: str):
    return embedder.encode([text]).tolist()
