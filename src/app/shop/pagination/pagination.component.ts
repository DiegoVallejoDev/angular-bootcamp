import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationPipe } from '../pagination.pipe'; // Import the PaginationPipe
import { IItem } from '../data';

@Component({
  selector: 'app-pagination',
  styleUrls: ['./pagination.component.scss'],
  templateUrl: './pagination.component.html',
  providers: [PaginationPipe], // Provide PaginationPipe
})
export class PaginationComponent {
  @Input() items: IItem[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5;
  
  @Output() pageChange = new EventEmitter<number>(); // Logic for page change event
  
  protected pages: number[] = [];

  getTotalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
  
  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  getPages(): number[] {
    return new Array(this.getTotalPages()).fill(0).map((_, index) => index + 1);
  }

  constructor(private paginationPipe: PaginationPipe) {
    this.pages = this.getPages();
  }
}
