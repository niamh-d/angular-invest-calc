import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  annualContribution = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    console.log('Submitted');
    console.log(this.initialInvestment);
    console.log(this.annualContribution);
    console.log(this.expectedReturn);
    console.log(this.duration);
  }
}
