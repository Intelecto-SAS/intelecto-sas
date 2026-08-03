import { PartnersPage } from "@/components/partners/PartnersPage";
import { createFileRoute } from "@tanstack/react-router";

const seoTitle = "Partners tecnologicos | Alianzas estrategicas | Intelecto";
const seoDescription =
  "Construye alianzas con Intelecto y complementa tus capacidades tecnicas, comerciales y contractuales para participar en proyectos de mayor alcance.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    links: [{ rel: "canonical", href: "/partners" }],
    meta: [
      { title: seoTitle },
      { name: "description", content: seoDescription },
      {
        name: "keywords",
        content:
          "Partners tecnologicos, Alianzas estrategicas, Licitaciones, Contratos tecnologicos, Union temporal, Desarrollo de software, Inteligencia artificial, Microsoft, Capacidad tecnica, Proyectos conjuntos",
      },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { property: "og:url", content: "/partners" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
    ],
  }),
  component: PartnersPage,
});
