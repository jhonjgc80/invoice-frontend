import { Component, input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {
  client = input<Client>();
}
