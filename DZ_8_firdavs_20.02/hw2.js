export const names=["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]

export const capNames = names.map((item)=>{
    return item[0].toUpperCase()+item.slice(1).toLowerCase()
})

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
  
export const latNames = capNames.map(item=>RusToLat(item))

export const Anames = capNames.filter(item=>item[0]==='А')
export const largename = names.reduce((item,item2)=>{
    return item.length>item2.length?item:item=item2
 })