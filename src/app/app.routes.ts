import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';


export const routes: Routes = [
{path: '', component: LandingPageComponent},
{path: 'LandingPage', component: LandingPageComponent},
{path: 'Imprint', component: ImprintComponent}
];
