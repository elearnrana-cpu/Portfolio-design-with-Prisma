import { ArrowRight, Bot, Code2, LineChart, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedProjects } from "@/lib/projects";

const services = [
  { icon: Code2, title: "Web Development", body: "Fast, responsive websites with clean architecture and SEO-ready foundations." },
  { icon: Smartphone, title: "App Development", body: "Polished app interfaces and product workflows designed for everyday use." },
  { icon: LineChart, title: "Digital Marketing", body: "Landing pages, funnels, and campaign assets focused on measurable growth." },
  { icon: Bot, title: "AI Automation", body: "Practical automations that reduce manual work and connect tools intelligently." }
];

export default async function HomePage() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 noise opacity-60" />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal className="relative z-10">
            <Badge className="mb-6">Dhaka, Bangladesh</Badge>
            <h1 className="max-w-4xl text-5xl font-bold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              Enamul Hasan Rana
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Web Developer, App Developer, Digital Marketer, and AI Automation learner building practical digital products for modern businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#contact">
                  Start a project <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View work</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              Available for web, app, marketing, and automation projects.
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative z-10">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border bg-card shadow-soft">
              <Image src="/portrait.svg" alt="Abstract portrait for Enamul Hasan Rana" fill priority className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <Badge variant="secondary">Capabilities</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">Useful skills for real business problems</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="size-9 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{service.body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/45 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Badge>Featured projects</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">Selected work</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects">All projects</Link>
            </Button>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <Card className="h-full overflow-hidden">
                  {project.imageUrl ? (
                    <div className="relative aspect-[16/10] border-b bg-muted">
                      <Image src={project.imageUrl} alt="" fill className="object-cover" />
                    </div>
                  ) : null}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Badge variant="secondary">Contact</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">Let’s build something clear and useful</h2>
            <div className="mt-6 space-y-3 text-muted-foreground">
              <p>Email: <a className="text-primary hover:underline" href="mailto:elearnrana@gmail.com">elearnrana@gmail.com</a></p>
              <p>Phone: <a className="text-primary hover:underline" href="tel:+8801744552561">+8801744552561</a></p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
