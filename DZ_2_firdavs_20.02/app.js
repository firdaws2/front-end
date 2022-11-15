//Создать объект банковской карты со следующими полями: Номер карты(строка),
// Дата окончания(строка), Имя владельца(строка), Тип карты(строка), CVC(число).
var bankCard = {
    cardNumber: "1234567891234567",
    dateExp: "12.12.2027",
    customerName: "Firdavs Rizoev",
    cardType: "VISA",
    CVC: 123,
}
//Создать объект банковского филиала: Код(число), Название(строка), График работы (строка),
//Работает ли точка вечером (логический),
//Адрес филиала (объект) со следующими полями:
//Город (строка), улица (строка), дом(строка)
var Bank ={
    codeOfBank: 1180002,
    nameOfBank:"OPTIMA BANK",
    schedule: "MON-FRI",
    nighTime: true,
    address:{
        city:"Osh",
        street:"Lenina",
        homeNum:"145"
    }
}

console.log(bankCard)
console.log(Bank)

//У нас имеется 4 системы быстрых денежных переводов:
//Unistream, RIA, Contact, MoneyGram. По аналогии с карточными процессингами (писали на уроке)
//реализовать логику отправки денег (можно просто писать в консоли что деньги отправлены определенной системой)

var transfer = prompt("Какой системой быстрых денежных переводов хотите воспользоваться" +
    "\n UniStream\n RIA\n Contact\nMoneyGram")
switch (transfer) {
  case "Unistream":
    console.log("Деньги отправлены через Unistream");
    break;
  case "RIA":
    console.log("Деньги отправлены через RIA")
    break;
  case "Contact":
    console.log("Деньги отправлены через Contact");
    break;
  case "MoneyGram":
    console.log("Деньги отправлены через MoneyGram");
    break;
  default:
    console.log("система выбрана неверно!");
}

//Написать программу конвертер арабских чисел (от 1 до 9) в римские.
//Например: пользователь вводит 4 -> IV, 9 -> IX  и т.д.

var number = prompt("Введите число от 1 до 9")

switch (number) {
    case"1":
        console.log("I")
        break;
    case"2":
        console.log("II")
        break;
    case"3":
        console.log("III")
        break;
    case"4":
        console.log("IV")
        break;
    case"5":
        console.log("V")
        break;
    case"6":
        console.log("VI")
        break;
    case"7":
        console.log("VII")
        break;
    case"8":
        console.log("VIII")
        break;
    case"9":
        console.log("IX")
        break;
    default:
        alert("Число должно быть от 1 до 9!")
}
//Создайте переменную customerType. В нее положите либо 1, либо 2. Тип клиента: 1 - физическое лицо, 2 - юридическое лицо.
//Попрактикуйтесь с тернарным оператором, выводить вместо числа текст. Например: customerType = 1 -> Физ. лицо

//условие? выражение1 : выражение2

var customerType = 2;
customerType === 1 ? console.log("Физ. лицо"): console.log("юр. лицо")