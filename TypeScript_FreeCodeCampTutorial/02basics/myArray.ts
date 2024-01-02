const superHeros: string[] = []

superHeros.push("spiderman")

// aşağıdaki gibi de yazılabilir hiçbir farkı yoktur.
const superHeros2: Array<string>= []

superHeros2.push("thor")


const heroPower: number[] = []

heroPower.push(6)

// aşağıdaki gibi de yazılabilir 

const heroPower2:Array<number> = []

heroPower2.push(8)

// kendi belirlediğimiz tip de bir array olabilir

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name:"özlem", isActive: true})

// array içinde array de olabilir

const myModels:number[] [] = [
    [255,416,754],
    [54,75,89]
]

// ReadonlyArray type

// :ReadonlyArray<string> --> şeklinde kullanılır. Sadece okunabilirdir, değiştirilemez.

export{}
