import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chains-tabs',
  standalone: false,
  templateUrl: './chains-tabs.html',
  styleUrl: './chains-tabs.css',
})
export class ChainsTabs {
  constructor(private router: Router, private route: ActivatedRoute) { }

  isSequentialActive = false;
  isParallelActive = false;
  isConditionalActive = false;
  headerSubText = "";

  navigateToSequential() {
    if (!this.isSequentialActive) {
      this.isSequentialActive = true;
      this.isParallelActive = false;
      this.isConditionalActive = false;
      this.headerSubText = "- Sequential",
      this.router.navigate(['/chains-main/sequential-chain'], { relativeTo: this.route});
    }
  }

  navigateToParallel() {
    if (!this.isParallelActive) {
      this.isSequentialActive = false;
      this.isParallelActive = true;
      this.isConditionalActive = false;
      this.headerSubText = "- Parallel",
      this.router.navigate(['/chains-main/parallel-chain'], { relativeTo: this.route});
      
    }
  }

  navigateToConditional() {
    if (!this.isConditionalActive) {
      this.isSequentialActive = false;
      this.isParallelActive = false;
      this.isConditionalActive = true;
      this.headerSubText = "- Conditional",
      this.router.navigate(['/chains-main/conditional-chain'], { relativeTo: this.route});
    }
  }
}