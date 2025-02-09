import { WrappedReportClass } from "../models/Classes/WrappedReportClass";
import { LanguageStatsClass } from "../models/Classes/LanguageStatsClass";
import { ProjectStats } from "../models/Interfaces/ProjectStats";

const simulateReport = () => {
  console.log("=== Simulation de Dev Wrapped ===");

  // Créer un rapport global
  const report = new WrappedReportClass();

  // --- 1. Ajouter des statistiques générales ---
  report.updateGeneralStats(1000, 15); // 1000 lignes écrites, 15 fichiers modifiés

  // --- 2. Ajouter des statistiques de langages ---
  const jsStats = new LanguageStatsClass("JavaScript");
  jsStats.addLinesWritten(500);
  jsStats.incrementFilesModified();

  const tsStats = new LanguageStatsClass("TypeScript");
  tsStats.addLinesWritten(300);
  tsStats.incrementFilesModified();

  report.generalStats.languagesUsed = [jsStats, tsStats];

  // --- 3. Ajouter un projet ---
  const project: ProjectStats = {
    projectName: "Dev Wrapped",
    linesWritten: 800,
    filesModified: 10,
    codingDuration: 2, // en minutes
    commits: 5,
  };
  report.addProjectStats(project);

  // --- 4. Ajouter des erreurs ---
  report.addError("Variable non définie");
  report.addError("Variable non définie");
  report.addError("Type incorrect");

  // --- 5. Afficher le résumé ---
  console.log(report.generateSummary());
};

simulateReport();
