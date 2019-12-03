import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './components/article-preview-list/article-preview-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticleResolverService } from './services/article-resolver.service'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AddArticleComponent } from './components/add-article/add-article.component';
import {AuthGuard} from './guards/auth/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { NgIfAdminDirective } from './directives/ng-if-admin.directive';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { TimeToReadPipe } from './pipes/time-to-read.pipe'


const appRoutes = [
  { path: '', component: ArticlePreviewListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddArticleComponent },
  {path: 'articles/:id', component: ArticleComponent
    // , resolve: { articles: ArticleResolverService } 
  },

];
@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    ArticleComponent,
    LoginComponent,
    AddArticleComponent,
    AdminComponent,
    NgIfAdminDirective,
    DaysAgoPipe,
    TimeToReadPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
