
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.schema import Document

products = [
"Gaming laptop RTX GPU",
"Wireless ergonomic mouse",
"Mechanical RGB keyboard",
"Office chair lumbar support"
]

docs=[Document(page_content=p) for p in products]

vectordb = Chroma.from_documents(
 docs,
 OpenAIEmbeddings(),
 persist_directory="./chroma"
)

vectordb.persist()