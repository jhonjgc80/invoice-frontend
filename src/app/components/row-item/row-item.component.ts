import { Component, input, output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[app-row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {
  item = input<Item>();
  removeItem = output<number>();

  onRemove(id: number) {
    this.removeItem.emit(id);
  }
}
