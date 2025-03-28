import { User } from 'app/core/user/user.types';
import { Sport } from '../sports/sports.types';




export interface School {
    id: number;
    user: User;
    sportFK: Sport;
    name: string;
}

export interface Teacher {
    id: number;
    user: User;
    school: School;
}

export interface Student {
    id: number;
    user: User;
    school: School;
}

export interface Course {
    id: number;
    title: string;
    school: School;
    teacher: Teacher;
    category: string;
    progress: {
        completed: number;
    };
    slug?: string;
    description: string;
    isFree: boolean;
    needToBeRegistered: boolean;
    totalSteps: number;
    // Add other fields as necessary
}

export interface Section {
    id: number;
    title: string;
    course: Course;
    order: number;
    subtitle: string;
    content: string;
}

export interface Chapter {
    id: number;
    title: string;
    section: Section;
    order: number;
    subtitle: string;
    content: string;
}
