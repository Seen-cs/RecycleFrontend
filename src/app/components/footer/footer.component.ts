import { GrpcService } from './../../services/grpc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
