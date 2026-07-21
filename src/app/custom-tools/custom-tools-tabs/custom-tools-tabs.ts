import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-tools-tabs',
  standalone: false,
  templateUrl: './custom-tools-tabs.html',
  styleUrl: './custom-tools-tabs.css',
})
export class CustomToolsTabs {


  constructor(private router: Router, private route: ActivatedRoute) { }

  isToolDecoratorActive = false;
  isStructuredToolActive = false;
  isBaseToolActive = false;

  headerSubText = "";

  navigateToToolDecorator() {
    if (!this.isToolDecoratorActive) {
      this.isToolDecoratorActive = true;
      this.isStructuredToolActive = false;
      this.isBaseToolActive = false;
      this.headerSubText = "- @tool Decorator",
      this.router.navigate(['/custom-tools-main/common-tool', 'tooldecorator'], { relativeTo: this.route });
    }
  }

  navigateToStructredTool() {
    if (!this.isStructuredToolActive) {
      this.isToolDecoratorActive = false;
      this.isStructuredToolActive = true;
      this.isBaseToolActive = false;
      this.headerSubText = "- Structured Tool & Pydantic",
      this.router.navigate(['/custom-tools-main/common-tool', 'structuredtool'], { relativeTo: this.route });
    }
  }

  navigateToBaseTool() {
    if (!this.isBaseToolActive) {
      this.isToolDecoratorActive = false;
      this.isStructuredToolActive = false;
      this.isBaseToolActive = true;
      this.headerSubText = "- Base Tool extn.",
      this.router.navigate(['/custom-tools-main/common-tool', 'basetool'], { relativeTo: this.route });
    }
  }
}
