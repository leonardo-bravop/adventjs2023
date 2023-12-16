/* Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es
 escribir una función que, dada una lista de regalos y los materiales disponibles,
 devuelva una lista de los regalos que se pueden fabricar
 */

function manufacture(gifts, materials) {
    const materialsDict = dictFromString(materials)
    const validGifts = []

    for (const gift of gifts) {
        if (canManufacture(gift, materialsDict)) validGifts.push(gift)
    }

    return validGifts
}

function dictFromString(string) {
    const dict = {}

    for (const char of string.split('')) {
        dict[char] = true
    }

    return dict
}

function canManufacture(gift, dict) {    
    for (const char of gift.split('')) {
        if (!dict[char]) return false
    }

    return true
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []