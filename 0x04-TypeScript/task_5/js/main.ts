namespace Subjects {
  export interface MajorCredits {
    credits: number;
    brand: string;
  }

  export interface MinorCredits {
    credits: number;
    brand: string;
  }

  function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
    return {
      credits: subject1 + subject2,
      brand: 'Majors',
    };
  }

  function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
    return {
      credits: subject1 + subject2,
      brand: 'Minors',
    };
  }
}
