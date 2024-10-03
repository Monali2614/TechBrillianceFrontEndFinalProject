import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent  {

  // Image data with categories
  images: { src: string, category: string }[] = [
    { src: 'assets/img/Awards distribution/IMG_5018.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0263.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0265.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0267.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0271.JPG', category: 'Awards distribution' },
   
    { src: 'assets/img/Awards distribution/3V1A0281.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0285.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0288.JPG', category: 'Awards distribution' },
    { src: 'assets/img/Awards distribution/3V1A0292.JPG', category: 'Awards distribution' },
 
    { src: 'assets/img/Certificates distribution/3V1A0682.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0683.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0685.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0694.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0696.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0699.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0700.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0701.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0703.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0705.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0708.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0711.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0712.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0715.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0716.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0718.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0719.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0721.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0724.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0726.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0727.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0728.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/3V1A0732.JPG', category: 'Certificates distribution' },
    { src: 'assets/img/Certificates distribution/NAR_6772.JPG', category: 'Certificates distribution' },
 
   
    { src: 'assets/img/Event Program/3V1A0480.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0484.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0490.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0495.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0496.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0500.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0502.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0579.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0612.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0645.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0646.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0674.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0738.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0739.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/3V1A0742.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/NAR_6419.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/NAR_6514.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/NAR_6526.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/NAR_6626.JPG', category: 'Event Program' },
    { src: 'assets/img/Event Program/NAR_6771.JPG', category: 'Event Program' },
 
    { src: 'assets/img/Inauguration Program/3V1A0009.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/3V1A0011.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/3V1A0201.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/3V1A0331.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/3V1A0336.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/3V1A0384.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/3V1A0394.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6060.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6166.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6183.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6185.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6227.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6261.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6366.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6368.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6373.JPG', category: 'Inauguration Program' },
    { src: 'assets/img/Inauguration Program/NAR_6374.JPG', category: 'Inauguration Program' },
 
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0252.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0258.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0265.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0268.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0274.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0275.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0278.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0279.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0280.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0282.jpg', category: 'Tree Plantation' },
    { src: 'assets/img/Tree Plantation/IMG-20240828-WA0286.jpg', category: 'Tree Plantation' },
 
 
 
 
  ];
 
  filteredImages: { src: string, category: string }[] = this.images;
 
  // Main image preview
  mainImage: string = this.filteredImages[0]?.src || '';
 
  // Current index of the main image
  currentIndex: number = 0;
 
  // ViewChild to reference the slider
  @ViewChild('sliderContainer', { static: true }) sliderContainer!: ElementRef;
 
  // Change the main image when a thumbnail is clicked
  changeImage(imageSrc: string, index: number) {
    this.mainImage = imageSrc;
    this.currentIndex = index;
  }
 
  // Navigate to the next slide by scrolling the slider and update the main image
  nextSlide() {
    if (this.currentIndex < this.filteredImages.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first image
    }
 
    const slider = this.sliderContainer.nativeElement;
    const slideWidth = slider.querySelector('img').offsetWidth + 10; // Image width + margin
    slider.scrollLeft += slideWidth;
 
    // Update the main image to the next image
    this.mainImage = this.filteredImages[this.currentIndex]?.src || '';
  }
 
  // Navigate to the previous slide by scrolling the slider and update the main image
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.filteredImages.length - 1; // Loop back to the last image
    }
 
    const slider = this.sliderContainer.nativeElement;
    const slideWidth = slider.querySelector('img').offsetWidth + 10; // Image width + margin
    slider.scrollLeft -= slideWidth;
 
    // Update the main image to the previous image
    this.mainImage = this.filteredImages[this.currentIndex]?.src || '';
  }
 
  // Filter images based on the selected category
  filterImages(event: MouseEvent, category: string) {
    event.preventDefault(); // Prevent default anchor tag behavior
    // Set filtered images based on selected category
    this.filteredImages = this.images.filter(image => image.category === category);
    // Reset to the first image of the filtered list if available
    this.currentIndex = this.filteredImages.length > 0 ? 0 : -1;
    this.mainImage = this.filteredImages.length > 0 ? this.filteredImages[this.currentIndex]?.src : '';
  }
}