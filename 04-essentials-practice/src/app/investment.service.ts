import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./user-input/investment-input.model";
import { InvestmentResult } from "./investment-result/investment-result.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    investmentResults = signal<InvestmentResult[] | undefined>(undefined);

    calculateInvestmentResults(input: InvestmentInput) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = input;
        let investmentValue = initialInvestment;
        const annualData = [];

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