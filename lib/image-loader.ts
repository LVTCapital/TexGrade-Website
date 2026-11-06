// Serves pre-resized files from public/images/generated instead of resizing at
// request time (which is slow on small hosting instances and lost on restart).
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const match = src.match(/^\/images\/warehouse\/([\w-]+)\.webp$/);
  return match ? `/images/generated/${match[1]}-${width}.webp` : src;
}
