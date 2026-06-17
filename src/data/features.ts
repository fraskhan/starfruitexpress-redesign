import type { Feature } from "@/types";
import {
  Zap,
  Leaf,
  ShieldCheck,
  RefreshCcw,
  MapPin,
  HeartHandshake,
  PackageCheck,
  Clock4,
} from "lucide-react";

export const features: Feature[] = [
  {
    id: "fresh-daily",
    title: "Farm-Fresh Daily",
    description:
      "We source directly from local farms every morning, ensuring peak nutrition and flavour in every order.",
    icon: Leaf,
    badge: "Core",
    size: "lg",
    highlight: true,
  },
  {
    id: "lightning-fast",
    title: "Lightning Delivery",
    description:
      "Express delivery within 30–45 minutes. No waiting, no compromises.",
    icon: Zap,
    badge: "Speed",
    size: "md",
  },
  {
    id: "guaranteed-quality",
    title: "Quality Guarantee",
    description:
      "Not happy? We replace or refund — no questions asked. Your trust is everything.",
    icon: ShieldCheck,
    size: "md",
  },
  {
    id: "flexible-subscriptions",
    title: "Flexible Subscriptions",
    description:
      "Weekly or bi-weekly boxes, customisable to your family's needs. Pause or cancel anytime.",
    icon: RefreshCcw,
    size: "sm",
  },
  {
    id: "live-tracking",
    title: "Live Order Tracking",
    description:
      "Real-time GPS updates so you always know exactly where your delivery is.",
    icon: MapPin,
    size: "sm",
  },
  {
    id: "community",
    title: "Community Supported",
    description:
      "5% of every order goes back to local farming communities and sustainable agriculture programs.",
    icon: HeartHandshake,
    size: "sm",
  },
  {
    id: "contactless",
    title: "Contactless Delivery",
    description:
      "Safe, sealed packaging with full contactless drop-off options available.",
    icon: PackageCheck,
    size: "sm",
  },
  {
    id: "scheduling",
    title: "Smart Scheduling",
    description:
      "AI-powered delivery windows that adapt to your calendar and location.",
    icon: Clock4,
    size: "sm",
  },
];
