function Department(){
    this.scienceAndTech = null;
    this.literature= null;
    this.foreignLanguage = null;
    this.mathematics = null;
    this.computerScience = null;

    this.getScienceAndTech = () => { return this.scienceAndTech;}
    this.setScienceAndTech = (scienceAndTech) => { this.scienceAndTech = scienceAndTech;}

    this.getLiterature = () => { return this.literature;}
    this.setLiterature = (literature) => { this.literatuer = literature;}

    this.getForeignLanguage = () => { return this.foreignLanguage;}
    this.setForeignLanguage = (foreignLanguage) => { this.foreignLanguage = foreignLanguage;}

    this.getMathematics = () => { return this.mathematics;}
    this.setMathematics = (mathematics) => { this.mathematics = mathematics;}

    this.getComputerScience = () => { return this.computerScience;}
    this.setComputerScience = (computerScience) => { this.computerScience = computerScience;}
}