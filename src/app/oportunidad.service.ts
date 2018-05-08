import { Injectable } from '@angular/core';
import { Oportunidad } from './oportunidad';
import { OPORTUNIDADES } from './mock-oportunidades';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from 'selenium-webdriver/firefox';
import { catchError, map, tap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';

@Injectable()
export class OportunidadService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getOportunidades(): Observable<Oportunidad[]> {    
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
    
    
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

  private oportunidadesUrl = 'http://dllosvr:8084/api/Oportunidad';  // URL to web api
  

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

