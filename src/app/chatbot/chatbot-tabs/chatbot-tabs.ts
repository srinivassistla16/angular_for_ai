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

  isLangGraphActive = false;
  isLangChainActive = false;
  isHfActive = false;
  headerSubText = "";

  navigateToLangGraph() {
    if (!this.isLangGraphActive) {
      this.isLangGraphActive = true;
      this.isLangChainActive = false;
      this.headerSubText = "- Lang Graph",
        this.router.navigate(['/chatbot-main/common-chatbot', 'langgraph'], { relativeTo: this.route });
    }
  }

  navigateToLangChain() {
    if (!this.isLangChainActive) {
      this.isLangGraphActive = false;
      this.isLangChainActive = true;
      this.headerSubText = "- Lang Chain",
      this.router.navigate(['/chatbot-main/common-chatbot', 'langchain'], { relativeTo: this.route });
    }
  }

}
