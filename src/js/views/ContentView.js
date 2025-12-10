import Main from ".../Main.js";
import { navigationButton } from "../utils/functions.js";

export default class ContentView {
  constructor(root) {
    const h2 = document.createElement("h2");
    h2.innerText = "Test";
    root.appendChild(h2);
  }
}
