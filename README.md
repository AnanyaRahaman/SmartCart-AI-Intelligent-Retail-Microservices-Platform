# SmartCart AI – Intelligent Retail Microservices Platform

SmartCart AI is a **full-stack microservices retail platform** that simulates a modern e-commerce system with AI capabilities.
The platform demonstrates how large-scale retail systems handle **product catalog management, inventory tracking, payments, order processing, AI recommendations, and conversational shopping assistants**.

The system is built using **microservices architecture**, containerized with Docker, and designed to be deployable on Kubernetes.

---

# Project Overview

This project replicates the backend architecture used in modern e-commerce platforms.
Users can browse products, add items to their cart, purchase products, and interact with an AI shopping assistant.

The platform is composed of several independent services that communicate through APIs and event streams.

---

# What Users Can Do

The system simulates a real online shopping platform.

### Browse Products

Users can view a list of available products in the store.

Example products include:

* laptops
* keyboards
* office chairs
* computer accessories

Product information is retrieved from the **Product Service**, which stores product data in the database.

---

### Add Products to Cart

Users can:

* select products
* choose quantities
* add products to their shopping cart

Before checkout, the system verifies product availability through the **Inventory Service**.

---

### Purchase Products

Users can buy products through the checkout process.

Purchase workflow:

1. User selects items in the cart
2. Order service creates an order
3. Payment service processes payment
4. Inventory service reduces product stock
5. Order status is updated

If payment succeeds, the order is confirmed.

---

### Payment Processing

Payments are processed using **Stripe**.

The **Payment Service** communicates with Stripe to securely handle transactions.

Example payment flow:

User checkout → Payment Service → Stripe → Payment confirmation.

---

### Inventory Management

The platform tracks product stock levels.

When a product is purchased:

* inventory quantity is reduced
* product availability is updated

This prevents overselling and ensures accurate stock tracking.

Inventory is managed by the **Inventory Service**.

---

### Order Management

Users can view order information such as:

* order history
* order status
* purchased items

Example order lifecycle:

Created
Processing
Paid
Shipped
Delivered

Order processing is handled by the **Order Service**.

---

### AI Product Recommendations

The system recommends products related to what the user is viewing.

Example:

If a user views a **gaming laptop**, the system may recommend:

* gaming mouse
* mechanical keyboard
* cooling pad

Recommendations are generated using a machine learning similarity model.

---

### AI Shopping Assistant Chatbot

The platform includes an AI assistant that helps users discover products.

Users can ask questions such as:

"What laptop should I buy for gaming?"
"Recommend a mechanical keyboard."
"Compare these two laptops."

The chatbot uses a **Retrieval Augmented Generation (RAG)** pipeline to search product data and generate answers.

---

# System Architecture

The system follows a **microservices architecture** where each service is responsible for a specific function.

Services include:

API Gateway
User Service
Product Service
Inventory Service
Order Service
Payment Service
AI Service

All services communicate through REST APIs and event streaming.

---

# Microservices Description

## API Gateway

The entry point for all client requests.

Responsibilities:

* route requests to appropriate services
* authentication handling
* API aggregation

---

## User Service

Handles user account management.

Features:

* user registration
* user login
* JWT authentication

---

## Product Service

Manages the product catalog.

Features:

* product listing
* product details
* product search

---

## Inventory Service

Tracks product stock levels.

Features:

* update stock quantities
* prevent overselling
* check availability during checkout

---

## Order Service

Manages purchase orders.

Features:

* create orders
* update order status
* retrieve order history

---

## Payment Service

Handles payment transactions using **Stripe**.

Features:

* payment processing
* payment verification
* transaction confirmation

---

## AI Service

Provides intelligent features for the platform.

Includes:

AI Product Recommendation System
AI Shopping Assistant Chatbot

---

# AI Components

## Recommendation Engine

The recommendation system suggests products based on similarity.

Techniques used:

* content-based filtering
* cosine similarity
* product embeddings

Example endpoint:

/recommendation/recommend/{product_id}

---

## AI Chatbot

The chatbot allows users to search products conversationally.

Technologies used:

* LangChain
* Retrieval Augmented Generation
* vector embeddings
* semantic search

The chatbot retrieves relevant product information before generating responses.

---

# Infrastructure Components

## Database

The system uses **PostgreSQL** to store structured data such as:

* users
* products
* orders
* inventory

---

## Cache Layer

The platform uses **Redis** to improve performance by caching frequently accessed data.

Examples:

* product listings
* user sessions

---

## Event Streaming

The system uses **Apache Kafka** for asynchronous communication between services.

Example events include:

order_created
payment_successful
inventory_updated

---

## Vector Database

The AI chatbot uses a vector database to store product embeddings for semantic search.

Embeddings allow the chatbot to retrieve relevant products based on meaning rather than exact keywords.

---

# Deployment

## Containerization

The platform uses **Docker** to package each microservice into a container.

Each service runs independently and can be scaled separately.

---

## Container Orchestration

The project includes deployment configuration for **Kubernetes**.

Kubernetes enables:

* automatic scaling
* service discovery
* load balancing
* fault tolerance

---

# How to Run the Project

## Step 1 – Clone the Repository

git clone https://github.com/AnanyaRahaman/SmartCart-AI-Intelligent-Retail-Microservices-Platform.git

cd SmartCart-AI-Intelligent-Retail-Microservices-Platform

---

## Step 2 – Create Vector Database Folder

mkdir -p vector-db/chroma

This folder will store vector embeddings used by the AI chatbot.

---

## Step 3 – Start All Services

docker-compose up --build

This command will start all containers including:

API Gateway
User Service
Product Service
Inventory Service
Order Service
Payment Service
AI Service
PostgreSQL
Redis
Kafka

---

## Step 4 – Load AI Product Data

After containers start, run:

docker exec -it ai-service python src/chatbot/ingest_products.py

This script generates embeddings and stores them in the vector database.

---

## Step 5 – Access the Platform

Frontend

http://localhost:3000

API Gateway

http://localhost:4000

AI Chatbot

http://localhost:5000/chatbot/chat

Product Recommendation

http://localhost:5000/recommendation/recommend/1

---

# Technology Stack

Backend

Node.js
TypeScript
Python FastAPI

Databases

PostgreSQL
Vector Database

Infrastructure

Redis
Kafka

AI

LangChain
RAG pipeline

Deployment

Docker
Kubernetes

---

# Future Improvements

Potential enhancements for the platform include:

* personalized recommendations based on user behavior
* hybrid search combining keyword and vector search
* real-time recommendation pipelines
* monitoring with Prometheus and Grafana
* multi-agent AI shopping assistant

---
