import { Component } from '@angular/core';
import { ChatModelService } from '../../services/chat-model-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-chatbot',
  standalone: false,
  templateUrl: './common-chatbot.html',
  styleUrl: './common-chatbot.css',
})
export class CommonChatbot {

    modelName: string | null = "";
    
    constructor(private route: ActivatedRoute, private chatModelService: ChatModelService) { }

    ngOnInit() {
    // this.modelName = this.route.snapshot.paramMap.get('modelname');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.modelName = params.get('modelname')
    });
  }
  }
