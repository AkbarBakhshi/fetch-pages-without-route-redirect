import gsap from 'gsap'

export default class About {
    constructor() {
    }
    create() {
        // console.log('home created')
    }

    animateIn() {
        return new Promise(resolve => {
            gsap.timeline({onComplete: resolve})
                .from('.about', { delay: 1, x: '-100vh'})
        })
    }

    animateOut() {
        return new Promise(resolve => {
            gsap.timeline({onComplete: resolve})
                .to('.about', { x: '-100vh'})
        })
    }
}