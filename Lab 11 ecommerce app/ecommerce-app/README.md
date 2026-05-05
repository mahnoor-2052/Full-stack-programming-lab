# 🛒 ShopMERN — MERN Stack Ecommerce App

**Lab 11 | Full Stack Programming | Air University FCAI Islamabad**

A full-stack ecommerce application built with:
- **Frontend:** Next.js 14 + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas (cloud)

---

## 📁 Project Structure

```
ecommerce-app/
├── backend/          ← Node + Express + MongoDB
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── products.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── frontend/         ← Next.js + Tailwind CSS
    ├── src/app/
    │   ├── components/
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   │   └── ProductCard.js
    │   ├── products/
    │   │   └── page.js
    │   ├── layout.js
    │   ├── page.js
    │   └── globals.css
    └── package.json
```

---

## 🚀 Setup & Run

### 1. MongoDB Atlas Setup
1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free cluster
3. Create a database user
4. Get your connection string

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and paste your MongoDB Atlas connection string
node server.js
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
# .env.local already points to http://localhost:5000
npm run dev
```

Frontend runs on: `http://localhost:3000`

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| POST | `/api/products/seed/data` | Seed 6 sample products |

### Seed Sample Data

```bash
# In a new terminal, after starting the backend:
curl -X POST http://localhost:5000/api/products/seed/data
```

Or visit in Postman: `POST http://localhost:5000/api/products/seed/data`

---

## 📸 Screenshots
*(Add your screenshots here)*
