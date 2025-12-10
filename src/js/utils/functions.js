export function navigationButton(root, label, ViewClass, ...args) {
    const btn = document.createElement("button");
    btn.innerText = label;
    btn.onclick = () => new ViewClass(root, ...args);
    return btn;
}
