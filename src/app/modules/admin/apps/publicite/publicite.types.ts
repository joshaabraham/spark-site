export interface BudgetCampagne {
    typeBudget: 'quotidien' | 'global';
    montant: number;
}

export interface PageFacebook {
    nom: string;
    lien: string;
    logo: string;
}

export interface Calendrier {
    dateDebut: Date;
    heureDebut: string; // Time in HH:mm:ss format
    dateFin: Date;
    heureFin: string; // Time in HH:mm:ss format
}

export interface ControleAudience {
    lieu: string;
    ageMinimum: number;
    langues: string[]; // List of languages
    centreInteret?: string[]; // List of interests
    genre?: 'homme' | 'femme' | 'tous';
}

export interface CampagnePublicitaire {
    nomCampagne: string;
    typeAchat: string; // Enchères, Achat Direct, etc.
    objectif: string; // Notoriété, Conversion, etc.
    categoriesSpecialesAEcarter: string[]; // List of excluded categories
    limiteDepense: number;
    budgetCampagne: BudgetCampagne;
    pageFacebook: PageFacebook;
    calendrier: Calendrier;
    controleAudience: ControleAudience;
    placement: string;
    listePublicite: string[]; // List of associated ads
    statutCampagne?: string; // En cours, Terminée, etc.
    tauxClics?: number;
    nombreImpressions?: number;
    dateCreation: Date;
    utilisateurResponsable?: string;
    owner: string; // User ID
}

export interface Media {
    url: string;
    typeMedia: 'image' | 'video' | 'gif';
    duree?: number; // Duration in seconds for videos
    dimensions?: string; // Dimensions in pixels
}

export interface CtaButton {
    texte: string;
    lien: string;
    couleur: string; // Hexadecimal color code
}

export interface Publicite {
    id?: number;
    campagneId: number;
    titre: string;
    description?: string;
    format: 'image' | 'video' | 'texte' | 'carrousel';
    urlCible: string;
    image?: string;
    video?: string;
    texteAffiche?: string;
    ordreAffichage: number;
    plateforme: 'mobile' | 'web' | 'both';
    dateCreation?: string;
    dateModification?: string;
    active: boolean;
    dureeAffichage: number;
    clics: number;
    impressions: number;
    tauxConversion: number;
    localisationCible?: string;
    ageCibleMin?: number;
    ageCibleMax?: number;
    genreCible?: 'homme' | 'femme' | 'tous';
    langueCible?: string;
    budgetAlloue?: number;
    frequenceAffichage: number;
    typeFacturation: 'CPC' | 'CPM';
    scorePertinence?: number;
    formatDimension?: string;
    animation: boolean;
    callToAction?: string;
    categorie?: string;
    scoreQualite?: number;
    engagementUtilisateur: number;
  }


export interface PubliciteVideo extends Publicite {
    videoAutoplay: boolean;
    videoMuted: boolean;
}

export interface PubliciteBanniere extends Publicite {
    emplacementBanniere: string; // Header, Sidebar, etc.
    dimensions: string; // Specific dimensions
}

export interface PubliciteCarrousel extends Publicite {
    listeImages: Media[]; // List of images/videos in the carousel
}

export interface PubliciteNative extends Publicite {
    source: string; // Recommended by, sponsored by, etc.
}
