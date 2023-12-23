class CardCustom extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});
        
    }
    connectedCallback(){
        this.img = this.getAttribute('img') || null;
        this.title = this.getAttribute('title') || null;
        this.description = this.getAttribute('description') || null;
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML =`
        <style>
            div {
                width : 400px;
                display:flex;
                justify-content : center;
                align-items : center;
                flex-direction : column;
                padding:10px;
                border-radius: 15px;
                border: 1px solid black;
                font-family: 'poppins';
                text-align-center;
            }
            div > img{
                width:100%
            }
        </style>
        <div>
            <img src="${this.img}" alt="tes" >
            <h1>${this.title}</h1>
            <p>${this.description}</p>
        </div>
        `
    }
}

customElements.define('card-custom',CardCustom);