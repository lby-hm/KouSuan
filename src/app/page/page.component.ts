import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  protected rowCount: number = 13;
  protected colCount: number = 4;
  @Input("problems") problemList: string[] = [];
}
