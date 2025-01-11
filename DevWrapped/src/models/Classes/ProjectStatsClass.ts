import { ProjectStats } from "../Interfaces/ProjectStats";

export class ProjectStatsClass implements ProjectStats {
  projectName: string;
  linesWritten: number;
  filesModified: number;
  codingDuration: number;
  commits: number;

  constructor(projectName: string) {
    this.projectName = projectName;
    this.linesWritten = 0;
    this.filesModified = 0;
    this.codingDuration = 0;
    this.commits = 0;
  }

  // Getters
  getProjectName(): string{
    return this.projectName;
  }

  getLinesWritten(): number{
    return this.linesWritten;
  }

  getFilesModified(): number{
    return this.filesModified;
  }

  getCodingDuration(): number{
    return this.codingDuration;
  }

  getCommits(): number{
    return this.commits;
  }
  //Setters 
  setProjectName(ProjectName: string){
    this.projectName = ProjectName;
  }

  setLinesWritten(LinesWritten: number){
    this.linesWritten = LinesWritten;
  }

  setFilesModified(FilesModified : number){
    this.filesModified = FilesModified;
  }

  setCodingDuration(CodingDuration : number){
    this.codingDuration = CodingDuration;
  }

  setCommits(Commits : number){
    this.commits = Commits;
  }

  // Fonctions
  addCommit(linesAdded: number, linesDeleted: number): void {
    this.linesWritten += linesAdded - linesDeleted;
    this.commits++;
  }
}
