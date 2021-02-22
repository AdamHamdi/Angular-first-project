import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Nom! : string;
  Prenom! :string;
  Tel! :number;
  date! : Date;

  constructor() { }

  ngOnInit(): void {
   this.Nom= "Hamdi";
   this.Prenom ="Adam";
   this.Tel=27434822;
   this.date=new Date();
  }

}
