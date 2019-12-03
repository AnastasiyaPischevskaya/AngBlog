import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  list;

  constructor(public db: AngularFireDatabase) {
    this.list = db.list('articles');
  }
  
  getArticles() {
    return this.list;
  }
  showArticles() {
    return this.list.valueChanges();
  }
  addArticle(article){
    this.db.list('articles').push(
      article
    )
  }
  deleteArticle(id: any){
    console.log(11);
    
  }
}
