import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class PlayerFormService {

    constructor(private _formBuilder: UntypedFormBuilder) { }

    createPlayerForm(): UntypedFormGroup {
        return this._formBuilder.group({
            user          : ['', Validators.required],
            phone_number  : ['', Validators.pattern('^\\+?[1-9]\\d{1,14}$')],
            date_of_birth : ['', Validators.required],
            gender        : ['', Validators.required],
            height        : ['', Validators.pattern('^\\d+(\\.\\d+)?$')],
            weight        : ['', Validators.pattern('^\\d+(\\.\\d+)?$')],
            bio           : [''],
            profile_picture: [''],
            sports        : ['', Validators.required],
            team          : [''],
            position      : [''],
            achievements  : [''],
            is_active     : [true, Validators.required]
        });
    }

    resetForm(form: UntypedFormGroup): void {
        form.reset({
            user          : '',
            phone_number  : '',
            date_of_birth : '',
            gender        : '',
            height        : '',
            weight        : '',
            bio           : '',
            profile_picture: '',
            sports        : '',
            team          : '',
            position      : '',
            achievements  : '',
            is_active     : true
        });
    }
}