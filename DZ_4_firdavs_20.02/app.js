//Написать функцию переворота строки (стандартную функцию reverse НЕ ИСПОЛЬЗОВАТЬ).
//Например: "привет" -> "тевирп" и т.д.

function reverseString(str) {
    let newString = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString;
}
console.log(reverseString('firdavs'))

//Написать функцию которая вычисляет строку палиндром (палиндром - это строка читающаяся в обе стороны одинаково).
//Например: "потоп" -> true, "qwerty" -> false, "madam" -> true и т.д.

function palindrome(str) {
	return str === str.split('').reverse().join('') ;
}
 console.log(palindrome('потоп'));
 console.log(palindrome('qwerty'));

//Написать функцию которая принимает неограниченное количество аргументов и возвращает их среднее арифметическое.
//Например: func(1,2,3,4) -> 2.5, func(1,2,3,4,5,6,7,8,9,10) -> 5.5

function Arif(){
    let ar = 0
    Array.from(arguments).map((n)=>{
        ar+=n
    })
    console.log(ar/arguments.length)
}
 Arif(2,2)
//Написать функцию транслитерации строки с кириллицы на латиницу (транслитерация- это процесс по замене букв одного алфавита на другой).
//Например: "Евгений" -> "Evgeniy", "Киселев" -> "Kiselev", "Евгений Киселев" -> "Evgeniy Kiselev".
//Обратите внимание что символы которые на входят в алфавит надо сохранить как есть.

 function RusToLat(str) {
  let ru = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
    'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
    'ъ': 'ie', 'ь': '', 'й': 'i'
  };
  let newString = [];

  return [...str].map(l => {
    let latL = ru[l.toLocaleLowerCase()];

    if (l !== l.toLocaleLowerCase()) {
      latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
    } else if (latL === undefined) {
      latL = l;
    }

    return latL;
  }).join('');
}


console.log(RusToLat('Ризоев фирдавс'));

//Дописать функцию validateInn начатую на уроке. Добавить проверку что все символы в строке являются цифрами.
//А то сейчас если я введу вот так(скриншот) то получу что это правильный ИНН))

function validateInn(inn) {
	var firstNumber = Number(inn && inn[0])

	return !!inn && inn.length === 14 && [0, 1, 2].includes(firstNumber) && typeof (Number(inn))==='number' && !isNaN(Number(inn))  ;
}
 console.log( !!validateInn('1qwertyuiopasd'))

 console.log( !!validateInn('12345678911111'))