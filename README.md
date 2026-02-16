# Urban Company Clone

A simplified "Local Services Booking App" where users can browse service providers (Plumbers, Electricians, etc.), book appointments, and admins can manage bookings.

## 🚀 Tech Stack

-   **Frontend**: React (Platform: Vite), Tailwind CSS
-   **Backend**: Node.js, Express.js
-   **Database**: SQLite (Development) / PostgreSQL (Production ready)
-   **ORM**: Sequelize

## 🛠️ Setup Instructions

### Prerequisites
-   Node.js (v14+ is recommended)
-   npm (Node Package Manager)

### 1. Backend Setup

The backend runs on port **5000**.

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the server
# This will also seed the database with initial providers if empty
npm start
```

### 2. Frontend Setup

The frontend runs on port **5173**.

```bash
# Navigate to the client directory (open a new terminal)
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📱 Usage

1.  **Browse Providers**: Open [http://localhost:5173](http://localhost:5173) to see the list of available service providers.
2.  **Filter**: Use the category buttons (Plumber, Electrician, etc.) to filter the list.
3.  **Book Service**:
    -   Click "Book Now" on an available provider.
    -   Fill in your details (Name, Email, Date, Time).
    -   Submit the form.
    -   The provider status will update to "Busy".
4.  **Admin Dashboard**:
    -   Navigate to [http://localhost:5173/admin](http://localhost:5173/admin) (or click the link in the navbar).
    -   View all bookings including Customer and Provider details.
    -   **Complete Booking**: Click "Complete" to finish a job. The provider will become "Available" again.
    -   **Cancel Booking**: Click "Cancel" to cancel.

## 📂 Project Structure

```
Urban_Company_Clone/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, Cards, Forms)
│   │   ├── pages/          # Page components (Home, AdminDashboard)
│   │   ├── api.js          # API utility functions
│   │   └── ...
│   └── ...
├── server/                 # Express Backend
│   ├── config/             # Database configuration
│   ├── models/             # Sequelize models (Provider, Booking)
│   ├── routes/             # API routes
│   └── index.js            # Server entry point
└── requirements.md         # Project requirements
```

## ⚠️ Notes

-   **Database**: The project uses SQLite `database.sqlite` file in the `server` directory for ease of development. No local PostgreSQL installation is required to run this project locally.
-   **Tailwind**: Configured with Tailwind CSS v3 for stability.
