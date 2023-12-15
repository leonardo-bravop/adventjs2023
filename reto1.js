/* ¡Encuentra el primer número de identificación que se ha repetido, 
donde la segunda ocurrencia tenga el índice más pequeño! */

function findFirstRepeated(gifts) {
    let leastOcurrenceIndex = giftIds.length - 1
    let foundId = null

    const idsDict = indexDict(gifts)
    
    for (const idKey in idsDict) {
        const indexesArray = idsDict[idKey]
        const secondOcurrence = indexesArray[1]
    
        if (indexesArray.length > 1 && secondOcurrence <= leastOcurrenceIndex) {
            leastOcurrenceIndex = secondOcurrence
            foundId = idKey
        }
    }

    return foundId ?? -1
}

function indexDict(array) {
    const dict = {}

    for (const [index, elem] of array.entries()) {
        if (!Array.isArray(dict[elem])) dict[elem] = [index]
        else dict[elem].push(index)
    }

    return dict
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log('firstRepeatedId', firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log('firstRepeatedId', firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log('firstRepeatedId', firstRepeatedId3) // 5