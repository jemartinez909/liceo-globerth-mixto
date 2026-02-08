import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrls: ['./main.sass']
})
export class Main implements OnInit, OnDestroy {

  // ==========================
  // AUDIO PLAYER
  // ==========================

  audio!: HTMLAudioElement;

  isPlaying = false;
  progress = 0;

  currentTime = '0:00';
  durationFormatted = '0:00';

  private duration = 0;

  // referencias de listeners (MUY pro → permite limpiar correctamente)
  private metadataListener!: () => void;
  private timeUpdateListener!: () => void;
  private endedListener!: () => void;



  // ==========================
  // MODAL (sin tocar)
  // ==========================
  isModalOpen = false;
  modalImgSrc = '';



  // ==========================
  // INIT
  // ==========================
  ngOnInit(): void {

    this.audio = new Audio('assets/audio/himno-lg.mp3');

    // metadata → duración
    this.metadataListener = () => {
      this.duration = this.audio.duration;
      this.durationFormatted = this.formatTime(this.duration);
    };

    // progreso
    this.timeUpdateListener = () => {

      if (!this.duration) return;

      this.progress =
        (this.audio.currentTime / this.duration) * 100;

      this.currentTime =
        this.formatTime(this.audio.currentTime);
    };

    // terminó
    this.endedListener = () => {
      this.resetPlayer();
    };


    this.audio.addEventListener('loadedmetadata', this.metadataListener);
    this.audio.addEventListener('timeupdate', this.timeUpdateListener);
    this.audio.addEventListener('ended', this.endedListener);

  }



  // ==========================
  // PLAY / PAUSE
  // ==========================
  async togglePlayPause() {

    try {

      if (this.audio.paused) {

        await this.audio.play();
        this.isPlaying = true;

      } else {

        this.audio.pause();
        this.isPlaying = false;

      }

    } catch {
      console.warn('El navegador bloqueó la reproducción automática.');
    }

  }



  // ==========================
  // SEEK
  // ==========================
  seek(event: Event) {

    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (!this.duration) return;

    this.audio.currentTime =
      (value / 100) * this.duration;

  }



  // ==========================
  // HELPERS
  // ==========================
  private formatTime(seconds: number): string {

    if (!seconds || !isFinite(seconds)) return '0:00';

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${secs}`;
  }



  private resetPlayer() {

    this.isPlaying = false;
    this.progress = 0;
    this.audio.currentTime = 0;
    this.currentTime = '0:00';

  }



  // ==========================
  // DESTROY (MUY IMPORTANTE)
  // ==========================
  ngOnDestroy(): void {

    if (!this.audio) return;

    this.audio.pause();

    // limpieza REAL de listeners
    this.audio.removeEventListener('loadedmetadata', this.metadataListener);
    this.audio.removeEventListener('timeupdate', this.timeUpdateListener);
    this.audio.removeEventListener('ended', this.endedListener);

    this.audio.src = '';
    this.audio.load();

  }



  // ==========================
  // MODAL (sin tocar)
  // ==========================
  openModal(imgSrc: string) {
    this.modalImgSrc = imgSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalImgSrc = '';
  }



  // ==========================
  // SCROLL (sin tocar)
  // ==========================
  scrollTo(sectionId: string) {

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  }

}
