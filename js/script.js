let inputTouched = {
    email: false,
    password: false
}

const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const inputWrapperEmail = document.getElementById("input-wrapper-email")
const inputWrapperPassword = document.getElementById("input-wrapper-password")
const warningEmail = document.getElementById("warningEmail")
const warningPassword = document.getElementById("warningPassword")

const inputOnBlur = (ev) =>{
    if(inputTouched.email){
        if(!validateEmail(inputEmail.value)){
            warningEmail.style.display="block"
            inputEmail.style.borderBottom='2px solid #f00'
        }
        else{
            warningEmail.style.display="none"
            inputEmail.style.borderBottom="none"
        }
    }
    if(inputTouched.password){
        if(!(inputPassword.value.length >= 4 && inputPassword.value.length <= 60)){
            warningPassword.style.display="block"
            inputPassword.style.borderBottom='2px solid #f00'
        }
        else{
            warningPassword.style.display="none"
            inputPassword.style.borderBottom="none"
        }
    }
}

const inputOnFocus = (ev) =>{
    inputTouched[ev.name] = true;
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Factory Method-ceny-filmow
class SimpleMovie{
    constructor(name){
        this.name = name
        this.cost = 20
    }
}

class StandardMovie{
    constructor(name){
        this.name = name
        this.cost = 35
    }
}

class PremiumMovie{
    constructor(name){
        this.name = name
        this.cost = 50
    }
}

class MoviesFactory {

    static list = {
        simple: SimpleMovie,
        standard: StandardMovie,
        premium: PremiumMovie
    }

    create(name, type='simple'){
        const Movies = MoviesFactory.list[type] || MoviesFactory.list.simple
        const movie = new Movies(name)
        movie.type = type
        movie.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return movie
    }
}

const factory = new MoviesFactory()

const newmovies = [
    factory.create('Shrek', 'simple'),
    factory.create('Matrix', 'premium'),
    factory.create('Piraci z karaibów', 'standard'),
    factory.create('Mission impossible', 'premium'),
    factory.create('Smerfy')
]

newmovies.forEach( m => { m.define()})


//mediator design pattern

class User {
  constructor(nick) {
    this.nick = nick; 
    this.chatroom = null; 
  }

  addToChatroom(chatroom) {
    // za pomocą tej metody może dołączyć do czatu
    this.chatroom = chatroom;
  }

  sendMessage(message, to) {
    // może wysłać wiadomość - trafi ona do mediatora
    this.chatroom.send(message, this, to);
  }

  receive(message, from, type) {
    // może wyświetlić otrzymaną wiadomość oraz jej nadawcę
    // wiadomość otrzymamy od mediatora
    console.log(
      `[Do ${this.nick}] Nowa ${type} wiadomość od ${from.nick}: ${message}`
    );
  }
}

// "Chatroom" to mediator w naszym systemie
// o on będzie odbierał i wysyłał dalej wiadomości
class Chatroom {
  constructor() {
    this.participants = {}; // mediator wie o wszystkich uczestnikach czatu
  }

  join(participant) {

    this.participants[participant.nick] = participant;

    participant.addToChatroom(this);
  }

  /* 
      Mediator jest odpowiedzilany za prawidłowe rozsyłanie dalej
      wiadomości które otrzyma od użytkowników.
      Możemy dodać tutaj wiele funkcjonalności jak np.
      filtrowanie niecenzuralnych słów, szyfrowanie/deszyfrowanie, itd.  
  */
  send(message, from, to) {
    if (to) {
      // jeżeli sprecyzujemy odbiorcę,
      // mediator wyśle to jako wiadomość prywatną
      to.receive(message, from, "prywatna");
    } else {
      // w przeciwnym wypadku wiadomośc trafi na czat grupowy
      // tzn. zostanie wysłana do wszystkich
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from, "publiczna");
        }
      }
    }
  }
}
// Tworzymy instancję naszego mediatora
const chatroom = new Chatroom();

// Tworzymy uczestników czatu
const jan = new User("Jan");
const kamil = new User("Kamil");
const aga = new User("Aga");
const piotr = new User("Piotr");

// użytkownicy czatu dołączają do pokoju czatu
chatroom.join(jan);
chatroom.join(kamil);
chatroom.join(aga);
chatroom.join(piotr);

// i wysyłają na czacie wiadomości
jan.sendMessage("Czy znacie jakieś fajne filmy?");
jan.sendMessage("Jakies nowe seriale?"); // wiadomość grupowa
kamil.sendMessage("Hej, prywatnie mogę Ci polecić Wiedzmina", jan);
aga.sendMessage("Nuda straszna");
piotr.sendMessage("Aga, chyba nie ten kanał.", aga); // wiadomość prywatna



//Constructor design pattern

class Serial {
	constructor(tytul, cena, ilosc_odcinkow, wiek) {
    	this.tytul = tytul;
    	this.cena = cena;
		this.ilosc_odcinkow = ilosc_odcinkow;
	 	this.wiek = wiek;

    }
	writeBio(){
      	return `Serial ${this.tytul} kosztuje ${this.cena} i ma ${this.ilosc_odcinkow} odcinków. (PEGI: +${this.wiek}) `
	}
}
const Wiedzmin  = new Serial('Wiedzmin', '19.99', '16', '18');

console.log(Wiedzmin.writeBio());


 //test fucntion
  function add(a, b) {
    return a + b;
  }
  
  //funkcja wyswietlajaca informacje o zablokowanym uzytkoniku
  
  function ban(nick, reason) {
          return `Użytkownik ${nick} został zbanowany! (Powód: ${reason})`
    }
