import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';
import { Post5Component } from './post5/post5.component';
import { Post6Component } from './post6/post6.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card/card.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        Post1Component,
        Post2Component,
        Post3Component,
        Post4Component,
        Post5Component,
        Post6Component,
        CreatePostComponent
    ],
    imports: [
        CommonModule,
        //   RouterModule
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatMenuModule,
        FuseCardModule,
        MatDividerModule,
        MatTooltipModule,
    ],
    exports: [
        Post1Component,
        Post2Component,
        Post3Component,
        Post4Component,
        Post5Component,
        Post6Component,
        CreatePostComponent
    ]
})
export class PostModule { }
