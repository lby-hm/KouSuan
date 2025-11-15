import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  @Input("problems") problemList: string[] = [];
  @Input("colCount") colCount: number = 4;

  protected colArray: number[] = [];
  protected rowArray: number[] = [];

  ngOnInit() {
    this.colArray = [].constructor(this.colCount);
    let rowCount = this.problemList.length / this.colCount;
    this.rowArray = [].constructor(rowCount);
  }

  protected getProblem(rowIndex: number, colIndex: number): string {
    let index = rowIndex * this.colCount + colIndex;
    return this.problemList[index];
  }
}
