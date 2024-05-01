import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationPipe } from '../pagination.pipe'; // Import the PaginationPipe

@Component({
  selector: 'app-pagination',
  styleUrls: ['./pagination.component.css'],
  templateUrl: './pagination.component.html',
  providers: [PaginationPipe], // Provide PaginationPipe
})
export class PaginationComponent {
  @Input() items: any[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5;

  // Logic for page change event
  @Output() pageChange = new EventEmitter<number>();

  getTotalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  getPages(): number[] {
    return new Array(this.getTotalPages()).fill(0).map((_, index) => index + 1);
  }

  constructor(private paginationPipe: PaginationPipe) {}
}
