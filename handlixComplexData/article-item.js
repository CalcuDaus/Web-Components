// buat custom element article 
// render data article from article.js

class ArticleItem extends HTMLElement{
    // set sebuah method untuk mendapat kan data dari article.js
    set article(article){
        this._article = article;
        this.render();
    }
    render(){
        this.innerHTML = `<img src="${this._article.gambar}" alt="sda">
            <h1>${this._article.title}</h1>
            <p>${this._article.description}</p>
        `;
    }
}
let tes = "asd"
customElements.define('article-item',ArticleItem);