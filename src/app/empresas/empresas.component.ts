import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
     /*  pagingType: 'full_numbers', */
      language:{
        url:"https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json"
      }

    };
  }
}
