# Fronlines Company Management Project

Full-stack app to manage company data using **Node.js, Express, MongoDB, and React**.  
You can **add, edit, delete, filter, and reset companies**.

---

## Folder Structure

fronlines/
├─ company-api/ # Backend (Node.js + Express + MongoDB)
└─ company-frontend/ # Frontend (React)

---

## Backend Setup (`company-api`)

1. Open terminal in `company-api/`:

```bash
cd company-api
npm install

2.  Create a .env file with your MongoDB connection:

MONGO_URI=mongodb://127.0.0.1:27017/companyDB

3.  Run the Backend
npm run dev       # if using nodemon
# or
node server.js


Backend runs on: http://localhost:5000

APIs:

GET /api/companies → list companies (supports filters)

POST /api/companies → add company

PUT /api/companies/:id → update company

DELETE /api/companies/:id → delete company


# Company Frontend

This is the **React frontend** for the Fronlines Company Management Project.  
It connects to the backend API (`company-api`) to display, add, edit, delete, and filter companies.

---

## Setup & Run

1. Open terminal in the `company-frontend` folder:

```bash
cd company-frontend
npm install
npm start

2.  The app will run on:

http://localhost:3000

3.  Make sure the backend (company-api) is running on http://localhost:5000 before using the frontend.

Features

Add Company – Fill the form and click Add.

Edit Company – Click Edit, modify fields, and Update.

Delete Company – Click Delete.

Filter Companies – Enter criteria and click Filter.

Reset Filters – Clear filter inputs to show all companies.

Notifications – Shows success or failure messages for actions.
