// src/js/views/ContentView.js

export default class ContentView {
    constructor(root = document.body) {
        this.root = root;
        this.createMenu();
    }

    createMenu() {
        // Crée le conteneur principal du menu
        this.container = document.createElement("div");
        this.container.style.display = "flex";
        this.container.style.flexDirection = "column";
        this.container.style.justifyContent = "center";
        this.container.style.alignItems = "center";
        this.container.style.height = "100vh";
        this.container.style.background = "linear-gradient(135deg, #ff3c3c, #ffcc3c)";
        this.container.style.fontFamily = "Arial, sans-serif";
        this.container.style.color = "#fff";

        // Titre du jeu
        const title = document.createElement("h1");
        title.innerText = "MegaSmash";
        title.style.fontSize = "4rem";
        title.style.marginBottom = "50px";
        title.style.textShadow = "2px 2px 4px #000";
        this.container.appendChild(title);

        // Boutons du menu
        const buttons = ["Jouer", "Options", "Crédits"];
        buttons.forEach((text) => {
            const btn = document.createElement("button");
            btn.innerText = text;
            btn.style.padding = "15px 50px";
            btn.style.margin = "10px";
            btn.style.fontSize = "1.5rem";
            btn.style.border = "none";
            btn.style.borderRadius = "10px";
            btn.style.cursor = "pointer";
            btn.style.transition = "all 0.2s";
            btn.style.backgroundColor = "#222";
            btn.style.color = "#fff";
            btn.addEventListener("mouseenter", () => {
                btn.style.backgroundColor = "#555";
                btn.style.transform = "scale(1.05)";
            });
            btn.addEventListener("mouseleave", () => {
                btn.style.backgroundColor = "#222";
                btn.style.transform = "scale(1)";
            });
            btn.addEventListener("click", () => this.handleButtonClick(text));
            this.container.appendChild(btn);
        });

        // Ajoute le menu au DOM
        this.root.appendChild(this.container);
    }

    handleButtonClick(action) {
        switch(action) {
            case "Jouer":
                alert("Démarrage du jeu...");
                // Ici, tu pourrais lancer la scène du jeu
                break;
            case "Options":
                alert("Ouverture des options...");
                break;
            case "Crédits":
                alert("Affichage des crédits...");
                break;
        }
    }
}
