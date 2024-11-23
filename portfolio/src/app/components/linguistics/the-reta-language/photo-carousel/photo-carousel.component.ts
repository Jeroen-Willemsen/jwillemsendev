import {CaptionedImage} from '../../../../models/captioned-image.model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {interval, Subscription} from 'rxjs';
import {CaptionedImageService} from '../../../../services/captioned-image.service';

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
  public currentIndex: number = 0;
  private carouselSubscription: Subscription;
  private rotationInterval: number = 5000;
  protected captionedImages: CaptionedImage[] = [];

  constructor(private captionedImageService: CaptionedImageService) {}

  ngOnInit(): void {
    this.captionedImageService.getCaptionedImages()
      .subscribe((images) => {
        this.captionedImages = images;
      });
    this.startAutoRotate();
    this.preloadImages();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  private startAutoRotate = (): void => {
    this.carouselSubscription = interval(this.rotationInterval)
      .subscribe(() => {
        this.nextImage();
    });
  };

  private stopAutoRotate = (): void => {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
    }
  };

  public previousImage = (): void => {
    this.currentIndex = (this.currentIndex === 0)
      ? this.captionedImages.length - 1
      : this.currentIndex - 1;
    this.resetAutoRotate();
  };

  public nextImage = (): void => {
    this.currentIndex = (this.currentIndex + 1) % this.captionedImages.length;
    this.resetAutoRotate();
  };

  public goToImage = (index: number): void => {
    this.currentIndex = index;
    this.resetAutoRotate();
  };

  private resetAutoRotate = (): void => {
    this.stopAutoRotate();
    this.startAutoRotate();
  };

  public onImageError = (event: Event): void => {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/fallback.jpg';
  };

  private preloadImages = (): void => {
    this.captionedImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  };
}
