import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PubliciteService } from '../../publicite.service';
import { CampagnePublicitaire } from '../../publicite.types';

@Component({
    selector: 'app-campagne-details',
    templateUrl: './details.component.html',
        encapsulation  : ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampagneDetailsComponent implements OnInit {
    campagne: CampagnePublicitaire;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _publiciteService: PubliciteService
    ) {}

    ngOnInit(): void {
        // Get the campagne ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the campagne details
        this._publiciteService.getCampagne(Number(id)).subscribe((campagne: CampagnePublicitaire) => {
            this.campagne = campagne;
        });
    }
}
