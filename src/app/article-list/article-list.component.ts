import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/model/Article';
import { ArticleService } from 'src/service/ArticleService';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

  articles: Article[] = [];
  loaded: boolean = false;

  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      (articles: Article[]) => {
        this.articles = articles;
        this.loaded = true;
      },
      (error) => {
        console.error('Failed to load articles:', error);
      }
    );
  }

  loadArticle(article: Article): void {
    this.router.navigate(['/app-article'], { state: { article: article } });
  }

}
