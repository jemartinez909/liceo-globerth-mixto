import { Component, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.sass',
  
})

export class Main  {

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  

}

