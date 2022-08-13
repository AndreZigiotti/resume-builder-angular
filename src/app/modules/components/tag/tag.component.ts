import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input()
  title?: string

  constructor() { }

  ngOnInit(): void {
  }

}