import { CodeStatistics } from "./CodeStatistics";
import { TimeStats } from "./TimeStats";
import { ErrorStats } from "./ErrorStats";
import { ProjectStats } from "./ProjectStats";

export interface WrappedReport {
  generalStats: CodeStatistics;
  timeStats: TimeStats;
  errorStats: ErrorStats;
  projectStats: ProjectStats[];
  generatedAt: string;
}
