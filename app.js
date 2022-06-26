"use strict";
// 21 ** եռանկյուն
let result = "";
let star= "*";
for (let i = 0; i <= 7; i++) {
    for(let j = 7; j >= i; j--){
        
        if(j === 0){
            result += "*";
            break;      
        }
        if(j === i){
            result += star + "**";
            star += "**";
            break;
        } 
        result += " ";
    }
    result += "\n";
}
console.log(result);

// 21 ** քառակուսի

let square = "";
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++ ){
        square += "* ";
    }
    square += "\n";
}
console.log(square);



//  22 text

const story = {
    storyFunction(){
        let companyName = "Space Exploration Technologies Corporation (SpaceX)";
        let loc =  "ԱՄՆ Կալիֆորնիա նահանգի Հոտորն քաղաք";
        let date = "2020 թվականի մայիսի 30";
        let rocket = "Falcon 9";
        let planet = "Մարս";
        let when = "2002 թվականին";
        let myFav = "Իլոն Մասկի";
        let dr = "Falcon 1-ը և Falcon 9-ը";
        let shipName = "Dragon";
        let train = "Հիպերլուփ վակուումային գնացք";
        let motors = " Merlin, Kestrel, DracoDraco և SuperDraco";
        let nam = "SpaceX";


        console.log(`${companyName}, ${loc}ում գտնվող գլխավոր գրասենյակում տիեզերական տեխնիկա արտադրող ամերիկյան ընկերություն։ ${date}-ին այս ընկերությունը տիեզերք է արձակել ${rocket} հրթիռով ֆրյու Դրագոն տիեզերանավը։ SpaceX ընկերության այս նվաճումը բացառիկ է այն առումով, որ տիեզերագնացության պատմության ընթացքում առաջին անգամ մասնավոր ընկերությունն է տիեզերական թռիչք իրականցրել։ Պլանավորում է վեց տարում հասնել ${planet} մոլորակ՝ Երկրագնդի և Մարսի սինխրոնիզացիայի ժամանակ։

        Հիմնադրվել է ${when} PayPal-ի նախկին սեփականատեր և Tesla Motors-ի նախկին CEO ${myFav} կողմից տիեզերք թռչելու ծախսերը կրճատելու նպատակով՝ ուղի բացելով Մարսի գաղութացմանը։ Ընկերությունը մշակել է հրթիռ-կրիչներ ${dr}՝ ամենասկզբից նպատակ ունենալով դարձնել դրանք բազմանգամյա օգտագործման, ինչպես նաև ${shipName} տիեզերանավ՝ Միջազգային տիեզերական կայանը համալրելու համար։ Dragon V2-ի ուղևորային տարբերակը տիեզերագնացներին Միջազգային տիեզերական կայան տեղափոխելու համար գտնվում է մշակման եզրափակիչ փուլում։ 2015 թվականից սկսած՝ մասնակցում է նաև ${train}ի նախագծի իրագործմանը։
        
        Որակի և արժեքի վերահսկողության նպատակով արտադրանքի բաղադրիչների մեծամասնության արտադրությունը, վերամշակումը և թեստավորումը իրագործվում է՝ սեփական ռեսուրսների վրա հիմնվելով՝ ներառյալ ${motors} հրթիռային շարժիչները, որոնք օգտագործվում են Falcon կրող հրթիռների և Dragon տիեզերանավի վրա։ Դա թույլ է տալիս ${nam}-ին առաջարկել ամենացածր գները շուկայում, ինչպես նաև նշանակալիորեն նվազեցնում է արտադրության ժամանակը։`);
    }

};

story.storyFunction();
 
// 23  factorial

function factorial(num){
    let res = 1;
   if (num === 0 || num === 1){
    return res;
   } else {
    for(let i = num ; i > 1; i-- ){
        res *= i;
    }
    return res;
    }
          
}
console.log(factorial(6));

// 24 fibonacci

function fibonacci(a ,b){
    let arr = [a, b];
    let i = 2;
    while(i < 20){
        arr[i] = arr[i-2] + arr[i- 1];
        i++;
    }
    return arr;
}
console.log(fibonacci(0,1));

// 25 building

