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