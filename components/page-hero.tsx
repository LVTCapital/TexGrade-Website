import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: { src: string; alt: string; position?: string };
};

export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className={image ? "page-hero has-image" : "page-hero"}>
      {image && (
        <Image
          className="page-hero-image"
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      )}
      <div className="shell page-hero-inner">
        <span className={image ? "eyebrow light" : "eyebrow"}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
