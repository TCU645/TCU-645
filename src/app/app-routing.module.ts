import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: 'app-home',component: HomeComponent},
  { path: 'app-about', component: AboutComponent},
  { path: 'app-article-list', component: ArticleListComponent},
  { path: 'app-article', component: ArticleComponent},
  { path: 'app-resources', component: ResourcesComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
