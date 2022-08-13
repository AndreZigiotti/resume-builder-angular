import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input()
  size?: 'small' | 'medium' | 'large' = 'medium'

  @Input()
  imageSrc?: string

  @Input()
  name: string = ''

  imageLoadingError = false

  constructor() { }

  ngOnInit(): void {
  }

  get initials() {
    const firstLetter = this.name?.[0]
    const secondLetter = this.name?.[1]

    return `${firstLetter}${secondLetter}`
  }

}
