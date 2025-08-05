import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // or "tailwind-variants"

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}