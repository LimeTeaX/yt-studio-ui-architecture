# yt-studio-ui-architecture
A high-fidelity YouTube Studio clone built with pure Vanilla JavaScript. Focusing on SPA architecture, modular UI components, and dynamic data visualization with Chart.js.

# Jackson Studio SPA 🚀

A high-fidelity YouTube Studio dashboard clone built with **Pure Vanilla JavaScript**. This project focuses on **Single Page Application (SPA)** architecture and modular UI development without external frameworks.

## 👤 Author
*   **Name**: Jackson Maju
*   **Role**: UI/UX & Front-End Developer

## 🌟 Key Features
*   **Pure SPA Architecture**: Seamless page transitions (Dashboard, Content, Analytics, etc.) using a custom client-side router.
*   **Dynamic Data Visualization**: Interactive area and bar charts powered by **Chart.js** with real-time simulation[cite: 2].
*   **Modular Component System**: Reusable UI templates for stats cards, video rows, and comment sections to maintain **DRY (Don't Repeat Yourself)** principles[cite: 2].
*   **Adaptive Topbar**: Intelligent navigation bar that changes its content (Tabs or Page Titles) based on the active route[cite: 2].
*   **Persistent State**: Saves the last visited page and analytics tab using `localStorage`[cite: 2].
*   **Fully Responsive**: Mobile-first design optimized for all screen sizes[cite: 2].

## 🛠️ Tech Stack
*   **HTML5**: Semantic structure[cite: 2].
*   **CSS3**: Custom layouts with Flexbox and Grid, including YouTube's signature `#cc0000` color palette[cite: 2].
*   **Vanilla JavaScript**: Core logic for routing, DOM manipulation, and state management[cite: 2].
*   **Chart.js**: Data visualization library[cite: 2].

## 📁 Project Structure
```text
├── index.html     # Entry point & Static Layout[cite: 2]
├── style.css      # Global styles & Responsive Design[cite: 2]
├── script.js      # SPA Router, Templates, & Chart Logic[cite: 2]
└── README.md      # Project Documentation[cite: 2]

🚀 How to Run
Clone this repository:

Bash
git clone [https://github.com/username/jackson-studio-spa.git](https://github.com/username/jackson-studio-spa.git)

2. Open `index.html` in any modern web browser.
3. No installation or build process required![cite: 2]

## 💡 Engineering Notes
This project was built to demonstrate proficiency in core JavaScript concepts, including:
*   **Memory Management**: Proper disposal of Chart.js instances using `.destroy()` during page transitions to prevent memory leaks[cite: 2].
*   **Event Delegation**: Efficient event handling on the sidebar and navigation menus[cite: 2].
*   **DRY Principles**: Centralized template engine to minimize code duplication[cite: 2].

## 📄 License
This project is licensed under the **MIT License**.
