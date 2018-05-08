import { Component, OnInit } from '@angular/core';
import { Oportunidad } from '../oportunidad';
import { OPORTUNIDADES } from '../mock-oportunidades';
import { OportunidadService } from '../oportunidad.service';
import {DataSource} from '@angular/cdk/table';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent implements OnInit {
  
  displayedColumns = ['Cargo', 'Fechafin','Ciudadsolicitud'];  
  oportunidades: Oportunidad[];     
  dataSource = this.oportunidades;
  

  constructor(private opotunidadService: OportunidadService) { }

  getOportunidades(): void {
    this.opotunidadService.getOportunidades()
    .subscribe(oportunidades => this.oportunidades = oportunidades);
  }
  ngOnInit() {
    this.getOportunidades();
    this.dataSource = this.oportunidades;
  }

//  displayedColumns = ['Idrequisicion'];
  
 
}


