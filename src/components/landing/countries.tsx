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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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


function KenyaFlag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#fff"/>
            <rect width="900" height="200" fill="#000"/>
            <rect y="200" width="900" height="200" fill="#B01F24"/>
            <rect y="400" width="900" height="200" fill="#006600"/>
            <rect y="188" width="900" height="24" fill="#fff"/>
            <rect y="388" width="900" height="24" fill="#fff"/>
            <g transform="translate(450 300)">
                <path d="M-75-150v300h150v-300z" fill="#B01F24"/>
                <path d="M-60-150v300h120v-300z" fill="#fff" transform="scale(.95)"/>
                <path d="M-20-150a150 150 0 000 300" fill="#000"/>
                <path d="M20-150a150 150 0 010 300" fill="#000" transform="scale(-1,1)"/>
                <circle r="40" fill="#B01F24"/>
                <circle r="30" fill="#fff"/>
            </g>
        </svg>
    );
}

function NigeriaFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <rect width="900" height="600" fill="#fff"/>
        <rect width="300" height="600" fill="#008753"/>
        <rect x="600" width="300" height="600" fill="#008753"/>
    </svg>
  );
}

function USAFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900">
      <rect width="7410" height="3900" fill="#FFF"/>
      <path d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410" stroke="#BF0A30" strokeWidth="300"/>
      <rect width="2964" height="2100" fill="#002868"/>
      <g fill="#FFF">
        <g id="s50">
          <g id="s9">
            <g id="s5">
              <path id="s" d="M247,90l76,231-198-143h244l-198,143z"/>
              <use href="#s" y="420"/>
              <use href="#s" y="840"/>
              <use href="#s" y="1260"/>
            </g>
            <use href="#s" y="210"/>
          </g>
          <use href="#s9" x="492"/>
          <use href="#s9" x="984"/>
          <use href="#s9" x="1476"/>
          <use href="#s9" x="1968"/>
          <use href="#s9" x="2460"/>
        </g>
      </g>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
      <clipPath id="t"><path d="M30,15h30v15zv-30h30z"/></clipPath>
      <path d="M0,0v30h60V0z" fill="#012169"/>
      <path d="M0,0L60,30m0-30L-60,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0L60,30m0-30L-60,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

function IndiaFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
      <rect width="900" height="200" fill="#FF9933"/>
      <rect y="200" width="900" height="200" fill="#FFF"/>
      <rect y="400" width="900" height="200" fill="#138808"/>
      <g transform="translate(450 300)">
        <circle r="70" fill="none" stroke="#000080" strokeWidth="1"/>
        <circle r="20" fill="#000080"/>
        <g id="d">
          <g id="c">
            <g id="b">
              <g id="a">
                <path d="M-1,70v-10h2z"/>
              </g>
              <use href="#a" transform="rotate(15)"/>
            </g>
            <use href="#b" transform="rotate(30)"/>
          </g>
          <use href="#c" transform="rotate(60)"/>
        </g>
        <use href="#d" transform="rotate(120)"/>
        <use href="#d" transform="rotate(240)"/>
      </g>
    </svg>
  );
}

function SouthAfricaFlag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
            <rect fill="#E03C31" width="1200" height="800" />
            <path d="M0 400 L400 400 L1200 400" strokeWidth="160" stroke="#002395"/>
            <path d="M0 0 L400 400 L0 800 Z" fill="#007749" />
            <path d="M0 106 L266 400 L0 694 M200 400 L0 400" stroke="#FFFFFF" strokeWidth="260"/>
            <path d="M0 132 L200 400 L0 668" stroke="#000000" strokeWidth="180"/>
            <path d="M0 400 L200 400" stroke="#FFB612" strokeWidth="80"/>
        </svg>
    )
}

function GhanaFlag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect fill="#CE1126" width="900" height="200" />
            <rect fill="#FCD116" y="200" width="900" height="200" />
            <rect fill="#006B3F" y="400" width="900" height="200" />
            <path d="m450 230l58.7785 180.9017h-153.845l124.613 -111.8034h-153.845z" fill="#000000"/>
        </svg>
    )
}

function TanzaniaFlag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <path d="M0,0 H900 V600 H0 Z" fill="#1EB53A" />
            <path d="M0,600 L900,0" stroke="#FCD116" strokeWidth="270" />
            <path d="M0,600 L900,0" stroke="#000000" strokeWidth="200" />
        </svg>
    )
}
