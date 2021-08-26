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

  public guardandoDadosFiltrados: BehaviorSubject<any> = new BehaviorSubject(null);
  
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

  getContatosFilter(nome: string, idade: number = 0, sexo: string): Observable<ContatosResponse> {
    let url = this.http.get<ContatosResponse>(environment.urlApi);
    if(nome != '' && nome != null){
      if(idade != 0 && idade != null){
          url = this.http.get<ContatosResponse>(environment.urlApi + `?nome=${nome}&idade=${idade}`)
    }else if(sexo != '' && sexo != null){
      url = this.http.get<ContatosResponse>(environment.urlApi + `?nome=${nome}&sexo=${sexo}`)
    }else{
      url = this.http.get<ContatosResponse>(environment.urlApi + `?nome=${nome}`)
    }
  }
    else if(idade != 0 && idade != null){
      sexo != '' && sexo != null?
        url = this.http.get<ContatosResponse>(environment.urlApi + `?idade=${idade}&sexo=${sexo}`):
        url = this.http.get<ContatosResponse>(environment.urlApi + `?idade=${idade}`)
      }
    else if(sexo != '' && sexo != null){
      url = this.http.get<ContatosResponse>(environment.urlApi + `?sexo=${sexo}`)
    }
    return url;
  }
}
