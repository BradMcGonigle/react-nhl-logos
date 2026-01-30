import type { LogoProps } from "../types";

const UTA = ({ size = 100, ...props }: LogoProps) => {
  return (
    <svg {...props}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill="#010101"/>
      <circle cx="50" cy="50" r="46" fill="#010101" stroke="#6CACE4" strokeWidth="2"/>
      <path fill="#FFFFFF" d="M50 12 L52 12 L52 14 L48 14 L48 12 Z"/>
      <text x="50" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10">UTAH</text>
      <path fill="#6CACE4" d="M20 55 L35 35 L50 50 L65 30 L80 55 L80 60 L20 60 Z"/>
      <path fill="#FFFFFF" d="M25 55 L37 40 L50 52 L63 36 L75 55 L75 58 L25 58 Z"/>
      <path fill="#6CACE4" d="M30 55 L40 45 L50 53 L60 42 L70 55 L70 56 L30 56 Z"/>
      <circle cx="50" cy="70" r="8" fill="#010101" stroke="#FFFFFF" strokeWidth="1"/>
      <path fill="#FFFFFF" d="M50 64 L50 66 M50 74 L50 76 M44 70 L46 70 M54 70 L56 70"/>
      <text x="50" y="88" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="6">HOCKEY CLUB</text>
    </svg>
  );
};

export default UTA;
