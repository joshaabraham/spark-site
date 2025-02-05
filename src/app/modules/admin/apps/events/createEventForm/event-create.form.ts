import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SportEvent, Match, Sponsor, MediaCoverage, Location } from '../events.types';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-create.form.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreateFormComponent implements OnInit {


    eventForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    get otherSports(): FormArray {
        return this.eventForm.get('otherSports') as FormArray;
    }

    get participatingTeams(): FormArray {
        return this.eventForm.get('participatingTeams') as FormArray;
    }

    get notablePlayers(): FormArray {
        return this.eventForm.get('notablePlayers') as FormArray;
    }

    get matches(): FormArray {
        return this.eventForm.get('matches') as FormArray;
    }

    get sponsors(): FormArray {
        return this.eventForm.get('sponsors') as FormArray;
    }

    get mediaCoverageDetails(): FormArray {
        return this.eventForm.get('mediaCoverageDetails') as FormArray;
    }


    ngOnInit(): void {
        this.eventForm = this._formBuilder.group({
            name: ['', Validators.required],
            location: ['', Validators.required],
            address: this._formBuilder.group({
                street: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
                postalCode: ['', Validators.required],
                country: ['', Validators.required]
            }),
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            organizer: ['', Validators.required],
            sport: ['', Validators.required],
            otherSports: this._formBuilder.array([]),
            participatingTeams: this._formBuilder.array([]),
            notablePlayers: this._formBuilder.array([]),
            description: [''],
            estimatedAudience: ['', Validators.required],
            isRecurring: [false],
            recurrenceIntervalYears: [''],
            matches: this._formBuilder.array([]),
            sponsors: this._formBuilder.array([]),
            mediaCoverageDetails: this._formBuilder.array([])
        });
    }

    addOtherSport(): void {
        this.otherSports.push(this._formBuilder.control(''));
    }

    addParticipatingTeam(): void {
        this.participatingTeams.push(this._formBuilder.control(''));
    }

    addNotablePlayer(): void {
        this.notablePlayers.push(this._formBuilder.control(''));
    }

    addMatch(): void {
        this.matches.push(this._formBuilder.group({
            matchDate: ['', Validators.required],
            venue: this._formBuilder.group({
                name: ['', Validators.required],
                address: this._formBuilder.group({
                    street: ['', Validators.required],
                    city: ['', Validators.required],
                    state: ['', Validators.required],
                    postalCode: ['', Validators.required],
                    country: ['', Validators.required]
                })
            }),
            teamA: ['', Validators.required],
            teamB: ['', Validators.required],
            result: [''],
            keyPlayers: this._formBuilder.array([])
        }));
    }

    addSponsor(): void {
        this.sponsors.push(this._formBuilder.group({
            name: ['', Validators.required],
            industry: ['', Validators.required],
            contributionAmount: ['', Validators.required],
            logoUrl: ['']
        }));
    }

    addMediaCoverage(): void {
        this.mediaCoverageDetails.push(this._formBuilder.group({
            mediaOutlet: ['', Validators.required],
            coverageType: ['', Validators.required],
            coverageDetails: [''],
            coverageDate: ['', Validators.required]
        }));
    }

    onSubmit(): void {
        if (this.eventForm.valid) {
            const event: SportEvent = this.eventForm.value;
            console.log(event);
        }
    }
}
