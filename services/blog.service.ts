export async function fetchBlogsServer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export async function fetchBlogBySlug(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/slug/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}
