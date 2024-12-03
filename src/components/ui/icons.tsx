import IconCloud from "@/components/ui/icon-cloud";
 
const slugs = [
  "spotify",
  "netflix",
  "discord",
  "steam",
  "xbox",
  "adobe",
  "apple",
  "youtube",
  "avast",
  "microsoft",
  "canva",
  "nordvpn", 
  "crunchyroll", 
  "deezer", 
  "duolingo", 
  "hulu", 
  "figma", 
  "instagram", 
  "tiktok", 
  "udemy", 
];
 
export function Icons() {
  return (
    <div className="relative flex size-full  items-center justify-center rounded-lg ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}