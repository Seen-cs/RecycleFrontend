import { NodeService } from 'src/app/services/node.service';
import { GrpcService } from './../../services/grpc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {
  messages: string[] = [];

  constructor(private GrpcService:GrpcService) { }

  ngOnInit(): void {
    this.messages=this.GrpcService.messages;
  }
  startStream(){
    this.GrpcService.startStream();
  }
  stopStream(){
    this.GrpcService.stopStream();
  }

}
