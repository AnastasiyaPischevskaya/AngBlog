import { Directive, ViewContainerRef,TemplateRef, OnInit, OnDestroy } from '@angular/core';
import {AuthService } from '../services/auth.service'
import { from } from 'rxjs';

@Directive({
  selector: '[appNgIfAdmin]'
})
export class NgIfAdminDirective implements OnInit{

  subscription;
  constructor(private authService:AuthService,
    private viewContainerRef:ViewContainerRef,
    private templateRef:TemplateRef<any>) { }

  ngOnInit(){
   if( this.authService.checkIfAdmin()) {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  } 
  else{
    this.viewContainerRef.clear();
  }

 }


}
