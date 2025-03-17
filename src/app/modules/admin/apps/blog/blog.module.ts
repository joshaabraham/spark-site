import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { ListBlogComponent } from './list/list.component';
import { DetailBlogComponent } from './detail/detail.component';
import { postsRoutes } from './blog.routing';

@NgModule({
  declarations: [
    BlogComponent,
    ListBlogComponent,
    DetailBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes)
  ]
})
export class BlogModule { }
