import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
public one = 1;
public two = 2;
public three =3;
public four =4;
public five = 5;
public six=6;
public temp;
public sub = false;
public rand;
public score = 0;
  constructor() { }

  sum(val){
  //var x = document.getElementById("one").nodeValue;
 // console.log("hello")
  console.log(val);
  //alert("hello" +val);
  this.rand = Math.floor((Math.random() * 6) + 1);
  this.temp=val;
  this.sub= true;
  if(this.temp != this.rand)
  {
    this.score = this.score + this.temp; 
  }
  else
  {
    
    alert("Sorry you are out...Your score :"+this.score);
    this.score= 0;
  }

  }

  ngOnInit(): void {
  }

}
