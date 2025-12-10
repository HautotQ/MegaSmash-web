export function navigationButton(root, title, ViewClass) {
    const btn = document.createElement("button");
    btn.innerText = title;

    btn.addEventListener("click", () => {
        root.innerHTML = "";          // nettoie l’écran
        new ViewClass(root);          // charge la nouvelle vue
    });

    return btn;
}
