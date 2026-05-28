import {
  generateAdditionalServiceMetadata,
  generateAdditionalServiceStaticParams,
  renderAdditionalServiceRoute,
} from "@/lib/additional-service-route";

const slug = "marketing-audit";

export const generateStaticParams = generateAdditionalServiceStaticParams;

export function generateMetadata({ params }: { params: Promise<{ language: string }> }) {
  return generateAdditionalServiceMetadata({ slug, params });
}

export default function MarketingAuditRoute({ params }: { params: Promise<{ language: string }> }) {
  return renderAdditionalServiceRoute({ slug, params });
}

