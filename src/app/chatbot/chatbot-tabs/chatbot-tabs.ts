import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-tabs',
  standalone: false,
  templateUrl: './chatbot-tabs.html',
  styleUrl: './chatbot-tabs.css',
})
export class ChatbotTabs {
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
      this.router.navigate(['/chatbot-main/common-chatbot','openai'], { relativeTo: this.route});
    }
  }

  navigateToGemini() {
    if (!this.isGeminiActive) {
      this.isOpenAiActive = false;
      this.isHfActive = false;
      this.isGeminiActive = true;
      this.headerSubText = "- Google",
      this.router.navigate(['/chatbot-main/common-chatbot','google'], { relativeTo: this.route});
      
    }
  }

  navigateToHf() {
    if (!this.isHfActive) {
      this.isOpenAiActive = false;
      this.isHfActive = true;
      this.isGeminiActive = false;
      this.headerSubText = "- Hugging Face",
      this.router.navigate(['/chatbot-main/common-chatbot','huggingface'], { relativeTo: this.route});
    }
  }

}
