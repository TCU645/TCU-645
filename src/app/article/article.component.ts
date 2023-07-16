import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/model/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  public article: Article;

  constructor(private router: Router) { 
    this.article = this.router.getCurrentNavigation()?.extras?.state!['article']
  }

  ngOnInit(): void {
    if (this.article == undefined) {
      this.router.navigate(['/app-article-list'], {});
    }
  }
}

