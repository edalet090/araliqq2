class Message {
    constructor(author, text) {
        this.author = author;
        this.time = new Date();
        this.text = text;
    }
    toString() {
        return `${this.time.getHours()} : ${this.time.getMinutes()} ${this.author}: ${this.text}`
    }
}
class Messenger {
    constructor() {
        this.mesajlar = []
    }
    show_history(author, text) {
        this.mesajlar.forEach(item => console.log(item))
    }
    send(author, text) {
        let message = new Message(author, text)
        this.mesajlar.push(message.toString())
    }

}
let messenger = new Messenger()
messenger.send('Fidi', 'salam')
messenger.send('Ayan', 'necesen')
messenger.show_history()
