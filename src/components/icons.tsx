import {
  Rss,
  Accessibility,
  ArrowRight,
  Linkedin,
  Github,
  type Icon as LucidIcon,
} from "lucide-react";

export type Icon = typeof LucidIcon;

export const Icons = {
  logo: Accessibility,
  rss: Rss,
  arrowRight: ArrowRight,
  linkedin: Linkedin,
  gitHub: Github,
};
