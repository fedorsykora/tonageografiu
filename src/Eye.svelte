<script lang="ts">
import anime from "animejs";
import { onMount } from "svelte";

let animation: Animation;
let playing: boolean = false;
onMount(()=>{
    const duration = 2000;
    animation = anime.timeline({
        duration,
        loop: true,
        easing: "easeOutQuad",
        direction: 'alternate',
        autoplay: false,
        loopComplete: (a)=>{
            playing = false;
            a.pause();
        }
    })
    .add({
        targets: '.lid',
        translateY: "100%",
        scaleY: -1
    }, 0)
    .add({
        targets: 'mask > *',
        easing: "linear",
        fill: "rgba(255, 255, 255, 1)"
    }, duration/2);
});
function click(e){
    if(playing){
        e.stopImmediatePropagation();
        return;
    }
    animation.play();
    playing = true;
}
</script>

<svg viewBox="0 0 50 50" on:click="{click}" on:click>
    <mask id="lidMask">
        <path d="M 5 27.5 Q 25 50 45 27.5" class="lid"/>
        <path d="M 0 0 V 27.5 H 50 V 0" class="lid"/>
    </mask>
    <circle cx="25" cy="25" r="5" mask="url(#lidMask)"/>
    <path d="M 5 27.5 Q 25 50 45 27.5" class="lid"/>
    <path d="M 5 27.5 Q 25 50 45 27.5"/>
</svg>

<style scoped lang="scss">
svg{
    $col: white;
    stroke: $col;
    fill: $col;
    path{
        stroke-width: 2px;
        stroke-linecap: round;
    
        fill: rgba(255,255,255,0);
    }
    mask{
        * {   
            stroke: transparent;
        }
    }
}
</style>