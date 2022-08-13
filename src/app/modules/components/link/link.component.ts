import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: '[cv-link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @HostBinding('class.cv-link')
  cvLink = true

  constructor() { }

  ngOnInit(): void {
  }

}
