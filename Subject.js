function Subject() {
    this.name = null;
    this.subjectType = null;
    this.credit = null;

    this.getName = () => { return this.name;}
    this.setName = (name) => { this.name = name;}

    this.getSubjectType = () => { return this.subjectType;}
    this.setSubjectType = (subjectType) => { this.subjectType = subjectType;}

    this.getCredit = () => { return this.credit;}
    this.setCredit = (credit) => { this.credit = credit;}
}

