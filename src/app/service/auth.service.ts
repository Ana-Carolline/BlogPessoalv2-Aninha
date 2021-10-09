import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
  private router: Router ){ }

  entrar(UsuarioLogin: UsuarioLogin) : Observable<UsuarioLogin>{
    return this.http.put<UsuarioLogin>('http://localhost:8080/todos/credenciais', UsuarioLogin)
  }
  cadastrar(usuario : Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/todos/salvar', usuario)
  }

  getByIdUsuario(id_usuario: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/todos/${id_usuario}`)
  }

  logado(){
    let ok: boolean = false
    if (environment.token != ''){
      ok = true
    }
    return ok
  }
}
