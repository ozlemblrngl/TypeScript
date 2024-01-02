"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "özlem",
    email: "ozlem@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "özlem", isPaid: true });
// normalde yukarıdaki gibi createUser içerisindeki objede 2 property var.
// aşağıdaki gibi metotla obje içeriisinde 3. propertyi kullanmaya kalkarsak kızıyor.
// ancak bunu bir değişkene atayıp, değişkeni de metot içinbe verdiğimizde kızmıyor.
// bu typescriptin objelerle çalışırkenki 
var newUser = { name: "özlem", isPaid: false, email: "ozlem@gmail.com" };
createUser(newUser);
// eğer return değeri de belirleyeceksek onun da tipi User olacak
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
// yukarıdaki durum garip ama teknik olarak mümkün.
// aşağıdaki syntax kafa karıştırıcı çünkü object'i bu şekilde görmeye alışık değiliz.
// ilk süslü parantez object için ikincisi fonksiyonun definitionu için
function createCourse() {
    return { name: "özlem", price: 5 };
}
var myUser = {
    _id: "1234",
    name: "özlem",
    email: "o@gmail.com",
    isActive: true
};
myUser.email = "ozlem@gmail.com";
