import { Component } from '@angular/core';
import { PageComponent } from '../page/page.component';

class Problem {
  Num1: number = 0;
  Num2: number = 0;
  operator: string = '+';
  result: number = 0;

  constructor(Num1: number, Num2: number, operator: string, result: number) {
    this.Num1 = Num1;
    this.Num2 = Num2;
    this.operator = operator;
    this.result = result;
  }

  equals(other: Problem): boolean {
    return this.Num1 === other.Num1 && this.Num2 === other.Num2 && this.operator === other.operator && this.result === other.result;
  }
}

@Component({
  selector: 'app-twenty',
  imports: [PageComponent],
  templateUrl: './twenty.component.html',
  styleUrl: './twenty.component.scss'
})
export class TwentyComponent {
  // 不进位加法
  private problemList1: Problem[] = [];

  // 进位加法
  private problemList2: Problem[] = [];

  // 不退位减法
  private problemList3: Problem[] = [];

  // 退位减法
  private problemList4: Problem[] = [];
}
