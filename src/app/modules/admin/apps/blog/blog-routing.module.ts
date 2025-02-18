import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListBlogComponent } from './list/list.component';
import { DetailBlogComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: BlogComponent,
    children: [
        { path: '', component: ListBlogComponent },
        { path: 'detail', component: DetailBlogComponent }

    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
