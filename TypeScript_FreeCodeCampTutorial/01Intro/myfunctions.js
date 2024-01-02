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
