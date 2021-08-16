function Faculty(name, age) {
    this.name = name;
    this.age = age;
    this.phoneNumber = null;
    this.department = null;

    this.getName = () => {return this.name;}
    this.setName = (name) => { this.name = name;}

    this.getAge = () => { return this.age; }
    this.setAge = (age) => { this.age = age; }

    this.getPhoneNumber = () => { return this.phoneNumber;}
    this.setPhoneNumber = (phoneNumber) => { this.phoneNumber = phoneNumber;}

    this.getDepartment = () => { return this.department;}
    this.setDepartment = (department) => { this.department = department;}

}
