import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { OportunidadDetailComponent } from './oportunidad-detail/oportunidad-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { OportunidadService } from './oportunidad.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HttpClientModule, } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import {ReactiveFormsModule} from '@angular/forms';
import { AplicacionOportunidadComponent } from './aplicacion-oportunidad/aplicacion-oportunidad.component';      



@NgModule({
  declarations: [
    AppComponent,
    OportunidadesComponent,    
    OportunidadDetailComponent, 
    MessagesComponent, AplicacionOportunidadComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,   
    HttpClientInMemoryWebApiModule ,
    MatButtonModule, 
    MatCheckboxModule,
    MaterialModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ReactiveFormsModule    
  ],
  
  bootstrap: [AppComponent],
  providers: [
    OportunidadService,
    MessageService
    /* . . . */
  ]
})
export class AppModule { }
