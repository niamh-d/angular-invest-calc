import { Component } from '@angular/core';
import { InvestmentResult } from '../investment-results.model';
import { InvestmentService } from '../investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results?: InvestmentResult[];

  get resultData() {
    return this.investmentService.resultData;
  }

  constructor(private investmentService: InvestmentService) {}
}
