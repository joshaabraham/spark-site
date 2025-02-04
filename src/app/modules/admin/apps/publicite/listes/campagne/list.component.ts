import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PubliciteService } from '../../publicite.service';
import { CampagnePublicitaire } from '../../publicite.types';

@Component({
    selector: 'app-campagne-list',
    templateUrl: './list.component.html',
        encapsulation  : ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampagneListComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    displayedColumns: string[] = ['nomCampagne', 'typeAchat', 'objectif', 'budget', 'dateDebut', 'dateFin', 'actions'];
    dataSource: MatTableDataSource<CampagnePublicitaire>;


    constructor(private _publiciteService: PubliciteService) {}

    ngOnInit(): void {
        this._publiciteService.getCampagnes().subscribe((campagnes: CampagnePublicitaire[]) => {
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

    editCampagne(campagne: CampagnePublicitaire): void {
        // Logic to edit campagne
    }

    deleteCampagne(campagne: CampagnePublicitaire): void {
        // Logic to delete campagne
    }
}
