import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    TagComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TagComponent,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearence: 'fill', size: 'small' } }
  ],
})
export class ComponentsModule { }
