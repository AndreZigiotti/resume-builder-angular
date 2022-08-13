import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WizardComponent } from './wizard.component';
import { ComponentsModule } from "../components/components.module";


@NgModule({
  declarations: [
    WelcomeComponent,
    WizardComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    WizardRoutingModule
  ]
})
export class WizardModule { }
