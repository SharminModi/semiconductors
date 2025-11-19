# DeepTech Semiconductors — Full Stack App

This project is designed to **develop scalable web applications**, integrating frontend and backend components with seamless data flow via RESTful APIs.

## 📌 Features
- React frontend (client website)
- Angular admin panel (future)
- FastAPI backend (AI + RAG + Doc ingestion)
- RESTful API communication between UI and backend
- Dockerized deployment
- Supports chatbot and AI integration

## 🧠 Chatbot & AI
The backend uses:
- Sentence Transformers (MiniLM)
- FAISS vector database
- DOCX ingestion pipeline
- RAG (Retrieval-Augmented Generation)

API endpoints:
- `POST /api/ai/rag` — Ask AI a question
- `POST /api/ai/agent` — Run an agent
- `POST /api/ingest/upload` — Upload DOCX for indexing

## 🛠 Tech Stack
**Frontend:** React + Vite  
**Backend:** FastAPI + Python  
**AI/ML:** Embeddings + FAISS  
**Deployment:** Docker + GitHub Actions  
**Future:** Angular admin dashboard

## 🚀 Deployment
This project can be deployed to:
- Custom domain
- Any hosting provider
- VPS / AWS / DigitalOcean
- GitHub workflow auto-deployment

You can change:
- Domain name
- Hosting server
- Folder structure
- API paths
anytime later.

## 🧩 Next Steps
Continue adding code files:
1. `docker-compose.yml`
2. `backend-api/app/main.py`
3. `backend-api/app/ingest.py`
4. `backend-api/app/ai.py`
5. `react-host/package.json`
6. React pages & components

Follow ChatGPT instructions for each step.
