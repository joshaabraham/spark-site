import { Component, OnInit, ViewChild, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PubliciteService } from '../../publicite.service';
import { Publicite } from '../../publicite.types';

@Component({
    selector: 'app-publicite-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubliciteListComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['campagne', 'titre', 'description', 'format', 'urlCible', 'plateforme', 'dateCreation', 'actions'];
    dataSource: MatTableDataSource<Publicite>;

    constructor(@Inject(PubliciteService) private _publiciteService: PubliciteService) {}

    ngOnInit(): void {
        this._publiciteService.getPublicites().subscribe((publicites: Publicite[]) => {
            this.dataSource = new MatTableDataSource(publicites);
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

    editPublicite(publicite: Publicite): void {
        // Logic to edit publicite
    }

    deletePublicite(publicite: Publicite): void {
        // Logic to delete publicite
    }
}
