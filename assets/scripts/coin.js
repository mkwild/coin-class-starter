class Coin {

    constructor (initialState) {

        this.state = initialState

    }

    flip () {
        console.log("this.flip() has been invoked.")
    }
    toString () {
        console.log("this.toString() has been invoked.")
    }
    toHTML () {
        console.log("this.toHTML() has been invoked.")
    }

}