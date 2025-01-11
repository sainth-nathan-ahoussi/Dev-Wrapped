import { LanguageStats } from "../Interfaces/LanguageStats";

export interface CodeStatistics {
    totalLinesWritten: number;
    totalLinesModified: number;
    totalLinesDeleted: number;
    filesCreated: number;
    filesModified: number;
    filesDeleted: number;
    languagesUsed: LanguageStats[];
}