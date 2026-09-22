type IconProps = { className?: string };

export function ArrowIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BackIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 8H4M4 8L8 4M4 8L8 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 5.5L10 11L16.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6.6" cy="7" r="0.9" fill="currentColor" />
      <path d="M6.6 9.3V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M9.6 14V10.9C9.6 9.85 10.3 9.3 11.1 9.3C11.9 9.3 12.5 9.85 12.5 10.9V14"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 2C5.58 2 2 5.65 2 10.14C2 13.73 4.29 16.77 7.47 17.84C7.87 17.91 8.02 17.67 8.02 17.45C8.02 17.25 8.01 16.47 8.01 15.64C5.8 16.12 5.34 14.73 5.34 14.73C4.98 13.8 4.46 13.56 4.46 13.56C3.74 13.06 4.52 13.07 4.52 13.07C5.32 13.13 5.74 13.91 5.74 13.91C6.44 15.13 7.58 14.78 8.03 14.57C8.1 14.05 8.31 13.7 8.53 13.5C6.76 13.3 4.9 12.6 4.9 9.48C4.9 8.6 5.21 7.87 5.75 7.31C5.66 7.1 5.39 6.27 5.83 5.16C5.83 5.16 6.52 4.94 8.01 5.96C8.63 5.79 9.3 5.7 9.97 5.7C10.63 5.7 11.31 5.79 11.93 5.96C13.41 4.94 14.1 5.16 14.1 5.16C14.55 6.27 14.28 7.1 14.19 7.31C14.73 7.87 15.04 8.6 15.04 9.48C15.04 12.61 13.17 13.29 11.39 13.49C11.68 13.75 11.93 14.24 11.93 14.99C11.93 16.06 11.92 16.94 11.92 17.45C11.92 17.67 12.07 17.92 12.48 17.84C15.66 16.76 17.94 13.72 17.94 10.14C17.94 5.65 14.36 2 10 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SunIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M10 2.5V4.3M10 15.7V17.5M17.5 10H15.7M4.3 10H2.5M15.1 4.9L13.9 6.1M6.1 13.9L4.9 15.1M15.1 15.1L13.9 13.9M6.1 6.1L4.9 4.9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.5 12.3A6.8 6.8 0 1 1 7.7 3.5a5.4 5.4 0 0 0 8.8 8.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
