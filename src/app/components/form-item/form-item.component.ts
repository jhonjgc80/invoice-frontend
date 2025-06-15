import { Component, output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {

  private counterId = 4;

  addItem = output<any>();

  item: any = {
    product: '',
    price: '',
    quantity: ''
  }

  onAddItem(itemForm: NgForm): void {
    this.addItem.emit({id: this.counterId, ...this.item});
    this.counterId++;

    this.item = {
      product: '',
      price: '',
      quantity: ''
    };

    itemForm.resetForm();
  }

}
