const user = {
    name: "özlem",
    email: "ozlem@gmail.com",
    isActive: true

}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "özlem", isPaid:true})

// normalde yukarıdaki gibi createUser içerisindeki objede 2 property var.
// aşağıdaki gibi metotla obje içeriisinde 3. propertyi kullanmaya kalkarsak kızıyor.
// ancak bunu bir değişkene atayıp, değişkeni de metot içinbe verdiğimizde kızmıyor.
// bu typescriptin objelerle çalışırkenki 
let newUser = {name: "özlem", isPaid: false, email: "ozlem@gmail.com"}

createUser(newUser)

// yukarıdaki sıkıntıyı aşmanın yolu type ifadesini kullanarak bir tip üretmektir. objenin içerisindeki propertyleri tanımlarız içerisinde de.
// bir kez bunu yaptığımızda her user değişkeni kullanıldığında objesinin içerisindeki propertylere bağlı kalınmış olacak.
// tabiki bunu yaparken property'lerin de tipini yazıyoruz.
// ve user'ın tipi de User oluyor. User tipi içerisinde de ilgili propertyleri tutuyor.

type User = {
    name: string;
    email: string;
    isActive: boolean
}

// eğer return değeri de belirleyeceksek onun da tipi User olacak
function createUser2(user: User):User{
    return {name:"", email:"", isActive:true}
}

// yukarıda görüldüğü gibi kendi type imizi tanımlayabiliyoruz.
// bu tanımlamaya göre örn string i de kendi tipimize çeviremez miyiz? yani ben bunu string değil de Mystring olarak kullanacağım diyemez miyiz?
// bu kurallarla evet diyebiliriz.

type Mystring = string // artık string benim isimlendirdiğim tip ile kullanılabilir.
// yukarıdaki durum garip ama teknik olarak mümkün.


// aşağıdaki syntax kafa karıştırıcı çünkü object'i bu şekilde görmeye alışık değiliz.
// ilk süslü parantez object için ikincisi fonksiyonun definitionu için

function createCourse():{name: string, price: number}{
    return {name:"özlem", price:5}
}


// readonly, ? (Question Mark)
// sadece okunur, değiştirilemez.
// question mark optional yani seçimlik olan durumlar için kullanılır.
// örne herkesin kredi kartı olmayabilir bu durumda detaylarına ilişkin property doldurulmayabilir.

type User2 = {
    readonly _id: string
    name: string,
    email: string,
    isActive: boolean
    creaditcardDetails?: number

}

type cardNumber = {
    numberCard: string
}

type cardDate = {
    dateCard : string
}

// aşağıdaki gibi mevcut tanımlanan tiplerin içeriği başka bir tip tanımlanmak suretiyle değiştirilebiliyor. İyi bir yöntem değil ama yapılmasına imkan var görüldüğü üzere.
// çok fazla yazılımcının olduğu ortamda bu şekilde değiştirilmeleri mümkün bu da sıkıntılı bir durum.

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

let myUser: User2 = {
    _id: "1234",
    name: "özlem",
    email:"o@gmail.com",
    isActive:true
}

myUser.email = "ozlem@gmail.com"
// myUser._id = "5662" --> bunu yapmayacaktır. çünkü readonly sadece okunurdur değiştirilemez.

export {}