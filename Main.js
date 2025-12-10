import ContentView from "./src/js/views/ContentView.js";

class Main {
    constructor(root) {
        this.root = root; // le conteneur principal
        new ContentView();
    }
}

// Lance Main

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    new Main(root);
});
