class ArticleItem extends HTMLElement{
    set article(article){
        this._article = article;
        this.render();
    }

    render(){
        this.innerHTML = `
        <img src="${this._article.featuredImage}">
        <h1>${this._article.title}</h1>
        <p>${this._article.description}</p>
        `

    }
}
customElements.define('article-item',ArticleItem);