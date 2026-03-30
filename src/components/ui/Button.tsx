import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import * as styles from "./Button.css";

type Variant = "primary" | "secondary";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const c =
    variant === "primary" ? styles.primary : styles.secondary;
  return (
    <button className={`${c} ${className}`.trim()} {...props} />
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  const c =
    variant === "primary" ? styles.primary : styles.secondary;
  return <Link className={`${c} ${className}`.trim()} {...props} />;
}
