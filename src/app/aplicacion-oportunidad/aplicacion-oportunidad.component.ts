import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Oportunidad }         from '../oportunidad';
import { OportunidadService }  from '../oportunidad.service';

@Component({
  selector: 'app-aplicacion-oportunidad',
  templateUrl: './aplicacion-oportunidad.component.html',
  styleUrls: ['./aplicacion-oportunidad.component.css']
})
export class AplicacionOportunidadComponent implements OnInit {
  @Input() oportunidad: Oportunidad;
  constructor(private route: ActivatedRoute,
    private oportunidadService: OportunidadService,
    private location: Location) { 
    
  }

  ngOnInit() {
    this.getOportunidad();
  }

  getOportunidad(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.oportunidadService.getOportunidad(id)
      .subscribe(oportunidad => this.oportunidad = oportunidad);
  }

  goBack(): void {
    this.location.back();
  }

}
