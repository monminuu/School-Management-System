function School() {
    this.students = null;
    this.faculty = null;
    this.standard = null;
    this.subject = null;

    this.getStudents = () => { return this.students;}
    this.setStudents = (students) => { this.students = students;}

    this.getFaculty = () => { return this.faculty;}
    this.setFaculty = (faculty) => { this.faculty = faculty};

    this.getStandard = () => { return this.standard;}
    this.setStandard = (standard) => { this.standard = standard;}

    this.getSubject = () => { return this.subject;}
    this.setSubject = (subject) => { this.subject = subject;}
}
