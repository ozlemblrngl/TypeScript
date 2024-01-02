function addTwo(num){
    return num + 2
}

addTwo(5) // burada fonksiyon any 'dir bu iyi bir şey değil.Bu problemlere yol açacaktır.
// any olduğu için ister string ister number vs türünde kullanabiliriz.Hata vermez. Bize kızmaz.

// bunu çözmenin ve daha iyi yazmanın şekli aşağıdaki gibidir:

function addThree(num: number)
{
    return num + 3
}

addThree(5) // tipi number'dır. artık sadece sayılarla çalışacaktır

function getUpper(val){
    return val.toUpperCase()
}

getUpper(5) // burada yine metot any'dir. ve içine sayı koymamıza kızmaz string metodu uyguladığımız halde.

// doğrusu aşağıdaki gibidir.

function getUpper2(val: string){
    return val.toUpperCase
}

getUpper2("özlem")

let loginUser = (name: string, email: string, 
    isLogin: boolean) => {}

    loginUser("özlem","ozlem@gmail.com",true)

// aşağıdaki durumda return değerinde typescript kızmayacaktır.
// o halde ben işleme girenin de çıkanın da number olmasını istiyorsam nasıl yazacağım?

function addFour(num: number){
        return "hello"
}

// fonsiuonun süslü parantezlerinin öncesine type kolonu açacağım ve 
// type'ını number vereceğim
// artık ts bana kızmaya başlayacaktır return değerini string verirsem.

function addFive(num: number):number{
   // return "hello" --> burada kızacaktır artık number olmadığından.
   return 5
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

const getHello = (s: string):string => {
    return ""
}
    
export{}