import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
};

export default function Button({ href = "#", children, className = "" }: Props) {
  return (
    <Link href={href} className={`btn-primary ${className}`}>
      {children}
    </Link>
  );
}
