# 🧑‍💼 MANAGEMENT-APP

A full-featured **User Management Web Application** built with **React.js**, **Firebase**, **Tailwind CSS**, **Formik**, and **Redux Toolkit**.  
It allows users to register, manage their personal details, and download their information in PDF format — all with a clean, responsive design.

---

## 🚀 Overview

The **Management App** provides a modern interface for user data handling — including **sign-up, login, profile management, and admin control**.  
It integrates **Firebase** as the backend for authentication, database, and storage, while **React.js** handles the front-end logic and UI.

---

## 🧩 Tech Stack

| Category | Technology Used |
|-----------|----------------|
| Front-End | React.js |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Form Handling & Validation | Formik + Yup |
| Backend | Firebase (Auth, Firestore, Storage) |
| PDF Generation | jsPDF / pdfmake |
| Authentication | Firebase Auth (Email, Google Sign-In) |

---

## ✨ Features

### 👤 User Features
- User can **Sign Up / Log In / Log Out**.
- User can **fill basic details** such as:
  - Full Name  
  - Gender  
  - Age  
  - Date of Birth  
  - Contact Number  
  - Profile Image  
  - Other personal details.
- User can **retrieve, update, and delete** their personal details.
- User can **download details in PDF format**.
- User details are **stored securely** in Firebase Firestore.
- Profile images are **uploaded to Firebase Storage**.

---

### 🔐 Authentication & Security
- Firebase Authentication for secure login/signup.
- **Password Reset (Forgot Password)** functionality.
- **Email Verification** for new accounts.
- **Google Sign-In** using Firebase OAuth provider.
- Protected routes for authenticated users only.

---

### 🧑‍💻 Admin Features
- Admin can **view all registered users**.
- Admin can **edit or delete any user’s data**.
- Admin can **assign roles** (User, Editor, Admin).
- Admin can **export all user data** as PDF or CSV.

---

### 🧠 State & Data Management
- Global state managed using **Redux Toolkit**.
- Form validation handled by **Formik** + **Yup**.
- Real-time data sync using **Firestore listeners**.

---

### 🖼️ UI & UX Enhancements
- Fully **responsive** design using Tailwind CSS.
- **Dark/Light mode toggle** via Redux.
- **Toast notifications** (success/error messages).
- **Loading spinners & skeleton loaders** for better UX.
- **Dashboard view** with charts and analytics (using Recharts).

---

### ⚙️ Developer & System Features
- Firebase config stored in **.env** environment variables.
- **Error boundaries** for graceful error handling.
- **Custom hooks** for Firebase CRUD operations.
- **Clean, modular folder structure**.
- Optional **PWA support** for mobile installability.

---

### 🌍 Additional Enhancements
- **Multi-language support** with `react-i18next`.
- **Offline mode** with Firebase persistence.
- **Data analytics dashboard** using Firebase Analytics.

---

## 🧠 Future Enhancements
- Integration with third-party APIs.
- Email notifications for updates.
- Role-based dashboards.
- Activity logs & audit trails.

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/management-app.git
cd management-app
