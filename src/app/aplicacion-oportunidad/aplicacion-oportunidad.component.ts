import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Oportunidad }         from '../oportunidad';
import { OportunidadService }  from '../oportunidad.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Aplicacion } from '../aplicacion';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, ResponseContentType, Http } from '@angular/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';
import { of } from 'rxjs/observable/of';
import {Router} from "@angular/router";

@Component({
  selector: 'app-aplicacion-oportunidad',
  templateUrl: './aplicacion-oportunidad.component.html',
  styleUrls: ['./aplicacion-oportunidad.component.css']
})
export class AplicacionOportunidadComponent implements OnInit{
 
  form: FormGroup;
  loading: boolean = false;
  @Input() aplicacion: Aplicacion;
  @Input() oportunidad: Oportunidad;
  apiURL: string;
  fileToUpload: File  = null;
  success: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  ngOnInit(): void {
    this.getOportunidad();
  }

  constructor(private fb: FormBuilder, private http: HttpClient,
    private route: ActivatedRoute,
    private oportunidadService: OportunidadService,
    private location: Location,
    private router: Router
      ) {
    this.createForm();   
    this.apiURL="http://dllosvr:8084/api/" ;    
  }

  createForm() {
    this.form = this.fb.group
      ({
        Name: ['', Validators.required],
        Email: ['', Validators.compose([Validators.required, Validators.email])],
        Phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
        Curriculum: null
      });
    }


  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.form.get('name').value);
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }


  handleFileInput(files: FileList) {
    let fileItem = files.item(0);
    console.log("file input has changed. The file is", fileItem)
    this.fileToUpload = fileItem
  }

  onSubmit(event) {    
    this.loading = true;
    let input = new FormData();  
      
    this.aplicacion = new Aplicacion(this.form.get('Name').value, this.form.get('Email').value,this.form.get('Phone').value, this.oportunidad.Cargo, this.oportunidad.Idrequisicion,this.form.get('Curriculum').value);
    
    input.append('Aplicacion', JSON.stringify(this.aplicacion));        
    input.append('fileItem', this.fileToUpload, this.fileToUpload.name);
    
    let res = this.http.post<Aplicacion>(this.apiURL+'/Aplicacion',input,{observe:'response'})    
    .subscribe(
      (data) => {
          // Handle response here
          if(data.status==200)
          {
            this.success = true;   
                   
          }

          console.log(data.status);
          this.loading = false; 
      },     
      err =>{ 
        alert("Se ha presentado un error al enviar tu solicitud");
        this.loading = false; }
        
      
    );  
    console.log("er");
    console.log(res)  ;
    
   
  }


  getOportunidad(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.oportunidadService.getOportunidad(id)      
      .subscribe(oportunidad => this.oportunidad = oportunidad);
  }

 

  aplicar(arg0: FormData) : Observable<Aplicacion> {
    return this.http.post<Aplicacion>(this.apiURL+'/Aplicacion', arg0);
  }



  clearFile() {
    this.form.get('Curriculum').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


  goBack(): void {
    this.location.back();
  }
}


