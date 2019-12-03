import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs';
import { ArticlesService } from "./../../services/articles.service"


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articles: Observable<any[]>;
  title: String;
  content: String;
  list;


  constructor(private articlesService: ArticlesService) { 
    this.list = this.articlesService.showArticles();

  }

  ngOnInit() {
    
  }
  onSubmit(){
    this.articlesService.addArticle({
      title: this.title,
      content: this.content
    })
  }

}
