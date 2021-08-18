function Standard(standard, section) {
    this.name = parseInt(standard);
    this.section = section;

    this.getName = () => { return this.name;}
    this.setName = (name) => { this.name = name; }

    this.getSection = () => { return this.section; }
    this.setSection = (section) => { this.section = section; }

    this.promote = () => {
        if (this.name === 10) {
            return -1;
        }
        this.name = this.name +1;
        return this.name;
    }
}