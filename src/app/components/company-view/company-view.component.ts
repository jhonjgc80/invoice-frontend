import { Component, input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-view',
  imports: [],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent {
  company = input<Company>({name: 'Empresa dafault', nit:1234});
}
