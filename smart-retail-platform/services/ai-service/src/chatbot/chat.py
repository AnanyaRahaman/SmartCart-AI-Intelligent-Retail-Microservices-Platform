from fastapi import FastAPI
from langchain.chat_models import ChatOpenAI
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA

app = FastAPI()

embeddings = OpenAIEmbeddings()

vectordb = Chroma(
 persist_directory="./chroma",
 embedding_function=embeddings
)

retriever = vectordb.as_retriever()

llm = ChatOpenAI()

qa = RetrievalQA.from_chain_type(
 llm=llm,
 retriever=retriever
)

@app.post("/chat")
async def chat(question:str):

 answer = qa.run(question)

 return {"answer":answer}