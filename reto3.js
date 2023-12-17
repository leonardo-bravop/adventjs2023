/* Tu tarea es escribir una función que identifique y devuelva el 
primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.*/

/* A tener en cuenta:
- Siempre habrá un paso de diferencia o ninguno. 
- La modificación puede ocurrir en cualquier lugar de la cadena. 
- La secuencia original puede estar vacía */


function findNaughtyStep(original, modified) { 
    const originalLength = original.length
    const modifiedLength = modified.length
    const charWasDeleted = modifiedLength < originalLength 
    
    if (originalLength === 0) return ''

    for (const [index, char] of modified.split('').entries()) {
        if (char !== original[index]) {
            return charWasDeleted ? original[index] : char
        }
    }

    return charWasDeleted ? original.at(-1) : ''
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''

const original4 = 'letsee'
const modified4 = 'letse'
console.log(findNaughtyStep(original4, modified4)) // 'e'