import './dev.css'


function chooseStyle(player: string, type?: string) {
    const icons = document.querySelectorAll('player-icon')
    for (const icon of icons) {
        if (type) {
            icon.setAttribute('type', type)
            icon.setAttribute('player', player)
        } else {
            icon.removeAttribute('type')
            icon.setAttribute('player', player)
        }
    }
}

// @ts-ignore
window.chooseStyle = chooseStyle
