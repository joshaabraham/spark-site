export interface Sport {
    id?: string;
    code: string;
    categorie: string;
    spTitreFr: string;
    spTitreEn: string;
    spTitrePor: string;
    spTitreKo: string;
    spTitreJp: string;
    spTitreEs: string;
    spTitreRu: string;
    spTitreInd: string;
    spTitrePol: string;
    spTitreIta: string;
    iconPetit: string;
    iconGrand: string;
    dateCreation: Date;
    dateMiseAJour: Date;
}

// export interface Category
// {
//     id?: string;
//     title?: string;
//     slug?: string;
// }

// export interface Course
// {
//     id?: string;
//     title?: string;
//     slug?: string;
//     description?: string;
//     category?: string;
//     duration?: number;
//     steps?: {
//         order?: number;
//         title?: string;
//         subtitle?: string;
//         content?: string;
//     }[];
//     totalSteps?: number;
//     updatedAt?: number;
//     featured?: boolean;
//     progress?: {
//         currentStep?: number;
//         completed?: number;
//     };
// }
