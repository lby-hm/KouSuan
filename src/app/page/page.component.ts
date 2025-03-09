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
    // 不进位加法
    for (let i = 2; i <= 5; i++) {
      for (let j = i; j <= 10 - i; j++) {
        this.problemList1.push(new Problem(i, j, '+', i + j));
      }
    }

    // 进位加法
    for (let i = 2; i <= 9; i++) {
      for (let j = 9; j >= 11 - i && j > i; j--) {
        this.problemList2.push(new Problem(i, j, '+', i + j));
      }
    }

    // 不退位减法
    for (let i = 4; i <= 10; i++) {
      for (let j = 2; j <= i - 2; j++) {
        this.problemList3.push(new Problem(i, j, '-', i - j));
      }
    }

    // 退位减法
    for (let i = 12; i <= 18; i++) {
      for (let j = i - 9; j <= 9; j++) {
        this.problemList4.push(new Problem(i, j, '-', i - j));
      }
    }
  }

  private pickRandomProblems() {
    let randomProblemList1 = this.pickRandomProblemFromList1(5);
    let randomProblemList2 = this.pickRandomProblemFromList2(15);
    let randomProblemList3 = this.pickRandomProblemFromList3(5);
    let randomProblemList4 = this.pickRandomProblemFromList4(15);
    let randomProblemList = randomProblemList1.concat(randomProblemList2).concat(randomProblemList3).concat(randomProblemList4);

    this.randomProblemList = this.pickRandomProblemFromList(randomProblemList, 50);
  }

  private pickRandomProblemFromList1(count: number): string[] {
    let randomProblemList: string[] = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, this.problemList1.length - 1);

      let num1 = this.problemList1[randomIndex].Num1;
      let num2 = this.problemList1[randomIndex].Num2;

      if (this.getRandomInt(0, 1) === 0) {
        let num = num1;
        num1 = num2;
        num2 = num;
      }

      switch (this.getRandomInt(0, 2)) {
        case 0: break;
        case 1:
          num1 += 10;
          break;
        case 2:
          num2 += 10;
          break;
      }

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '+', num1 + num2));
      randomProblemList.push(formattedProblem);
      this.problemList1.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList2(count: number): string[] {
    let randomProblemList: string[] = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, this.problemList2.length - 1);

      let num1 = this.problemList2[randomIndex].Num1;
      let num2 = this.problemList2[randomIndex].Num2;

      if (this.getRandomInt(0, 1) === 0) {
        let num = num1;
        num1 = num2;
        num2 = num;
      }

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '+', num1 + num2));
      randomProblemList.push(formattedProblem);
      this.problemList2.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList3(count: number): string[] {
    let randomProblemList: string[] = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, this.problemList3.length - 1);

      let num1 = this.problemList3[randomIndex].Num1;
      let num2 = this.problemList3[randomIndex].Num2;

      if (this.getRandomInt(0, 1) === 0) {
        num1 += 10;
      }

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '-', num1 - num2));
      randomProblemList.push(formattedProblem);
      this.problemList3.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList4(count: number): string[] {
    let randomProblemList: string[] = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = this.getRandomInt(0, this.problemList4.length - 1);

      let num1 = this.problemList4[randomIndex].Num1;
      let num2 = this.problemList4[randomIndex].Num2;

      let formattedProblem = this.formatProblem(new Problem(num1, num2, '-', num1 - num2));
      randomProblemList.push(formattedProblem);
      this.problemList4.splice(randomIndex, 1);
    }

    return randomProblemList;
  }

  private pickRandomProblemFromList(problemList: string[], count: number) {
    let randomProblemList: string[] = [];
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
