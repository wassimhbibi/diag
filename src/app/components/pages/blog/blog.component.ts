import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  page1=1;
	getPage(current: number) {
		return [ '1','2', '3', '4'][current - 1];
	}
}
