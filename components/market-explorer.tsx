"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const marketCopy = {
  de: {
    label: "Absatzmärkte",
    markets: [
      { id: "europe", label: "Europa", eyebrow: "Europäische Märkte", text: "Innerhalb Europas liefert TexGrade sortierte Secondhand-Textilien entsprechend der vereinbarten Artikel- und Qualitätsanforderungen.", detail: "Marktgerechte Auswahl · abgestimmte Kategorien · koordinierte Logistik" },
      { id: "africa", label: "Afrika", eyebrow: "Internationale Märkte", text: "Für afrikanische Absatzmärkte werden artikelbezogene und saisonal passende Sortimente nach Kundenvorgabe zusammengestellt.", detail: "Kundenspezifische Kategorien · saisonale Zusammenstellung · exportgerechte Verpackung" },
      { id: "asia", label: "Asien", eyebrow: "Internationale Märkte", text: "Auch für Geschäftspartner in Asien bereitet TexGrade sortierte Textilien in klar definierten Kategorien vor.", detail: "Definierte Sortierung · nachvollziehbare Artikelstruktur · verlässliche Abwicklung" },
    ],
  },
  en: {
    label: "Sales markets",
    markets: [
      { id: "europe", label: "Europe", eyebrow: "European markets", text: "Within Europe, TexGrade supplies sorted second-hand textiles in line with agreed article and quality requirements.", detail: "Market-specific selection · agreed categories · coordinated logistics" },
      { id: "africa", label: "Africa", eyebrow: "International markets", text: "For African markets, we prepare article-specific and seasonally appropriate assortments based on customer requirements.", detail: "Customer-specific categories · seasonal assortments · export-ready packaging" },
      { id: "asia", label: "Asia", eyebrow: "International markets", text: "TexGrade also prepares sorted textiles in clearly defined categories for business partners in Asia.", detail: "Defined sorting · transparent article structure · reliable handling" },
    ],
  },
  fr: {
    label: "Marchés de vente",
    markets: [
      { id: "europe", label: "Europe", eyebrow: "Marchés européens", text: "En Europe, TexGrade fournit des textiles de seconde main triés conformément aux exigences convenues en matière d’articles et de qualité.", detail: "Sélection adaptée au marché · catégories convenues · logistique coordonnée" },
      { id: "africa", label: "Afrique", eyebrow: "Marchés internationaux", text: "Pour les marchés africains, nous préparons des assortiments par article et par saison selon les exigences des clients.", detail: "Catégories spécifiques · assortiments saisonniers · conditionnement pour l’export" },
      { id: "asia", label: "Asie", eyebrow: "Marchés internationaux", text: "TexGrade prépare également des textiles triés dans des catégories clairement définies pour ses partenaires commerciaux en Asie.", detail: "Tri défini · structure d’articles transparente · traitement fiable" },
    ],
  },
} as const;

type Market = {
  id: string;
  label: string;
  eyebrow: string;
  text: string;
  detail: string;
};

export function MarketExplorer({ locale }: { locale: Locale }) {
  const { label } = marketCopy[locale];
  const markets: readonly Market[] = marketCopy[locale].markets;
  const [activeId, setActiveId] = useState(markets[0].id);
  const active = markets.find((market) => market.id === activeId) ?? markets[0];

  return (
    <div className="market-explorer">
      <div className="market-list" role="tablist" aria-label={label}>
        {markets.map((market, index) => (
          <button
            key={market.id}
            type="button"
            role="tab"
            aria-selected={active.id === market.id}
            aria-controls="market-panel"
            className={active.id === market.id ? "market-tab active" : "market-tab"}
            onClick={() => setActiveId(market.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {market.label}
          </button>
        ))}
      </div>
      <div className="market-panel" id="market-panel" role="tabpanel">
        <span className="eyebrow light">{active.eyebrow}</span>
        <h3>{active.label}</h3>
        <p>{active.text}</p>
        <div className="market-detail">{active.detail}</div>
      </div>
    </div>
  );
}
