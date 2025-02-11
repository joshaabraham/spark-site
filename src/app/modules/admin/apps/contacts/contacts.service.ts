import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap, filter } from 'rxjs/operators';
import { Contact } from 'app/modules/admin/apps/contacts/contacts.types';
import { apiRoutes } from 'app/dataService/routes';
import { Country, Tag } from 'app/core/models/userprofile.model';


@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    private _contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
    private _contact: BehaviorSubject<Contact | null> = new BehaviorSubject<Contact | null>(null);
    private _countries: BehaviorSubject<Country[] | null> = new BehaviorSubject(null);
    private _tags: BehaviorSubject<Tag[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for contacts
     */
    get contacts$(): Observable<Contact[]> {
        return this._contacts.asObservable();
    }

    /**
     * Getter for contact
     */
    get contact$(): Observable<Contact | null> {
        return this._contact.asObservable();
    }

    /**
     * Getter for countries
     */
    get countries$(): Observable<Country[]>
    {
        return this._countries.asObservable();
    }

    /**
     * Getter for tags
     */
    get tags$(): Observable<Tag[]>
    {
        return this._tags.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get contacts
     */
    getContacts(): Observable<Contact[]> {
        return this._httpClient.get<Contact[]>(apiRoutes.contactApp.contactCreateList).pipe(
            tap((contacts) => {
                this._contacts.next(contacts);
            })
        );
    }

    /**
     * Get contact by id
     */
    getContactById(id: number): Observable<Contact> {
        return this._httpClient.get<Contact>(apiRoutes.contactApp.contactDetail(id)).pipe(
            tap((contact) => {
                this._contact.next(contact);
            })
        );
    }

    /**
     * Create contact
     */
    addContact(contact: Contact): Observable<Contact> {
        return this._httpClient.post<Contact>(apiRoutes.contactApp.contactCreateList, contact).pipe(
            tap((newContact) => {
                this._contacts.next([...this._contacts.value, newContact]);
            })
        );
    }

    createContact(): Observable<Contact>
    {
        // Implementation for creating a new contact
        const newContact: Contact = {
            created: new Date(),
            user: {
            id: 0,
            name: 'New Contact',
            emails: [{ email: 'new.contact@example.com', label: 'work' }],
            phoneNumbers: [{ country: 'US', phoneNumber: '1234567890', label: 'work' }],
            job: 'New Job',
            tags: [],
            user: 'new_user',
            isPrivate: false
            }
        };
        // Return the new contact as an observable
        return of(newContact);
    }

    /**
     * Update contact
     */
    updateContact(id: number, contact: Contact): Observable<Contact> {
        return this._httpClient.put<Contact>(apiRoutes.contactApp.contactDetail(id), contact).pipe(
            map((updatedContact) => {
                const contacts = this._contacts.value;

                // Find the index of the updated contact
                const index = contacts.findIndex((item: Contact) => item.user.id === Number(id));

                // Update the contact
                contacts[index] = updatedContact;

                // Update the contacts
                this._contacts.next(contacts);

                // Return the updated contact
                return updatedContact;
            }),
            switchMap(updatedContact => this.contact$.pipe(
                take(1),
                filter(item => item && item.user.id === id),
                tap(() => {
                    // Update the contact if it's selected
                    this._contact.next(updatedContact);

                    // Return the updated contact
                    return updatedContact;
                })
            ))
        );
    }

    /**
     * Delete contact
     */
    deleteContact(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(apiRoutes.contactApp.contactDetail(id)).pipe(
            map((isDeleted) => {
                const contacts = this._contacts.value;

                // Find the index of the deleted contact
                const index = contacts.findIndex(item => item.user.id === id);

                // Remove the contact
                contacts.splice(index, 1);

                // Update the contacts
                this._contacts.next(contacts);

                // Return the result
                return isDeleted;
            })
        );
    }

    /**
     * Get countries
     */
    getCountries(): Observable<Country[]>
    {
        return this._httpClient.get<Country[]>('api/apps/contacts/countries').pipe(
            tap((countries) => {
                this._countries.next(countries);
            })
        );
    }

    /**
     * Get tags
     */
    getTags(): Observable<Tag[]>
    {
        return this._httpClient.get<Tag[]>('api/apps/contacts/tags').pipe(
            tap((tags) => {
                this._tags.next(tags);
            })
        );
    }

    /**
     * Create tag
     *
     * @param tag
     */
    createTag(tag: Tag): Observable<Tag>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.post<Tag>('api/apps/contacts/tag', {tag}).pipe(
                map((newTag) => {

                    // Update the tags with the new tag
                    this._tags.next([...tags, newTag]);

                    // Return new tag from observable
                    return newTag;
                })
            ))
        );
    }

    /**
     * Update the tag
     *
     * @param id
     * @param tag
     */
    updateTag(id: string, tag: Tag): Observable<Tag>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.patch<Tag>('api/apps/contacts/tag', {
                id,
                tag
            }).pipe(
                map((updatedTag) => {

                    // Find the index of the updated tag
                    const index = tags.findIndex(item => item.id === id);

                    // Update the tag
                    tags[index] = updatedTag;

                    // Update the tags
                    this._tags.next(tags);

                    // Return the updated tag
                    return updatedTag;
                })
            ))
        );
    }

    /**
     * Delete the tag
     *
     * @param id
     */
    deleteTag(id: string): Observable<boolean>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.delete('api/apps/contacts/tag', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted tag
                    const index = tags.findIndex(item => item.id === id);

                    // Delete the tag
                    tags.splice(index, 1);

                    // Update the tags
                    this._tags.next(tags);

                    // Return the deleted status
                    return isDeleted;
                }),
                filter(isDeleted => isDeleted),
                switchMap(isDeleted => this.contacts$.pipe(
                    take(1),
                    map((contacts) => {

                        // Iterate through the contacts
                        contacts.forEach((contact) => {

                            const tagIndex = contact.user.tags.findIndex(tag => tag === id);

                            // If the contact has the tag, remove it
                            if ( tagIndex > -1 )
                            {
                                contact.user.tags.splice(tagIndex, 1);
                            }
                        });

                        // Return the deleted status
                        return isDeleted;
                    })
                ))
            ))
        );
    }

    /**
     * Update the avatar of the given contact
     *
     * @param id
     * @param avatar
     */
    uploadAvatar(id: number, avatar: File): Observable<Contact>
    {
        return this.contacts$.pipe(
            take(1),
            switchMap(contacts => this._httpClient.post<Contact>('api/apps/contacts/avatar', {
                id,
                avatar
            }, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': avatar.type
                }
            }).pipe(
                map((updatedContact) => {

                    // Find the index of the updated contact
                    const index = contacts.findIndex((item: Contact) => item.user.id === id);

                    // Update the contact
                    contacts[index] = updatedContact;

                    // Update the contacts
                    this._contacts.next(contacts);

                    // Return the updated contact
                    return updatedContact;
                }),
                switchMap(updatedContact => this.contact$.pipe(
                    take(1),
                    filter(item => item && item.user.id === id),
                    tap(() => {

                        // Update the contact if it's selected
                        this._contact.next(updatedContact);

                        // Return the updated contact
                        return updatedContact;
                    })
                ))
            ))
        );
    }
}
