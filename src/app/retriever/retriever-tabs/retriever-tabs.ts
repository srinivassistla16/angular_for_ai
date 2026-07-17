import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-retriever-tabs',
  standalone: false,
  templateUrl: './retriever-tabs.html',
  styleUrl: './retriever-tabs.css',
})
export class RetrieverTabs {
constructor(private router: Router, private route: ActivatedRoute) { }

  headerSubText = "";

  isWikipediaRetrieverActive = false;

 navigateToWikipediaRetriever() {
    if (!this.isWikipediaRetrieverActive) {
      this.isWikipediaRetrieverActive = true;
      this.headerSubText = "- Wikipedia Retriever",
      this.router.navigate(['/retriever-main/wikipedia-retriever'], { relativeTo: this.route});
    }
  }
}
