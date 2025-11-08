<script lang="ts">
    import { cn } from '$lib/utils';
	import Grid from '$lib/components/Grid.svelte';
	import Image from '$lib/components/Image.svelte';
	import ParallaxBanner from '$lib/components/ParallaxBanner.svelte';
	import YouTubePlayer from '$lib/components/YouTubePlayer.svelte';
	import { t } from '$lib/i18n.svelte';
	import bannerImage from '$lib/assets/freestyle/banner.jpg';
	import communityImage from '$lib/assets/freestyle/community.jpg';
	import coopImage from '$lib/assets/freestyle/coop.jpg';
</script>

{#snippet panel(title: string, content: string, className: string = '')}
    <article class="flex flex-col justify-center">
        {#if title}<h2 class={cn('',className)}>{title}</h2>{/if}
        <p>{content}</p>
    </article>
{/snippet}

<h1 class="container-custom text-center">Freestyle Frisbee</h1>
<Grid>
    {@render panel($t('disciplines.freestyle.what-is-it.title'), $t('disciplines.freestyle.what-is-it.content'), 'text-right')}
     <YouTubePlayer videoId="5B2lwGOmxYs" title="Freestyle Frisbee Demo" />
</Grid>
<ParallaxBanner src={bannerImage} alt="Freestyle Frisbee" height="h-[40vh]" speed={0.3} class="my-8" >
    <h2 class="text-amber-100">{$t('disciplines.freestyle.art-of-movement.title')}</h2>
</ParallaxBanner>
<div class="container-custom mb-8 md:px-32">
    {@render panel('', $t('disciplines.freestyle.art-of-movement.content'))}
</div>
<Grid>
    <Image src={coopImage} alt="Freestyle Frisbee Community"/>
    {@render panel($t('disciplines.freestyle.teamwork-and-creativity.title'), $t('disciplines.freestyle.teamwork-and-creativity.content'))}
    {@render panel($t('disciplines.freestyle.more-than-sport.title'), $t('disciplines.freestyle.more-than-sport.content'), 'text-right')}
    <Image src={communityImage} alt="Freestyle Frisbee Community"/>
</Grid>
