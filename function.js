
/* 1.1	Funkcija random treba da vrati random broj koji je veci ili jednak sa min ili manji ili jednak sa max.
Funkcija kao ulazne parametre sme da primi samo broj.
Potrebno je validirati ulazne paramtere i u slucaju nepravilnih parametara, ispisati gresku. */

function random(minimum, maximum) {
	if (Number.isInteger(minimum) !== true || Number.isInteger(maximum) !== true) {
		return 'you entered the wrong parameter';
	}
	const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return num;
}
/* 1.2  Potrebno je vratiti najmanji broj koji se nalazi u nizu (array.length > 5).
Niz ne mora da bude samo niz brojeva, vec moze sadrzati bilo sta kao clan niza.
U slucaju da ne postoji ni jedan broj u nizu, vratiti false
Potrebno je validirati funkciju i prikazati adekvatnu gresku u slucaju neispravno unetog niza. */

function minIntegerFromArray(someArray) {
	const toStr = someArray.toString();
	const num = toStr.match(/\d/g); // return numbers from string
	if (num === null) {
		return 'enter number in array';
	}
	const newArray = Math.min(...num);
	return newArray;
}
/* 1.3  U ovu funkciju se unosi neki string >= 10 karaktera.
Funkcija mora da proveri da li u tom stringu postoje celi brojevi (integeri)
i da kao rezultat vrati najmanji od postojecih brojeva ili false ako nije nadjen ni jedan.
Potrebno je validirati funkciju i prikazati adekvatnu gresku u slucaju neispravno unetog stringa. */

function minIntegerFromString(someString) {
	const numFromString = someString.match(/\d+/g);// return the numbers from the string
	if (numFromString === null) {
		return 'Enter the correct parameters!';
	}
	return Math.min(...numFromString);
}
/*  1.4  Funkcija ima dva ulazna paramtera. Prvi je niz stringova, a drugi je tip koji moze imati vrednost 0, ili 1.
Funkcija kao rezultat  treba da vrati sve stringove koji su uneti spojene u jedan, ali po odredjenom redosledu.
Redosled se odredjuje na osnovu tipa. Za tip 0 vraca se string spojen od najmanjeg ka najvecem,
za tip 1 vraca se string spojen od najveceg ka najmanjem. */

function concatStringsByLength(array, types) {
	const arraySort = array.sort();
	if (types === 0) {
		const arrayJoin = arraySort.join('');
		return arrayJoin;
	} if (types === 1) {
		const reverseSort = arraySort.reverse();
		const reverseJoin = reverseSort.join('');
		return reverseJoin;
	} return 'Error, enter a type';
}

module.exports.random = random;
module.exports.minIntegerFromArray = minIntegerFromArray;
module.exports.minIntegerFromString = minIntegerFromString;
module.exports.concatStringsByLength = concatStringsByLength;
