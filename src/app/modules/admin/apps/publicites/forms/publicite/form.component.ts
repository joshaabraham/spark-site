import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PubliciteService } from '../../publicite.service';
import { Publicite } from '../../publicite.types';

@Component({
  selector: 'app-publicite-form',
  templateUrl: './form.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubliciteFormComponent implements OnInit {
  publiciteForm: FormGroup;
  publicite: Publicite;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private publiciteService: PubliciteService
  ) {}

  ngOnInit(): void {
    this.publiciteForm = this.fb.group({
      id: [null],
      campagneId: [null, Validators.required],
      titre: ['', Validators.required],
      description: [''],
      format: ['', Validators.required],
      urlCible: ['', Validators.required],
      image: [''],
      video: [''],
      texteAffiche: [''],
      ordreAffichage: [0, Validators.required],
      plateforme: ['', Validators.required],
      active: [false, Validators.required],
      dureeAffichage: [0, Validators.required],
      clics: [0, Validators.required],
      impressions: [0, Validators.required],
      tauxConversion: [0, Validators.required],
      localisationCible: [''],
      ageCibleMin: [null],
      ageCibleMax: [null],
      genreCible: [''],
      langueCible: [''],
      budgetAlloue: [null],
      frequenceAffichage: [0, Validators.required],
      typeFacturation: ['', Validators.required],
      scorePertinence: [null],
      formatDimension: [''],
      animation: [false, Validators.required],
      callToAction: [''],
      categorie: [''],
      scoreQualite: [null],
      engagementUtilisateur: [0, Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.publiciteService.getPublicite(Number(id)).subscribe((publicite) => {
        this.publicite = publicite;
        this.publiciteForm.patchValue(this.publicite);
      });
    }
  }

  onSubmit(): void {
    if (this.publiciteForm.valid) {
      if (this.publicite) {
        this.publiciteService.updatePublicite(this.publicite.id, this.publiciteForm.value).subscribe(() => {
          this.router.navigate(['/publicites']);
        });
      } else {
        this.publiciteService.createPublicite(this.publiciteForm.value).subscribe(() => {
          this.router.navigate(['/publicites']);
        });
      }
    }
  }
}
