import { Component } from '@angular/core';
import { PageComponent } from "./page/page.component";

@Component({
  selector: 'app-root',
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
