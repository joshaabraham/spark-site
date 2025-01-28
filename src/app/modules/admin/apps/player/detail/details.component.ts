import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserProfileService } from 'app/mock-api/apps/profileUser/api.service.ts';

@Component({
    selector       : 'details',
    templateUrl    : './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDetailsComponent implements OnInit
{


    private profile;
    /**
     * Constructor
     */
    constructor(private _profileService: UserProfileService)
    {
    }
    ngOnInit(): void {
      //this.profile = 
      this._profileService.getUserProfiles().subscribe((users: any) => console.log(users));
    }
}
