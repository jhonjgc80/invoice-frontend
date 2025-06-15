import { Component, inject, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalInvoiceComponent } from '../total-invoice/total-invoice.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalInvoiceComponent,
    FormItemComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  public invoice!: Invoice;
  private invoiceSvc = inject(InvoiceService);

  ngOnInit(): void {
    this.invoice = this.invoiceSvc.getInvoice();
  }

  onRemove($event: number) {
    this.invoice = this.invoiceSvc.invoiceRemoveItem($event);
  }

  onAddItem(item: Item) {
    this.invoice = this.invoiceSvc.save(item);
  }


}
