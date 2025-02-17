export interface JobOffer {
    id?: number;
    title: string;
    description: string;
    location: string;
    company: string;
    postedBy: string; // Assuming user ID is a string
    postedAt: string;
    updatedAt: string;
}

export interface JobSearch {
    id?: number;
    title: string;
    description: string;
    location: string;
    searcher: string; // Assuming user ID is a string
    postedAt: string;
    updatedAt: string;
}

export interface CandidateProfile {
    id?: number;
    user: string; // Assuming user ID is a string
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    summary?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
    visibility: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Experience {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    jobTitle: string;
    company: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description?: string;
}

export interface Education {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    school: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate?: string;
    description?: string;
}

export interface Skill {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    name: string;
    proficiency: number; // 1: Beginner, 2: Intermediate, 3: Advanced, 4: Expert
}

export interface Language {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    name: string;
    level: number; // 1: Basic, 2: Intermediate, 3: Fluent, 4: Native
}

export interface Certification {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    name: string;
    organization: string;
    issueDate: string;
    expirationDate?: string;
    credentialUrl?: string;
}

export interface Reference {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    name: string;
    relationship: string;
    email: string;
    phone?: string;
}

export interface Company {
    id?: number;
    name: string;
    website?: string;
    industry?: string;
    headquarters?: string;
    description?: string;
}

export interface JobOpportunity {
    id?: number;
    title: string;
    company: string; // Assuming company ID is a string
    location: string;
    remote: boolean;
    jobType: string; // "full_time", "part_time", "contract", "internship"
    salaryMin?: number;
    salaryMax?: number;
    currency: string;
    benefits?: string;
    description: string;
    requirements: string;
    responsibilities: string;
    postedBy?: string; // Assuming user ID is a string
    postedAt: string;
    updatedAt: string;
    status: string; // "open", "closed", "pending"
}

export interface RequiredSkill {
    id?: number;
    job: string; // Assuming job ID is a string
    skillName: string;
    proficiency: number; // 1: Basic, 2: Intermediate, 3: Advanced, 4: Expert
}

export interface RequiredLanguage {
    id?: number;
    job: string; // Assuming job ID is a string
    languageName: string;
    level: number; // 1: Basic, 2: Intermediate, 3: Fluent, 4: Native
}

export interface JobApplication {
    id?: number;
    job: string; // Assuming job ID is a string
    candidate: string; // Assuming candidate ID is a string
    appliedAt: string;
    status: string; // "pending", "reviewed", "accepted", "rejected"
    coverLetter?: string;
}
