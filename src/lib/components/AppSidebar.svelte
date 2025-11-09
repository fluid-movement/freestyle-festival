<script lang="ts">
	import type { Component } from 'svelte';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import HouseIcon from '@lucide/svelte/icons/house';
	import AwardIcon from '@lucide/svelte/icons/award';
	import DiscIcon from '@lucide/svelte/icons/disc';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { resolve } from '$app/paths';
	import { t } from '$lib/i18n.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	// Menu items.
	type ValidRoute = Parameters<typeof resolve>[0];
	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: ValidRoute;
		icon?: Component;
		subitem?: ListItemProps[];
	};

	let items: ListItemProps[] = $derived([
		{
			title: $t('navigation.home'),
			href: '/',
			icon: HouseIcon
		},
		{
			title: $t('navigation.schedule'),
			href: '/festival/schedule',
			icon: CalendarIcon
		},
		{
			title: $t('navigation.participate'),
			href: '/festival/participation',
			icon: AwardIcon
		},
		{
			title: $t('navigation.disciplines.title'),
			href: '/disciplines',
			icon: DiscIcon,
			subitem: [
				{
					title: 'Freestyle',
					href: '/disciplines/freestyle',
				},
				{
					title: 'Disc Golf',
					href: '/disciplines/disc-golf',
				},
				{
					title: 'Double Disc Court',
					href: '/disciplines/double-disc-court',
				},
			]
		}
	]);
</script>

<Sidebar.Root side="right">
	<Sidebar.Content class="flex flex-col justify-between">
		<Sidebar.Group>
			<Sidebar.GroupLabel>{$t('home.title')}</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={resolve(item.href)} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
							{#if item.subitem}
								{#each item.subitem as subitem (subitem.title)}
									<Sidebar.MenuSubItem class="ml-12">
										<Sidebar.MenuSubButton>
											{#snippet child({ props })}
												<a href={resolve(subitem.href)} {...props}>
													{subitem.title}
												</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							{/if}
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Sprache</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<LanguageSwitcher />
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
