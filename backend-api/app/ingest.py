import mammoth
from sentence_transformers import SentenceTransformer
import faiss
import json
from pathlib import Path

INDEX_DIR = Path('/mnt/data/faiss_index')
INDEX_DIR.mkdir(parents=True, exist_ok=True)
INDEX_PATH = INDEX_DIR / 'dts_index.faiss'
META_PATH = INDEX_DIR / 'dts_meta.json'

MODEL_NAME = 'sentence-transformers/all-MiniLM-L6-v2'
embedder = SentenceTransformer(MODEL_NAME)

def chunk_text(text, chunk_size=800, overlap=100):
    words = text.split()
    chunks = []
    i = 0
    while i < len(words):
        chunk = ' '.join(words[i:i+chunk_size])
        chunks.append(chunk)
        i += chunk_size - overlap
    return chunks

def ingest_docx_to_faiss(docx_path: Path):
    with open(docx_path, 'rb') as docx_file:
        result = mammoth.extract_raw_text(docx_file)
        text = result.value

    chunks = chunk_text(text)
    vectors = embedder.encode(chunks, show_progress_bar=False)

    dim = vectors.shape[1]

    if INDEX_PATH.exists():
        index = faiss.read_index(str(INDEX_PATH))
        index.add(vectors)
        faiss.write_index(index, str(INDEX_PATH))

        meta = json.loads(META_PATH.read_text())
        offset = len(meta)
        for i, c in enumerate(chunks):
            meta.append({"id": offset+i, "text": c})
        META_PATH.write_text(json.dumps(meta))

    else:
        index = faiss.IndexFlatL2(dim)
        index.add(vectors)
        faiss.write_index(index, str(INDEX_PATH))

        meta = [{"id": i, "text": c} for i, c in enumerate(chunks)]
        META_PATH.write_text(json.dumps(meta))

    return True
