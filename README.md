# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





React CRUD Application (Products Management)
📌 Project Overview
This is a simple React CRUD (Create, Read, Update, Delete) application.
It allows users to:


View all products


Read single product details


Update product information


Delete a product


The app uses:


React.js


React Router DOM


Axios


REST API (http://localhost:2020/Products)


This project is good for beginners to understand API integration and routing in React.

📁 Project Structure
src/
│
├── App.jsx
├── App.css
│
└── components/
    ├── Home.jsx
    ├── Read.jsx
    └── Update.jsx


⚙️ Installation and Setup
Step 1: Install dependencies
npm install

Step 2: Install required packages
npm install axios react-router-dom

Step 3: Start your backend server
Make sure your API is running on:
http://localhost:2020/Products

Example using json-server:
npx json-server --watch db.json --port 2020


Step 4: Run React app
npm run dev

or
npm start


🔄 Routing (App.jsx)
This file handles navigation between pages.
Routes used:
PathComponentPurpose/HomeShow all products/read/:idReadShow single product/update/:idUpdateUpdate product
Example:

<!-- <Route path="/" element={<Home />} />
<Route path="/read/:id" element={<Read />} />
<Route path="/update/:id" element={<Update />} /> -->


🏠 Home Component (Home.jsx)
Purpose: Display all products
Features:


Fetch all data using Axios GET


Display data in table


Update button → go to update page


Read button → go to read page


Delete button → delete product


API used:
GET http://localhost:2020/Products
DELETE http://localhost:2020/Products/:id

Important concepts used:


useState → store data


useEffect → fetch data


axios → call API


Link → navigate between pages



📖 Read Component (Read.jsx)
Purpose: Show single product details
How it works:


Gets ID from URL using useParams


Calls API using ID


Shows product data in input fields


API used:
GET http://localhost:2020/Products/:id

Important concept:
useParams()

This gets ID from URL.
Example:
/read/5

ID = 5

✏️ Update Component (Update.jsx)
Purpose: Update product data
How it works:
Step 1: Fetch product data using ID
Step 2: Show data in input fields
Step 3: User edits data
Step 4: Submit sends PUT request
API used:
GET http://localhost:2020/Products/:id
PUT http://localhost:2020/Products/:id

Important concepts:


useParams → get ID


useNavigate → redirect user


axios.put → update data


After update, user is redirected to Home page.

🌐 API Structure Example (db.json)
Example database:
{
  "Products": [
    {
      "id": "1",
      "email": "test@gmail.com",
      "body": "Sample text"
    },
    {
      "id": "2",
      "email": "hello@gmail.com",
      "body": "Another sample"
    }
  ]
}


🧠 Concepts Used


React Functional Components


useState Hook


useEffect Hook


React Router DOM


Dynamic Routing


Axios API calls


CRUD operations


REST API integration



🔁 CRUD Operations Summary
OperationMethodAPIRead allGET/ProductsRead oneGET/Products/:idUpdatePUT/Products/:idDeleteDELETE/Products/:id

🎯 Learning Outcome
After completing this project, you will understand:


How to connect React with API


How to use Axios


How routing works in React


How CRUD operations work


How to manage state



🚀 Future Improvements
You can add:


Create product page


Edit form validation


Better UI using Tailwind CSS


Loading spinner


Error handling



👨‍💻 Author
Nitik Sharma
Frontend Developer (React.js)

If you want, I can also create a professional GitHub README with badges, screenshots, and portfolio-level formatting for your resume.