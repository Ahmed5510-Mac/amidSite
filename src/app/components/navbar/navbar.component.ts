import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show:boolean=false
  toggle()
  {
    this.show = !this.show;
    // document.querySelector<HTMLElement>(".wrapper-nave ul")?.classList.toggle("active")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
