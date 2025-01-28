// export interface InventoryProduct
// {
//     id: string;
//     category?: string;
//     name: string;
//     description?: string;
//     tags?: string[];
//     sku?: string | null;
//     barcode?: string | null;
//     brand?: string | null;
//     vendor: string | null;
//     stock: number;
//     reserved: number;
//     cost: number;
//     basePrice: number;
//     taxPercent: number;
//     price: number;
//     weight: number;
//     thumbnail: string;
//     images: string[];
//     active: boolean;
// }


export interface InventoryProduct {
    id: string;
    nom: string;
    description: string;
    descriptionCourte?: string;
    prix: number;
    estNeuf: boolean;
    categorie: string;
    sousCategorie?: string;
    marque?: string;
    modele?: string;
    dateMiseEnLigne: Date;
    derniereModification: Date;
    etat: 'neuf' | 'comme_neuf' | 'bon_etat' | 'acceptable' | 'occasion';
    vendeur: User;
    nomVendeur: string;
    images: string[];
    localisation?: string;
    paysOrigine?: string;
    stock: number;
    nombreDeVues: number;
    livraisonDisponible: boolean;
    fraisDeLivraison?: number;
    methodeLivraison?: string;
    tvaIncluse: boolean;
    tauxTva?: number;
    noteMoyenne: number;
    nombreAvis: number;
    motsCles: string[];
    metaTitre?: string;
    metaDescription?: string;
    metaMotsCles: string[];
    estEnPromotion: boolean;
    prixAvantPromotion?: number;
    dateDebutPromotion?: Date;
    dateFinPromotion?: Date;
    estEnEnchere: boolean;
    prixDepartEnchere?: number;
    dateDebutEnchere?: Date;
    dateFinEnchere?: Date;
    meilleurEncherisseur?: User;
    prixActuelEnchere?: number;
    statut: string;
    nombreVendus: number;
    estMisEnAvant: boolean;
    dureeRetour?: number;
    politiqueRetour?: string;
    tags?: string[];
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}


export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface InventoryCategory
{
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand
{
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag
{
    id?: string;
    title?: string;
}

export interface InventoryVendor
{
    id: string;
    name: string;
    slug: string;
}
