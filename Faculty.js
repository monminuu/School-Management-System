function Faculty(name, age) {
    this.name = name;
    this.age = age;
    this.phoneNumber = null;
    this.departments = null;

    this.getName = () => {return this.name;}
    this.setName = (name) => { this.name = name;}

    this.getAge = () => { return this.age; }
    this.setAge = (age) => { this.age = age; }

    this.getPhoneNumber = () => { return this.phoneNumber;}
    this.setPhoneNumber = (phoneNumber) => { this.phoneNumber = phoneNumber;}

    this.getDepartments = () => { return this.departments;}
    this.setDepartments = (departments) => { this.departments = departments;}

}
