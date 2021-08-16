function Student(name, age, group) {
    this.name = name;
    this.age = age;
    this.group = group;
    this.standard = null;
    this.score = null;

    this.getName = () => { return this.name; }
    this.setName = (name) => { this.name = name; }

    this.getAge = () => { return this.age; }
    this.setAge = (age) => { this.age = age; }

    this.getStandard = () => { return this.standard; }
    this.setStandard = (standard) => { this.standard = standard; }

    this.getScore = () => { return this.score; }
    this.setScore = (score) => { this.score = score; }

    this.getGroup = () => { return this.group;}
    this.setGroup = (group) => { this.group = group; }

    this.promote = () => {
        let output = this.standard.promote();
        if (output === -1) {
            return -1;
        }
        return 1;
    }


}
