//FUNCTION FOREACH + FILTER

//const players = [
//    { name: 'Yuri', lvl: 90 },
//    { name: 'Martin', lvl: 10 },
//    { name: 'Elena', lvl: 75 },
//    { name: 'Steve', lvl: 20 },
//    { name: 'Olga', lvl: 55 },
//    { name: 'Raj', lvl: 30 },
//    { name: 'Liu', lvl: 85 },
//    { name: 'Zara', lvl: 40 },
//    { name: 'Pedro', lvl: 65 },
//    { name: 'Anika', lvl: 50 } ]
//
//const result = players.filter(player => checkLvl(player.lvl))
//
//function checkLvl(lvl) {
//    return lvl > 30
//}
//
//result.forEach(player => {
//    console.log(`${player.name}, ${player.lvl}`)
//})

//FUNCTION MAP + MATH.MAX

//const players = [
//    { name: 'Yuri', lvl: 90 },
//    { name: 'Martin', lvl: 10 },
//    { name: 'Elena', lvl: 75 },
//    { name: 'Steve', lvl: 20 },
//    { name: 'Olga', lvl: 55 },
//    { name: 'Raj', lvl: 30 },
//    { name: 'Liu', lvl: 85 },
//    { name: 'Zara', lvl: 40 },
//    { name: 'Pedro', lvl: 65 },
//    { name: 'Anika', lvl: 50 } ]
//
//const playerArr = players.map(player => player.name)
//
//const maxLevel = Math.max(...players.map(player => player.lvl))
//
//console.log(playerArr + '\n' + 'Maximum level: ' + maxLevel)

//FUNCTION REDUCE

//const players = [
//    { name: 'Yuri', lvl: 90 },
//    { name: 'Martin', lvl: 10 },
//    { name: 'Elena', lvl: 75 },
//    { name: 'Steve', lvl: 20 },
//    { name: 'Olga', lvl: 55 },
//    { name: 'Raj', lvl: 30 },
//    { name: 'Liu', lvl: 85 },
//    { name: 'Zara', lvl: 40 },
//    { name: 'Pedro', lvl: 65 },
//    { name: 'Anika', lvl: 50 } ]
//
//const sumOfLvls = players.reduce((acc, player) => acc + player.lvl, 0)
//
//console.log(sumOfLvls)

//FUNCTION MAP + INCLUDES
//const players = [
//    { name: 'Yuri', lvl: 90 },
//    { name: 'Martin', lvl: 10 },
//    { name: 'Elena', lvl: 75 },
//    { name: 'Steve', lvl: 20 },
//    { name: 'Olga', lvl: 55 },
//    { name: 'Raj', lvl: 30 },
//    { name: 'Liu', lvl: 85 },
//    { name: 'Zara', lvl: 40 },
//    { name: 'Pedro', lvl: 65 },
//    { name: 'Anika', lvl: 50 } ]
//
//const playerArr = players.map(player => player.name)
//
//let checkNames = playerArr.includes('Liu')
//
//console.log(checkNames)