class ImageFigure extends HTMLElement{
    constructor(){
        super();
        console.log("constructed !");
    }

    connectedCallback(){
        console.log("connected !");
    }

    disconnectedCallback(){
        console.log("disconnected !")
    }

    adoptedCallback(){
        console.log("Adopted !")
    }

    attributeChangedCallback(name,oldValue,newValue){
        console.log(`attribute ${name} changed !`)
    }

    // digunakan untuk mengamati nilai perubahan atribut caption
    // kita bisa menetapkan lebih dari satu atribut yang diamati
    // dengan memisahkan nama atribut menggunakan koma. contoh :

    // return ['caption','title','src',...]
    static get observedAttributes(){
        return ['caption'];
    }
}

customElements.define('image-figure',ImageFigure);