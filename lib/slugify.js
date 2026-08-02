export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function uniqueSlug(Model, title) {
  const base = slugify(title) || "post";
  let slug = base;
  let counter = 2;
  while (await Model.exists({ slug })) {
    slug = `${base}-${counter}`;
    counter += 1;
  }
  return slug;
}
