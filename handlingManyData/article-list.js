import './article-item.js';
class ArticleList extends HTMLElement{
    set articles(articles){
        this._articles = articles;
        this.render()
    }

    render(){
        this._articles.forEach(article => {
            // buat element article 
            const articleElement = document.createElement('article-item');
            // kirim data array articles ke article elemen agar di render
            articleElement.article = article;
            this.appendChild(articleElement);
        });
    }
}
let tes = "sad";
customElements.define('article-list',ArticleList)

