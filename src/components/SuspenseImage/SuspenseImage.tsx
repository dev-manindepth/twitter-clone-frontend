import React, { useState } from "react";

const useImageCache = (): ((src: string) => Promise<string>) => {
  const [cache] = useState<Record<string, Promise<string> | string>>({});

  return (src: string): Promise<string> => {
    if (!cache[src]) {
      cache[src] = new Promise<string>((resolve) => {
        const img = new Image();
        img.onload = () => {
          cache[src] = img.src;
          resolve(cache[src] as string);
        };
        img.src = src;
      });
    }
    if (cache[src] instanceof Promise) {
      return cache[src] as Promise<string>;
    }
    return Promise.resolve(cache[src] as string);
  };
};

interface SuspenseImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
}

export default function SuspenseImage({
  src,
  alt,
  className,
  height,
  width,
}: SuspenseImageProps) {
  const cache = useImageCache();
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
}
