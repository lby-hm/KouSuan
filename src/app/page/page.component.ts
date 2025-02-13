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

  protected randomProblemList: string[] = [];

  constructor() {
    this.generateAllProblems();
    this.pickRandomProblems();
  }

  private generateAllProblems() {
    // 不进位加法
    for (let i = 2; i <= 5; i++) {
      this.problemList1.push(new Problem(i, i, '+', i + i));
    }

    for (let i = 2; i <= 10; i++) {
      for (let j = 2; j <= 10 - i; j++) {
        if (i !== j) {
          this.problemList1.push(new Problem(i, j, '+', i + j));
        }

        this.problemList1.push(new Problem(i + 10, j, '+', i + j + 10));
        this.problemList1.push(new Problem(j, i + 10, '+', i + j + 10));
      }
    }

    // 进位加法
    for (let i = 6; i <= 9; i++) {
      this.problemList1.push(new Problem(i, i, '+', i + i));
    }

    for (let i = 2; i <= 9; i++) {
      for (let j = 11 - i; j <= 9; j++) {
        if (i !== j) {
          this.problemList2.push(new Problem(i, j, '+', i + j));
        }
      }
    }

    // 不退位减法
    for (let i = 4; i <= 10; i++) {
      for (let j = 2; j <= i - 2; j++) {
        this.problemList3.push(new Problem(i, j, '-', i - j));
        this.problemList3.push(new Problem(i + 10, j, '-', i - j));
      }
    }
  }

  private pickRandomProblems() {
    let randomProblemList1 = this.pickRandomProblemFromList(this.problemList1, 10);
    let randomProblemList2 = this.pickRandomProblemFromList(this.problemList2, 30);
    let randomProblemList3 = this.pickRandomProblemFromList(this.problemList3, 20);
    let randomProblemList = randomProblemList1.concat(randomProblemList2).concat(randomProblemList3);

    this.randomProblemList = this.pickRandomProblemFromList(randomProblemList, 60).map(problem => this.formatProblem(problem));
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
