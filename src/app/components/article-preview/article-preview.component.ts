import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ArticlesService} from '../../services/articles.service'

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article;
  @Output() delete = new EventEmitter();

  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {
  }
  ondeleteArticle(title){
    this.articlesService.deleteArticle(title)
    // .then((res)=> {
    //   this.delete.emit(id);
    // })
    // .catch((err)=>{
    //   console.log();
      
    // })
  }

}
