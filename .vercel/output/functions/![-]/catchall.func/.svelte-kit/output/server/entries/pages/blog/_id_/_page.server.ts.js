import { b as blogPosts } from "../../../../chunks/blog.js";
function load({ params }) {
  const blogId = params.id;
  const blog = blogPosts.find((post) => post.id == blogId);
  return {
    blog
  };
}
export {
  load
};
