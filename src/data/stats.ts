import type { Stat } from "@/types";
import {
  Truck,
  Clock,
  Star,
  Users,
} from "lucide-react";

export const stats: Stat[] = [
  {
    id: "deliveries",
    label: "Deliveries Completed",
    value: 125000,
    suffix: "+",
    description: "Fresh produce delivered across the city",
    icon: Truck,
  },
  {
    id: "satisfaction",
    label: "Customer Satisfaction",
    value: 98,
    suffix: "%",
    description: "Average happiness score across all orders",
    icon: Star,
  },
  {
    id: "delivery-time",
    label: "Avg. Delivery Time",
    value: 32,
    suffix: " min",
    description: "From farm to your doorstep",
    icon: Clock,
  },
  {
    id: "customers",
    label: "Active Customers",
    value: 18000,
    suffix: "+",
    description: "Loyal customers ordering every week",
    icon: Users,
  },
];
