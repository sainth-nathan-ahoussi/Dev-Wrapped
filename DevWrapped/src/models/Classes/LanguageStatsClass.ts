import { LanguageStats } from "../Interfaces/LanguageStats";

export class LanguageStatsClass implements LanguageStats {
    language: string;
    linesWritten: number;
    filesModified: number;
  
    constructor(language: string) {
      this.language = language;
      this.linesWritten = 0;
      this.filesModified = 0;
    }
  
    // --- Getters ---
    public getlanguage(): string {
      return this.language;
    }
  
    public getlinesWritten(): number {
      return this.linesWritten;
    }
  
    public getfilesModified(): number {
      return this.filesModified;
    }
  
    // --- Setters ---
    public setlanguage(lang: string) {
      this.language = lang;
    }
  
    public setlinesWritten(lines: number) {
      if (lines >= 0) {
        this.linesWritten = lines;
      } else {
        throw new Error("Le nombre de lignes écrites ne peut pas être négatif.");
      }
    }
  
    public setfilesModified(files: number) {
      if (files >= 0) {
        this.filesModified = files;
      } else {
        throw new Error("Le nombre de fichiers modifiés ne peut pas être négatif.");
      }
    }
  
    // --- Méthodes additionnelles ---
    
    // Ajouter des lignes écrites
    public addLinesWritten(lines: number): void {
      if (lines > 0) {
        this.linesWritten += lines;
      } else {
        throw new Error("Le nombre de lignes ajoutées doit être positif.");
      }
    }
  
    // Ajouter un fichier modifié
    public incrementFilesModified(): void {
      this.filesModified += 1;
    }
  
    // Résumé des statistiques pour ce langage
    public getSummary(): string {
      return `${this.language} : ${this.linesWritten} lignes écrites, ${this.filesModified} fichiers modifiés.`;
    }
  }
  