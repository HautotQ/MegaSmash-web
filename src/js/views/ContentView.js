

export default class ContentView {
  constructor(root) {
    this.root = root;

    const h2 = document.createElement("h2");
    h2.innerText = "Test";
    root.appendChild(h2);
  }
}
