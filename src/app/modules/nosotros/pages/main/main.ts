import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrls: ['./main.sass']
})
export class Main implements OnInit, OnDestroy {

  audio = new Audio('assets/audio/himno-lg.mp3');
  isPlaying = false;
  progress = 0;
  currentTime = '0:00';
  duration = 0;

  isModalOpen = false;
  modalImgSrc = '';

  constructor() {

    // Se dispara cuando el audio ya conoce su duración
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });

    // Se actualiza progreso y tiempo actual
    this.audio.addEventListener('timeupdate', () => {
      if (this.duration > 0) {
        this.progress = (this.audio.currentTime / this.duration) * 100;
      }

      const minutes = Math.floor(this.audio.currentTime / 60);
      const seconds = Math.floor(this.audio.currentTime % 60)
        .toString()
        .padStart(2, '0');

      this.currentTime = `${minutes}:${seconds}`;
    });

    // Restablecer cuando termina
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.progress = 0;
      this.audio.currentTime = 0;
    });
  }

  togglePlayPause() {
    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  seek(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (this.duration > 0) {
      this.audio.currentTime = (value / 100) * this.duration;
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.src = '';
  }

  openModal(imgSrc: string) {
    this.modalImgSrc = imgSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalImgSrc = '';
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
