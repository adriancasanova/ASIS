import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 2) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.nombreApellido.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        resultPosts.push(post);
      };
    
    };
    return resultPosts;
  }
  

}
