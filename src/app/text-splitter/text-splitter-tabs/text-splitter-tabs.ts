import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-text-splitter-tabs',
  standalone: false,
  templateUrl: './text-splitter-tabs.html',
  styleUrl: './text-splitter-tabs.css',
})
export class TextSplitterTabs {

constructor(private router: Router, private route: ActivatedRoute) { }

  headerSubText = "";

  isRecursiveCharTextSplitterActive = false;

 navigateToRecursiveCharTextSplitter() {
    if (!this.isRecursiveCharTextSplitterActive) {
      this.isRecursiveCharTextSplitterActive = true;
      this.headerSubText = "- Recursiver",
      this.router.navigate(['/text-splitter-main/recursive-char-text-splitter'], { relativeTo: this.route});
    }
  }

}
