/**
 * Catalog for the second asset pack (public/media/alterx/). Pages read from here
 * instead of hardcoding /media/alterx paths. See public/media/alterx source notes
 * in CHANGE_NOTES — five entries are flagged for replacement before use.
 */

export type AlterxMediaEntry = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  desktopPosition?: string;
  mobilePosition?: string;
  aspectRatio?: string;
  /** Set when the source still is flagged as not final — see CHANGE_NOTES.md in the pack. */
  needsReplacement?: boolean;
};

export const alterxMedia = {
  homeHero: {
    type: "image",
    src: "/media/alterx/01_home_hero.jpg",
    alt: "",
    desktopPosition: "center 40%",
    mobilePosition: "center 30%",
  },
  homeRequestFrame: {
    type: "image",
    src: "/media/alterx/02_home_request_frame.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  engineStill: {
    type: "image",
    src: "/media/alterx/03_alter_engine_still.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  solutionsStill: {
    type: "image",
    src: "/media/alterx/04_solutions_still.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  developersStill: {
    type: "image",
    src: "/media/alterx/05_developers_still.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  resourcesStill: {
    type: "image",
    src: "/media/alterx/06_resources_still.jpg",
    alt: "",
    desktopPosition: "center 35%",
    mobilePosition: "center 35%",
  },
  aboutStill: {
    type: "image",
    src: "/media/alterx/07_about_brand_still.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
    needsReplacement: true,
  },
  careersStill: {
    type: "image",
    src: "/media/alterx/08_careers_still.jpg",
    alt: "",
    desktopPosition: "center 35%",
    mobilePosition: "center 35%",
  },
  contactStill: {
    type: "image",
    src: "/media/alterx/09_contact_still.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  footerStill: {
    type: "image",
    src: "/media/alterx/10_footer_still.jpg",
    alt: "",
    desktopPosition: "center bottom",
    mobilePosition: "center bottom",
  },
  verificationFrame: {
    type: "image",
    src: "/media/alterx/11_verification_frame.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
    needsReplacement: true,
  },
  processFrame: {
    type: "image",
    src: "/media/alterx/12_process_frame.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
    needsReplacement: true,
  },
  editorialFrame: {
    type: "image",
    src: "/media/alterx/13_editorial_frame.jpg",
    alt: "",
    desktopPosition: "center",
    mobilePosition: "center",
    needsReplacement: true,
  },
} as const satisfies Record<string, AlterxMediaEntry>;

export type AlterxMediaKey = keyof typeof alterxMedia;

/** Adapts a catalog entry to the Media shape MediaFrame expects. */
export function toMedia(entry: AlterxMediaEntry) {
  return {
    type: entry.type,
    src: entry.src,
    poster: entry.poster,
    alt: entry.alt,
    position: entry.desktopPosition,
  };
}
