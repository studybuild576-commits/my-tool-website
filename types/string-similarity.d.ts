declare module 'string-similarity' {
  export function compareTwoStrings(str1: string, str2: string): number;
  export function findBestMatch(mainString: string, targetStrings: string[]): { 
    ratings: Array<{ target: string; rating: number }>;
    bestMatch: { target: string; rating: number };
  };
}