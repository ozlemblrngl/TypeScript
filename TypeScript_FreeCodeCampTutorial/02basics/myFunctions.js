"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5); // burada fonksiyon any 'dir bu iyi bir şey değil.Bu problemlere yol açacaktır.
// any olduğu için ister string ister number vs türünde kullanabiliriz.Hata vermez. Bize kızmaz.
// bunu çözmenin ve daha iyi yazmanın şekli aşağıdaki gibidir:
function addThree(num) {
    return num + 3;
}
addThree(5); // tipi number'dır. artık sadece sayılarla çalışacaktır
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(5); // burada yine metot any'dir. ve içine sayı koymamıza kızmaz string metodu uyguladığımız halde.
// doğrusu aşağıdaki gibidir.
function getUpper2(val) {
    return val.toUpperCase;
}
getUpper2("özlem");
var loginUser = function (name, email, isLogin) { };
loginUser("özlem", "ozlem@gmail.com", true);
// aşağıdaki durumda return değerinde typescript kızmayacaktır.
// o halde ben işleme girenin de çıkanın da number olmasını istiyorsam nasıl yazacağım?
function addFour(num) {
    return "hello";
}
// fonsiuonun süslü parantezlerinin öncesine type kolonu açacağım ve 
// type'ını number vereceğim
// artık ts bana kızmaya başlayacaktır return değerini string verirsem.
function addFive(num) {
    // return "hello" --> burada kızacaktır artık number olmadığından.
    return 5;
}
// aşağıda fonksiyonun tipine string versek return true kızacaktır.
// boolean versek return "200 ok kızacaktır."
// function getValue(myval:number):boolean{
//     if(myval > 5) {
//         return true
//     }
//     return "200 ok"
// }
// arrow function kullanımı
var getHello = function (s) {
    return "";
};
// aşağıda da typestript string olarak tipi belirleyecektir.
// ancak dönüş değeri için yine her şey girilebilir durumdadır bu halde
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero); // burata return 2 yazsak da kızmaz
});
// dönüş değerinin de string olması için aşağıdaki gibi yazmalıyız
var heros2 = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero); // buraya artık return 2 yazamayız.
});
// void
// aşağıdaki bir void fonksiyondur bu nedenle return değeri yoktur.
function consoleError(errmsg) {
    console.log(errmsg);
}
// never
// void de bir değer dönmez(return olmaz)
// neverda da hiçbir değer dönmez. birbirleriyle aynı gibi görünürler ama değildir.
// aşağıdaki örnekteki gibi birtakım hatayla baş etme yöntemi vardır ve bunu biz kasten yaparız. 
// hata fırlatırız.
// dökümantasyona göre never type ı değerleri temsil eder ancak asla gözlemlenemez.
// yani fonksiyon exception fırlatabilir ya da programın çalışmasını durdurabilir.
function handleError(errmsg) {
    throw new Error(errmsg);
}
