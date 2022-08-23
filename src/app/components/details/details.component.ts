import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  flag:boolean = true;
  toggle(){
    console.log("ahmed");

    this.flag = !this.flag;
  }
  constructor( ) { }

  ngOnInit(): void {
  }

}
