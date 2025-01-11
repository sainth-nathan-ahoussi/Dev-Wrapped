import { TimeStats, DailyActivity } from "../Interfaces/TimeStats";

export class TimeStatsClass implements TimeStats {
  codingTimeByDay: DailyActivity[];
  mostProductiveDay: string;
  mostProductiveHours: number[];

  constructor() {
    this.codingTimeByDay = [];
    this.mostProductiveDay = "";
    this.mostProductiveHours = [];
  }

// Getters
getCodingTimeByDay(): DailyActivity[] {
    return this.codingTimeByDay;
}

getMostProductiveDay(): string{
    return this.mostProductiveDay;
}

getMostProductiveHours(): number[] {
    return this.mostProductiveHours;
}

// Setters
setCodingTimeByDay(CodingTimeByDay: DailyActivity[]){
    this.codingTimeByDay = CodingTimeByDay;
}

setMostProductiveDay (MostProductiveDay: string){
    this.mostProductiveDay = MostProductiveDay;
}


setMostProductiveHours(MostProductiveHours: number[]){
    this.mostProductiveHours = MostProductiveHours;
}



// Fonctions
addDailyActivity(activity: DailyActivity): void {
    this.codingTimeByDay.push(activity);
  }

calculateMostProductiveDay(): void {
    const max = this.codingTimeByDay.reduce((prev, current) =>
      prev.linesWritten > current.linesWritten ? prev : current
    );
    this.mostProductiveDay = max.date;
  }
}
