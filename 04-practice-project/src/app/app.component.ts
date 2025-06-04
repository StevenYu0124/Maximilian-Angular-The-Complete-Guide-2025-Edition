import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentInput } from './user-input/investment-input.model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import type { InvestmentResult } from './investment-result/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  investmentResults = signal<InvestmentResult[] | undefined>(undefined);
  onCalculateInvestmentResults(input: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = input;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.investmentResults.set(annualData);
  }
}
