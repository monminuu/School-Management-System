function School() {
    this.students = null;
    this.faculties = null;
    this.subjects = null;

    this.getStudents = () => { return this.students;}
    this.setStudents = (students) => { this.students = students;}

    this.getFaculties = () => { return this.faculties;}
    this.setFaculties = (faculties) => { this.faculties = faculties;}

    this.getSubjects = () => { return this.subjects;}
    this.setSubjects = (subjects) => { this.subjects = subjects;}
}
