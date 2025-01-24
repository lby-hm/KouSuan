import { Component } from '@angular/core';

class Problem {
  Num1: number = 0;
  Num2: number = 0;
  operator: string = '+';
  result: number = 0;
}

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  // 不进位加法
  private problemList1: Problem[] = [];

  // 进位加法
  private problemList2: Problem[] = [];

  // 不退位减法
  private problemList3: Problem[] = [];

  protected randomProblemList: string[] = [];

  constructor() {
    this.generateAllProblems();
    this.pickRandomProblems();
  }

  private generateAllProblems() {
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 10 - i; j++) {
        this.problemList1.push({
          Num1: i,
          Num2: j,
          operator: '+',
          result: i + j
        });

        this.problemList1.push({
          Num1: i + 10,
          Num2: j,
          operator: '+',
          result: i + j + 10
        });

        this.problemList1.push({
          Num1: i,
          Num2: j + 10,
          operator: '+',
          result: i + j + 10
        });
      }

      for (let j = 11 - i; j <= 9; j++) {
        this.problemList2.push({
          Num1: i,
          Num2: j,
          operator: '+',
          result: i + j
        });
      }

      for (let j = 1; j <= i - 1; j++) {
        this.problemList3.push({
          Num1: i,
          Num2: j,
          operator: '-',
          result: i - j
        });

        this.problemList3.push({
          Num1: i + 10,
          Num2: j,
          operator: '-',
          result: i - j
        });
      }
    }
  }

  private pickRandomProblems() {
    for(let i = 0; i < 10; i++) {
      let randomProblem = this.pickRandomProblem1();
      let formatedProblem = this.formatProblem(randomProblem);
      this.randomProblemList.push(formatedProblem);
    }

    for(let i = 0; i < 20; i++) {
      let randomProblem = this.pickRandomProblem2();
      let formatedProblem = this.formatProblem(randomProblem);
      this.randomProblemList.push(formatedProblem);
    }

    for(let i = 0; i < 30; i++) {
      let randomProblem = this.pickRandomProblem3();
      let formatedProblem = this.formatProblem(randomProblem);
      this.randomProblemList.push(formatedProblem);
    }
  }

  private pickRandomProblem1() {
    let randomIndex = this.getRandomInt(0, this.problemList1.length - 1);
    let randomProblem = this.problemList1[randomIndex];
    this.problemList1.splice(randomIndex, 1);
    return randomProblem;
  }

  private pickRandomProblem2() {
    let randomIndex = this.getRandomInt(0, this.problemList2.length - 1);
    let randomProblem = this.problemList2[randomIndex];
    this.problemList2.splice(randomIndex, 1);
    return randomProblem;
  }

  private pickRandomProblem3() {
    let randomIndex = this.getRandomInt(0, this.problemList3.length - 1);
    let randomProblem = this.problemList3[randomIndex];
    this.problemList3.splice(randomIndex, 1);
    return randomProblem;
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private formatProblem(problem: Problem) {
    var random = this.getRandomInt(1, 3);
    if (random === 1) {
      return `(   ) ${problem.operator} ${problem.Num2} = ${problem.result}`;
    } else if (random === 2) {
      return `${problem.Num1} ${problem.operator} (   ) = ${problem.result}`;
    } else {
      return `${problem.Num1} ${problem.operator} ${problem.Num2} = (   )`;
    }
  }
}
