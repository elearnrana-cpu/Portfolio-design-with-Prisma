export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Enamul Hasan Rana. Built with Next.js, Prisma, and Tailwind CSS.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.facebook.com/enamulranaofficial" className="hover:text-foreground">Facebook</a>
          <a href="https://x.com/elearnrana" className="hover:text-foreground">X</a>
          <a href="https://github.com/elearnrana-cpu" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
