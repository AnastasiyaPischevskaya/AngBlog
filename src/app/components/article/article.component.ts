import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from "../../services/articles.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private articlesService: ArticlesService) { }
  id: any;
  article: any;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.article = this.articlesService.getArticles().filter((item) => {
    //   return item.id == this.id;
    // })[0]

    console.log(this.articlesService.getArticles().orderByChild("id").equalTo(this.id));

    // var ref = firebase.database().ref("/articles");
    // ref.orderByChild("id").equalTo(this.id)

  }



}
