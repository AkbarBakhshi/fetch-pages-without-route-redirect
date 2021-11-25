import Home from 'pages/Home'
import About from 'pages/About'
import Four04 from 'pages/Four04'

class App {
    constructor() {
        // console.log('index app')
        this.createContent()
        this.createPages()

        this.addLinkListeners()
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

    async onLocalLinkClick({ url }) {
        const request = await window.fetch(url)
        // console.log(request)

        if (request.status === 200) {
            // console.log(request.text())
            const div = document.createElement('div')

            div.innerHTML = await request.text()
            // console.log(div.innerHTML)

            const divContent = div.querySelector('.content')

            this.template = divContent.getAttribute('data-template')

            this.content.setAttribute('data-template', this.template)
            this.content.innerHTML = divContent.innerHTML

            this.page = this.pages[this.template]
            this.page.create()

            this.addLinkListeners()

        } else {
            this.onLocalLinkClick({ url: '/' })
        }
    }

    addLinkListeners() {
        const anchorLinks = document.querySelectorAll('a')

        anchorLinks.forEach((link) => {
            link.onclick = event => {
                // console.log(link.href)
                // console.log(window.location.origin)    ----> this will be the 'root' route of our website
                if (link.href.indexOf(window.location.origin) > -1) {    // this means if the href of the link includes the root route of our website
                    event.preventDefault()
                    this.onLocalLinkClick({
                        url: link.href
                    })
                }
            }
        })
    }
}

new App()