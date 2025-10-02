import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.sass']
})
export class Home implements OnInit, OnDestroy {
  slides = [
    { src: 'https://liceogloberth.edu.co/images/galeria2/1.english%20club.jpg', alt: 'Evento 1' },
    { src: 'https://liceogloberth.edu.co/images/galeria2/2.%20entreba%20boletines.jpg', alt: 'Evento 2' },
    { src: 'assets/img/admisiones.jpg', alt: 'Evento 3' },
    { src: 'https://img.freepik.com/psd-gratis/fondo-celebracion-dia-san-valentin-3d_23-2150100004.jpg?semt=ais_hybrid&w=740&q=80', alt: 'Evento 4' }
  ];

  currentIndex = 0;
  private intervalId?: number;
  autoplayDelay = 5000;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.play();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.pause();
    }
  }

  play(): void {
    if (!this.isBrowser || this.intervalId) return;
    this.intervalId = window.setInterval(() => this.nextSlide(), this.autoplayDelay);
  }

  pause(): void {
    if (!this.isBrowser) return;
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(i: number): void {
    this.currentIndex = i;
  }
}
