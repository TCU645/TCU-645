import { Component } from '@angular/core';
import { Article } from 'src/model/Article';
import { ArticleService } from 'src/service/ArticleService';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

  articles: Article[] = []

  constructor(private articleService: ArticleService) {
 }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      },
      (error) => {
        console.error('Failed to load articles:', error);
      }
    );
  }

  loadArticle(article: Article): void {
    console.log(article.title)
  }
  
}
