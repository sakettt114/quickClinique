# 🏥 QuickClinic

A full-stack clinic management platform that connects patients with doctors. Built with React, Node.js, Express, and MongoDB.

## ✨ Features

### 👤 User Management
- **Registration & Login** — Role-based signup (Patient / Doctor) with JWT authentication
- **Profile Management** — Update personal info, email, phone number, and location
- **Password Recovery** — Forgot password flow with email-based reset links
- **Session Management** — Secure cookie-based sessions with auto-expiry

### 🩺 Patient Portal
- **Dashboard** — Overview of appointments, notifications, and medical info
- **Book Appointments** — Search for doctors and book appointment slots
- **Appointment History** — View past and upcoming appointments
- **Cancel / Postpone** — Manage existing appointments with rescheduling
- **Medical Info** — Store and view medical information
- **Notifications** — Real-time notifications for appointment updates

### 👨‍⚕️ Doctor Portal
- **Dashboard** — Summary cards with patient count, appointments, and earnings
- **Appointment Management** — View, accept, and manage patient appointments
- **Schedule Management** — Set available time slots and working hours
- **Patient Records** — View patient list and their details
- **Leave Management** — Apply for and manage leave days
- **Earnings** — Track consultation earnings and payment history
- **Reports** — View detailed reports and analytics
- **Professional Info** — Manage specialization, qualifications, and experience

### 💬 Real-Time Chat
- **Doctor-Patient Messaging** — Direct chat between patients and their doctors
- **Online Status** — See which users are currently online
- **Socket.io Integration** — Instant message delivery with WebSocket connections

### 💳 Payment Integration
- **Razorpay Integration** — Secure payment processing for appointment bookings
- **Payment Verification** — Server-side payment verification

### 🔔 Notifications
- **Real-Time Notifications** — Instant push notifications via Socket.io
- **Notification History** — View all past notifications

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **TypeScript** | Type-safe development |
| **MongoDB + Mongoose** | Database & ODM |
| **Socket.io** | Real-time communication |
| **JWT** | Authentication |
| **Nodemailer** | Email service (SMTP) |
| **Razorpay** | Payment gateway |
| **bcrypt.js** | Password hashing |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type-safe development |
| **React Router v6** | Client-side routing |
| **Material UI (MUI)** | Component library |
| **TailwindCSS** | Utility-first styling |
| **Bootstrap 5** | Additional styling |
| **Axios** | HTTP client |
| **Socket.io Client** | Real-time communication |
| **Framer Motion** | Animations |

---

## 📁 Project Structure

```
quickClinic/
├── api/
│   └── index.ts              # Vercel serverless entry point
├── backend/
│   ├── config/
│   │   ├── database.ts       # MongoDB connection
│   │   ├── config.env        # Environment variables (git-ignored)
│   │   └── example.env       # Environment template
│   ├── controllers/
│   │   ├── usercontroller.ts       # Auth, profile, password
│   │   ├── patientcontroller.ts    # Patient operations
│   │   ├── doctorcontroller.ts     # Doctor operations
│   │   ├── messagecontroller.ts    # Chat messaging
│   │   ├── notification.controller.ts  # Notifications
│   │   └── payment.ts              # Razorpay payments
│   ├── middleware/
│   │   ├── auth.ts           # JWT authentication middleware
│   │   ├── error.ts          # Error handling middleware
│   │   └── catchAsyncErrors.ts  # Async error wrapper
│   ├── models/
│   │   ├── usermodel.ts           # User schema
│   │   ├── patientmodel.ts        # Patient schema
│   │   ├── doctormodel.ts         # Doctor schema
│   │   ├── appointmentmodel.ts    # Appointment schema
│   │   ├── doctorschedulemodel.ts # Doctor schedule schema
│   │   ├── conversationmodel.ts   # Chat conversation schema
│   │   ├── messagemodel.ts        # Chat message schema
│   │   ├── notificationmodel.ts   # Notification schema
│   │   └── leavemodel.ts          # Doctor leave schema
│   ├── routes/
│   │   ├── user.routes.ts
│   │   ├── patient.routes.ts
│   │   ├── doctor.routes.ts
│   │   ├── message.routes.ts
│   │   ├── notification.routes.ts
│   │   └── payment.routes.ts
│   ├── utils/
│   │   ├── jwtToken.ts       # JWT token generation
│   │   ├── sendemail.ts      # Email utility
│   │   ├── errorhander.ts    # Custom error class
│   │   ├── apifeatures.ts    # Search, filter, pagination
│   │   └── markPastAppointments.ts  # Auto-mark expired appointments
│   ├── app.ts                # Express app configuration
│   ├── server.ts             # Server entry point
│   ├── socket.ts             # Socket.io setup
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── component/
│   │   │   ├── auth/         # AuthContext provider
│   │   │   ├── home/         # Landing page
│   │   │   ├── users/        # Login, signup, profile
│   │   │   ├── patient/      # Patient dashboard & features
│   │   │   ├── doctor/       # Doctor dashboard & features
│   │   │   ├── chats/        # Real-time messaging
│   │   │   ├── notifications/
│   │   │   ├── common/       # Shared components
│   │   │   └── layout/       # Header & Footer
│   │   ├── routes/           # Route definitions
│   │   ├── utils/            # API config, auth helpers
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── package.json
├── vercel.json               # Vercel deployment config
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **MongoDB Atlas** account (free tier works) — [Sign up here](https://www.mongodb.com/cloud/atlas/register)
- **Gmail account** with App Password (for email features)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/quickClinic.git
cd quickClinic
```

