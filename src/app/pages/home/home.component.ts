import { Component } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmalCardComponent } from "../../components/smal-card/smal-card.component";
import { RouterModule } from '@angular/router';
import { fakeNews } from '../../../data/data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [BigCardComponent, SmalCardComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   noticias = fakeNews;
   mainCard= this.noticias[0];
   otherCards = this.noticias.slice(1);

   constructor() {
     console.log(this.otherCards);
   }

}
