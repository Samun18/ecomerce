

function scrollHeader() {
    const mainLocation = window.scrollY
    const nav = document.querySelector('header')

    window.addEventListener('scroll', function (){
        const ubiActual = window.scrollY

        if (mainLocation >= ubiActual) {
            nav.style.top = '0px'
        } else {
            nav.style.top = '-56px'
        }

        mainLocation = ubiActual
    })
}
export default scrollHeader