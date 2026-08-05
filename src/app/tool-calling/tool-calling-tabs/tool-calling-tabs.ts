import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tool-calling-tabs',
  standalone: false,
  templateUrl: './tool-calling-tabs.html',
  styleUrl: './tool-calling-tabs.css',
})
export class ToolCallingTabs {
constructor(private router: Router, private route: ActivatedRoute) { }

  headerSubText = "";

  isMultiplierToolCallActive = false;
  isCurrencyConversionToolCallActive = false;

 navigateToMultiplierToolCall() {
    if (!this.isMultiplierToolCallActive) {
      this.isMultiplierToolCallActive = true;
      this.isCurrencyConversionToolCallActive = false;
      this.headerSubText = "- Mulitiplier",
      this.router.navigate(['/tool-calling-main/tool-calling-multiplier'], { relativeTo: this.route});
    }
  }

 navigateToCurrencyConversionToolCall() {
    if (!this.isCurrencyConversionToolCallActive) {
      this.isMultiplierToolCallActive = false;
      this.isCurrencyConversionToolCallActive = true;
      this.headerSubText = "- Currency Conversion";
      this.router.navigate(['/tool-calling-main/tool-calling-currency-conversion'], { relativeTo: this.route});
    }
  }
}
