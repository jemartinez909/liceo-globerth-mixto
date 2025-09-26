import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.sass'
})
export class Main {

  audio = new Audio('assets/audio/Himno L.G..mp3'); // tu archivo de audio
  isPlaying = false;
  progress = 0;
  currentTime = '0:00';

  togglePlayPause() {
    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  constructor() {
    this.audio.addEventListener('timeupdate', () => {
      this.progress = (this.audio.currentTime / this.audio.duration) * 100;

      const minutes = Math.floor(this.audio.currentTime / 60);
      const seconds = Math.floor(this.audio.currentTime % 60)
        .toString()
        .padStart(2, '0');
      this.currentTime = `${minutes}:${seconds}`;
    });
  }

  seek(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    this.audio.currentTime = (value / 100) * this.audio.duration;
  }

}
