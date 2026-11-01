import Link from "next/link";
import { Loader2 } from "lucide-react";

const variantClasses = {
  primary: "bg-emerald-600 text-white border border-emerald-700 hover:bg-emerald-700 shadow-[0_8px_18px_rgba(5,150,105,0.28)]",
  secondary: "bg-sky-600 text-white border border-sky-700 hover:bg-sky-700 shadow-[0_8px_18px_rgba(2,132,199,0.26)]",
  accent: "bg-violet-600 text-white border border-violet-700 hover:bg-violet-700 shadow-[0_8px_18px_rgba(124,58,237,0.26)]",
  warning: "bg-orange-500 text-white border border-orange-600 hover:bg-orange-600 shadow-[0_8px_18px_rgba(249,115,22,0.24)]",
  light: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm",
  ghost: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200",
  danger: "bg-red-500 text-white border border-red-600 hover:bg-red-600 shadow-[0_8px_18px_rgba(239,68,68,0.22)]",
};

const sizeClasses = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className = "",
  as: Component = "button",
  href,
  type = "button",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed transform active:translate-y-0",
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : Icon ? (
        iconPosition === "left" ? <Icon className="h-4 w-4" /> : null
      ) : null}
      {children}
      {!loading && Icon && iconPosition === "right" ? <Icon className="h-4 w-4" /> : null}
    </>
  );

  if (Component === Link) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <Component type={type} className={classes} {...props}>
      {content}
    </Component>
  );
}
