//Examples using different concepts
/*const aMass = 76;
const aHeight = 1.5;
const bMass = 65;
const bHeight = 1.8;
const BMIa = aMass / aHeight ** 2;
const BMIb = bMass / bHeight ** 2;
console.log(BMIa, BMIb);*/

/* TEMPLATE LITERAL....
const myName = "Nripesh";
const job = "Full stack developer";
const birthYear = 1999;
const year = 2022;

const abc = `I'm ${myName}, a ${year - birthYear} year old ${job}`;
console.log(abc);*/

/* IF/ELSE
const age = 15;
if(age>=18)
{
    console.log("Can have driving license 😊");
}
else
{
    const yearsLeft = 18 - age;
    console.log(`He is too young. He must wait ${yearsLeft} years..`);
}
*/

/*TYPE CONVERSION
const year = '1998';
console.log(Number(year) + 18);
console.log(Number(year),year);
console.log(Number('abc'));
console.log(String(22),22);*/

/*TYPE COERCION
console.log(' Yes I am '+ 24 + ' year old ' );
console.log('20'- 24 - '3' );  // Minus oprator does opposite job in type  coercion..
console.log('20'+ 24 + '3' );  // Here concatenation will perform..
console.log('20' * '3' );      


let n = '1' + 1;  //'11'..(CONCATENATION)
n = n-1;
console.log(n);
//output = 10..*/

/* STRICT & LOOSE EQUAL OPERATOR
let age = 18;
if(age===18)
console.log("Eligible");  //output will be Eligible but if change 18 into string then there will be bug 
                           // in the code because === is a strict equal operator..
if(age==18)
console.log("Eligible");
 
//or

let age2 = '18';
if(age == 18)
console.log("Eligible");  // Here i put the value of age as a string but output will be Eligible olny 
                          // because == is a loose equal operator and it works as a type coercion as well.
 */

/*example of conditional(ternary) operator..
const bill = 275;
const tip = bill<=300 && bill>=50 ? bill * 0.15 : bill *  0.2;
console.log(`The bill was ${bill} and the tip was ${tip} and total value is ${bill + tip }`);*/

/*Functions declaration - a function can call, run and revoke..
function abc(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

}
const juice1 = abc(4,2);
console.log(juice1);

const juice2 = abc(2,4);
console.log(juice2);*/

/*examples for using functions..
const calcAvg = (a,b,c) => (a+b+c)/3;


// Test1

const scoreA = calcAvg(5,23,71);
const scoreB = calcAvg(65,54,94);
console.log(scoreA,scoreB);

const checkWinner = function(avgA,avgB)
{
    if(avgA >= 2* avgB){
        console.log(`A wins the trophy (${avgA} vs. ${avgB})`); 
    } else if (avgB >= 2* avgA){
        console.log(`B wins the trophy (${avgB} vs. ${avgA})`);
    } else{
        console.log(`No trophy wins`);
    }
    
}
checkWinner(scoreA,scoreB);
checkWinner(576,111);*/

/**Array....
// Add element
const friend = ['a','b','c'];
friend.push('d');
console.log(friend);
console.log(friend.length);

friend.unshift('e');
console.log(friend); // unshift method by which we can add any element in array without shift any other elements..

//Remove element
friend.pop('b');
console.log(friend);

friend.shift() //remove first element..
console.log(friend);

console.log(friend.indexOf('a'));// indexOF shows index values of elements...
console.log(friend.indexOf('e'));

friend.push(2);
console.log(friend.includes('a')); // include is method by which we check that a particular element is
                                   // availble in array or not, if present it will return true, if not present it returns false.. 
console.log(friend.includes(2));

//AN example of array..

const calTip = function(bill){
    return bill>= 50 && bill<=300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];

const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(bills,tips,totals); **/

/*OBJECTS...
 
const abcd = {
    fullName : 'Nripesh',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};

const efgh = {
    fullName : 'Amit',
    mass : 92,
    height : 1.95,
    calcBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
};
abcd.calcBMI();
efgh.calcBMI();
console.log(abcd.bmi, efgh.bmi);

if(abcd.bmi>efgh.bmi){
    console.log(`${abcd.fullName}'s BMI (${abcd.bmi})is higher than ${efgh.fullName}'s BMI (${efgh.bmi})..`);
} 
else if (efgh.bmi>abcd.bmi)   {
    console.log(`${efgh.fullName}'s BMI (${efgh.bmi}) is higher than ${abcd.fullName}'s BMI (${efgh.bmi}).. `);
}*/

//#Coding challange 4

const calcTip = function(bill){
    return bill>=50 && bill<= 300 ? bill*0.15 : bill * 0.2;
}
const bills = [22, 295, 176,440,37,105,10,1100, 86,52];
const tips = [];
const totals  = [];
for(let i = 0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(tips,bills,totals);

const calcAvg = function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        //sum = sum + arr[i];
        sum += arr[i];
        

    }
    return sum/arr.length;
}
console.log(calcAvg([3,4,5]));
console.log(calcAvg(totals));
console.log(calcAvg(bills));


