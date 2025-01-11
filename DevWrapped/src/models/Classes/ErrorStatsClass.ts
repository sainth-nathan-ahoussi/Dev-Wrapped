import { ErrorStats, ErrorFrequency } from "../Interfaces/ErrorStats";

export class ErrorStatsClass implements ErrorStats {
  totalErrorsDetected: number;
  totalErrorsFixed: number;
  frequentErrors: ErrorFrequency[];

  constructor() {
    this.totalErrorsDetected = 0;
    this.totalErrorsFixed = 0;
    this.frequentErrors = [];
  }

  // Getters
   getTotalErrorsDetected(): number{
        return this.totalErrorsDetected;
  }

  getTotalErrorsFixed() : number{
    return this.totalErrorsFixed;
} 

 
    //Setters 
   setTotalErrorsDetected(TotalErrorsDetected : number){
      if (TotalErrorsDetected < 0){
          throw new Error('This is impossible');
      }
      this.totalErrorsDetected = TotalErrorsDetected;
    }

   setTotalErrorsFixed(TotalErrorsFixed : number){
    if (TotalErrorsFixed < 0){
        throw new Error('This is impossible');
    }
    this.totalErrorsFixed = TotalErrorsFixed;
  }

  // Fonctions
  addError(type: string): void {
    const error = this.frequentErrors.find(e => e.errorType === type);
    if (error) {
      error.count++;
    } else {
      this.frequentErrors.push({ errorType: type, count: 1 });
    }
    this.totalErrorsDetected++;
  }

  fixError(): void {
    this.totalErrorsFixed++;
  }
}
