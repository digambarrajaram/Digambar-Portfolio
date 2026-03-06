import ProjectsClient from "@/components/ProjectsClient";
import { generateProjectsMetadata } from "@/lib/metadata";

export const metadata = generateProjectsMetadata();

export default function Projects() {
  return (
      <ProjectsClient />
  );
}
