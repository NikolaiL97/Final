let showList = (list, button, icon) => {
    list.classList.remove('hidden')
    button.innerHTML = 'Скрыть'
    icon.style = 'transform: rotate(180deg)'
}

let hideList = (list, button, icon) => {
    list.classList.add('hidden')
    button.innerHTML = 'Показать все'
    icon.style = 'transform: rotate(0deg)'
    console.log(list.className)
    if (list.className == 'main__description hidden') {
        button.innerHTML = 'Читать далее'
    }
}

document.addEventListener('click', (e) => {
    let button = e.target
    let icon = button.parentNode.children[0]
    let hiddenContent = e.target.parentNode.parentNode
    if (e.target.className == 'main__description_btn') {
        hiddenContent.classList.contains('hidden') ?
            showList(hiddenContent, button, icon) :
            hideList(hiddenContent, button, icon)
    }
})