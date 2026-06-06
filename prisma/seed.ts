import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
  {
    title: "Automation CRM Dashboard",
    slug: "automation-crm-dashboard",
    summary: "A modern dashboard concept for lead management and AI-assisted campaign workflows.",
    description:
      "Built around fast filtering, campaign visibility, and clear action queues for small businesses that need practical digital marketing automation.",
    imageUrl: "/projects/automation-crm.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/elearnrana-cpu",
    tags: ["Next.js", "Prisma", "Automation", "Marketing"],
    featured: true
  },
  {
    title: "Learning App Experience",
    slug: "learning-app-experience",
    summary: "A responsive app interface for structured lessons, progress tracking, and learner engagement.",
    description:
      "A product-minded learning experience combining mobile-first screens, clear content hierarchy, and progress-focused UI patterns.",
    imageUrl: "/projects/learning-app.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/elearnrana-cpu",
    tags: ["App Design", "React", "TypeScript"],
    featured: true
  },
  {
    title: "Digital Growth Landing System",
    slug: "digital-growth-landing-system",
    summary: "Conversion-focused pages for service offers, contact capture, and social proof.",
    description:
      "A reusable landing page system for digital marketing campaigns with accessible components and clean SEO defaults.",
    imageUrl: "/projects/growth-system.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/elearnrana-cpu",
    tags: ["SEO", "Tailwind", "Analytics"],
    featured: false
  }
];

async function main() {
  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
