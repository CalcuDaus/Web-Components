import './article-item.js';
import article from './article.js';

const container = document.querySelector('.container');

const articlesItem = document.createElement('article-item');
articlesItem.article = article;

container.appendChild(articlesItem);
