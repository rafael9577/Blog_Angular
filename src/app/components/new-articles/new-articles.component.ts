import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-articles',
  templateUrl: './new-articles.component.html',
  styleUrl: './new-articles.component.css',
  imports: [RouterModule, CommonModule]
})
export class NewArticlesComponent implements OnInit{
   @Input()
   articles: any
   bigNotice: any
   smalNotice: any

   constructor(){
   }
   ngOnInit(): void {
      this.bigNotice = this.articles[0]
      this.smalNotice = this.articles.slice(1)
   }
}
