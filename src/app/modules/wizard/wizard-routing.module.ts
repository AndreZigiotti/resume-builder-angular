import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { WizardComponent } from "./wizard.component";

const routes: Routes = [
  {
    path: '',
    component: WizardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
