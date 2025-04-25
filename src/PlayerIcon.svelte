<svelte:options customElement="player-icon" />

<script lang="ts">
    import { HugeiconsIcon } from '@hugeicons/svelte'
    import {
        PlayStrokeRounded,
        PauseStrokeRounded,
        GoBackward15SecStrokeRounded,
        GoForward15SecStrokeRounded,
        VolumeMute02StrokeRounded,
        VolumeLowStrokeRounded,
        VolumeHighStrokeRounded,
        ClosedCaptionStrokeRounded,
        Settings02StrokeRounded,
        PictureInPictureOnStrokeRounded,
        PictureInPictureExitStrokeRounded,
        ArrowExpandStrokeRounded,
        ArrowShrinkStrokeRounded,
        TvSmartStrokeRounded,
        AirplayLineStrokeRounded,
        ArrowRight01StrokeRounded
    } from '@hugeicons-pro/core-stroke-rounded'

    import {
        PlaySolidRounded,
        PauseSolidRounded,
        GoBackward15SecSolidRounded,
        GoForward15SecSolidRounded,
        VolumeMute02SolidRounded,
        VolumeLowSolidRounded,
        VolumeHighSolidRounded,
        ClosedCaptionSolidRounded,
        Settings02SolidRounded,
        PictureInPictureOnSolidRounded,
        PictureInPictureExitSolidRounded,
        ArrowExpandSolidRounded,
        ArrowShrinkSolidRounded,
        TvSmartSolidRounded,
        AirplayLineSolidRounded,
        ArrowRight01SolidRounded
    } from '@hugeicons-pro/core-solid-rounded'

    import { IconEnums, type IconSvgObject } from './types'

    export let icon: IconEnums = IconEnums.PLAY
    export let type: 'stroke' | 'solid' = 'stroke'

    const strokeIcons: Record<IconEnums, IconSvgObject> = {
        play: PlayStrokeRounded,
        pause: PauseStrokeRounded,
        forward: GoForward15SecStrokeRounded,
        rewind: GoBackward15SecStrokeRounded,
        mute: VolumeMute02StrokeRounded,
        low: VolumeLowStrokeRounded,
        high: VolumeHighStrokeRounded,
        cc: ClosedCaptionStrokeRounded,
        settings: Settings02StrokeRounded,
        pipOn: PictureInPictureOnStrokeRounded,
        pipOff: PictureInPictureExitStrokeRounded,
        expand: ArrowExpandStrokeRounded,
        shrink: ArrowShrinkStrokeRounded,
        cast: TvSmartStrokeRounded,
        airplay: AirplayLineStrokeRounded,
        arrowRight: ArrowRight01StrokeRounded
    }

    const solidIcons: Record<IconEnums, IconSvgObject> = {
        play: PlaySolidRounded,
        pause: PauseSolidRounded,
        forward: GoForward15SecSolidRounded,
        rewind: GoBackward15SecSolidRounded,
        mute: VolumeMute02SolidRounded,
        low: VolumeLowSolidRounded,
        high: VolumeHighSolidRounded,
        cc: ClosedCaptionSolidRounded,
        settings: Settings02SolidRounded,
        pipOn: PictureInPictureOnSolidRounded,
        pipOff: PictureInPictureExitSolidRounded,
        expand: ArrowExpandSolidRounded,
        shrink: ArrowShrinkSolidRounded,
        cast: TvSmartSolidRounded,
        airplay: AirplayLineSolidRounded,
        arrowRight: ArrowRight01SolidRounded
    }

    $: selectedIcon = type === 'solid' ? solidIcons[icon] : strokeIcons[icon]
</script>

{#key `${icon}_${type}`}
    <HugeiconsIcon
            icon={selectedIcon}
            className="icon"
            size="100%"
    />
{/key}
