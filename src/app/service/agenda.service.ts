import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContatosResponse } from '../models/contatos-response';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  public atualizarGrid: BehaviorSubject<any> = new BehaviorSubject(false);
  
  constructor(private http: HttpClient) { }

  getContatos(): Observable<ContatosResponse>
  { 
    return this.http.get<ContatosResponse>(environment.urlApi);
  }

  postContatos(body: Object): Observable<Object>
  {
    return this.http.post<any>(environment.urlApi, body); 
  }

  deleteContatos(id: number): Observable<Object>
  {
    return this.http.delete<Object>(environment.urlApi + '/' + id)
  }

  updateContatos(id: number, body: Object): Observable<Object>
  {
   return this.http.put<Object>(environment.urlApi + '/'+ id, body);
  }
}
