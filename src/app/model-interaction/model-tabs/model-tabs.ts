import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model-tabs',
  standalone: false,
  templateUrl: './model-tabs.html',
  styleUrl: './model-tabs.css',
})
export class ModelTabs {

  constructor(private router: Router, private route: ActivatedRoute) { }

  isOpenAiActive = false;
  isGeminiActive = false;
  isHfActive = false;
  headerSubText = "";

  navigateToOpenAi() {
    if (!this.isOpenAiActive) {
      this.isOpenAiActive = true;
      this.isGeminiActive = false;
      this.isHfActive = false;
      this.headerSubText = "- Open AI",
        this.router.navigate(['/models-main/openai'], { relativeTo: this.route });
    }
  }

  navigateToGemini() {
    if (!this.isGeminiActive) {
      this.isOpenAiActive = false;
      this.isHfActive = false;
      this.isGeminiActive = true;
      this.headerSubText = "- Gemini",
        this.router.navigate(['/models-main/gemini'], { relativeTo: this.route });
    }
  }

  navigateToHf() {
    if (!this.isHfActive) {
      this.isOpenAiActive = false;
      this.isHfActive = true;
      this.isGeminiActive = false;
      this.headerSubText = "- Hugging Face",
        this.router.navigate(['/models-main/hf'], { relativeTo: this.route });
    }
  }


}
