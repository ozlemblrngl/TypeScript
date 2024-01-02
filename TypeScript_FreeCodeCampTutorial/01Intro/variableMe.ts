let greeting : string ="hello özlem"

console.log(greeting)

// greeting = 6 --> bunu yaptığımız an sistem bizi uyarıyor bu bir string sayı atayamazsın diye.

let mynum = 12

// mynum.toUpperCase() --> hata verecektir çünkü string metodudur ve numbera uygulanamaz.

// number --> typescripte integer ve float yoktur sadece number vardır.

let userId: number = 444516.4 // --> kusuratlı sayılar da number'dır.
// burada let userId: number = 444516.4 yazmamız best practice e uygun değil. Çünkü değer olarak sayı verdiğimizde
// typescript bunun sayı olduğunu zaten anlıyor. Anladığı için de gidip :number yazmamıza gerek kalmıyor.
// js de bu böyle değil. js'de bunu number olarak atamasını yapmış olmuyorsun değere number vermekle. ama typescript bunu bu saatten sonra artık number olarak atıyor.
// bu nedenle doğru yazımı aşağıdaki gibidir:

let userId2 = 556.2 // typescript bunun bir number olduğunu biliyor.,


// boolean

let isLoggedIn: boolean = false
// burada da :boolean yazmamıza gerek yok, typescript true ya da false dedğimiz an onun boolean olduğu atamasını yapıyor zaten.
// doğrusu aşağıdaki gibidir.
// goood practice e bu uygundur. 
// ts akıllı bir development tool'dur.

let isLoggedIn2 = false

// any 
// any yi süreli kullanmak good practice değildir.

let hero;

function getHero(){
    return "thor"
}

hero = getHero() // burada hero any'dir.
// burada ts tipinin ne olduğunu tam belirleyemiyor. ben istersem "thor" yerine boolean veya number yazabilirim 
// bu good practice değildir.
// doğru yazımı şu şekilde olmalıdır.

let hero2 : string;

function getHero2(){
    return "thor"
}
hero2 = getHero2()


export {} // bu kod şimdilik sıkıntı yok diye koyduğumuz bir kod yoksa hata veriyor. hataya döneceğiz sonra.