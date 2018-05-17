import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Oportunidad }         from '../oportunidad';
import { OportunidadService }  from '../oportunidad.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-oportunidad-detail',
  templateUrl: './oportunidad-detail.component.html',
  styleUrls: [ './oportunidad-detail.component.css' ]
})
export class OportunidadDetailComponent implements OnInit {
  @Input() oportunidad: Oportunidad;

  constructor(
    private route: ActivatedRoute,
    private oportunidadService: OportunidadService,
    private location: Location, 
    public dialog: MatDialog   
  ) {}

  ngOnInit(): void {
    this.getOportunidad();
  }

  getOportunidad(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id!=0)
    {
      this.oportunidadService.getOportunidad(id)
        .subscribe(oportunidad => this.oportunidad = oportunidad);
    }
  }

  goBack(): void {
    this.location.back();
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/