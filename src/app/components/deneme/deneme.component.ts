import { NodeService } from 'src/app/services/node.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {
  nuros;
  constructor(private nodeService:NodeService) { }

  ngOnInit(): void {
    this.nuros=this.nodeService.getCities();
  }

}
