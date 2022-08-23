import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-maid',
  templateUrl: './list-maid.component.html',
  styleUrls: ['./list-maid.component.scss']
})
export class ListMaidComponent implements OnInit {

  flag:boolean = false;
  showDetials(){
    this.flag = !this.flag;
  }
  resultNumbwe:number=10
  constructor() { }

  ngOnInit(): void {
  }

}
