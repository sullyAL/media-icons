export enum IconEnums {
    PLAY = 'play',
    PAUSE = 'pause',
    REWIND = 'rewind',
    FORWARD = 'forward',
    MUTE = 'mute',
    LOW = 'low',
    HIGH = 'high',
    CC = 'cc',
    SETTINGS = 'settings',
    PIP_ON = 'pipOn',
    PIP_OFF = 'pipOff',
    EXPAND = 'expand',
    SHRINK = 'shrink',
    CAST = 'cast',
    AIRPLAY = 'airplay'
}

export type IconSvgObject = ([string, {
    [key: string]: string | number;
}])[] | readonly (readonly [string, {
    readonly [key: string]: string | number;
}])[]
