import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { LoginStyle1Component } from './login-style1/login-style1.component';
import { RegistrationStyle1Component } from './registration-style1/registration-style1.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';

import { SwiperModule } from 'swiper/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DiagnosticamianteComponent } from './blog-details/diagnostic-amiante.component';
import { DiagnosticperformanceenergetiquedpeComponent } from './diagnostic-performance-energetique-dpe/diagnostic-performance-energetique-dpe.component';
import { DiagnosticetatrisquespollutionserpComponent } from './diagnostic-etat-risques-pollutions-erp/diagnostic-etat-risques-pollutions-erp.component';
import { DiagnosticgazComponent } from './diagnostic-gaz/diagnostic-gaz.component';
import { DiagnosticplombComponent } from './diagnostic-plomb/diagnostic-plomb.component';
import { DiagnostictermitesComponent } from './diagnostic-termites/diagnostic-termites.component';
import { DiagnosticelectriciteComponent } from './diagnostic-electricite/diagnostic-electricite.component';
import { DiagnosticenergetiqueComponent } from './diagnostic-energetique/diagnostic-energetique.component';
import { DPAPTComponent } from './dpapt/dpapt.component';
import { DPATComponent } from './dpat/dpat.component';
import { DPSComponent } from './dps/dps.component';
import { DSBComponent } from './dsb/dsb.component';
import { DTAComponent } from './dta/dta.component';
import { DTATComponent } from './dtat/dtat.component';
import { DTGComponent } from './dtg/dtg.component';
import { DAAPTComponent } from './daapt/daapt.component';
import { DAATComponent } from './daat/daat.component';
import { EngagementComponent } from './engagement/engagement.component';
@NgModule({
  declarations: [
    AboutusComponent,
    BlogComponent,
    DiagnosticamianteComponent,
    DiagnosticperformanceenergetiquedpeComponent,
    DiagnosticetatrisquespollutionserpComponent,
    DiagnosticgazComponent,
    DiagnosticplombComponent,
    DiagnostictermitesComponent,
    DiagnosticelectriciteComponent,
    DiagnosticenergetiqueComponent,
    ContactusComponent,
    FaqsComponent,
    SwitcherComponent,
    LoginStyle1Component,
    RegistrationStyle1Component,
    ForgotPasswordComponent,
    DPAPTComponent,
    DPATComponent,
    DPSComponent,
    DSBComponent,
    DTAComponent,
    DTATComponent,
    DTGComponent,
    DAAPTComponent,
    DAATComponent,
    EngagementComponent


],
  imports: [

  CommonModule,
    PagesRoutingModule,
    NgbModule,
    ColorPickerModule,
    SwiperModule,
    NgSelectModule,
    FormsModule
    
  ]
})
export class PagesModule { }
