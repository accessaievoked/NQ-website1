import {
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

const toDataUri = (svg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

const GOOGLE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
</svg>`;

const META_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32">
  <defs>
    <linearGradient id="m" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0064E1"/>
      <stop offset="1" stop-color="#0866FF"/>
    </linearGradient>
  </defs>
  <path d="M32 16C40 4 58 4 58 16S40 28 32 16C24 4 6 4 6 16S24 28 32 16Z"
        fill="none" stroke="url(#m)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const WHATSAPP_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>`;

const GMAIL_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/>
  <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/>
  <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
  <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/>
  <path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/>
</svg>`;

export const BRAND_ICONS = {
  google: toDataUri(GOOGLE_SVG),
  meta: toDataUri(META_SVG),
  whatsapp: toDataUri(WHATSAPP_SVG),
  gmail: toDataUri(GMAIL_SVG),
};

const ICONS = {
  mail: Mail,
  more: Ellipsis,
  image: ImageIcon,
  camera: Camera,
  users: Users,
  video: Video,
  message: MessageSquareQuote,
  star: Star,
  arrow: ArrowLeftRight,
  rocket: Rocket,
  trending: TrendingUp,
  growth: ChartNoAxesCombined,
  building: Building2,
  help: CircleHelp,
};

export default function getIcon(name) {
  return ICONS[name] || Sparkles;
}