<script>
	const { data: blogs } = $props();
</script>

<div class="mt-4 flex flex-wrap items-center justify-center gap-4">
	{#each blogs.blogPosts as blog (blog.id)}
		<a
			href="/blog/{blog.id}"
			class="h-[38vh] w-[20vw] rounded-md border border-primary shadow-sm shadow-primary"
		>
			<div class="flex flex-col">
				<img src={blog.background_image} alt={blog.title} />
				<div>
					<h2>{blog.title}</h2>
					<p>{blog.description}</p>
				</div>
			</div>
		</a>
	{/each}
</div>
