# Tech Innovation Forum 2026 - Registration System

A multi-page event registration system built with React and React Router.

### Installation
```bash
npm install
npm run dev
##  Key Feature — Returning User Detection

When a user revisits the application after previously registering,
the system automatically checks the browser's localStorage to see
whether a registration record already exists.

### How It Works
```
User opens the app
        ↓
App checks localStorage
        ↓
Data found?          No data?
    ↓                    ↓
Redirect to          Show registration
/my-registration     form normally
```

### What The Returning User Page Shows
- A notification that the user has already registered
- Their full registration details
- The ticket type they selected
- Any additional notes they provided


## 🛠️ Built With
- React
- React Router DOM
- Tailwind CSS
- localStorage 