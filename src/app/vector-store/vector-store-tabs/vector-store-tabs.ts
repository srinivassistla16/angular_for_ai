import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vector-store-tabs',
  standalone: false,
  templateUrl: './vector-store-tabs.html',
  styleUrl: './vector-store-tabs.css',
})
export class VectorStoreTabs {

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
      this.router.navigate(['/vector-store-main/chroma','openai'], { relativeTo: this.route});
    }
  }

  navigateToGemini() {
    if (!this.isGeminiActive) {
      this.isOpenAiActive = false;
      this.isHfActive = false;
      this.isGeminiActive = true;
      this.headerSubText = "- Google",
      this.router.navigate(['/vector-store-main/chroma','google'], { relativeTo: this.route});
      
    }
  }

  navigateToHf() {
    if (!this.isHfActive) {
      this.isOpenAiActive = false;
      this.isHfActive = true;
      this.isGeminiActive = false;
      this.headerSubText = "- Hugging Face",
      this.router.navigate(['/vector-store-main/chroma','huggingface'], { relativeTo: this.route});
    }
  }
}
