import { links } from "@/constants";

export type SectionName = (typeof links)[number]["name"];

export type Theme = "light" | "dark";
