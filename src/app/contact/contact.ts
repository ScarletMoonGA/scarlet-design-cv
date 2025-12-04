import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  formData = { name: '', email: '', message: '' };
  loading = false;
  toast: { type: 'success' | 'error'; message: string } | null = null;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    AOS.init({ duration: 900, once: true });
  }

  onSubmit(event: Event) {
    if(this.formData.name != '' && this.formData.email != '' && this.formData.message != ''){
      event.preventDefault();
      this.loading = true;

      emailjs.send(
        'service_luihdhl',
        'template_2jq5a4x',
        this.formData,
        'HLZDEj-IxuWr_QRh6'
      ).then(
        (result: EmailJSResponseStatus) => {
          this.ngZone.run(() => {
            this.showToast('success', '✅ Tu mensaje ha sido enviado correctamente');
            this.loading = false;
            this.formData = { name: '', email: '', message: '' };
            this.cdr.markForCheck();
          });
        },
        (error) => {
          this.ngZone.run(() => {
            this.showToast('error', '❌ Ocurrió un error al enviar tu mensaje');
            this.loading = false;
            this.cdr.markForCheck();
          });
        }
      );
    }else{
      this.ngZone.run(() => {
        this.showToast('error', '❌ Faltan campos por rellenar');
        this.loading = false;
        this.cdr.markForCheck();
      });
    }
  }

  showToast(type: 'success' | 'error', message: string) {
    this.toast = { type, message };
    this.cdr.detectChanges();

    setTimeout(() => {
      this.ngZone.run(() => {
        this.toast = null;
        this.cdr.detectChanges();
      });
    }, 4000);
  }
}
