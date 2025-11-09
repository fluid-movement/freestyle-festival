<script lang="ts">
	let {
		videoId,
		title = 'YouTube video',
		class: className = ''
	}: {
		videoId: string;
		title?: string;
		class?: string;
	} = $props();
</script>

<div class="aspect-video w-full {className}">
	<iframe
		src="https://www.youtube.com/embed/{videoId}"
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		class="h-full w-full rounded-md"
	></iframe>
</div>
