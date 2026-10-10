import {
  Search,
  Infinity as InfinityIcon,
  MessageCircle,
  Mail,
  Ellipsis,
  Image as ImageIcon,
  Camera,
  Users,
  Video,
  MessageSquareQuote,
  Star,
  ArrowLeftRight,
  Sparkles,
  Rocket,
  TrendingUp,
  ChartNoAxesCombined,
  Building2,
  CircleHelp,
} from "lucide-react";

const ICONS = {
  google: Search,
  meta: InfinityIcon,
  whatsapp: MessageCircle,
  mail: Mail,
  more: Ellipsis,
  image: ImageIcon,
  camera: Camera,
  users: Users,
  video: Video,
  message: MessageSquareQuote,
  star: Star,
  arrow: ArrowLeftRight,

  // Business stage icons
  rocket: Rocket,
  trending: TrendingUp,
  growth: ChartNoAxesCombined,
  building: Building2,

  // Fallback
  help: CircleHelp,
};

export default function getIcon(name) {
  return ICONS[name] || Sparkles;
}
