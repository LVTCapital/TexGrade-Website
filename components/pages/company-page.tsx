import type { Locale } from "@/lib/i18n";

const content = {
  de: {
    eyebrow: "Unternehmen",
    title: "Gewachsene Erfahrung. Klarer Blick nach vorn.",
    intro: "In TexGrade bündeln sich über 30 Jahre Branchenkenntnis in einem Unternehmen, das nationale und internationale Märkte verbindet und auf persönliche Zusammenarbeit sowie langfristige Partnerschaften setzt.",
    storyEyebrow: "Wer wir sind",
    storyTitle: "Wir kennen das Geschäft – und die Menschen dahinter.",
    story: [
      "Der nationale und internationale Textilhandel lebt von Marktkenntnis, Vertrauen und verlässlichen Beziehungen. Wir verstehen die unterschiedlichen Anforderungen unserer Kunden und wissen, dass jeder Absatzmarkt eigene Erwartungen mitbringt.",
      "Deshalb hören wir zu, stimmen Anforderungen direkt ab und richten unsere Zusammenarbeit am konkreten Bedarf unserer Kunden aus. Dabei setzen wir auf persönlichen Austausch und Zusammenarbeit auf Augenhöhe.",
    ],
    valuesEyebrow: "Unsere Arbeitsweise",
    valuesTitle: "Persönlich. Erfahren. Nah am Markt.",
    values: [
      ["Direkte Ansprechpartner", "Feste Kontakte und kurze Abstimmungswege sorgen für eine unkomplizierte Zusammenarbeit."],
      ["Entscheidungen aus Erfahrung", "Unsere langjährige Branchen- und Marktkenntnis prägt unsere tägliche Arbeit und den Umgang mit unterschiedlichen Kundenanforderungen."],
      ["Partnerschaften auf Dauer", "Wir setzen auf faire Zusammenarbeit und Geschäftsbeziehungen, die über den einzelnen Auftrag hinausgehen."],
    ],
  },
  en: {
    eyebrow: "Company",
    title: "Experience built over time. A clear view ahead.",
    intro: "TexGrade brings together more than 30 years of industry expertise in a company that connects national and international markets and is committed to personal cooperation and long-term partnerships.",
    storyEyebrow: "Who we are",
    storyTitle: "We know the business – and the people behind it.",
    story: [
      "National and international textile trade is built on market knowledge, trust and reliable relationships. We understand our customers’ different requirements and know that every sales market has its own expectations.",
      "That is why we listen, coordinate requirements directly and align our cooperation with our customers’ specific needs. We rely on personal dialogue and cooperation on equal terms.",
    ],
    valuesEyebrow: "How we work",
    valuesTitle: "Personal. Experienced. Close to the market.",
    values: [
      ["Direct contacts", "Dedicated contacts and short coordination channels ensure straightforward cooperation."],
      ["Decisions based on experience", "Our many years of industry and market knowledge shape our daily work and how we handle different customer requirements."],
      ["Long-term partnerships", "We are committed to fair cooperation and business relationships that extend beyond individual orders."],
    ],
  },
  fr: {
    eyebrow: "Entreprise",
    title: "Une expérience solide. Une vision claire de l’avenir.",
    intro: "TexGrade réunit plus de 30 ans d’expertise sectorielle au sein d’une entreprise qui relie les marchés nationaux et internationaux et mise sur une collaboration personnelle ainsi que sur des partenariats à long terme.",
    storyEyebrow: "Qui sommes-nous",
    storyTitle: "Nous connaissons le métier – et les personnes qui le font vivre.",
    story: [
      "Le commerce textile national et international repose sur la connaissance du marché, la confiance et des relations fiables. Nous comprenons les différentes exigences de nos clients et savons que chaque marché a ses propres attentes.",
      "C’est pourquoi nous sommes à l’écoute, convenons directement des exigences et adaptons notre collaboration aux besoins concrets de nos clients. Nous privilégions les échanges personnels et une collaboration d’égal à égal.",
    ],
    valuesEyebrow: "Notre manière de travailler",
    valuesTitle: "Personnelle. Expérimentée. Proche du marché.",
    values: [
      ["Des interlocuteurs directs", "Des contacts fixes et des circuits de coordination courts garantissent une collaboration simple."],
      ["Des décisions fondées sur l’expérience", "Nos nombreuses années de connaissance du secteur et du marché façonnent notre travail quotidien et notre manière de répondre aux différentes exigences de nos clients."],
      ["Des partenariats durables", "Nous misons sur une collaboration équitable et sur des relations commerciales qui vont au-delà d’une seule commande."],
    ],
  },
} as const;

export function CompanyPage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="page-hero company-hero">
        <div className="shell narrow-left"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <div className="story-title"><span className="eyebrow">{copy.storyEyebrow}</span><h2>{copy.storyTitle}</h2></div>
          <div className="story-copy">{copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section dark-section values-section">
        <div className="shell">
          <div className="section-heading light-heading"><span className="eyebrow light">{copy.valuesEyebrow}</span><h2>{copy.valuesTitle}</h2></div>
          <div className="values-grid">
            {copy.values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
