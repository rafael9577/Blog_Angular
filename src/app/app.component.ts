import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmalCardComponent } from "./components/smal-card/smal-card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmalCardComponent, MenuBarComponent, BigCardComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBlog';
}
