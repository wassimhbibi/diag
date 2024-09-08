import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginStyle1Component } from './login-style1/login-style1.component';
import { RegistrationStyle1Component } from './registration-style1/registration-style1.component';
import { AssainissementComponent } from './assainissement/assainissement.component';
import { DiagnosticamianteComponent } from './blog-details/diagnostic-amiante.component';
import { DiagnosticperformanceenergetiquedpeComponent } from './diagnostic-performance-energetique-dpe/diagnostic-performance-energetique-dpe.component';
import { DiagnosticetatrisquespollutionserpComponent } from './diagnostic-etat-risques-pollutions-erp/diagnostic-etat-risques-pollutions-erp.component';
import { DiagnosticgazComponent } from './diagnostic-gaz/diagnostic-gaz.component';
import { DiagnosticplombComponent } from './diagnostic-plomb/diagnostic-plomb.component';
import { DiagnostictermitesComponent } from './diagnostic-termites/diagnostic-termites.component';
import { DiagnosticelectriciteComponent } from './diagnostic-electricite/diagnostic-electricite.component';
import { DiagnosticenergetiqueComponent } from './diagnostic-energetique/diagnostic-energetique.component';
import { DAAPTComponent } from './daapt/daapt.component';
import { DAATComponent } from './daat/daat.component';
import { DPSComponent } from './dps/dps.component';
import { DSBComponent } from './dsb/dsb.component';
import { DPAPTComponent } from './dpapt/dpapt.component';
import { DPATComponent } from './dpat/dpat.component';
import { DTAComponent } from './dta/dta.component';
import { DTGComponent } from './dtg/dtg.component';
import { DTATComponent } from './dtat/dtat.component';
import { EngagementComponent } from './engagement/engagement.component';

const routes: Routes = [
  {path:"pages/aboutus",component:AboutusComponent},
  {path:"pages/assainissement",component:AssainissementComponent},
  {path:"pages/blog",component:BlogComponent},
  {path:"pages/diagnostic-amiante",component:DiagnosticamianteComponent},
  {path:"pages/diagnostic-performance-energetique-dpe",component:DiagnosticperformanceenergetiquedpeComponent},
  {path:"pages/diagnostic-etat-risques-pollutions-erp",component:DiagnosticetatrisquespollutionserpComponent},
  {path:"pages/diagnostic-gaz",component:DiagnosticgazComponent},
  {path:"pages/diagnostic-plomb",component:DiagnosticplombComponent},
  {path:"pages/diagnostic-termites",component:DiagnostictermitesComponent},
  {path:"pages/diagnostic-electricite",component:DiagnosticelectriciteComponent},
  {path:"pages/diagnostic-energetique",component:DiagnosticenergetiqueComponent},
  {path:"pages/contact-us",component:ContactusComponent},
  {path:"pages/faqs",component:FaqsComponent},
  {path:"pages/forgot-password",component:ForgotPasswordComponent},
  {path:"pages/login-style1",component:LoginStyle1Component},
  {path:"pages/registration-style1",component:RegistrationStyle1Component},
  {path:"pages/daapt" , component:DAAPTComponent},
  {path:"pages/daat", component:DAATComponent},
  {path:"pages/dps", component:DPSComponent},
  {path:"pages/dsb" , component:DSBComponent},
  {path:"pages/dpapt", component:DPAPTComponent},
  {path:"pages/dpat" , component:DPATComponent},
  {path:"pages/dta" , component:DTAComponent},
  {path:"pages/dtg",component:DTGComponent},
  {path:"pages/dtat",component:DTATComponent},
  {path:"pages/engagement",component:EngagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
