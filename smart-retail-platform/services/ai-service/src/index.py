from fastapi import FastAPI
from recommendation.recommend import app as rec_app
from chatbot.chat import app as chat_app

app = FastAPI()

# Mount sub-apps
app.mount("/recommendation", rec_app)
app.mount("/chatbot", chat_app)