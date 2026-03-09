import { a5 as head, g as escape_html, a6 as attr } from "../../../../chunks/index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data: blogPost } = $$props;
    head("95ygql", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(blogPost.blog.title)}</title>`);
      });
    });
    $$renderer2.push(`<div class="blog-parent flex-col items-center px-2 text-center"><div class="blog-container mx-[15vw]"><h1 class="mt-16 mb-16 text-center text-4xl font-bold">${escape_html(blogPost.blog.title)}</h1> <img class="mb-8 rounded-sm"${attr("src", blogPost.blog.background_image)}${attr("alt", blogPost.blog.title)}/> <div>${html(blogPost.blog.content)}</div></div></div>`);
  });
}
export {
  _page as default
};
