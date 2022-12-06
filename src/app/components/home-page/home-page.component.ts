import { NodeService } from 'src/app/services/node.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products;
  cities;
  constructor(private nodeService:NodeService) { }

  ngOnInit(): void {
    this.cities=this.nodeService.getCities();
    this.products=this.nodeService.getProducts();
  }



  
}
