import ContentView from "./src/js/views/ContentView.js";

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    new ContentView(root);
});
