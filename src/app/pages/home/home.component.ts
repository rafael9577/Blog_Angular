import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fakeNews } from '../../../assets/data/data';
import { CommonModule } from '@angular/common';
import { NewArticlesComponent } from "../../components/new-articles/new-articles.component";
import { OldArticlesComponent } from "../../components/old-articles/old-articles.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, NewArticlesComponent, OldArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   noticias = fakeNews;
   mainCard= this.noticias.slice(0,4);
   otherCards = this.noticias.slice(4);

   constructor() {
   }

}
