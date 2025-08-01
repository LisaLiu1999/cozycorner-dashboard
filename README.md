#  Cozy Corner Dashboard

<img width="1542" height="839" alt="Screenshot 2025-07-31 at 10 49 51 PM" src="https://github.com/user-attachments/assets/04ae6eab-86d2-48f9-83a1-d8e1d7542f79" />

Welcome to **Cozy Corner Dashboard**! This is a clean, modern, and highly customizable personal dashboard built with React and Vite. 
It's designed to be your go-to homepage for essential information at a glance, with a focus on a warm and pleasant user experience.

The dashboard is fully responsive and features a drag-and-drop interface, allowing you to arrange widgets exactly how you like.

---

Key Features

* **Customizable Dashboard**:
    * **Drag & Drop Interface**: Easily rearrange widgets to create your perfect layout.
    * **Add & Remove Widgets**: Add new widgets from the sidebar and remove them when you no longer need them.
    * **Persistent Layout**: Your widget layout is automatically saved in your browser's local storage.

* **Light & Dark Mode**:
    * Toggle between a light and a cozy dark theme.
    * Your theme preference is saved and will be remembered on your next visit.

* **Fully Responsive Design**:
    * A seamless experience across desktop, tablet, and mobile devices.
    * The sidebar intelligently switches between a fixed panel on desktop and an off-canvas overlay on smaller screens.

* **Current Widgets**:
    * **Weather**: Real-time weather data for a specified location.
    * **Latest News**: Top technology headlines from around the world.
    * **Cat Fact**: A fun, random fact about cats on every refresh.

---

## Technologies Used

* **Frontend**: React.js
* **Build Tool**: Vite
* **Styling**:
    * Pure CSS with CSS Variables for easy theming (Light & Dark Mode).
    * CSS Grid and Flexbox for modern, responsive layouts.
* **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react) for crisp and clean icons.
* **APIs**:
    * [Open-Meteo](https://open-meteo.com/) for weather data.
    * [NewsAPI.org](https://newsapi.org/) for news headlines.
    * [CatFact.ninja](https://catfact.ninja/) for random cat facts.

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/cozy-corner-dashboard.git](https://github.com/your-username/cozy-corner-dashboard.git)
    ```

2.  **Navigate to the project directory**
    ```sh
    cd cozy-corner-dashboard
    ```

3.  **Install dependencies**
    ```sh
    npm install
    ```

4.  **Set up your API Keys**
    This project requires an API key for the News widget.
    * Open `src/App.jsx`.
    * Find the `fetchAllData` function.
    * Replace the placeholder in the `newsapi.org` fetch URL with your own free API key.

5.  **Run the development server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---
## 💡 Future Improvements

* Add more widgets (e.g., To-Do List, Stocks, Crypto, Clock).
* Allow users to customize widget settings (e.g., change the city for the weather widget).
* Implement user authentication to save layouts across different devices.
