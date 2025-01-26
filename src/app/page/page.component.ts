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
      this.problemList1.push({
        Num1: i,
        Num2: i,
        operator: '+',
        result: i + i
      });

      for (let j = 1; j <= 10 - i; j++) {
        if (i !== j) {
          this.problemList1.push({
            Num1: i,
            Num2: j,
            operator: '+',
            result: i + j
          });
        }

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
      randomProblemList.push(randomProblem);
      problemList.splice(randomIndex, 1);
    }

    return randomProblemList;
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
