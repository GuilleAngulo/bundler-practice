export default function foo() {
    const button = document.createElement("button");
    button.innerHTML = "Do Something 🤔";

    const body = document.getElementById("app");
    body.appendChild(button);

    button.addEventListener("click", () => alert('Foo!'));

}