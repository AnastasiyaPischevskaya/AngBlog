import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToRead'
})
export class TimeToReadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value){
      var min = value/50;
      return `${min} min read`
    }
 else{
     return null;
 
 }
 
   }
  }


