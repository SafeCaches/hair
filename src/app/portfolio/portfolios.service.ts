import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Portfolio {
  constructor(public id: number, public name: string) { }
}

const PORTFOLIOS = [
  new Portfolio(1, 'Dragon Burning Cities'),
  new Portfolio(2, 'Sky Rains Great White Sharks'),
  new Portfolio(3, 'Giant Asteroid Heading For Earth'),
  new Portfolio(4, 'Procrastinators Meeting Delayed Again'),
];

import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  static nextPortfolioId = 100;
  private portfolios$: BehaviorSubject<Portfolio[]> = new BehaviorSubject<Portfolio[]>(PORTFOLIOS);

  getPortfolios() { return this.portfolios$; }

  getPortfolio(id: number | string) {
    return this.getPortfolios()
      .map(portfolios => portfolios.find(portfolio => portfolio.id === +id));
  }

  addPortfolio(name: string) {
    name = name.trim();
    if (name) {
      let portfolio = new Portfolio(PortfolioService.nextPortfolioId++, name);
      PORTFOLIOS.push(portfolio);
      this.portfolios$.next(PORTFOLIOS);
    }
  }
}