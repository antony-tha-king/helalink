const countryCodes = [
  "ke", "ug", "tz", "za", "ng", "gb", "us", "ca", "de", "fr", "jp", "au", "in", "br", "cn", "ru", "es", "it", "mx", "id",
  "ke", "ug", "tz", "za", "ng", "gb", "us", "ca", "de", "fr", "jp", "au", "in", "br", "cn", "ru", "es", "it", "mx", "id"
];

export function Flags() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll-horizontal hover:[animation-play-state:paused]">
        {countryCodes.map((code, index) => (
          <div key={index} className="flex-shrink-0 w-24 h-16 mx-4 relative">
            <img
              src={`https://flagcdn.com/${code}.svg`}
              alt={`${code} flag`}
              className="w-full h-full object-contain rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
