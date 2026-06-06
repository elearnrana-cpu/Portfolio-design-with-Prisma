import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "MDX articles about web development, digital marketing, and AI automation."
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Badge>Blog</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-normal sm:text-5xl">Notes from the build desk</h1>
        </Reveal>
        <div className="mt-10 grid gap-4">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="transition-colors hover:border-primary/60">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("en", { dateStyle: "medium" })}</div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
