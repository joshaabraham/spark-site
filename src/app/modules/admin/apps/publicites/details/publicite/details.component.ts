import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PubliciteService } from '../../publicites.service';
import { Publicite } from '../../publicites.types';

@Component({
    selector: 'app-publicite-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubliciteDetailsComponent implements OnInit {
    publicite: Publicite;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _publiciteService: PubliciteService
    ) {}

    ngOnInit(): void {
        // Get the publicite ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the publicite details
        this._publiciteService.getPublicite(Number(id)).subscribe((publicite: Publicite) => {
            this.publicite = publicite;
        });
    }
}
