import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promts-tabs',
  standalone: false,
  templateUrl: './promts-tabs.html',
  styleUrl: './promts-tabs.css',
})
export class PromtsTabs {
  
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
      this.router.navigate(['/prompts-main/common-prompt','openai'], { relativeTo: this.route});
    }
  }

  navigateToGemini() {
    if (!this.isGeminiActive) {
      this.isOpenAiActive = false;
      this.isHfActive = false;
      this.isGeminiActive = true;
      this.headerSubText = "- Google",
      this.router.navigate(['/prompts-main/common-prompt','google'], { relativeTo: this.route});
      
    }
  }

  navigateToHf() {
    if (!this.isHfActive) {
      this.isOpenAiActive = false;
      this.isHfActive = true;
      this.isGeminiActive = false;
      this.headerSubText = "- Hugging Face",
      this.router.navigate(['/prompts-main/common-prompt','huggingface'], { relativeTo: this.route});
    }
  }

}
