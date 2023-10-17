export class InfoPoint{
    constructor(ind, val){
      this.index = ind;
      this.value = val;
    }
  }
  
export class Recordd{
    constructor(name, description, link, start, end = "now"){
      this.name = name;
      this.start = start;
      this.end = end;
      this.description = description;
      this.link = link;
    }
  }

export class Person{
    constructor(fullname, status){
        this.fullname = fullname;
        this.status = status;
    }
}

export let importantPeople = [new Person("Olena Lietova", "mother"), new Person("Oleksiy Biriukov", "father"), new Person("Nataliia Biriukova", "grandmother"),
                                new Person("Viacheslav Biriukov", "grandfather"), new Person("Barcelona (Barsik)", "cat")];
  
export let information = [new InfoPoint("Name", "Kateryna"), new InfoPoint("Surname", "Biriukova"), 
  new InfoPoint("City of Birth", "Kharkiv"), new InfoPoint("Date of Birth", "07.08.2003"),
   new InfoPoint("Gender", "Female"), new InfoPoint("Favorite Film", "The Shawshank Redemption"), new InfoPoint("Favorite Book", "The Old Man and the Sea")];
  
export let studyRecords = [new Recordd("Kharkiv Specialized School number 16", "Graduated from High School Number 16", 'https://kh.isuo.org/ru/schools/view/id/11578', '2009', '2020'),
new Recordd("Kharkiv Music School number 14", "Graduated from Kharkiv Music School number 14 (piano class)", 'http://music-school14.kh.sch.in.ua/', '2009', '2017'),
new Recordd("Kharkiv National University of Radio Electronics", "Artifitial Intelligence Degree Program in Kharkiv National University of Radio Electronics", 'https://nure.ua/en/', '2020'),
new Recordd("University of Jyvaskyla", 'Exchange Year as an Erasmus Plus Student in the University of Jyvaskyla (Faculty of Informational Technologies)', 'https://www.jyu.fi/en', 'August 2022')];

export let jobRecords = [new Recordd("ArtJoker", "JavaScript Internship", "https://artjoker.net/", "January 2022", "February 2022"),
new Recordd("Onereach.ai", "Solution Designer Internship in Onereach.ai", 'https://onereach.ai/', 'June 2022', 'August 2022')];

export let hobbies = ["Dancing", "Traveling", "Hiking", "Languages", "Reading", "Gym", "Gymnastics"];