import { cn } from "@/lib/utils";

const flags = [
  { name: 'Kenya', component: KenyaFlag },
  { name: 'Nigeria', component: NigeriaFlag },
  { name: 'USA', component: USAFlag },
  { name: 'UK', component: UKFlag },
  { name: 'India', component: IndiaFlag },
  { name: 'South Africa', component: SouthAfricaFlag },
  { name: 'Ghana', component: GhanaFlag },
  { name: 'Tanzania', component: TanzaniaFlag },
];

export function Countries() {
  const allFlags = [...flags, ...flags];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Available Worldwide
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is accessible to users from all corners of the globe. Join our international community.
            </p>
          </div>
        </div>
      </div>
      <div className="marquee-container mt-12">
        <div className="marquee-content space-x-8 md:space-x-12 pr-8 md:pr-12">
          {allFlags.map((flag, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-16 h-12 md:w-20 md:h-16 rounded-md overflow-hidden shadow-md">
                <flag.component />
              </div>
              <span className="text-sm font-medium text-muted-foreground">{flag.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG Flag Components (simplified)
function KenyaFlag() {
  return (
    <svg viewBox="0 0 900 600" width="100%" height="100%">
      <rect width="900" height="600" fill="#fff"/>
      <rect width="900" height="200" fill="#000"/>
      <rect y="200" width="900" height="200" fill="#B01F24"/>
      <rect y="400" width="900" height="200" fill="#006600"/>
    </svg>
  );
}

function NigeriaFlag() {
  return (
    <svg viewBox="0 0 900 600" width="100%" height="100%">
      <rect width="900" height="600" fill="#fff" />
      <rect width="300" height="600" fill="#008753" />
      <rect width="300" height="600" x="600" fill="#008753" />
    </svg>
  );
}

function USAFlag() {
  return (
    <svg viewBox="0 0 7410 3900" width="100%" height="100%">
      <rect width="7410" height="3900" fill="#BF0A30"/>
      <path d="M0,300H7410 M0,900H7410 M0,1500H7410 M0,2100H7410 M0,2700H7410 M0,3300H7410" stroke="#FFF" strokeWidth="300"/>
      <rect width="2964" height="2100" fill="#002868"/>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg viewBox="0 0 60 30" width="100%" height="100%">
      <clipPath id="t"><path d="M30,15h30v15zv-30h30z"/></clipPath>
      <path d="M0,0v30h60V0z" fill="#012169"/>
      <path d="M0,0L60,30m-60,0L60,0" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0L60,30m-60,0L60,0" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

function IndiaFlag() {
  return (
    <svg viewBox="0 0 900 600" width="100%" height="100%">
      <rect width="900" height="600" fill="#FFF"/>
      <rect width="900" height="200" fill="#FF9933"/>
      <rect width="900" height="200" y="400" fill="#138808"/>
      <circle r="70" cx="450" cy="300" fill="none" stroke="#000080" strokeWidth="20"/>
    </svg>
  );
}

function SouthAfricaFlag() {
    return (
        <svg viewBox="0 0 1200 800" width="100%" height="100%">
            <rect fill="#E03C31" width="1200" height="800" />
            <path d="M0 400 L1200 400" stroke="#002395" strokeWidth="160" />
            <path d="M0 0 L400 400 L0 800 Z" fill="#007749" />
            <path d="M0 106 L266 400 L0 694 M200 400 L0 400" stroke="#FFFFFF" strokeWidth="260" />
            <path d="M0 132 L200 400 L0 668" stroke="#000000" strokeWidth="180" />
            <path d="M0 400 L200 400" stroke="#FFB612" strokeWidth="80" />
        </svg>
    )
}

function GhanaFlag() {
    return (
        <svg viewBox="0 0 900 600" width="100%" height="100%">
            <rect fill="#CE1126" width="900" height="600" />
            <rect fill="#FCD116" y="200" width="900" height="200" />
            <rect fill="#006B3F" y="400" width="900" height="200" />
            <path d="m450 230l58.7785 180.9017h-153.845l124.613 -111.8034h-153.845z" fill="#000000"/>
        </svg>
    )
}

function TanzaniaFlag() {
    return (
        <svg viewBox="0 0 900 600" width="100%" height="100%">
            <path d="M0,0 H900 V600 H0 Z" fill="#1EB53A" />
            <path d="M0,600 L900,0" stroke="#00A3DD" strokeWidth="270" />
            <path d="M0,600 L900,0" stroke="#000000" strokeWidth="200" />
            <path d="M0,600 L900,0" stroke="#FCD116" strokeWidth="130" />
        </svg>
    )
}