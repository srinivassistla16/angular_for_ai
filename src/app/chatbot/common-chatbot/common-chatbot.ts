import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ChatbotService } from '../../services/chatbot-service';
import { ChatRequest } from '../../models/chatbot_model';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-common-chatbot',
  standalone: false,
  templateUrl: './common-chatbot.html',
  styleUrl: './common-chatbot.css',
})
export class CommonChatbot implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  modelName: string | null = "";
  messages: ChatMessage[] = [
    { text: 'Hello! I am ready to assist you. What can I do for you today?', sender: 'bot', timestamp: new Date() }
  ];
  isTyping = false;

  constructor(
    private route: ActivatedRoute,
    private chatbotService: ChatbotService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.modelName = params.get('modelname') || 'Assistant';
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  queryResponse$: Observable<any> | undefined = of("temp");
  sendMessage(inputEl: HTMLInputElement) {
    const text = inputEl.value.trim();
    if (!text) return;

    this.messages = [...this.messages, { text, sender: 'user', timestamp: new Date() }];
    inputEl.value = '';
    this.isTyping = true;
    this.cdr.detectChanges();
    this.scrollToBottom();
    this.queryResponse$ = this.chatbotService.doQuery(this.modelName, new ChatRequest("1234", text));
    this.queryResponse$?.subscribe({
      next: (data: any) => {
        if (data?.model_response != '') {
          let RESPONSETEXT = data?.model_response;
          this.isTyping = false;
          this.messages = [...this.messages, {
            text: RESPONSETEXT,
            sender: 'bot',
            timestamp: new Date()
          }];
          this.cdr.detectChanges();

          // Delay scrolling slightly to ensure DOM is updated
          setTimeout(() => {
            this.scrollToBottom();
          }, 50);
        }
        // Handle success (e.g., show a success message)
      },
      error: (error: any) => {
        console.error('Technical Issue. Please Contact Support Engineer!!', error);
        // Handle error
      },
      complete: () => {
        // Handle the completion event (optional)
        console.log('Observable completed');
      }
    });
    //////////////////


  }
}
