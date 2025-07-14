import { Component } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-hundred',
  imports: [PageComponent],
  templateUrl: './hundred.component.html',
  styleUrl: './hundred.component.scss'
})
export class HundredComponent {
  protected randomProblemList: string[];
  constructor() {
    this.randomProblemList = this.getRandomProblemList();
  }

  private getRandomProblemList(): string[] {
    // 不进位加法
    var problemList1: Problem[] = [];

    // 进位加法
    var problemList2: Problem[] = [];

    // 不退位减法
    var problemList3: Problem[] = [];

    // 退位减法
    var problemList4: Problem[] = [];

    // 加法
    for (let i = 1; i <= 99; i++) {
      for (let j = i; j <= 100 - i; j++) {
        if ((i % 10) + (j % 10) < 10) {
          problemList1.push(new Problem(i, j, '+', i + j));
        } else {
          problemList2.push(new Problem(i, j, '+', i + j));
        }
      }
    }

    // 减法
    for (let i = 2; i <= 100; i++) {
      for (let j = 1; j <= i - 1; j++) {
        if ((i % 10) > (j % 10)) {
          problemList3.push(new Problem(i, j, '-', i - j));
        } else {
          problemList4.push(new Problem(i, j, '-', i - j));
        }
      }
    }

    let randomProblemList1 = this.pickRandomProblemFromList1(problemList1, 10);
    let randomProblemList2 = this.pickRandomProblemFromList2(problemList2, 30);
    let randomProblemList3 = this.pickRandomProblemFromList3(problemList3, 10);
    let randomProblemList4 = this.pickRandomProblemFromList4(problemList4, 10);
    let randomProblemList = randomProblemList1.concat(randomProblemList2).concat(randomProblemList3).concat(randomProblemList4);

    var problemList = this.pickRandomProblemFromList(randomProblemList, 60);
    return problemList;
  }

  private pickRandomProblemFromList1(problemList: Problem[], count?: number): string[] {
    let randomProblemList: string[] = [];
    if (!count || count > problemList.length) { count = problemList.length; }
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, problemList.length - 1);

      let num1 = problemList[randomIndex].Num1;
      let num2 = problemList[randomIndex].Num2;

      // 随机交换加数顺序
      if (this.getRandomInt(0, 1) === 0) {
        let num = num1;
        num1 = num2;
        num2 = num;
      }

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '+', num1 + num2));
      randomProblemList.push(formattedProblem);
      problemList.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList2(problemList: Problem[], count?: number): string[] {
    let randomProblemList: string[] = [];
    if (!count || count > problemList.length) { count = problemList.length; }
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, problemList.length - 1);

      let num1 = problemList[randomIndex].Num1;
      let num2 = problemList[randomIndex].Num2;

      // 随机交换加数顺序
      if (this.getRandomInt(0, 1) === 0) {
        let num = num1;
        num1 = num2;
        num2 = num;
      }

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '+', num1 + num2));
      randomProblemList.push(formattedProblem);
      problemList.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList3(problemList: Problem[], count?: number): string[] {
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
