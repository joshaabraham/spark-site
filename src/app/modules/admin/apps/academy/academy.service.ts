import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { School, Teacher, Student, Course, Section, Chapter } from 'app/modules/admin/apps/academy/academy.types';
import { apiRoutes } from 'app/dataService/routes';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AcademyService {
    // Private
    private _schools: BehaviorSubject<School[] | null> = new BehaviorSubject(null);
    private _teachers: BehaviorSubject<Teacher[] | null> = new BehaviorSubject(null);
    private _students: BehaviorSubject<Student[] | null> = new BehaviorSubject(null);
    private _courses: BehaviorSubject<Course[] | null> = new BehaviorSubject(null);
    private _sections: BehaviorSubject<Section[] | null> = new BehaviorSubject(null);
    private _chapters: BehaviorSubject<Chapter[] | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) {}

    // Accessors
    get schools$(): Observable<School[]> {
        return this._schools.asObservable();
    }

    get teachers$(): Observable<Teacher[]> {
        return this._teachers.asObservable();
    }

    get students$(): Observable<Student[]> {
        return this._students.asObservable();
    }

    get courses$(): Observable<Course[]> {
        return this._courses.asObservable();
    }

    get sections$(): Observable<Section[]> {
        return this._sections.asObservable();
    }

    get chapters$(): Observable<Chapter[]> {
        return this._chapters.asObservable();
    }

    // Public methods
    getSchools(): Observable<School[]> {
        return this._httpClient.get<School[]>(`${environment.apiURL}${apiRoutes.academyApp.schoolCreateList}`).pipe(
            tap((response: any) => {
                this._schools.next(response);
            })
        );
    }

    getSchoolById(id: number): Observable<School> {
        return this._httpClient.get<School>(`${environment.apiURL}${apiRoutes.academyApp.schoolDetail(id)}`).pipe(
            tap((school) => {
                const schools = this._schools.value;
                const index = schools.findIndex(item => item.id === id);
                schools[index] = school;
                this._schools.next(schools);
            })
        );
    }

    createSchool(school: School): Observable<School> {
        return this._httpClient.post<School>(`${environment.apiURL}${apiRoutes.academyApp.schoolCreateList}`, school).pipe(
            tap((newSchool) => {
                this._schools.next([...this._schools.value, newSchool]);
            })
        );
    }

    updateSchool(id: number, school: School): Observable<School> {
        return this._httpClient.put<School>(`${environment.apiURL}${apiRoutes.academyApp.schoolDetail(id)}`, school).pipe(
            tap((updatedSchool) => {
                const schools = this._schools.value;
                const index = schools.findIndex(item => item.id === id);
                schools[index] = updatedSchool;
                this._schools.next(schools);
            })
        );
    }

    deleteSchool(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.academyApp.schoolDetail(id)}`).pipe(
            tap(() => {
                const schools = this._schools.value;
                const index = schools.findIndex(item => item.id === id);
                schools.splice(index, 1);
                this._schools.next(schools);
            })
        );
    }

    getTeachers(): Observable<Teacher[]> {
        return this._httpClient.get<Teacher[]>(`${environment.apiURL}${apiRoutes.academyApp.teacherCreateList}`).pipe(
            tap((response: any) => {
                this._teachers.next(response);
            })
        );
    }

    getTeacherById(id: number): Observable<Teacher> {
        return this._httpClient.get<Teacher>(`${environment.apiURL}${apiRoutes.academyApp.teacherDetail(id)}`).pipe(
            tap((teacher) => {
                const teachers = this._teachers.value;
                const index = teachers.findIndex(item => item.id === id);
                teachers[index] = teacher;
                this._teachers.next(teachers);
            })
        );
    }

    createTeacher(teacher: Teacher): Observable<Teacher> {
        return this._httpClient.post<Teacher>(`${environment.apiURL}${apiRoutes.academyApp.teacherCreateList}`, teacher).pipe(
            tap((newTeacher) => {
                this._teachers.next([...this._teachers.value, newTeacher]);
            })
        );
    }

    updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
        return this._httpClient.put<Teacher>(`${environment.apiURL}${apiRoutes.academyApp.teacherDetail(id)}`, teacher).pipe(
            tap((updatedTeacher) => {
                const teachers = this._teachers.value;
                const index = teachers.findIndex(item => item.id === id);
                teachers[index] = updatedTeacher;
                this._teachers.next(teachers);
            })
        );
    }

    deleteTeacher(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.academyApp.teacherDetail(id)}`).pipe(
            tap(() => {
                const teachers = this._teachers.value;
                const index = teachers.findIndex(item => item.id === id);
                teachers.splice(index, 1);
                this._teachers.next(teachers);
            })
        );
    }

    getStudents(): Observable<Student[]> {
        return this._httpClient.get<Student[]>(`${environment.apiURL}${apiRoutes.academyApp.studentCreateList}`).pipe(
            tap((response: any) => {
                this._students.next(response);
            })
        );
    }

    getStudentById(id: number): Observable<Student> {
        return this._httpClient.get<Student>(`${environment.apiURL}${apiRoutes.academyApp.studentDetail(id)}`).pipe(
            tap((student) => {
                const students = this._students.value;
                const index = students.findIndex(item => item.id === id);
                students[index] = student;
                this._students.next(students);
            })
        );
    }

    createStudent(student: Student): Observable<Student> {
        return this._httpClient.post<Student>(`${environment.apiURL}${apiRoutes.academyApp.studentCreateList}`, student).pipe(
            tap((newStudent) => {
                this._students.next([...this._students.value, newStudent]);
            })
        );
    }

    updateStudent(id: number, student: Student): Observable<Student> {
        return this._httpClient.put<Student>(`${environment.apiURL}${apiRoutes.academyApp.studentDetail(id)}`, student).pipe(
            tap((updatedStudent) => {
                const students = this._students.value;
                const index = students.findIndex(item => item.id === id);
                students[index] = updatedStudent;
                this._students.next(students);
            })
        );
    }

    deleteStudent(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.academyApp.studentDetail(id)}`).pipe(
            tap(() => {
                const students = this._students.value;
                const index = students.findIndex(item => item.id === id);
                students.splice(index, 1);
                this._students.next(students);
            })
        );
    }

    getCourses(): Observable<Course[]> {
        return this._httpClient.get<Course[]>(`${environment.apiURL}${apiRoutes.academyApp.courseCreateList}`).pipe(
            tap((response: any) => {
                this._courses.next(response);
            })
        );
    }

    getCourseById(id: number): Observable<Course> {
        return this._httpClient.get<Course>(`${environment.apiURL}${apiRoutes.academyApp.courseDetail(id)}`).pipe(
            tap((course) => {
                const courses = this._courses.value;
                const index = courses.findIndex(item => item.id === id);
                courses[index] = course;
                this._courses.next(courses);
            })
        );
    }

    createCourse(course: Course): Observable<Course> {
        return this._httpClient.post<Course>(`${environment.apiURL}${apiRoutes.academyApp.courseCreateList}`, course).pipe(
            tap((newCourse) => {
                this._courses.next([...this._courses.value, newCourse]);
            })
        );
    }

    updateCourse(id: number, course: Course): Observable<Course> {
        return this._httpClient.put<Course>(`${environment.apiURL}${apiRoutes.academyApp.courseDetail(id)}`, course).pipe(
            tap((updatedCourse) => {
                const courses = this._courses.value;
                const index = courses.findIndex(item => item.id === id);
                courses[index] = updatedCourse;
                this._courses.next(courses);
            })
        );
    }

    deleteCourse(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.academyApp.courseDetail(id)}`).pipe(
            tap(() => {
                const courses = this._courses.value;
                const index = courses.findIndex(item => item.id === id);
                courses.splice(index, 1);
                this._courses.next(courses);
            })
        );
    }

    getSections(): Observable<Section[]> {
        return this._httpClient.get<Section[]>(`${environment.apiURL}${apiRoutes.academyApp.sectionCreateList}`).pipe(
            tap((response: any) => {
                this._sections.next(response);
            })
        );
    }

    getSectionById(id: number): Observable<Section> {
        return this._httpClient.get<Section>(`${environment.apiURL}${apiRoutes.academyApp.sectionDetail(id)}`).pipe(
            tap((section) => {
                const sections = this._sections.value;
                const index = sections.findIndex(item => item.id === id);
                sections[index] = section;
                this._sections.next(sections);
            })
        );
    }

    getSectionsByCourseId(courseId: number): Observable<Section[]> {
        return this._httpClient.get<Section[]>(`${apiRoutes.academyApp.courseDetail(courseId)}/sections`).pipe(
            tap((sections) => {
                this._sections.next(sections);
            })
        );
    }

    createSection(section: Section): Observable<Section> {
        return this._httpClient.post<Section>(`${environment.apiURL}${apiRoutes.academyApp.sectionCreateList}`, section).pipe(
            tap((newSection) => {
                this._sections.next([...this._sections.value, newSection]);
            })
        );
    }

    updateSection(id: number, section: Section): Observable<Section> {
        return this._httpClient.put<Section>(`${environment.apiURL}${apiRoutes.academyApp.sectionDetail(id)}`, section).pipe(
            tap((updatedSection) => {
                const sections = this._sections.value;
                const index = sections.findIndex(item => item.id === id);
                sections[index] = updatedSection;
                this._sections.next(sections);
            })
        );
    }

    deleteSection(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.academyApp.sectionDetail(id)}`).pipe(
            tap(() => {
                const sections = this._sections.value;
                const index = sections.findIndex(item => item.id === id);
                sections.splice(index, 1);
                this._sections.next(sections);
            })
        );
    }

    getChapters(): Observable<Chapter[]> {
        return this._httpClient.get<Chapter[]>(`${environment.apiURL}${apiRoutes.academyApp.chapterCreateList}`).pipe(
            tap((response: any) => {
                this._chapters.next(response);
            })
        );
    }

    getChapterById(id: number): Observable<Chapter> {
        return this._httpClient.get<Chapter>(`${environment.apiURL}${apiRoutes.academyApp.chapterDetail(id)}`).pipe(
            tap((chapter) => {
                const chapters = this._chapters.value;
                const index = chapters.findIndex(item => item.id === id);
                chapters[index] = chapter;
                this._chapters.next(chapters);
            })
        );
    }

    getChaptersBySectionId(sectionId: number): Observable<Chapter[]> {
        return this._httpClient.get<Chapter[]>(`${apiRoutes.academyApp.sectionDetail(sectionId)}/chapters`).pipe(
            tap((chapters) => {
                this._chapters.next(chapters);
            })
        );
    }

    createChapter(chapter: Chapter): Observable<Chapter> {
        return this._httpClient.post<Chapter>(`${environment.apiURL}${apiRoutes.academyApp.chapterCreateList}`, chapter).pipe(
            tap((newChapter) => {
                this._chapters.next([...this._chapters.value, newChapter]);
            })
        );
    }

    updateChapter(id: number, chapter: Chapter): Observable<Chapter> {
        return this._httpClient.put<Chapter>(`${environment.apiURL}${apiRoutes.academyApp.chapterDetail(id)}`, chapter).pipe(
            tap((updatedChapter) => {
                const chapters = this._chapters.value;
                const index = chapters.findIndex(item => item.id === id);
                chapters[index] = updatedChapter;
                this._chapters.next(chapters);
            })
        );
    }

    deleteChapter(id: number): Observable<boolean> {
        return this._httpClient.delete<boolean>(`${environment.apiURL}${apiRoutes.academyApp.chapterDetail(id)}`).pipe(
            tap(() => {
                const chapters = this._chapters.value;
                const index = chapters.findIndex(item => item.id === id);
                chapters.splice(index, 1);
                this._chapters.next(chapters);
            })
        );
    }
}
