import { Component } from '@angular/core';

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

  // 退位减法
  private problemList4: Problem[] = [];

  protected randomProblemList: string[] = [];

  constructor() {
    this.generateAllProblems();
    this.pickRandomProblems();
  }

  private generateAllProblems() {
    // 不进位加法 16题
    this.problemList1.push(new Problem(2, 2, '+', 2 + 2));
    this.problemList1.push(new Problem(2, 3, '+', 2 + 3));
    this.problemList1.push(new Problem(2, 4, '+', 2 + 4));
    this.problemList1.push(new Problem(2, 5, '+', 2 + 5));
    this.problemList1.push(new Problem(2, 6, '+', 2 + 6));
    this.problemList1.push(new Problem(2, 7, '+', 2 + 7));
    this.problemList1.push(new Problem(2, 8, '+', 2 + 8));
    this.problemList1.push(new Problem(3, 3, '+', 3 + 3));
    this.problemList1.push(new Problem(3, 4, '+', 3 + 4));
    this.problemList1.push(new Problem(3, 5, '+', 3 + 5));
    this.problemList1.push(new Problem(3, 6, '+', 3 + 6));
    this.problemList1.push(new Problem(3, 7, '+', 3 + 7));
    this.problemList1.push(new Problem(4, 4, '+', 4 + 4));
    this.problemList1.push(new Problem(4, 5, '+', 4 + 5));
    this.problemList1.push(new Problem(4, 6, '+', 4 + 6));
    this.problemList1.push(new Problem(5, 5, '+', 5 + 5));

    // 进位加法 20题
    this.problemList2.push(new Problem(2, 9, '+', 2 + 9));
    this.problemList2.push(new Problem(3, 8, '+', 3 + 8));
    this.problemList2.push(new Problem(3, 9, '+', 3 + 9));
    this.problemList2.push(new Problem(4, 7, '+', 4 + 7));
    this.problemList2.push(new Problem(4, 8, '+', 4 + 8));
    this.problemList2.push(new Problem(4, 9, '+', 4 + 9));
    this.problemList2.push(new Problem(5, 6, '+', 5 + 6));
    this.problemList2.push(new Problem(5, 7, '+', 5 + 7));
    this.problemList2.push(new Problem(5, 8, '+', 5 + 8));
    this.problemList2.push(new Problem(5, 9, '+', 5 + 9));
    this.problemList2.push(new Problem(6, 6, '+', 6 + 6));
    this.problemList2.push(new Problem(6, 7, '+', 6 + 7));
    this.problemList2.push(new Problem(6, 8, '+', 6 + 8));
    this.problemList2.push(new Problem(6, 9, '+', 6 + 9));
    this.problemList2.push(new Problem(7, 7, '+', 7 + 7));
    this.problemList2.push(new Problem(7, 8, '+', 7 + 8));
    this.problemList2.push(new Problem(7, 9, '+', 7 + 9));
    this.problemList2.push(new Problem(8, 8, '+', 8 + 8));
    this.problemList2.push(new Problem(8, 9, '+', 8 + 9));
    this.problemList2.push(new Problem(9, 9, '+', 9 + 9));

    // 不退位减法 56题
    for (let i = 4; i <= 10; i++) {
      for (let j = 2; j <= i - 2; j++) {
        this.problemList3.push(new Problem(i, j, '-', i - j));
        this.problemList3.push(new Problem(i + 10, j, '-', i - j));
      }
    }

    // 退位减法 28题
    for (let i = 12; i <= 19; i++) {
      for (let j = i - 9; j <= 9; j++) {
        this.problemList4.push(new Problem(i, j, '-', i - j));
      }
    }
  }

  private pickRandomProblems() {
    let randomProblemList1 = this.pickRandomProblemFromList(this.problemList1, 10);
    let randomProblemList2 = this.pickRandomProblemFromList(this.problemList2, 15);
    let randomProblemList3 = this.pickRandomProblemFromList(this.problemList3, 15);
    let randomProblemList4 = this.pickRandomProblemFromList(this.problemList4, 10);
    let randomProblemList = randomProblemList1.concat(randomProblemList2).concat(randomProblemList3).concat(randomProblemList4);

    this.randomProblemList = this.pickRandomProblemFromList(randomProblemList, 50).map(problem => this.formatProblem(problem));
  }

  private pickRandomProblemFromList(problemList: Problem[], count: number) {
    let randomProblemList: Problem[] = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, problemList.length - 1);
      let randomProblem = problemList[randomIndex];
      if (randomProblemList.find(problem => problem.equals(randomProblem))) {
        console.log('duplicate problem', randomProblem, this);
      }
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
