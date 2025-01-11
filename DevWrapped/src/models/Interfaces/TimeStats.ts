
export interface DailyActivity {
    date: string;            
    linesWritten: number;   
    filesModified: number;   
    codingDuration: number;  
  }
export interface TimeStats {
    codingTimeByDay: DailyActivity[]; 
    mostProductiveDay: string;        
    mostProductiveHours: number[];    
  }
  