import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-structured-output-tabs',
  standalone: false,
  templateUrl: './structured-output-tabs.html',
  styleUrl: './structured-output-tabs.css',
})
export class StructuredOutputTabs {
  constructor(private router: Router, private route: ActivatedRoute) { }

  isTypedDictActive = false;
  isPydanticActive = false;
  isJsonSchemaActive = false;
  headerSubText = "";

  navigateToTypedDict() {
    if (!this.isTypedDictActive) {
      this.isTypedDictActive = true;
      this.isPydanticActive = false;
      this.isJsonSchemaActive = false;
      this.headerSubText = "- Typed Dict",
      this.router.navigate(['/structured-output-main/common-structured-output','typeddict'], { relativeTo: this.route});
    }
  }

  navigateToPydantic() {
    if (!this.isPydanticActive) {
      this.isTypedDictActive = false;
      this.isPydanticActive = true;
      this.isJsonSchemaActive = false;
      this.headerSubText = "- Pydantic",
      this.router.navigate(['/structured-output-main/common-structured-output','pydantic'], { relativeTo: this.route});
      
    }
  }

  navigateToJsonSchema() {
    if (!this.isJsonSchemaActive) {
      this.isTypedDictActive = false;
      this.isPydanticActive = false;
      this.isJsonSchemaActive = true;
      this.headerSubText = "- Json Schema",
      this.router.navigate(['/structured-output-main/common-structured-output','jsonschema'], { relativeTo: this.route});
    }
  }

}

