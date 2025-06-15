import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../components/data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.invoiceTotal();
    return { ...this.invoice, total };
  }

  invoiceTotal() {
    // let total = 0;
    // this.invoice.items.forEach(item => {
    //   total += item.price * item.quantity;
    // });
    // return total;

    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  save(item: Item): Invoice {
    this.invoice.items = [...this.invoice.items, item];
    return this.getInvoice();
  }

  invoiceRemoveItem(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    return this.getInvoice();
  }


}
