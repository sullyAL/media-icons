import PlayerIcon from './PlayerIcon.svelte'

if (!customElements.get('player-icon')) {
    // @ts-ignore
    customElements.define('player-icon', PlayerIcon.element)
}
