// make divElement 
const divElement = document.createElement('div');

//  membuat elemen yang akan dimasukkan kedalam shadow root
const h1 = document.createElement('h1');
h1.innerText = 'Ini adalah tag h1 didalam shadow DOM';

// buat shadow root 
const shadowRoot = divElement.attachShadow({mode:'open'});
shadowRoot.innerHTML += `<style>
    h1{
        color:red;
    }
</style>`
// masukkan elemen kedalam shadowroot
shadowRoot.appendChild(h1);
console.log(h1);

// masukkan shadow root kedalam document root
document.body.appendChild(divElement);