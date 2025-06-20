# ⏱️ Mini Time Tracker

A simple, user-friendly time tracking application built with **React + TypeScript**. This app allows users to log tasks, track time with a start/pause/resume/stop timer, and view a list of entries with total hours. It's perfect for freelancers, students, or anyone who wants to stay accountable for how they spend their time.

---

## Tech Stack

- **React** — Frontend UI library for building components
- **TypeScript** — Adds type safety and better developer experience
- **Vite** — Modern build tool and development server
- **UUID** — For generating unique IDs for time entries
- **CSS** — For styling with clean, responsive design

  
## ✨ Features

- ✅ Add new tasks manually or with a timer
- ⏳ Start, pause, resume, and stop timer-based tracking
- ✏️ Edit and delete entries with confirmation prompts
- 📊 View total hours logged
- 🚫 Input validation for better data accuracy
- 🎨 Responsive and visually pleasing UI with custom styles

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher recommended)  
- **npm**

---

### 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BlackSIYA11/mini-time-tracker.git
   cd mini-time-tracker


2. Install dependencies
   
   Command: npm install
   
3. Start the development server:

  Command: npm run dev

4. Open your browser(Chrome or Edge or any browser on your device) and navigate to:
   
   http://localhost:5173


## 🔍 Assumptions & Trade-offs

📝 Local state only: No backend or persistence. Time entries reset on page refresh.

🧪 No unit tests: Due to time constraints, tests are not included.

🎛 Basic confirmation prompts: Used window.confirm() for simplicity.

💻 Single-user usage: Multi-user support is not implemented.

🚧 What I'd Improve With More Time

**If I had more time to work on this app, I would:**

🔄 Add persistent storage: Use local storage or integrate a simple backend (e.g., Firebase or Express + SQLite).

🧪 Implement automated tests: Add unit and component tests using Jest and React Testing Library.

📱 Make it installable (PWA): Turn it into a progressive web app for convenient mobile time tracking.

👥 User authentication: Allow users to log in and track tasks across devices.

📈 Add analytics/charts: Visualize hours tracked per day/week using chart libraries.


🙌 Acknowledgements
This project was built as a personal learning tool and portfolio piece.

Styled using custom CSS for a clean and vibrant interface.

   
