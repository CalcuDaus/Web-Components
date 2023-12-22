// shadow host
const divElement = document.createElement("div");

// element yang berada didalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Tag h1 yang berada didalam shadow DOM";

// melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `<style>
    h1{
        color:lightgreen;
    }
</style>`;

// memasukkan elemen heading kedalam shadow root
shadowRoot.appendChild(headingElement);

// memasukkan elemen shadow host ke reguler DOM
document.body.appendChild(divElement);
