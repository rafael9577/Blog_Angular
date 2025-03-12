import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-smal-card',
  imports: [ RouterModule],
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
   @Input()
   Title:string = ""
   @Input()
   imageURL:string = ""
   @Input()
   id:string='0'

}
