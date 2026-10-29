import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function MediaFrame({
  src,
  alt,
  className,
  width = 800,
  height = 600,
  priority = false,
}: MediaFrameProps) {
  if (!src) return null;
  if (src.endsWith(".svg")) {
    return (
      // next/image does not optimise SVG logos from /public.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
