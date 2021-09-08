import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProdutosResponse } from '../models/produtos-response';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public atualizarGrid: BehaviorSubject<any> = new BehaviorSubject(false);

  public guardandoDadosFiltrados: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, ){}
  getProdutos(): Observable<ProdutosResponse> {
    return this.http.get<ProdutosResponse>(environment.urlApi);
  }

  postProdutos(body: Object): Observable<Object> {
    return this.http.post<any>(environment.urlApi, body);
  }

  deleteProdutos(id: number): Observable<Object> {
    return this.http.delete<Object>(environment.urlApi + '/' + id)
  }

  updateProdutos(id: number, body: Object): Observable<Object> {
    return this.http.put<Object>(environment.urlApi + '/' + id, body);
  }

  getProdutosFilter(nome: string, preco: number = 0, quantidade: number): Observable<ProdutosResponse> {
    let url = this.http.get<ProdutosResponse>(environment.urlApi);
    if (nome != '' && nome != null) {
      if (preco != 0 && preco != null) {
        url = this.http.get<ProdutosResponse>(environment.urlApi + `?nome=${nome}&preco=${preco}`)
      } else if (quantidade != 0 && quantidade != null) {
        url = this.http.get<ProdutosResponse>(environment.urlApi + `?nome=${nome}&quantidade=${quantidade}`)
      } else {
        url = this.http.get<ProdutosResponse>(environment.urlApi + `?nome=${nome}`)
      }
    }
    else if (preco != 0 && preco != null) {
      quantidade != 0 && quantidade != null ?
        url = this.http.get<ProdutosResponse>(environment.urlApi + `?preco=${preco}&quantidade=${quantidade}`) :
        url = this.http.get<ProdutosResponse>(environment.urlApi + `?preco=${preco}`)
    }
    else if (quantidade != 0 && quantidade != null) {
      url = this.http.get<ProdutosResponse>(environment.urlApi + `?quantidade=${quantidade}`)
    }
    return url;
  }
}