<script>
	import Grid from '$lib/components/Grid.svelte';
	import Image from '$lib/components/Image.svelte';
	import mapImage from '$lib/assets/faq/map.png';
	import foodImage from '$lib/assets/faq/food.webp';
</script>

<h1 class="container-custom text-center">Frequently Asked Questions</h1>
<Grid>
	<article class="text-center">
		<h2>Anfahrt</h2>
		<p>
			In hac habitasse platea dictumst. Donec sodales, lectus vitae cursus sollicitudin, arcu risus
			vulputate tortor, id ullamcorper justo eros at lectus. Nullam et dignissim lectus. Nullam
			metus lorem, ullamcorper sit amet mattis a, hendrerit et sem. Maecenas a libero quam. Etiam at
			tellus vitae eros placerat condimentum et a erat. Proin aliquet nunc magna, a lacinia libero
			luctus vel.
		</p>
		<p>
			Integer id sodales sem, eget congue lorem. Praesent eget felis sit amet lectus lobortis
			imperdiet.
		</p>
	</article>
	<Image src={mapImage} alt="Sample Image" />
	<Image src={foodImage} alt="Sample Image" />
	<article class="text-center">
		<h2>Catering</h2>
		<p>
			Integer id sodales sem, eget congue lorem. Praesent eget felis sit amet lectus lobortis
			imperdiet.
		</p>
	</article>
</Grid>
