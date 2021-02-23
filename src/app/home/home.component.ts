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
  Contacts: any[] = [];

  constructor() { }

  ngOnInit(): void {
  //  this.Nom= "trdb";
  //  this.Prenom ="Akrem";
  //  this.Tel=274348225465;
    this.date=new Date();
  this.Contacts=[
    {nom:"hamdi",prenom:"ahmed",tel:"274348245522"},
    {nom:"ahmadi",prenom:"Ali",tel:"2756453012"},
    {nom:"ben ali",prenom:"Jasser",tel:"274320323"},
  ]
  }

}