### 2. Set Up Environment Variables

```bash
cp backend/config/example.env backend/config/config.env
```

Edit `backend/config/config.env` with your values:

```env
PORT=5000
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/quickclinic?retryWrites=true&w=majority
JWT_SECRET=your_random_secret_key
JWT_EXPIRE=5d
COOKIE_EXPIRE=7
SMPT_SERVICE=gmail
SMPT_MAIL=your_email@gmail.com
SMPT_PASSWORD=your_16_char_gmail_app_password
```

> **Note:** `SMPT_PASSWORD` must be a [Gmail App Password](https://myaccount.google.com/apppasswords), not your regular password.

### 3. Install Dependencies

```bash
# Install root (backend) dependencies
npm install --legacy-peer-deps

# Install frontend dependencies
cd frontend && npm install --legacy-peer-deps && cd ..
```

### 4. Build & Run

```bash
# Build the backend TypeScript
npm run build:backend

# Start the backend (Terminal 1)
npm run dev
# → Server running on http://localhost:5000

# Start the frontend (Terminal 2)
cd frontend && npm start
# → App running on http://localhost:3000
```

---

## 🌐 Deployment

### Option 1: Render (Recommended — supports WebSockets)

1. Push code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
5. Add all environment variables from `config.env` + `NODE_ENV=production`
6. Deploy

> ✅ Render supports WebSockets, so **real-time chat and notifications will work**.

### Option 2: Vercel (Serverless — no WebSocket support)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel Dashboard → Settings → Environment Variables
4. Deploy

> ⚠️ Socket.io (chat & real-time notifications) **will not work** on Vercel due to serverless architecture.

---

## 🔑 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | ✅ | Server port (default: 5000) |
| `DB_URL` | ✅ | MongoDB Atlas connection string |
| `JWT_SECRET` | ✅ | Secret key for JWT token signing |
| `JWT_EXPIRE` | ✅ | JWT token expiry (e.g., `5d`, `7d`) |
| `COOKIE_EXPIRE` | ✅ | Cookie expiry in days |
| `SESSION_SECRET` | ✅ | Express session secret key |
| `NODE_ENV` | ✅ | `development` or `production` |
| `SMPT_SERVICE` | ⬜ | Email service provider (`gmail`) |
| `SMPT_MAIL` | ⬜ | Sender email address |
| `SMPT_PASSWORD` | ⬜ | Gmail App Password (16 characters) |
| `RAZORPAY_KEY_ID` | ⬜ | Razorpay API key ID |
| `RAZORPAY_KEY_SECRET` | ⬜ | Razorpay API secret |

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/register` | Register a new user |
| POST | `/api/v1/login` | Login with email & password |
| POST | `/api/v1/logout` | Logout and clear session |
| POST | `/api/v1/password/forget` | Request password reset email |
| PUT | `/api/v1/password/reset/:token` | Reset password with token |

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/me` | Get logged-in user details |
| PUT | `/api/v1/password/update` | Change password |
| PUT | `/api/v1/users/:id` | Update user profile |
| GET | `/api/v1/userinfo/:id` | Get user by ID |
| GET | `/api/v1/users` | Get all users |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | API health check |

---

## 📜 Available Scripts

### Root
| Script | Command | Description |
|--------|---------|-------------|
| `npm run dev` | `nodemon backend/dist/server.js` | Start backend with hot reload |
| `npm start` | `node backend/dist/server.js` | Start backend (production) |
| `npm run build:backend` | `cd backend && tsc` | Compile TypeScript backend |
| `npm run build` | Full build | Build both frontend and backend |

### Frontend (`/frontend`)
| Script | Command | Description |
|--------|---------|-------------|
| `npm start` | `react-scripts start` | Start React dev server |
| `npm run build` | `react-scripts build` | Build for production |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add your feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.
