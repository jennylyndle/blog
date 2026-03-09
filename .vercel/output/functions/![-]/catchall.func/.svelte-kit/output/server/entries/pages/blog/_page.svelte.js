import { e as ensure_array_like, a6 as attr, a7 as stringify, g as escape_html } from "../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data: blogs } = $$props;
    $$renderer2.push(`<div class="mt-4 flex flex-wrap items-center justify-center gap-4"><!--[-->`);
    const each_array = ensure_array_like(blogs.blogPosts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let blog = each_array[$$index];
      $$renderer2.push(`<a${attr("href", `/blog/${stringify(blog.id)}`)} class="h-[38vh] w-[20vw] rounded-md border border-primary shadow-sm shadow-primary"><div class="flex flex-col"><img${attr("src", blog.background_image)}${attr("alt", blog.title)}/> <div><h2>${escape_html(blog.title)}</h2> <p>${escape_html(blog.description)}</p></div></div></a>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
