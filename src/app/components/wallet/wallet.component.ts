import { RctService } from './../../services/rct.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  walletAdrress = new FormControl('');
  balance;
  constructor(private rctservice:RctService) { }

  ngOnInit(): void {
  }

  getBalance(){
    console.log(this.walletAdrress.value)
    this.rctservice.getBalance(this.walletAdrress.value.toString()).subscribe(response=>{
      this.balance=response;
    });
  }
}
