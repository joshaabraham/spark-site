import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserProfileService } from 'app/mock-api/apps/profileUser/api.service.ts';

@Component({
    selector       : 'detail',
    templateUrl    : './detail.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit
{

    /**
     * Constructor
     */
    constructor(private _profileService: UserProfileService)
    {
    }
    ngOnInit(): void {

      this._profileService.getUserProfiles().subscribe((users: any) => console.log(users));
    }
}
