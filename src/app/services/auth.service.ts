import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {User} from '../models/user';

import { Observable } from 'rxjs';
import { importExpr } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpc:HttpClient) { }

  login(user:User): Observable<any>
   {
  let url: string=`${this.BASE_URL}/userLogin`;
  console.log('inside authservice login method');
  return this.httpc.get('https://jsonplaceholder.typicode.com/todos/2');

   }

  test():string{
    return 'data returned from auth service class';
  }

private BASE_URL : string ='http://localhost:8080/auth';
private headers: Headers = new Headers({'content-Type':'application/json'})

}
