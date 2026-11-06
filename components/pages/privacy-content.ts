// Privacy policy (Datenschutzerklärung) content. The German version is legally binding.
// Facts about the technical setup live in lib/company.ts (hosting provider, log retention).
import { company } from "@/lib/company";

export type PrivacyBlock = string | { list: readonly string[] } | { highlight: string };
export type PrivacySection = { title: string; blocks: readonly PrivacyBlock[] };

const hosting = company.hosting;

export const privacyContent = {
  de: {
    eyebrow: "Rechtliches",
    title: "Datenschutzerklärung",
    lead: "Wir freuen uns über Ihr Interesse an TexGrade. Nachfolgend informieren wir Sie gemäß Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO), welche personenbezogenen Daten wir beim Besuch dieser Website und bei einer Kontaktaufnahme verarbeiten.",
    translationNote: null,
    controllerTitle: "1. Verantwortlicher",
    controllerIntro: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
    phone: "Telefon",
    email: "E-Mail",
    country: "Deutschland",
    representedBy: "vertreten durch die persönlich haftende Gesellschafterin",
    managingDirector: "Geschäftsführer",
    updated: "Stand: November 2026",
    sections: [
      {
        title: "2. Das Wichtigste auf einen Blick",
        blocks: [
          {
            list: [
              "Wir setzen keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Social-Media-Plugins ein.",
              "Schriftarten werden von unserem eigenen Server geladen; es werden keine Daten an Google oder andere Schriftanbieter übertragen.",
              "Beim Aufruf der Website werden technisch notwendige Zugriffsdaten (Server-Logfiles) kurzzeitig gespeichert.",
              "Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage.",
            ],
          },
        ],
      },
      {
        title: "3. Hosting und Server-Logfiles",
        blocks: [
          `Diese Website wird bei ${hosting.provider}, ${hosting.location}, gehostet. Die Server, auf denen die Website betrieben wird, befinden sich in ${hosting.serverRegion.de}.`,
          "Bei jedem Aufruf der Website werden durch den Hoster automatisch folgende Daten erfasst und in sogenannten Server-Logfiles gespeichert:",
          { list: ["IP-Adresse des anfragenden Geräts", "Datum und Uhrzeit des Zugriffs", "aufgerufene Seite bzw. Datei und übertragene Datenmenge", "HTTP-Statuscode (z. B. ob der Abruf erfolgreich war)", "Referrer-URL (die zuvor besuchte Seite)", "verwendeter Browser und Betriebssystem (User-Agent)"] },
          "Diese Daten sind technisch erforderlich, um die Website auszuliefern sowie ihre Stabilität und Sicherheit zu gewährleisten, etwa zur Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einem sicheren und funktionsfähigen Betrieb der Website. Eine Zusammenführung mit anderen Datenquellen oder eine Auswertung zu Marketingzwecken findet nicht statt.",
          `Die Logfiles werden nach spätestens ${hosting.logRetentionDays} Tagen automatisch gelöscht, sofern ihre weitere Aufbewahrung nicht im Einzelfall zur Aufklärung eines Sicherheitsvorfalls erforderlich ist.`,
          "Mit dem Hoster haben wir einen Vertrag über die Auftragsverarbeitung nach Art. 28 DSGVO geschlossen. Da der Anbieter seinen Sitz in den USA hat, ist ein Zugriff auf Daten aus den USA nicht auszuschließen. Der Anbieter ist nach dem EU-U.S. Data Privacy Framework zertifiziert, für das die EU-Kommission einen Angemessenheitsbeschluss erlassen hat (Art. 45 DSGVO). Ergänzend gelten die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).",
        ],
      },
      {
        title: "4. Verschlüsselung",
        blocks: ["Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers."],
      },
      {
        title: "5. Cookies und Schriftarten",
        blocks: [
          "Diese Website setzt keine Cookies und greift nicht auf Informationen in Ihrem Endgerät zu, die über das für die Darstellung der Website technisch Erforderliche hinausgehen (§ 25 Abs. 2 TDDDG). Ein Cookie-Banner ist daher nicht erforderlich.",
          "Die verwendeten Schriftarten (Inter, Inter Tight) sind lokal auf unserem Server eingebunden. Beim Aufruf der Website wird keine Verbindung zu Servern von Google oder anderen Drittanbietern hergestellt.",
        ],
      },
      {
        title: "6. Kontaktaufnahme per Telefon oder E-Mail",
        blocks: [
          "Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Unternehmen, Telefonnummer, E-Mail-Adresse und Inhalt Ihrer Anfrage), um Ihr Anliegen zu bearbeiten.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Erfüllung eines Vertrags oder der Durchführung vorvertraglicher Maßnahmen zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).",
          "Wir löschen Ihre Daten, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Geschäftsbriefe und steuerlich relevante Unterlagen bewahren wir nach § 257 HGB und § 147 AO für sechs bzw. zehn Jahre auf.",
          "Für den Betrieb unserer E-Mail- und Telefonkommunikation setzen wir technische Dienstleister ein, die Daten ausschließlich nach unserer Weisung als Auftragsverarbeiter verarbeiten.",
        ],
      },
      {
        title: "7. Empfänger der Daten",
        blocks: ["Ihre Daten erhalten innerhalb unseres Unternehmens nur die Personen, die sie zur Bearbeitung Ihres Anliegens benötigen. Externe Empfänger sind ausschließlich die oben genannten Auftragsverarbeiter (Hosting, E-Mail- und Telekommunikationsdienste). Eine Weitergabe an sonstige Dritte erfolgt nur, wenn wir gesetzlich dazu verpflichtet sind, etwa gegenüber Behörden."],
      },
      {
        title: "8. Ihre Rechte",
        blocks: [
          "Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:",
          { list: ["Recht auf Auskunft (Art. 15 DSGVO)", "Recht auf Berichtigung (Art. 16 DSGVO)", "Recht auf Löschung (Art. 17 DSGVO)", "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)", "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)", "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)"] },
          "Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben genannten Kontaktdaten.",
          { highlight: "Widerspruchsrecht: Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen." },
        ],
      },
      {
        title: "9. Beschwerderecht bei einer Aufsichtsbehörde",
        blocks: ["Unbeschadet anderer Rechtsbehelfe haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes (Art. 77 DSGVO)."],
      },
      {
        title: "10. Weitere Hinweise",
        blocks: [
          "Die Bereitstellung Ihrer Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die technisch notwendigen Zugriffsdaten kann die Website jedoch nicht angezeigt werden; ohne Kontaktdaten können wir Ihre Anfrage nicht beantworten.",
          "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.",
          "Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die rechtlichen Anforderungen ändern. Es gilt jeweils die hier veröffentlichte Fassung.",
        ],
      },
    ] satisfies PrivacySection[],
  },
  en: {
    eyebrow: "Legal",
    title: "Privacy policy",
    lead: "Thank you for your interest in TexGrade. In accordance with Articles 13 and 14 of the General Data Protection Regulation (GDPR), this policy explains which personal data we process when you visit this website or contact us.",
    translationNote: "This is a translation provided for convenience. Only the German version is legally binding.",
    controllerTitle: "1. Controller",
    controllerIntro: "The controller responsible for data processing on this website is:",
    phone: "Telephone",
    email: "Email",
    country: "Germany",
    representedBy: "represented by its general partner",
    managingDirector: "Managing director",
    updated: "Last updated: November 2026",
    sections: [
      {
        title: "2. Summary",
        blocks: [
          {
            list: [
              "We do not use cookies, analytics or tracking tools, or social media plugins.",
              "Fonts are served from our own server; no data is transferred to Google or other font providers.",
              "When you visit the website, technically necessary access data (server log files) is stored for a short period.",
              "If you contact us by telephone or email, we process your information to handle your enquiry.",
            ],
          },
        ],
      },
      {
        title: "3. Hosting and server log files",
        blocks: [
          `This website is hosted by ${hosting.provider}, ${hosting.location}. The servers running the website are located in ${hosting.serverRegion.en}.`,
          "Each time the website is accessed, the host automatically collects the following data and stores it in server log files:",
          { list: ["IP address of the requesting device", "date and time of access", "page or file requested and amount of data transferred", "HTTP status code (e.g. whether the request was successful)", "referrer URL (the previously visited page)", "browser and operating system used (user agent)"] },
          "This data is technically required to deliver the website and to ensure its stability and security, for example to defend against attacks. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest lies in the secure and reliable operation of the website. The data is not combined with other data sources or analysed for marketing purposes.",
          `Log files are deleted automatically after no more than ${hosting.logRetentionDays} days, unless further retention is required in an individual case to investigate a security incident.`,
          "We have concluded a data processing agreement with the host in accordance with Art. 28 GDPR. As the provider is based in the USA, access to data from the USA cannot be ruled out. The provider is certified under the EU-U.S. Data Privacy Framework, for which the European Commission has adopted an adequacy decision (Art. 45 GDPR). In addition, the European Commission’s Standard Contractual Clauses apply (Art. 46(2)(c) GDPR).",
        ],
      },
      {
        title: "4. Encryption",
        blocks: ["For security reasons, this website uses SSL/TLS encryption. You can recognise an encrypted connection by “https://” and the padlock symbol in your browser’s address bar."],
      },
      {
        title: "5. Cookies and fonts",
        blocks: [
          "This website does not set cookies and does not access information on your device beyond what is technically required to display the website (Section 25(2) of the German TDDDG). A cookie banner is therefore not required.",
          "The fonts used (Inter, Inter Tight) are hosted locally on our server. No connection to servers operated by Google or other third parties is established when you visit the website.",
        ],
      },
      {
        title: "6. Contacting us by telephone or email",
        blocks: [
          "If you contact us by telephone or email, we process the information you provide (e.g. name, company, telephone number, email address and the content of your enquiry) in order to handle your request.",
          "The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to the performance of a contract or to pre-contractual measures. In all other cases, processing is based on our legitimate interest in responding to enquiries (Art. 6(1)(f) GDPR).",
          "We delete your data once your enquiry has been fully dealt with, unless statutory retention obligations apply. Business correspondence and tax-relevant documents are retained for six or ten years respectively in accordance with Section 257 of the German Commercial Code (HGB) and Section 147 of the German Fiscal Code (AO).",
          "We use technical service providers to operate our email and telephone communication; they process data solely on our instructions as processors.",
        ],
      },
      {
        title: "7. Recipients of data",
        blocks: ["Within our company, your data is only accessible to those who need it to handle your request. External recipients are limited to the processors named above (hosting, email and telecommunication services). We only disclose data to other third parties where we are legally obliged to do so, for example to public authorities."],
      },
      {
        title: "8. Your rights",
        blocks: [
          "You have the following rights regarding your personal data:",
          { list: ["right of access (Art. 15 GDPR)", "right to rectification (Art. 16 GDPR)", "right to erasure (Art. 17 GDPR)", "right to restriction of processing (Art. 18 GDPR)", "right to data portability (Art. 20 GDPR)", "right to object to processing (Art. 21 GDPR)"] },
          "To exercise your rights, an informal message to the contact details above is sufficient.",
          { highlight: "Right to object: Where we process your data on the basis of Art. 6(1)(f) GDPR, you have the right to object to this processing at any time on grounds relating to your particular situation. We will then no longer process your data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims." },
        ],
      },
      {
        title: "9. Right to lodge a complaint",
        blocks: ["Without prejudice to any other remedy, you have the right to lodge a complaint with a data protection supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement (Art. 77 GDPR)."],
      },
      {
        title: "10. Further information",
        blocks: [
          "You are not legally or contractually obliged to provide your data. However, the website cannot be displayed without the technically necessary access data, and we cannot respond to your enquiry without contact details.",
          "No automated decision-making, including profiling within the meaning of Art. 22 GDPR, takes place.",
          "We will update this privacy policy if our website or the legal requirements change. The version published here applies.",
        ],
      },
    ] satisfies PrivacySection[],
  },
  fr: {
    eyebrow: "Informations légales",
    title: "Politique de confidentialité",
    lead: "Merci de l’intérêt que vous portez à TexGrade. Conformément aux articles 13 et 14 du Règlement général sur la protection des données (RGPD), nous vous informons ci-dessous des données personnelles que nous traitons lorsque vous consultez ce site ou que vous nous contactez.",
    translationNote: "Cette traduction est fournie à titre indicatif. Seule la version allemande fait foi.",
    controllerTitle: "1. Responsable du traitement",
    controllerIntro: "Le responsable du traitement des données sur ce site est :",
    phone: "Téléphone",
    email: "E-mail",
    country: "Allemagne",
    representedBy: "représentée par son associée commanditée",
    managingDirector: "Gérant",
    updated: "Dernière mise à jour : novembre 2026",
    sections: [
      {
        title: "2. L’essentiel en bref",
        blocks: [
          {
            list: [
              "Nous n’utilisons ni cookies, ni outils d’analyse ou de suivi, ni plugins de réseaux sociaux.",
              "Les polices sont chargées depuis notre propre serveur ; aucune donnée n’est transmise à Google ou à d’autres fournisseurs de polices.",
              "Lors de la consultation du site, des données d’accès techniquement nécessaires (fichiers journaux du serveur) sont conservées pour une courte durée.",
              "Si vous nous contactez par téléphone ou par e-mail, nous traitons vos informations afin de répondre à votre demande.",
            ],
          },
        ],
      },
      {
        title: "3. Hébergement et fichiers journaux du serveur",
        blocks: [
          `Ce site est hébergé par ${hosting.provider}, ${hosting.location}. Les serveurs qui exploitent le site se trouvent ${hosting.serverRegion.fr}.`,
          "À chaque consultation du site, l’hébergeur collecte automatiquement les données suivantes et les enregistre dans des fichiers journaux :",
          { list: ["adresse IP de l’appareil", "date et heure de l’accès", "page ou fichier consulté et volume de données transféré", "code de statut HTTP (par ex. si la requête a abouti)", "URL de référence (page consultée précédemment)", "navigateur et système d’exploitation utilisés (user agent)"] },
          "Ces données sont techniquement nécessaires pour afficher le site et garantir sa stabilité et sa sécurité, par exemple pour se défendre contre des attaques. La base juridique est l’article 6, paragraphe 1, point f) du RGPD ; notre intérêt légitime réside dans l’exploitation sûre et fiable du site. Les données ne sont ni recoupées avec d’autres sources ni analysées à des fins de marketing.",
          `Les fichiers journaux sont supprimés automatiquement au plus tard après ${hosting.logRetentionDays} jours, sauf si leur conservation est exceptionnellement nécessaire pour élucider un incident de sécurité.`,
          "Nous avons conclu avec l’hébergeur un contrat de sous-traitance conformément à l’article 28 du RGPD. Le prestataire ayant son siège aux États-Unis, un accès aux données depuis les États-Unis ne peut être exclu. Le prestataire est certifié au titre du cadre de protection des données UE–États-Unis (EU-U.S. Data Privacy Framework), qui fait l’objet d’une décision d’adéquation de la Commission européenne (article 45 du RGPD). Les clauses contractuelles types de la Commission européenne s’appliquent en complément (article 46, paragraphe 2, point c) du RGPD).",
        ],
      },
      {
        title: "4. Chiffrement",
        blocks: ["Pour des raisons de sécurité, ce site utilise un chiffrement SSL/TLS. Vous reconnaissez une connexion chiffrée à la mention « https:// » et au cadenas dans la barre d’adresse de votre navigateur."],
      },
      {
        title: "5. Cookies et polices",
        blocks: [
          "Ce site ne dépose aucun cookie et n’accède à aucune information sur votre appareil au-delà de ce qui est techniquement nécessaire à l’affichage du site (article 25, paragraphe 2 de la loi allemande TDDDG). Un bandeau cookies n’est donc pas nécessaire.",
          "Les polices utilisées (Inter, Inter Tight) sont hébergées localement sur notre serveur. Aucune connexion aux serveurs de Google ou d’autres tiers n’est établie lors de la consultation du site.",
        ],
      },
      {
        title: "6. Prise de contact par téléphone ou e-mail",
        blocks: [
          "Si vous nous contactez par téléphone ou par e-mail, nous traitons les informations que vous nous communiquez (par ex. nom, entreprise, numéro de téléphone, adresse e-mail et contenu de votre demande) afin de traiter votre demande.",
          "La base juridique est l’article 6, paragraphe 1, point b) du RGPD lorsque votre demande est liée à l’exécution d’un contrat ou à des mesures précontractuelles. Dans tous les autres cas, le traitement repose sur notre intérêt légitime à répondre aux demandes (article 6, paragraphe 1, point f) du RGPD).",
          "Nous supprimons vos données dès que votre demande a été entièrement traitée, sauf obligation légale de conservation. La correspondance commerciale et les documents fiscaux sont conservés six ou dix ans conformément à l’article 257 du code de commerce allemand (HGB) et à l’article 147 du code fiscal allemand (AO).",
          "Pour notre communication par e-mail et par téléphone, nous faisons appel à des prestataires techniques qui traitent les données exclusivement sur nos instructions en tant que sous-traitants.",
        ],
      },
      {
        title: "7. Destinataires des données",
        blocks: ["Au sein de notre entreprise, seules les personnes qui en ont besoin pour traiter votre demande ont accès à vos données. Les destinataires externes se limitent aux sous-traitants mentionnés ci-dessus (hébergement, services de messagerie et de télécommunication). Nous ne transmettons des données à d’autres tiers que si la loi nous y oblige, par exemple aux autorités."],
      },
      {
        title: "8. Vos droits",
        blocks: [
          "Vous disposez des droits suivants concernant vos données personnelles :",
          { list: ["droit d’accès (article 15 du RGPD)", "droit de rectification (article 16 du RGPD)", "droit à l’effacement (article 17 du RGPD)", "droit à la limitation du traitement (article 18 du RGPD)", "droit à la portabilité des données (article 20 du RGPD)", "droit d’opposition au traitement (article 21 du RGPD)"] },
          "Pour exercer vos droits, un simple message aux coordonnées indiquées ci-dessus suffit.",
          { highlight: "Droit d’opposition : lorsque nous traitons vos données sur la base de l’article 6, paragraphe 1, point f) du RGPD, vous avez le droit de vous opposer à tout moment à ce traitement pour des raisons tenant à votre situation particulière. Nous ne traiterons alors plus vos données, à moins de démontrer des motifs légitimes et impérieux qui prévalent sur vos intérêts, droits et libertés, ou que le traitement serve à la constatation, à l’exercice ou à la défense de droits en justice." },
        ],
      },
      {
        title: "9. Droit d’introduire une réclamation",
        blocks: ["Sans préjudice de tout autre recours, vous avez le droit d’introduire une réclamation auprès d’une autorité de contrôle de la protection des données, notamment dans l’État membre de votre résidence habituelle, de votre lieu de travail ou du lieu de la violation présumée (article 77 du RGPD)."],
      },
      {
        title: "10. Informations complémentaires",
        blocks: [
          "La fourniture de vos données n’est ni légalement ni contractuellement obligatoire. Toutefois, le site ne peut pas être affiché sans les données d’accès techniquement nécessaires, et nous ne pouvons pas répondre à votre demande sans coordonnées.",
          "Aucune prise de décision automatisée, y compris le profilage au sens de l’article 22 du RGPD, n’a lieu.",
          "Nous adaptons cette politique de confidentialité lorsque notre site ou les exigences légales évoluent. La version publiée ici fait foi.",
        ],
      },
    ] satisfies PrivacySection[],
  },
} as const;
