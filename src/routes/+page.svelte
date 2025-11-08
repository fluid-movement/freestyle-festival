<script>
	import Banner from '$lib/components/Banner.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import { t } from '$lib/i18n.svelte';
</script>

<h1 class="container-custom mb-12 text-center">{$t('home.title')}</h1>
<Grid>
	<article class="text-center">
		<h2>Lorem Ipsum</h2>
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
	<div class="min-h-100 rounded-md bg-gray-200"></div>
</Grid>
<Grid>
	<article class="text-center">
		<h2>Lorem Ipsum</h2>
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
	<div class="text-center">
		<h2>Lorem Ipsum</h2>
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
	</div>
</Grid>
<Banner>
	<div class="min-h-100 rounded-md bg-gray-200"></div>
</Banner>
