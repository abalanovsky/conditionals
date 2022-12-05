const year = prompt('Enter your year of birthday')
if (year === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження')
    throw 'Year was not provided'
}
const city = prompt('Enter your city')
if (city === null) {
    alert('Шкода, що Ви не захотіли ввести своє місто')
    throw 'City was not provided'
}
const sport = prompt('Enter your favorite kind of sport')
if (sport === null) {
    alert('Шкода, що Ви не захотіли ввести вид спорту')
    throw 'Kind of sport was not provided'
}

const age = new Date().getFullYear() - +year

let geoMessage
if (city === 'Київ') {
    geoMessage = 'Ти живеш у столиці України'
} else if (city === 'Вашингтон') {
    geoMessage = 'Ти живеш у столиці Сполучених Штатів'
} else if (city === 'Лондон') {
    geoMessage = 'Ти живеш у столиці Великобританії'
} else geoMessage = `Ти живеш у місті ${city}`

let sportsMessage = 'Круто! Хочеш стати '
if (sport === 'Теніс') {
    sportsMessage += 'Сереною Вільямс?'
} else if (sport === 'Гольф') {
    sportsMessage += 'Хідекі Мацуяма?'
} else if (sport === 'Бокс') {
    sportsMessage += 'Олександром Усиком?'
} else sportsMessage = ''

alert(`Твій вік: ${age}\n${geoMessage}\n${sportsMessage}`)
