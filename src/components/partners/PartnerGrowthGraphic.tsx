export function PartnerGrowthGraphic() {
  return (
    <div className="partner-growth-graphic" aria-hidden="true">
      <svg
        viewBox="0 0 560 420"
        className="partner-growth-svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="partnerGrowthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--partner-primary)" />
            <stop offset="100%" stopColor="var(--partner-accent)" />
          </linearGradient>

          <linearGradient id="partnerModuleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="color-mix(in oklab, var(--partner-primary) 22%, transparent)" />
            <stop offset="100%" stopColor="color-mix(in oklab, var(--partner-accent) 8%, transparent)" />
          </linearGradient>

          <radialGradient id="partnerGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="color-mix(in oklab, var(--partner-primary) 12%, transparent)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <ellipse
          cx="300"
          cy="230"
          rx="210"
          ry="150"
          fill="url(#partnerGlowGradient)"
          className="partner-growth-glow"
        />

        <rect
          x="120"
          y="356"
          width="320"
          height="4"
          rx="2"
          fill="url(#partnerGrowthGradient)"
          opacity="0.18"
        />

        <rect
          x="80"
          y="326"
          width="400"
          height="20"
          rx="10"
          fill="url(#partnerGrowthGradient)"
          className="partner-growth-base"
        />

        <g className="partner-growth-structure">
          <g className="partner-growth-module module-1">
            <rect x="108" y="238" width="82" height="82" rx="22" fill="url(#partnerModuleGradient)" stroke="var(--partner-module-border)" strokeWidth="1" />
            <rect x="118" y="248" width="62" height="18" rx="9" fill="rgba(255, 255, 255, 0.12)" />
            <rect x="174" y="286" width="4" height="22" rx="2" fill="var(--partner-accent)" opacity="0.35" />
            <rect x="116" y="244" width="66" height="1" rx="0.5" fill="rgba(255, 255, 255, 0.35)" opacity="0.5" />
          </g>

          <g className="partner-growth-module module-2">
            <rect x="196" y="198" width="82" height="82" rx="22" fill="url(#partnerModuleGradient)" stroke="var(--partner-module-border)" strokeWidth="1" />
            <rect x="206" y="208" width="62" height="18" rx="9" fill="rgba(255, 255, 255, 0.12)" />
            <rect x="262" y="246" width="4" height="22" rx="2" fill="var(--partner-accent)" opacity="0.35" />
            <rect x="204" y="204" width="66" height="1" rx="0.5" fill="rgba(255, 255, 255, 0.35)" opacity="0.5" />
          </g>

          <g className="partner-growth-module module-3">
            <rect x="284" y="158" width="82" height="82" rx="22" fill="url(#partnerModuleGradient)" stroke="var(--partner-module-border)" strokeWidth="1" />
            <rect x="294" y="168" width="62" height="18" rx="9" fill="rgba(255, 255, 255, 0.12)" />
            <rect x="350" y="206" width="4" height="22" rx="2" fill="var(--partner-accent)" opacity="0.35" />
            <rect x="292" y="164" width="66" height="1" rx="0.5" fill="rgba(255, 255, 255, 0.35)" opacity="0.5" />
          </g>

          <g className="partner-growth-module module-4">
            <rect x="372" y="118" width="82" height="82" rx="22" fill="url(#partnerModuleGradient)" stroke="var(--partner-module-border)" strokeWidth="1" />
            <rect x="382" y="128" width="62" height="18" rx="9" fill="rgba(255, 255, 255, 0.12)" />
            <rect x="438" y="166" width="4" height="22" rx="2" fill="var(--partner-accent)" opacity="0.35" />
            <rect x="380" y="124" width="66" height="1" rx="0.5" fill="rgba(255, 255, 255, 0.35)" opacity="0.5" />
          </g>
        </g>

        <path
          d="M 122 266 C 185 250, 218 210, 258 202 C 315 190, 338 150, 388 142 C 420 136, 438 112, 458 88"
          fill="none"
          stroke="url(#partnerGrowthGradient)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="partner-growth-line-glow"
        />

        <path
          d="M 122 266 C 185 250, 218 210, 258 202 C 315 190, 338 150, 388 142 C 420 136, 438 112, 458 88"
          fill="none"
          stroke="url(#partnerGrowthGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="partner-growth-line"
        />

        <path
          d="M 438 88 L 458 88 L 458 108"
          fill="none"
          stroke="url(#partnerGrowthGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="partner-growth-arrow"
        />
      </svg>
    </div>
  );
}
