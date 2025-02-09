import { WrappedReport } from "../Interfaces/WrappedReport";
import { CodeStatisticsClass } from "../Classes/CodeStatisticsClass";
import { TimeStatsClass } from "../Classes/TimeStatsClass";
import { ErrorStatsClass } from "../Classes/ErrorStatsClass";
import { ProjectStats } from "../Interfaces/ProjectStats";

export class WrappedReportClass implements WrappedReport {
  generalStats: CodeStatisticsClass;
  timeStats: TimeStatsClass;
  errorStats: ErrorStatsClass;
  projectStats: ProjectStats[];
  generatedAt: string;

  constructor() {
    this.generalStats = new CodeStatisticsClass();
    this.timeStats = new TimeStatsClass();
    this.errorStats = new ErrorStatsClass();
    this.projectStats = [];
    this.generatedAt = new Date().toISOString();
  }

  // --- GETTERS ---
  public  GetgeneralStats(): CodeStatisticsClass {
    return this.generalStats;
  }

  public  GettimeStats(): TimeStatsClass {
    return this.timeStats;
  }

  public  GeterrorStats(): ErrorStatsClass {
    return this.errorStats;
  }

  public  GetprojectStats(): ProjectStats[] {
    return this.projectStats;
  }

  public  GetgeneratedAt(): string {
    return this.generatedAt;
  }

  private getMostUsedLanguages(): string[] {
    return this.generalStats.languagesUsed
      .sort((a, b) => b.linesWritten - a.linesWritten)
      .map(lang => `${lang.language}: ${lang.linesWritten} lignes`);
  }
  
  calculateTotalCodingTime(): number {
    return this.projectStats.reduce((total, project) => total + project.codingDuration, 0);
  }
  

  // --- SETTERS ---
  public SetgeneralStats(stats: CodeStatisticsClass) {
    this.generalStats = stats;
  }

  public SettimeStats(stats: TimeStatsClass) {
    this.timeStats = stats;
  }

  public SeterrorStats(stats: ErrorStatsClass) {
    this.errorStats = stats;
  }

  public SetprojectStats(projects: ProjectStats[]) {
    this.projectStats = projects;
  }

  public SetgeneratedAt(date: string) {
    this.generatedAt = date;
  }
 
  addProjectStats(project: ProjectStats): void {
    this.projectStats.push(project);
  }

  // Méthode pour mettre à jour les statistiques générales
  updateGeneralStats(linesWritten: number, filesModified: number): void {
    this.generalStats.totalLinesWritten += linesWritten;
    this.generalStats.filesModified += filesModified;
  }

  // Méthode pour ajouter une erreur
  addError(type: string): void {
    this.errorStats.addError(type);
  }

  private formatDate(date: string): string {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const seconds = d.getSeconds().toString().padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }
  

  // Méthode pour générer un résumé
  generateSummary(): string {
    const formattedDate = this.formatDate(this.generatedAt);
    const mostUsedLanguages = this.getMostUsedLanguages(); 
    const totalCodingTime = this.calculateTotalCodingTime();
  
    return `
      Rapport généré le : ${formattedDate}
      --------------------------
      Total de lignes écrites : ${this.generalStats.totalLinesWritten}
      Total de fichiers modifiés : ${this.generalStats.filesModified}
      Nombre de projets réalisé : ${this.projectStats.length}
      Erreurs totales détectées : ${this.errorStats.totalErrorsDetected}
      Erreurs totales corrigées : ${this.errorStats.totalErrorsFixed}
      Temps total passé à coder : ${totalCodingTime} heures
      --------------------------
      Classement des langages les plus utilisés :
      ${mostUsedLanguages.join("\n")}
    `;
  }
  
}
