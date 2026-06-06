import type { Metadata } from "next";
import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected web, app, marketing, and AI automation projects by Enamul Hasan Rana."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Badge>Projects</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-normal sm:text-5xl">Work built for clarity and momentum</h1>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Project data is fetched through React Server Components from Prisma, ready to connect to PostgreSQL in production.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <Card className="h-full overflow-hidden">
                {project.imageUrl ? (
                  <div className="relative aspect-[16/8] border-b bg-muted">
                    <Image src={project.imageUrl} alt="" fill className="object-cover" />
                  </div>
                ) : null}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.demoUrl ? (
                      <Button asChild size="sm">
                        <a href={project.demoUrl}>
                          Demo <ExternalLink className="ml-2 size-4" />
                        </a>
                      </Button>
                    ) : null}
                    {project.repoUrl ? (
                      <Button asChild size="sm" variant="outline">
                        <a href={project.repoUrl}>
                          Code <Code className="ml-2 size-4" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
