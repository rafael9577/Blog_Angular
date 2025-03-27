import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { notice } from '../notices.model';

@Component({
   selector: 'app-new-articles',
   templateUrl: './new-articles.component.html',
   styleUrl: './new-articles.component.css',
   imports: [RouterModule, CommonModule]
})
export class NewArticlesComponent implements OnInit {
   @Input()
   articles: notice[] = []
   smalNotice: notice[] = []
   bigNotice: notice = { 'id': 0, 'title': '', 'imageURL': '', 'description': '', 'text': '' }

   constructor() {
   }
   ngOnInit(): void {
      this.bigNotice = this.articles[0]
      this.smalNotice = this.articles.slice(1)
   }
}
