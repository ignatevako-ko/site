import {
  generateAdditionalServiceMetadata,
  generateAdditionalServiceStaticParams,
  renderAdditionalServiceRoute,
} from "@/lib/additional-service-route";

const slug = "smm";

export const generateStaticParams = generateAdditionalServiceStaticParams;

export function generateMetadata({ params }: { params: Promise<{ language: string }> }) {
  return generateAdditionalServiceMetadata({ slug, params });
}

export default function SmmRoute({ params }: { params: Promise<{ language: string }> }) {
  return renderAdditionalServiceRoute({ slug, params });
}

