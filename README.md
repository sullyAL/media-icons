
# `player-icon` Custom Element

The `player-icon` is a custom HTML element built using Svelte. It provides a flexible and customizable way to display various player-related icons with support for stroke and solid styles.

## Installation


```bash
npm i @sully_al/player-icon
```

## Usage

You can use the `player-icon` custom element in your HTML as follows:

```html
<player-icon
    icon="mute"
    class="hidden h-10 md:h-14 w-10 md:w-14 duration-500 opacity-0 transition-all animate-out zoom-out fade-out
           group-data-[muted]:block group-data-[muted]:fade-in group-data-[muted]:animate-in group-data-[muted]:opacity-100
           group-data-[muted]:duration-500 group-data-[muted]:zoom-in">
</player-icon>
```

### Attributes

- **`icon`**: Specifies the icon to display. Acceptable values include:
    - `play`
    - `pause`
    - `forward`
    - `rewind`
    - `mute`
    - `low`
    - `high`
    - `cc`
    - `settings`
    - `pipOn`
    - `pipOff`
    - `expand`
    - `shrink`
    - `cast`
    - `airplay`


- **`type`** *(optional)*: Specifies the icon style. Acceptable values are:
    - `stroke` (default)
    - `solid`

### Example with Solid Icons

```html
<player-icon
    icon="play"
    type="solid"
    class="h-12 w-12 text-blue-500">
</player-icon>
```

## License

This project is licensed under the MIT License.
```
