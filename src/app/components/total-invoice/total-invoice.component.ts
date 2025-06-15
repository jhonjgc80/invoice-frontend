import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-total-invoice',
  imports: [CurrencyPipe],
  templateUrl: './total-invoice.component.html',
  styleUrl: './total-invoice.component.css'
})
export class TotalInvoiceComponent {

  total = input<number>();

}
