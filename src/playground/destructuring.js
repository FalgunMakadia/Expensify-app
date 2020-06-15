
// Object Destructuring

const book = {
    name: 'Harry Potter', 
    author: 'J K Rowling',
    publisher: {
        name: 'White Shadow',
        address: {
            city: 'London, UK',
            street: '7, Backer\'s Street'
        } 
    }
}

const { name: bookname = 'Classified', author = 'Anonymous' } = book
const { city, street = 'Unknown' } = book.publisher.address

console.log(`My Favourite book is ${bookname} written by ${author} and published by ${book.publisher.name}. It is a publishing house located at ${street} ${city}.`)


// Array Destructuring

const shop = ['Hot Coffee', '$2.00', '$2.50', '$2.75']
const [item = 'Cold Coffee', , medium] = shop
console.log(`A medium ${item} costs ${medium}`)