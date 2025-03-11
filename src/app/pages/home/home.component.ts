import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmalCardComponent } from "../../components/smal-card/smal-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
  selector: 'app-home',
  imports: [MenuBarComponent, BigCardComponent, SmalCardComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
