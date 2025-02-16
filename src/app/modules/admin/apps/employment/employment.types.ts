export interface JobOffer {
    id?: number;
    title: string;
    description: string;
    location: string;
    company: string;
    posted_by: string; // Assuming user ID is a string
    posted_at: string;
    updated_at: string;
}

export interface JobSearch {
    id?: number;
    title: string;
    description: string;
    location: string;
    searcher: string; // Assuming user ID is a string
    posted_at: string;
    updated_at: string;
}

export interface CandidateProfile {
    id?: number;
    user: string; // Assuming user ID is a string
    first_name: string;
    last_name: string;
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
    created_at: string;
    updated_at: string;
}

export interface Experience {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    job_title: string;
    company: string;
    location?: string;
    start_date: string;
    end_date?: string;
    description?: string;
}

export interface Education {
    id?: number;
    candidate: string; // Assuming candidate ID is a string
    school: string;
    degree: string;
    field_of_study?: string;
    start_date: string;
    end_date?: string;
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
    issue_date: string;
    expiration_date?: string;
    credential_url?: string;
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
    job_type: string; // "full_time", "part_time", "contract", "internship"
    salary_min?: number;
    salary_max?: number;
    currency: string;
    benefits?: string;
    description: string;
    requirements: string;
    responsibilities: string;
    posted_by?: string; // Assuming user ID is a string
    posted_at: string;
    updated_at: string;
    status: string; // "open", "closed", "pending"
}

export interface RequiredSkill {
    id?: number;
    job: string; // Assuming job ID is a string
    skill_name: string;
    proficiency: number; // 1: Basic, 2: Intermediate, 3: Advanced, 4: Expert
}

export interface RequiredLanguage {
    id?: number;
    job: string; // Assuming job ID is a string
    language_name: string;
    level: number; // 1: Basic, 2: Intermediate, 3: Fluent, 4: Native
}

export interface JobApplication {
    id?: number;
    job: string; // Assuming job ID is a string
    candidate: string; // Assuming candidate ID is a string
    applied_at: string;
    status: string; // "pending", "reviewed", "accepted", "rejected"
    cover_letter?: string;
}