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
            phoneNumber  : ['', Validators.pattern('^\\+?[1-9]\\d{1,14}$')],
            dateOfBirth : ['', Validators.required],
            gender        : ['', Validators.required],
            height        : ['', Validators.pattern('^\\d+(\\.\\d+)?$')],
            weight        : ['', Validators.pattern('^\\d+(\\.\\d+)?$')],
            bio           : [''],
            profilePicture: [''],
            sports        : ['', Validators.required],
            team          : [''],
            position      : [''],
            achievements  : [''],
            isActive     : [true, Validators.required]
        });
    }

    resetForm(form: UntypedFormGroup): void {
        form.reset({
            user          : '',
            phoneNumber  : '',
            dateOfBirth : '',
            gender        : '',
            height        : '',
            weight        : '',
            bio           : '',
            profilePicture: '',
            sports        : '',
            team          : '',
            position      : '',
            achievements  : '',
            isActive     : true
        });
    }
}