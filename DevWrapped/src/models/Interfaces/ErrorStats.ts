export interface ErrorStats {
    totalErrorsDetected: number;
    totalErrorsFixed: number;
    frequentErrors: ErrorFrequency[];
  }
  
  export interface ErrorFrequency {
    errorType: string; 
    count: number;  
  }
  