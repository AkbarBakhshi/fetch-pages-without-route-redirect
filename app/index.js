import Home from 'pages/Home'
import About from 'pages/About'
import Four04 from 'pages/Four04'

class App {
    constructor() {
        // console.log('index app')
        this.createContent()
        this.createPages()
    }

    createContent() {
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template') // this is the value in each pug file under block variables
    }

    createPages() {
        this.pages = {
            home: new Home(),
            four04: new Four04(),
            about: new About()
        }
        this.page = this.pages[this.template]
        this.page.create()
    }
}

new App()