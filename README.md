# 🏔️ Dolomites '26 Expedition Planner

An interactive and beautifully crafted itinerary and route planner for the Dolomites summer trip. This application features mapping visualizations, daily timelines, custom trails, and safety/logistic preparation alerts.

## 🚀 Features

- **Route Map Visualization:** Interactive geography-based routes for hikers and travellers.
- **Hour-by-hour Timelines:** Real-time daily plans including transport modes, trails, peaks, and huts.
- **Hiking & Travel Alerts:** Critical safety warnings (toll limits, trail advice, altitude details).
- **Outdoor Dining & Travel Rules:** Custom rules for mountain stream safety, hut dining etiquette, and cash guidelines.

---

## 💻 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v22 or newer recommended)

### Setup & Run
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanil-shrvn/dolomites.git
   cd dolomites
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser to the local port displayed in the terminal (usually `http://localhost:3000`).

---

## 🌐 Deploy to GitHub Pages

This project is configured to deploy automatically via GitHub Actions, which builds the Vite production files and publishes them to GitHub Pages.

### Setup Settings on GitHub:
To allow the repository's action to deploy successfully, you must toggle GitHub Actions as the Pages build source:

1. Open your repository on GitHub.
2. Go to **Settings** (top tabs) -> **Pages** (in the left-hand navigation sidebar).
3. Under the **Build and deployment** section, locate the **Source** option.
4. Change the selection from **Deploy from a branch** to **GitHub Actions**.

Once this toggle is enabled, any commit pushed to the `main` branch will trigger the deployment runner under the **Actions** tab, deploying your site automatically to GitHub Pages.
