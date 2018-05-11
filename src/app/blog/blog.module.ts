import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { StoriesComponent } from './stories/stories.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent, StoriesComponent, FeatureComponent]
})
export class BlogModule { }
