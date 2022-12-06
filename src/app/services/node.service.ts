import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  apiUrl="http://localhost:8080/"

  constructor(private httpClient:HttpClient) { }
  
  getProducts(){
     return this.httpClient.get(this.apiUrl+'urunler')
    
  }
  getCities(){
    return this.httpClient.get(this.apiUrl+'sehirler')
   
 }
}
