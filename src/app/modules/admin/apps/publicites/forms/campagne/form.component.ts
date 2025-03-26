import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PubliciteService } from '../../publicites.service';
import { CampagnePublicitaire } from '../../publicites.types';

@Component({
  selector: 'app-campagne-form',
  templateUrl: './form.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampagneFormComponent implements OnInit {
  campagneForm: FormGroup;
  campagne: CampagnePublicitaire;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private publiciteService: PubliciteService
  ) {}

  ngOnInit(): void {
    this.campagneForm = this.fb.group({
      nomCampagne: ['', Validators.required],
      typeAchat: ['', Validators.required],
      objectif: ['', Validators.required],
      categoriesSpecialesAEcarter: [[]],
      limiteDepense: [0, Validators.required],
      budgetCampagne: this.fb.group({
        typeBudget: ['', Validators.required],
        montant: [0, Validators.required]
      }),
      pageFacebook: this.fb.group({
        nom: ['', Validators.required],
        lien: ['', Validators.required],
        logo: ['', Validators.required]
      }),
      calendrier: this.fb.group({
        dateDebut: ['', Validators.required],
        heureDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        heureFin: ['', Validators.required]
      }),
      controleAudience: this.fb.group({
        lieu: ['', Validators.required],
        ageMinimum: [0, Validators.required],
        langues: [[]],
        centreInteret: [[]],
        genre: ['']
      }),
      placement: ['', Validators.required],
      listePublicite: [[]],
      statutCampagne: [''],
      tauxClics: [0],
      nombreImpressions: [0],
      dateCreation: ['', Validators.required],
      utilisateurResponsable: [''],
      owner: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.publiciteService.getCampagne(Number(id)).subscribe((campagne) => {
        this.campagne = campagne;
        this.campagneForm.patchValue(this.campagne);
      });
    }
  }

  onSubmit(): void {
    if (this.campagneForm.valid) {
      if (this.campagne) {
        this.publiciteService.updateCampagne(this.campagne.id, this.campagneForm.value).subscribe(() => {
          this.router.navigate(['/campagnes']);
        });
      } else {
        this.publiciteService.createCampagne(this.campagneForm.value).subscribe(() => {
          this.router.navigate(['/campagnes']);
        });
      }
    }
  }

  backToCampagnes(): void {
    this.router.navigate(['apps/publicites/']);
}

}
