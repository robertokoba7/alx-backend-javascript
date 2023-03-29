/// <reference path="Teacher.ts"/>

// Subject class that implements the Teacher interface

namespace Subjects {
    export class Subject {
        teacher: Teacher;
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        };
    }
}
