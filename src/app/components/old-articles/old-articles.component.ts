import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-old-articles',
   imports: [CommonModule, RouterModule],
   templateUrl: './old-articles.component.html',
   styleUrl: './old-articles.component.css'
})
export class OldArticlesComponent {
   @Input()
   articles: any[] = []

    currentPage = 0;
    itemsPerPage = 3;

    get paginatedItems() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.articles.slice(start, end);
    }

    nextPage() {
      if ((this.currentPage + 1) * this.itemsPerPage < this.articles.length) {
        this.currentPage++;
      }
    }

    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    }
}
