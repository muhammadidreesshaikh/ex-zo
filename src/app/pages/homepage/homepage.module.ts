import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CategoryCardComponent } from 'src/app/components/category-card/category-card.component';
import { InfoCardComponent } from 'src/app/components/info-card/info-card.component';
import { VerticalCardComponent } from 'src/app/components/vertical-card/vertical-card.component';
import { BlogCardComponent } from 'src/app/components/blog-card/blog-card.component';
import { DiscountCardComponent } from 'src/app/components/discount-card/discount-card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    ProductCardComponent,
    CategoryCardComponent,
    InfoCardComponent,
    VerticalCardComponent,
    BlogCardComponent,
    DiscountCardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SlickCarouselModule
  ]
})
export class HomepageModule { }
