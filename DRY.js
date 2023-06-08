// DRY (Don't Repeat Yourself)
// Código que se repite
const juanAverage = (90 + 50+ 70) / 3
const alexaverage = (80 + 90 + 70 + 80) / 4
const candeAverage = (40 +100) / 2

console.log(juanAverage, alexaverage, candeAverage);

// Código simplificado
function getAverage(...grades) {
    return grades.reduce((prev, current) => prev + current, 0) / grades.length
}

const juanAverage2 = getAverage(90, 50, 70)
const alexaverage2 = getAverage(80, 90, 70, 80)
const candeAverage2 = getAverage(40, 100)

console.log(juanAverage2, alexaverage2, candeAverage2);