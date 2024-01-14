const menuBtn = document.querySelector('.header-navigation__btn')
const sideMenu = document.querySelector('.side-menu')
const navHeader = document.querySelector('.header-navigation')

const burger = document.getElementById('burger')

const settingsIcon = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(5)'
)
const settingsIcon2 = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(1)'
)
const settingsIcon3 = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(2)'
)
const settingsIcon4 = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(3)'
)

const headerBackground = document.querySelector('.header')
const headerMargin = document.querySelector('.header_wrapper')

const searchIcon = document.getElementById('search-icon')
let shadow = document.querySelector('.shadow')

let menuIsHidden = true

let showMenu = () => {
    sideMenu.classList.remove('hidden')
    menuIsHidden = false
    burger.src = './img/icon.x.svg'
    searchIcon.src = './img/icon.search.svg'
    headerBackground.style = 'background: white; z-index: 2;'
    headerMargin.style =
        'max-width: fit-content; margin: 0; position: fixed; z-index: 2;'
    shadow.classList.remove('hidden')
    document.querySelector('.header-nav__list').classList.add('visible')
    document.querySelector('.header-nav__list').classList.remove('hidden')
}

let hideMenu = () => {
    sideMenu.classList.add('hidden')
    menuIsHidden = true
    burger.src = './img/icon1.svg'
    searchIcon.src = './img/icon2.svg'
    navHeader.src = 'gap: 16px'
    headerBackground.style = 'background: #f8f8f8; z-index: 1;'
    headerMargin.style = 'max-width: 720px; margin: 0 auto; z-index: 1;'
    if (
        document.querySelector('.feedback').classList.contains('hidden') &&
        document.querySelector('.responsiveness').classList.contains('hidden')
    ) {
        shadow.classList.add('hidden')
    }
    document.querySelector('.header-nav__list').classList.remove('visible')
    document.querySelector('.header-nav__list').classList.add('hidden')
}

menuBtn.addEventListener('click', () => {
    if (menuIsHidden) {
        showMenu()
    } else {
        hideMenu()
    }
})

let orderCallBtn = document.querySelector('#order-call')
let orderCallModal = document.querySelector('.feedback')
let closeBtn = document.querySelectorAll('.feedback-img')

orderCallBtn.addEventListener('click', () => {
    orderCallModal.classList.remove('hidden')
    shadow.classList.remove('hidden')
    if (!document.querySelector('.side-menu').classList.contains('hidden')) {
        hideMenu()
    }
})

closeBtn[0].addEventListener('click', () => {
    if (document.querySelector('.side-menu').classList.contains('hidden')) {
        shadow.classList.add('hidden')
    }
    orderCallModal.classList.add('hidden')
})

let responsivenessBtn = document.querySelector('#responsiveness')
let responsivenessModal = document.querySelector('.responsiveness')

responsivenessBtn.addEventListener('click', () => {
    responsivenessModal.classList.remove('hidden')
    shadow.classList.remove('hidden')
    if (!document.querySelector('.side-menu').classList.contains('hidden')) {
        hideMenu()
    }
})
closeBtn[1].addEventListener('click', () => {
    responsivenessModal.classList.add('hidden')
    if (document.querySelector('.side-menu').classList.contains('hidden')) {
        shadow.classList.add('hidden')
    }
})