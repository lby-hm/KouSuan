import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  @Input("problems") problemList: string[] = [];

  protected getColumns() {
    return [].constructor(4);
  }
  protected getRows() {
    let colNum = this.problemList.length / 4;
    return [].constructor(colNum);
  }
}
