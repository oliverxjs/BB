// .slice corta parametros de um array 

let GroupofFriends = ["Marcos", "Junior", "Gustavo", "Isaque"]

const grupo1 = GroupofFriends.slice(0,GroupofFriends.length/2)
const grupo2 = GroupofFriends.slice(GroupofFriends.length/2)

console.log(`Amigos do grupo 1: ${grupo1}`)
console.log (`Amigos do grupo 2: ${grupo2}`)