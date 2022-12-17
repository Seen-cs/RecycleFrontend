import { TransferModel } from './../models/tranferModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VariableBinding } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class RctService {
  apiUrl="https://localhost:44347/api/"
  apiUrlNode="http://localhost:8080/"
  constructor(private httpClient:HttpClient) { }

  transfer(){
    return this.httpClient
      .get<TransferModel>(this.apiUrl);
  }
  adminTransfer(transferModel){
    return this.httpClient.post<TransferModel>(this.apiUrlNode+"admintransfer",JSON.parse(transferModel) )
  }
  peartoPearTransfer(transferModel){
    return this.httpClient.post<TransferModel>(this.apiUrlNode+"peartopeartransfer",JSON.parse(transferModel) )
  }
  getBalance(walletAdrress:string){
    return this.httpClient.post<String>(this.apiUrl+"rct/balance?balance="+walletAdrress,walletAdrress)
  }
}
