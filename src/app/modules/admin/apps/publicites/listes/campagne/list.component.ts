import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PubliciteService } from '../../publicites.service';
import { CampagnePublicitaire } from '../../publicites.types';

@Component({
    selector: 'app-campagne-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampagneListComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    displayedColumns: string[] = ['nomCampagne', 'viewPublicites', 'typeAchat', 'objectif', 'budget', 'dateDebut', 'dateFin', 'actions'];
    dataSource: MatTableDataSource<CampagnePublicitaire>;


    constructor(private publiciteService: PubliciteService, private router: Router) {}

    ngOnInit(): void {
        this.publiciteService.getCampagnes().subscribe((campagnes: CampagnePublicitaire[]) => {
            this.dataSource = new MatTableDataSource(campagnes);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    createCampagne(): void {
        this.router.navigate(['/campagne/create']);
    }

    editCampagne(campagne: CampagnePublicitaire): void {
        this.router.navigate(['/campagne', campagne.id]);
    }

    deleteCampagne(campagne: CampagnePublicitaire): void {
        // Implémentez la logique de suppression ici
    }

    viewPublicites(campagne: CampagnePublicitaire): void {
        this.router.navigate(['/publicites', { campagneId: campagne.id }]);
    }
}
