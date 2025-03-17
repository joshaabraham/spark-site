import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EmploymentComponent } from './employment.component';
import { RouterModule } from '@angular/router';
import { employmentRoutes } from './employment.routing';


@NgModule({
    declarations: [
        EmploymentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(employmentRoutes),
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule
    ],
    exports: [
        EmploymentComponent
    ]
})
export class EmploymentModule { }
