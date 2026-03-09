import blogPosts from '../../../data/blog';

export function load({ params }) {
	const blogId = params.id;
	const blog = blogPosts.find((post) => post.id == blogId);
	return {
		blog
	};
}
