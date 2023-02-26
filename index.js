//Q1
function InstagramPost(HandleOfAuthor, Content, AnImageLink, NumberOfViews, NumberOfLikes) {
    this.HandleOfAuthor=HandleOfAuthor;
    this.Content=Content;
    this.AnImageLink=AnImageLink;
    this.NumberOfViews=NumberOfViews;
    this.NumberOfLikes=NumberOfLikes;
}


//Q2
const instagramPost2=new InstagramPost('@s2weh','oil spillage', 'www.instapost2.com', 676, 122);
console.log(instagramPost2)

const instagramPost3=new InstagramPost('@ais4ada', 'churchgist', 'www.instapost3.com', '1.4k', 374);
console.log(instagramPost3)


//Q3 USING FACTORY METHOD
function Musa(firstName, lastName, age, location) {
 return{
    firstName:firstName,
    lastName:lastName,
    age:age,
    location:location,
 }   
}
const student= Musa ('Musa', 'Dawodu', 19, 'Lekki,Lagos state');
console.log(student)

const jambScores= {
    Eng :70,
    Govt:85,
    Lit : 82,
    Crk :94
    
}
console.log(jambScores)
student.jambScores=jambScores

console.log(student)


// Q4 DIFFERENT WAYS TO CLONE AN OBJECT WITH EXAMPLES

//Object.assign
const firstDrink={
    brand:'Mirinda',
    color:'orange',
    taste: 'sugary'
    
}
const secondDrink=firstDrink;
console.log(secondDrink)
secondDrink.brand='Pepsi';
secondDrink.color='Brown';
console.log(secondDrink)

//Spread syntax
const thirdDrink={...firstDrink};
thirdDrink.brand='Sprite';
console.log({thirdDrink});

//JSON.parse()
const fourthDrink=JSON.parse(JSON.stringify(firstDrink));
console.log({fourthDrink})
fourthDrink.brand='Limca'
console.log({fourthDrink})


//Q5 USING ENUMERATION METHODS TO LOG OUT EACH OF THE PRESIDENTIAL CANDIDATES

//USING FOR...IN
const presidentialCandidates={
    AAC:'Omoyele Sowore',
    ACCORD:'Christopher Imumolen',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for(const party in presidentialCandidates) {
    console.log(presidentialCandidates[party] + ' is the presidential candidate of ' +party)
}


