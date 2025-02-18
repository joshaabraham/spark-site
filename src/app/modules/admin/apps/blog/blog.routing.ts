import { Route } from '@angular/router';
import { ListBlogComponent } from './list/list.component';
import { DetailBlogComponent } from './detail/detail.component';


export const postsRoutes: Route[] = [
    {
        path     : '',
        component: ListBlogComponent,

        children : [
            {
                path     : '',
                component: ListBlogComponent,

                children : [
                    {
                        path         : ':id',
                        component    : DetailBlogComponent,
                    }
                ]
            }
        ]
    }
];

