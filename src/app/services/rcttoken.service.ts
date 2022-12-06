import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RcttokenService {
  apiUrl="https://localhost:44347/api/"
  constructor(private httpClient:HttpClient) { }


  getBalance(walletAdrress:String):Observable<String>{
    return this.httpClient.post<String>(this.apiUrl+"products/add",walletAdrress)
  }
}
