// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". No hace falta filter
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");

  const users = function createUsers() {
    const lista = [
      { name: "usuario1", country: "spain", money: 199, premiumAccount: true },
      { name: "usuario2", country: "france", money: 0, premiumAccount: false },
      { name: "usuario3", country: "spain", money: 537, premiumAccount: false },
      { name: "usuario4", country: "italy", money: 1004, premiumAccount: true },
      { name: "usuario5", country: "spain", money: 250, premiumAccount: false },
      { name: "usuario6", country: "ireland", money: 799, premiumAccount: true },
      { name: "usuario7", country: "spain", money: 3345, premiumAccount: false }
    ];
    return lista;
  }();

  const spanishUsers = filterUsers(users);

  console.log("Lista de todos los usuarios")
  users.forEach(user => console.log(user.name+", "+user.country+", "+user.money+", "+user.premiumAccount));
  console.log("\nLista de todos los usuarios españoles con mas de 200 euros")
  spanishUsers.forEach(user => console.log(user.name+", "+user.country+", "+user.money+", "+user.premiumAccount));
}

function filterUsers(list){
  const returnList = list.filter(user => user.country.includes("spain") && 
  user.money > 200);
  return returnList;
}
