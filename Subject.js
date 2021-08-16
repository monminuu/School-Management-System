function subject() {
    this.maths = null;
    this.socialScience = null;
    this.science = null;
    this.hindi = null;
    this.english = null;
    this.sankrit = null;

    this.getMaths = () => { return this.maths;}
    this.setMaths = (maths) => { this.maths = maths;}

    this.getSocialScience = () => { return this.socialScience;}
    this.getSocialScience = (socialScience) => { this.socialScience = socialScience;}

    this.getScience = () => {return this.science;}
    this.setScience = (science) => {this.science = science ;}

    this.getHindi = () => {return this.hindi;}
    this.setHindi = (hindi) => {this.hindi = hindi;}

    this.getEnglish = () => {return this.english;}
    this.setEnglish = (english) => {this.english = english;}

    this.getSanskrit = () => {return this.sankrit;}
    this.setSanskrit = (sanskrit) => {this.sanskrit = sanskrit;}

}