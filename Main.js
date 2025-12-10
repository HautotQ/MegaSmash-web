import ContentView from "./src/js/views/ContentView.js";

export default class Main {
    constructor(root) {
        this.root = root; // le conteneur principal
        new ContentView(this.root);
    }
}

// Lance Main

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    new Main(root);
});
