//Completa la función que tomando dos números como argumento devuelva el más alto.
  //function sum(numberOne , numberTwo) {
   // ITERACION 1
  
   const sum=(numberOne, numberTwo)=>{
    let hiestNumber=numberOne>numberTwo? numberOne :  numberTwo;
    return hiestNumber;
 }
 sum(1,2);
 console.log(sum(1,2));

 /*Completa la función que tomando un array de strings como argumento devuelva el más largo, 
 en caso de que dos strings tenga la misma longitud deberá devolver el primero.
 Puedes usar este array para probar tu función:*/
 //const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
 //function findLongestWord(param) {
 
 //
 /*const findLongestWord = (superHero)=>{
   let largest="";
   avengers.forEach(
           
   )
   
   
 }*/


 /*Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:*/


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(list) {
 let longestWord ="";
 list.forEach(element => {
   longestWord = element.length >longestWord.length? element : longestWord;
 });
 return longestWord
}
console.log(findLongestWord(avengers));

/***Iteración #3: Calcular la suma**
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función:*/


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(list) {
 let total = 0;
 for (element of list){
     total += element;
  }
  return total;
 }
console.log(sumAll(numbers));



/*Iteración #4: Calcular el promedio**
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/


const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(list) {
 let total = 0;
 for (element of list){
     total += element ;      
  }
  return total/list.length;
 }
  
console.log(average(numbers2));



/*Iteración #5: Calcular promedio de strings**
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo 
contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(list) {
 let total2=0;
 list.forEach((element)=>{
   if(typeof element==="number"){
       total2+=element;
   }else if(typeof element==="string"){
           total2+=element.length
   }else{
     console.log("Hasta Luego")
   }
 })
 
   return total2
}
 console.log(averageWord(mixedElements))


 /*Iteración #6: Valores únicos
Crea una función que reciba por parámetro un array y 
compruebe si existen elementos duplicados, en caso que existan los elimina 
para retornar un array sin los elementos duplicados. Puedes usar este array 
para probar tu función:*/


const duplicates = [
 'sushi',
 'pizza',
 'burger',
 'potatoe',
 'pasta',
 'ice-cream',
 'pizza',
 'chicken',
 'onion rings',
 'pasta',
 'soda'
];
function removeDuplicates(list) {
  let unicos= [];
  list.forEach((element)=>{
       if(!unicos.includes(element)){
         unicos.push(element)
       }
  })
  console.log(unicos)
}

removeDuplicates(duplicates)


/*Iteración #7: Buscador de nombres
Crea una función que reciba por parámetro un array y el valor que desea comprobar 
que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve 
un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/


const nameFinder = [
 'Peter',
 'Steve',
 'Tony',
 'Natasha',
 'Clint',
 'Logan',
 'Xabier',
 'Bruce',
 'Peggy',
 'Jessica',
 'Marc'
];
function finderName(list,text) {
 let almacenIndex = nameFinder.indexOf(text);
 if(almacenIndex==-1){
   return false;
 }else{
   return true,almacenIndex;
 } 
}
console.log(finderName(nameFinder,"Peggy"));




/*Crea una función que nos devuelva el número de veces 
que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
*/

const counterWords = [
 'code',
 'repeat',
 'eat',
 'sleep',
 'code',
 'enjoy',
 'sleep',
 'code',
 'enjoy',
 'upgrade',
 'code'
];
function removeDuplicates2(list) {
 let unicos2= [];
 let repeticiones=[];
 
 list.forEach((element)=>{
      if(!unicos2.includes(element)){
        unicos2.push(element)
      }
 })
 console.log(unicos2)
 let contador =0;
 unicos2.forEach((repeticiones) => {
   list.forEach((repeticionesDos)=>{
         if(repeticiones==repeticionesDos){
           contador ++;
         };
   }); repeticiones.push(repeticiones + "  " + contador);
       
 });return repeticiones;
}

console.log(removeDuplicates2(counterWords))



