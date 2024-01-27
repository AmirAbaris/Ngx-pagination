import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  page: number = 0;

  // sample data
  items: string[] = Array.from({ length: 100 }).map((_, item) => `item ${item + 1} `);
}
