import Main from "../../Main.js";          // corrige le chemin
import { navigationButton } from "../utils/functions.js";

export default class ContentView {
  constructor(root) {
    this.root = root;
    
    const h2 = document.createElement("h2");
    h2.innerText = "Test";
    root.appendChild(h2);

    const backBtn = navigationButton(
      this.root,
      "Retour",
      Main
    );

    this.root.appendChild(backBtn);        // <-- tu avais oublié ça
  }
}
