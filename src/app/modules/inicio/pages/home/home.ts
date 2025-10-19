import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.sass']
})
export class Home implements OnInit, OnDestroy, AfterViewInit {
  slides = [
    { src: 'assets/img/CARTEL-BIENVENIDA.png', alt: 'Evento 1' },
    { src: 'assets/img/admisiones.jpg', alt: 'Evento 3' },
    { src: 'assets/img/cartel-octubre.png', alt: 'Evento 4' }
  ];

  currentIndex = 0;
  private intervalId?: number;
  autoplayDelay = 5000;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // -------------------------
  // SLIDER
  // -------------------------
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
    this.intervalId = window.setInterval(() => {
    this.nextSlide();
    console.log('Slide actual:', this.currentIndex);
    }, this.autoplayDelay);
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

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  // -------------------------
  // SCROLL ANIMATIONS
  // -------------------------
  ngAfterViewInit(): void {
  if (!this.isBrowser) return;

  const elements = document.querySelectorAll('.scroll-hidden');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          // Elimina cualquier animación previa
          el.style.animation = '';

          // Asigna animación según clase
          if (el.classList.contains('title-section')) {
            el.style.animation = 'fade-up 1s ease-out forwards';
          } else if (el.classList.contains('text-section-1')) {
            el.style.animation = 'fade-left 1s ease-out forwards';
          } else if (el.classList.contains('image-content')) {
            el.style.animation = 'fade-right 1s ease-out forwards';
          }

          el.classList.add('scroll-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
}

}
