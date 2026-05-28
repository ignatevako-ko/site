import {
  generateAdditionalServiceMetadata,
  generateAdditionalServiceStaticParams,
  renderAdditionalServiceRoute,
} from "@/lib/additional-service-route";

const slug = "website-development";

export const generateStaticParams = generateAdditionalServiceStaticParams;

export function generateMetadata({ params }: { params: Promise<{ language: string }> }) {
  return generateAdditionalServiceMetadata({ slug, params });
}

export default function WebsiteDevelopmentRoute({ params }: { params: Promise<{ language: string }> }) {
  return renderAdditionalServiceRoute({ slug, params });
}

