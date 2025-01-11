import { CodeStatistics } from "../Interfaces/CodeStatistics";
import { LanguageStats } from "../Interfaces/LanguageStats";

export class CodeStatisticsClass implements CodeStatistics {
  totalLinesWritten: number;
  totalLinesModified: number;
  totalLinesDeleted: number;
  filesCreated: number;
  filesModified: number;
  filesDeleted: number;
  languagesUsed: LanguageStats[];

  constructor() {
    this.totalLinesWritten = 0;
    this.totalLinesModified = 0;
    this.totalLinesDeleted = 0;
    this.filesCreated = 0;
    this.filesModified = 0;
    this.filesDeleted = 0;
    this.languagesUsed = [];
  }

  // Getters
  getTotalLinesWritten(): number {
    return this.totalLinesWritten;
  }

  getTotalLinesModified(): number{
    return this.totalLinesModified;
  }
  
  getTotalLinesDeleted(): number{
    return this.totalLinesDeleted;
  }

  getFilesCreated (): number{
    return this.filesCreated;
  }

  getFilesModified (): number{
    return this.filesModified;
  }

  getFilesDeleted (): number{
    return this.filesDeleted;
  }

  getLanguagesUsed(): LanguageStats[] {
    return this.languagesUsed;
  }


  // Setters
  setTotalLinesWritten(lines: number): void {
    this.totalLinesWritten = lines;
  }

  setTotalLinesModified(TotalLinesModified : number) {
    this.totalLinesModified = TotalLinesModified;
  }

  setTotalLinesDeleted(TotalLinesDeleted : number) {
    this.totalLinesDeleted = TotalLinesDeleted;
  }

  setFilesCreated(FilesCreated : number) {
    this.filesCreated = FilesCreated;
  }

  setFilesModified(FilesModified : number){
    this.filesModified = FilesModified;
  }

  setFilesDeleted(FilesDeleted : number){
    this.filesDeleted = FilesDeleted;
  }


  // Fonctions
  addLanguageUsage(language: LanguageStats): void {
    this.languagesUsed.push(language);
  }
}
