// Object.create creates a new object, with the first argument being thhe prototype of the new object.

const parent = {
    parent: true,
    printMessage() {
        console.log(`I am ${this.parent ? 'the' : 'not the'} parent`)
    }
}

const child = Object.create(parent, { parent: { value: false } })

parent.printMessage()
child.printMessage()

/* 
dave@ubuntu:~/web-dev/js-snippets(main)$ node object-create.js 
I am the parent
I am not the parent
*/