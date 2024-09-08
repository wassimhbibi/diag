import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-performance-energetique-dpe',
  templateUrl: './diagnostic-performance-energetique-dpe.component.html',
  styleUrls: ['./diagnostic-performance-energetique-dpe.component.scss']
})
export class DiagnosticperformanceenergetiquedpeComponent {
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
