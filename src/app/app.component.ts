import { Component } from '@angular/core';
 import {Post} from './post';
 import {NgForm} from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent  { 
  name = 'Angular';
  categories=['tech', 'entertainment', 'finance'];
  model=new Post(1, 'post 1', this.categories[0], 'post body', 'srikanth');
  submitted = false;
}
