import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.scss'
})
export class PhotoCarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/man_making_birdcage.jpg',
    'assets/images/man_with_rattan.jpg',
    'assets/images/me_and_man_drinking_coconut.jpg',
    'assets/images/me_and_man_laughing.jpg',
    'assets/images/me_and_two_men.jpg',
    'assets/images/recording_in_hut.jpg',
    'assets/images/recording_on_grave.jpg',
    'assets/images/three_kids.jpg',
    'assets/images/three_women_carrying.jpg',
    'assets/images/three_women_smiling.jpg',
    'assets/images/traditional_hut_in_crater.jpg',
    'assets/images/woman_carrying_water.jpg',
    'assets/images/woman_with_basket.jpg',
  ];

  currentIndex: number = 0;
  carouselSubscription!: Subscription;
  rotationInterval: number = 5000;

  ngOnInit(): void {
    this.startAutoRotate();
    this.preloadImages();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  startAutoRotate(): void {
    this.carouselSubscription = interval(this.rotationInterval).subscribe(() => {
      this.nextImage();
    });
  }

  stopAutoRotate(): void {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
    }
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    this.resetAutoRotate();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.resetAutoRotate();
  }

  goToImage(index: number): void {
    this.currentIndex = index;
    this.resetAutoRotate();
  }

  resetAutoRotate(): void {
    this.stopAutoRotate();
    this.startAutoRotate();
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/fallback.jpg';
  }

  preloadImages(): void {
    this.images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }
}
