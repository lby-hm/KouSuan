import { Component } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-twentyMinus',
  imports: [PageComponent],
  templateUrl: './twentyMinus.component.html',
  styleUrl: './twentyMinus.component.scss'
})
export class TwentyMinusComponent {
  protected problemList: string[] = [];

  constructor() {
    this.problemList = this.getRandomProblemList();
  }

  protected getRandomProblemList(): string[] {

    // 退位减法
    var problemList4: Problem[] = [];
    for (let i = 11; i <= 18; i++) {
      for (let j = i - 9; j <= 9; j++) {
        problemList4.push(new Problem(i, j, '-', i - j));
      }
    }

    let randomProblemList4 = this.pickRandomProblemFromList4(problemList4, 36);

    var problemList = this.pickRandomProblemFromList(randomProblemList4, 36);
    return problemList;
  }

  private pickRandomProblemFromList4(problemList: Problem[], count?: number): string[] {
    let randomProblemList: string[] = [];
    if (!count || count > problemList.length) { count = problemList.length; }
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, problemList.length - 1);

      let num1 = problemList[randomIndex].Num1;
      let num2 = problemList[randomIndex].Num2;

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '-', num1 - num2));
      randomProblemList.push(formattedProblem);
      problemList.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList(problemList: string[], count?: number) {
    let randomProblemList: string[] = [];
    if (!count || count > problemList.length) { count = problemList.length; }
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, problemList.length - 1);
      let randomProblem = problemList[randomIndex];
      randomProblemList.push(randomProblem);
      problemList.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private formatProblem(problem: Problem) {
    //var random = this.getRandomInt(1, 3);
    // 降低难度
    var random = 3;
    if (random === 1) {
      return `(   ) ${problem.operator} ${problem.Num2} = ${problem.result}`;
    } else if (random === 2) {
      return `${problem.Num1} ${problem.operator} (   ) = ${problem.result}`;
    } else {
      return `${problem.Num1} ${problem.operator} ${problem.Num2} = (   )`;
    }
  }
}