function build (casaBatllo){
    
    switch(casaBatllo){
        case "ճարտարապետ": console.log( "Անտոնիո Գաուդի");break;
        case "վայր": console.log("Բարսելոնա");break;
        case "այլ անվանում": console.log("Ոսկորների տուն");break;
        case "բացվել է": console.log(1912);break;
        case "տարածք": console.log("4300 մ2");break;
        case "բարձրություն": console.log(32);break;
        case "հարկեր": console.log(8);break;
        default: console.log("Փնտրեք համապատասխան պարամետրերով");
        
    }
}
build ("այլ անվանում");
build ("վայր");
build ("բարձրություն");
build ("ճարտարապետ");
build ("հարկեր");

// 26 cars

function car(model){
  if(model === "BMW"){
    console.log(`The concept XM, 
    5 POWERFUL FACTS:
    01	Radical new vehicle concept
    02	Preview of the most powerful BMW M car ever to go into series production
    03	Newly developed M Hybrid drive system with up to 550 kW (750 hp)
    04	All-electric range of up to 80 km
    05	All-new form of luxury and sense of space for the interior`);  
  } else if (model === "Mercedes"){
    console.log(`VISION AVTR ,
    new concept model`);

  }else{
    console.log("Միայն BMW կամ Mercedes)");
  }
}

car("BMW");

// 27 arrays

let arr = [2, -5, -17, 9, -13, 6, 25, -25, 67, 10, -8]; 
let arr2 = [];
let j = 0; 

for (let i = 0; i <= arr.length; i++){
    if(arr[i] < 0){
       arr2[j] = arr[i];
       j++;
    } 
    
}
arr.splice(0, arr.length);
console.log(arr , arr2);

// 28 facebook

const profile = {
    user: {
        name: "Վահագն Դիլբարյան",
        age: 36, 
        profession: "Մարկետոլոգ, Գործարար",
        autor: "100 Բիզնես գաղտնիքներ, 101 Բիսնես գաղտնիքներ",
        tel: +37455444444,
        email: "dilbaryan@gmail.com", 
        isHeFromVanadzor: true
    },
    posts: [
        {first: "Մանհեթեն կղզու գործարքը"},
        {second: "Wetherspoon-ի սեփականատերը"},
        {third: "Ճապոնիայի զարգացման ամենակարևոր որոշումը"}
    ],

    mostInterstingCaptersOfBook: [
        {one: "Google"},
        {two: "Bacardi"},
        {three: "Chrysler"},
        {four: "Apple"},
        {five: "Sony"},
        {six: "Intel"},
        {seven: "Microsoft"},
        {eight: "IBM"},
        {nine: "Singapore"}
    ],

};

// 29 10objects

let array = [
    {
        name: "Գարեգին Նժդեհ",
        profession: "Սպարապետ",
        nation: "Հայ"
    },
    {
        name: "Պարույր Սևակ",
        profession: "Բանաստեղծ",
        nation: "Հայ"
    },
    {
        name: "Սերգեյ Սմբատյան",
        profession: "Դիրիժոր",
        nation: "Հայ"
    },
    {
        name: "Նազիկ Ավդալյան",
        profession: "Ծանրորդուհի",
        nation: "Հայ"
    },
    {
        name: "Դեն Բրաուն",
        profession: "Գրող",
        nation: "ԱՄՆ"
    },
    {
        name: "Շումախեր",
        profession: "Մրցարշավորդ",
        nation: "Գերմանիա"
    },
    {
        name: "Իլոն Մասկ",
        profession: "Ինժեներ, Գործարար",
        nation: "ԱՄՆ"
    },
    {
        name: "Հայաո Միյաձակի",
        profession: "Ռեժիսոր, Անիմատոր",
        nation: "Ճապոնիա"
    },
    {
        name: "Ավի Հեֆեց",
        profession: "Վիրաբույժ",
        nation: "Իսրայել"
    },
    {
        name: "՜Սէռ՜ Թիմ Բեռնեռս-Լի", // ps. Միակ ծրագրավորողն է, որ ունի ասպետի կոչում, շնորհված անձամբ Ելիզավետա թագուհու կողմից
        profession: "Ծրագրավորող", // http 
        nation: "Մեծ Բրիտանիա"
    },
   
];

let names = "";

for(let i = 0; i < array.length ; i++){
    names += array[i].name + ", " ; 
}
console.log(names);

// 30 math

let math = {
    sq(x){
        console.log(x*x);
    },

    fact(num){
        let res = 1;
       if (num === 0 || num === 1){
        return res;
       } else {
        for(let i = num ; i > 1; i-- ){
            res *= i;
        }
        return res;
        }          
    },

    moj(y,z){
        console.log(y % z);
    }

    
};
math.sq(5);
console.log(math.fact(5));
math.moj(12 ,5);












 

