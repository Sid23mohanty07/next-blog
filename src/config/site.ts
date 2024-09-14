type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "HeisenBerg Blog",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://heisenberg-next-blog.vercel.app/",
  ogImage: "https://heisenberg-next-blog.vercel.app/og",
  links: {
    github: "https://github.com/Sid23mohanty07",
  },
};
