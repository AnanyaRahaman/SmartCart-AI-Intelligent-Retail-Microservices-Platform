# recommend.py
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from fastapi import FastAPI

app = FastAPI()

products = pd.DataFrame([
 {"id":1,"name":"Laptop","category":"electronics"},
 {"id":2,"name":"Mouse","category":"electronics"},
 {"id":3,"name":"Keyboard","category":"electronics"},
 {"id":4,"name":"Chair","category":"furniture"}
])

def recommend(product_id):

 target = products[products.id==product_id]

 similarities = cosine_similarity(
     pd.get_dummies(products.category),
     pd.get_dummies(target.category)
 )

 scores = similarities[:,0]

 products["score"]=scores

 recs = products.sort_values("score",ascending=False)

 return recs.head(3).to_dict(orient="records")

@app.get("/recommend/{product_id}")
def get_recommendation(product_id:int):

 return recommend(product_id)