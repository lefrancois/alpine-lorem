import Lorem from '../src/index'

document.addEventListener('alpine:initializing', () => {
    window.Alpine.plugin(Lorem)
})
