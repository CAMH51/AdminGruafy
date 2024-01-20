import { Component, OnInit } from '@angular/core';

declare let $:any;
let seleccionarArchivo = $('#formFile').val();
let imgPrev = $('#imagenPrevisualizacion').val();
let archivo:any;
let primerArchivo;
let objURL;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
     /*  pagingType: 'full_numbers', */
      language:{
        url:"https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json"
      }

    };
  }

  preVisualizar(){
    archivo = seleccionarArchivo.files;

    if (!archivo || !archivo.length) {
      imgPrev.src = "";
      return;
    }

     primerArchivo = archivo[0];
    // Lo convertimos a un objeto de tipo objectURL
    objURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    imgPrev.src = objURL;

  }

}
