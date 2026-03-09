
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/blog" | "/blog/[id]" | "/contact";
		RouteParams(): {
			"/blog/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/blog": { id?: string };
			"/blog/[id]": { id: string };
			"/contact": Record<string, never>
		};
		Pathname(): "/" | "/blog" | `/blog/${string}` & {} | "/contact";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/GoogleSansFlex.woff2" | "/images/background-image.png" | "/images/black-theme-image.svg" | "/images/computer.png" | "/images/crypto.png" | "/images/fashion.png" | "/images/flight.png" | "/images/mars.png" | "/images/neural.png" | "/images/ocean.png" | "/images/phone.png" | "/images/vertical garden.png" | "/images/workplace.png" | "/robots.txt" | string & {};
	}
}