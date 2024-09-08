import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-etat-risques-pollutions-erp',
  templateUrl: './diagnostic-etat-risques-pollutions-erp.component.html',
  styleUrls: ['./diagnostic-etat-risques-pollutions-erp.component.scss']
})
export class DiagnosticetatrisquespollutionserpComponent {
  toggleReply(){
    document.querySelector('.reply-form')?.classList.toggle('d-none');
  }
  toggleReply1(){
    document.querySelector('.reply-forms')?.classList.toggle('d-none');
  }
  toggleReply2(){
    document.querySelector('.reply-formss')?.classList.toggle('d-none');
  }
}
