import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RctService {
  apiUrl="https://localhost:44347/api/"
  constructor(private httpClient:HttpClient) { }

  getBalance(walletAdrress:string){
    return this.httpClient.post<String>(this.apiUrl+"rct/balance?balance="+walletAdrress,walletAdrress)
  }
}
