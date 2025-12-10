import ContentView from "./src/js/views/ContentView.js";

class Main {
    constructor(root) {
        this.root = root; // le conteneur principal
        const h1 = document.createElement("h1");
        h1.innerText = "Texte Main.js";
        this.root.appendChild(h1);
        
        //new ContentView();
    }
}

// Lance Main

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    new Main(root);
});
