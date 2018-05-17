import { Injectable } from '@angular/core';
import { Oportunidad } from './oportunidad';
import { Aplicacion } from './aplicacion';
import { OPORTUNIDADES } from './mock-oportunidades';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from 'selenium-webdriver/firefox';
import { catchError, map, tap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';


@Injectable()
export class OportunidadService {
  
  private oportunidadesUrl;

   constructor(
    private http: HttpClient,
    private messageService: MessageService    ) { 
      this.oportunidadesUrl = 'http://dllosvr:8084/api//Oportunidad'; 
    }
  
  getOportunidades(): Observable<Oportunidad[]> {    
      return this.http.get<Oportunidad[]>(this.oportunidadesUrl);
  }
  

  private log(message: string) {
    this.messageService.add('OportunidadService: ' + message);
  }


  getOportunidad(id: number): Observable<Oportunidad> {
    //this.messageService.add(`OportunidadService: fetched oportunidad id=${id}`);
    //return of(OPORTUNIDADES.find( oportunidad => oportunidad.Idrequisicion === id));
    const url = `${this.oportunidadesUrl}/${id}`;
    return this.http.get<Oportunidad>(url).pipe(
      tap(_ => this.log(`fetched oportunidad id=${id}`)),
      catchError(this.handleError<Oportunidad>(`getOportunidad id=${id}`))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

