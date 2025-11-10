<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { resolve } from '$app/paths';
	import { t } from '$lib/i18n.svelte';

	type ValidRoute = Parameters<typeof resolve>[0];
	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: ValidRoute;
		content: string;
	};
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					href={resolve(href)}
					class={cn(
						'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<NavigationMenu.Root viewport={false} class="hidden md:block">
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={resolve('/festival/schedule')} class={navigationMenuTriggerStyle()}
						>{$t('navigation.schedule')}</a
					>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={resolve('/festival/participation')} class={navigationMenuTriggerStyle()}
						>{$t('navigation.participate')}</a
					>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>{$t('navigation.disciplines.title')}</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
					<li class="row-span-4">
						<NavigationMenu.Link
							class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
						>
							{#snippet child({ props })}
								<a {...props} href={resolve('/disciplines')}>
									<div class="mt-4 mb-2 text-lg font-medium">
										{$t('navigation.disciplines.title')}
									</div>
									<p class="text-sm leading-tight text-muted-foreground">
										{$t('navigation.disciplines.description')}
									</p>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
					{@render ListItem({
						href: '/disciplines/freestyle',
						title: 'Freestyle',
						content: $t('navigation.disciplines.freestyle')
					})}
					{@render ListItem({
						href: '/disciplines/disc-golf',
						title: 'Disc Golf',
						content: $t('navigation.disciplines.disc-golf')
					})}
					{@render ListItem({
						href: '/disciplines/double-disc-court',
						title: 'Double Disc Court',
						content: $t('navigation.disciplines.double-disc-court')
					})}
					{@render ListItem({
						href: '/disciplines/ultimate',
						title: 'Ultimate',
						content: $t('navigation.disciplines.ultimate')
					})}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={resolve('/faq')} class={navigationMenuTriggerStyle()}>FAQ</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
