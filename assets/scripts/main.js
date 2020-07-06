const coin1 = new Coin(1)
const coin2 = new Coin(0)
const coin3 = new Coin(1)

console.group("Coins")
console.log({ coin1, coin2, coin3 })
console.groupEnd()

const coin4 = new Coin(0)

console.log(coin4)