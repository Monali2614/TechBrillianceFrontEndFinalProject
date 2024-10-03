import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-frequently',
  templateUrl: './frequently.component.html',
  styleUrls: ['./frequently.component.css']
})
export class FrequentlyComponent  {
  fallbackImage = 'assets/default-placeholder-image.png'; // Define a fallback image
 
  images = [
    { url: 'assets/Images with Category/Front page 12 images/fs1.JPG', caption: 'Caption 1' },
    { url: 'assets/Images with Category/Front page 12 images/fs2.JPG', caption: 'Caption 2' },
    { url: 'assets/Images with Category/Front page 12 images/fs3.JPG', caption: 'Caption 3' },
    { url: 'assets/Images with Category/Front page 12 images/fs4.JPG', caption: 'Caption 4' },
    { url: 'assets/Images with Category/Front page 12 images/fs5.JPG', caption: 'Caption 5' },
    { url: 'assets/Images with Category/Front page 12 images/fs6.JPG', caption: 'Caption 6' },
    { url: 'assets/Images with Category/Front page 12 images/fs7.JPG', caption: 'Caption 7' },
    { url: 'assets/Images with Category/Front page 12 images/fs8.JPG', caption: 'Caption 8' },
    { url: 'assets/Images with Category/Front page 12 images/fs9.JPG', caption: 'Caption 9' },
    { url: 'assets/Images with Category/Front page 12 images/fs10.JPG', caption: 'Caption 10' },
    { url: 'assets/Images with Category/Front page 12 images/fs11.JPG', caption: 'Caption 11' },
    { url: 'assets/Images with Category/Front page 12 images/fs12.JPG', caption: 'Caption 12' }
  ];
 
  currentIndex = 0;
 
  @ViewChild('carouselInner') carouselInner!: ElementRef;
 
  ngAfterViewInit() {
    this.updateCarouselPosition();
  }
 
  moveSlide(step: number) {
    const totalSlides = this.images.length; // Define totalSlides here
    this.currentIndex = (this.currentIndex + step + totalSlides) % totalSlides;
    this.updateCarouselPosition();
  }
 
  updateCarouselPosition() {
    const carouselItems = this.carouselInner.nativeElement.querySelectorAll('.carousel-item');
    carouselItems.forEach((item: HTMLElement) => {
      item.classList.remove('active', 'left', 'right');
    });
 
    carouselItems[this.currentIndex].classList.add('active');
 
    // Add left and right classes for previous and next images
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    const nextIndex = (this.currentIndex + 1) % this.images.length;
 
    carouselItems[prevIndex].classList.add('left');
    carouselItems[nextIndex].classList.add('right');
  }
 
  getVisibleImages() {
    const totalSlides = this.images.length;
    const visibleImages = [];
   
    for (let i = 0; i < 3; i++) {
      const index = (this.currentIndex + i) % totalSlides; // Wrap around using modulo
      visibleImages.push(this.images[index]);
    }
   
    return visibleImages;
  }
}