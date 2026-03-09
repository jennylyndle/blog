<script lang="ts">
	const { data: blogPost } = $props();
</script>

<svelte:head>
	<title>{blogPost.blog.title}</title>
</svelte:head>
<div class="blog-parent flex-col items-center px-2 text-center">
	<div class="blog-container mx-[15vw]">
		<h1 class="mt-16 mb-16 text-center text-4xl font-bold">{blogPost.blog.title}</h1>
		<img class="mb-8 rounded-sm" src={blogPost.blog.background_image} alt={blogPost.blog.title} />
		<div>{@html blogPost.blog.content}</div>
	</div>
</div>
