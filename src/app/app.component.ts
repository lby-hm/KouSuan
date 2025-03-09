import { Component } from '@angular/core';
import { PageComponent } from "./page/page.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('口算 - 每页40题 - 刷新页面即可重新生成新题');
  }
}
