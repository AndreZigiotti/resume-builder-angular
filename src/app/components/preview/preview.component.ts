import { Component, OnInit } from '@angular/core';
import { Bio } from 'src/app/shared/models/Bio.model';
import { BioService } from 'src/app/shared/services/bio.service';

@Component({
  selector: 'cv-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  bio: Bio = {}

  constructor(private bioService: BioService) {
    this.bioService.bio$.subscribe(bio => this.bio = bio)
  }

  ngOnInit(): void {
  }

}
