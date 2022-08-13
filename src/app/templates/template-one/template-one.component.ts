import { Component, Input, OnInit } from '@angular/core';
import { Bio } from 'src/app/shared/models/Bio.model';

@Component({
  selector: 'cv-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.scss']
})
export class TemplateOneComponent implements OnInit {

  @Input()
  bio?: Bio

  constructor() { }

  ngOnInit(): void {
  }

}
