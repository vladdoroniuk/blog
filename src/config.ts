import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://vladdoroniuk.dev", // replace this with your deployed domain
  author: "Vladyslav Doroniuk",
  desc: `Hey, I'm Vlad :)
  I write about tech and lifestyle stuff. Stick around for some fun reads 🚀`,
  title: "~vd~",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Telegram",
    href: "https://t.me/vladdwork",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "Mail",
    href: "vladyslav.doroniuk@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vladdoroniuk",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/vladdoroniuk",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vladdoroniuk",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
];
