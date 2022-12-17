import { UserTransferModel } from './../../models/userTransferModel';
import { ToastrService } from 'ngx-toastr';
import { RctService } from './../../services/rct.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  walletAdrress = new FormControl('');
  balance;
  transferForm:FormGroup;
  constructor(private rctService:RctService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createTransferForm();
  }
  
  createTransferForm(){
    this.transferForm = this.formBuilder.group({
      amount:["",Validators.required],
      receiverAddress:["",Validators.required],
      sender:["",Validators.required],
      privateKey:["",Validators.required]
    })
 }

 userTransfer(){
  if(this.transferForm.valid){
    this.rctService.peartoPearTransfer(JSON.stringify(this.transferForm.value)).subscribe()
    this.toastrService.success("Başarılı");
  }
  
}

  getBalance(){
    console.log(this.walletAdrress.value)
    this.rctService.getBalance(this.walletAdrress.value.toString()).subscribe(response=>{
      this.balance=response;
    });
  }
}

