import { Injectable } from '@angular/core';
import { type InvestmentInput } from './investment-input.model';
import { type InvestmentResult } from './investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData?: InvestmentResult[];

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualContribution, expectedReturn, duration } = data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualContribution;
      const totalInterest = investmentValue - annualContribution * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualContribution,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualContribution * year,
      });
    }

    this.resultData = annualData;
  }
}
