import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/tema/todos', this.token)
  }

  getByIdTema(idTema: number):Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/tema/id/${idTema}`, this.token)
  } 

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/tema/novotema', tema ,this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/tema/atualizatema', tema, this.token)
  }

  deleteTema(id_tema: number){
    return this.http.delete(`http://localhost:8080/tema/deletar/${id_tema}`,this.token)
  }
}
