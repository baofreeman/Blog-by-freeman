"use server";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const handleSubmit = async ({
  title,
  media,
  cat,
  value,
}: {
  title: string;
  media: any;
  cat: string;
  value: string;
}) => {
  const res = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      desc: value,
      img: media,
      slug: slugify(title),
      catSlug: cat,
    }),
  });
  if (res.status === 200) {
    const data = await res.json();
  }
};
