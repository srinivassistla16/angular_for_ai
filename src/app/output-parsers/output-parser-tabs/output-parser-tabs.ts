import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-output-parser-tabs',
  standalone: false,
  templateUrl: './output-parser-tabs.html',
  styleUrl: './output-parser-tabs.css',
})
export class OutputParserTabs {

    
  constructor(private router: Router, private route: ActivatedRoute) { }

  isStrOutputParserActive = false;
  isJsonOutputParserActive = false;
  isStructuredOutputParserActive = false;
  isPydanticOutputParserActive = false;
  headerSubText = "";

  navigateToStrOutputParser() {
    if (!this.isStrOutputParserActive) {
      this.isStrOutputParserActive = true;
      this.isJsonOutputParserActive = false;
      this.isStructuredOutputParserActive = false;
      this.isPydanticOutputParserActive = false;
      this.headerSubText = "- StrOutputParser",
      this.router.navigate(['/output-parsers-main/string-output-parser'], { relativeTo: this.route});
    }
  }

  navigateToJsonOutputParser() {
      if (!this.isJsonOutputParserActive) {
      this.isStrOutputParserActive = false;
      this.isJsonOutputParserActive = true;
      this.isStructuredOutputParserActive = false;
      this.isPydanticOutputParserActive = false;
      this.headerSubText = "- JsonOutputParser",
      this.router.navigate(['/output-parsers-main/string-output-parser'], { relativeTo: this.route});
    }
  }

  navigateToStructuredOutputParser() {
      if (!this.isStructuredOutputParserActive) {
      this.isStrOutputParserActive = false;
      this.isJsonOutputParserActive = false;
      this.isStructuredOutputParserActive = true;
      this.isPydanticOutputParserActive = false;
    this.headerSubText = "- StructuredOutputParser",
      this.router.navigate(['/output-parsers-main/string-output-parser'], { relativeTo: this.route});
    }
  }

  navigateToPydanticOutputParser() {
      if (!this.isPydanticOutputParserActive) {
      this.isStrOutputParserActive = false;
      this.isJsonOutputParserActive = false;
      this.isStructuredOutputParserActive = false;
      this.isPydanticOutputParserActive = true;
      this.headerSubText = "- PydanticOutputParser",
      this.router.navigate(['/output-parsers-main/string-output-parser'], { relativeTo: this.route});
    }
  }

}
