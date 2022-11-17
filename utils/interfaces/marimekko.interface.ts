export default interface IMarimekko {
  data: {
    statement: string;
    participation: number;
    stronglyAgree: number;
    agree: number;
    disagree: number;
    stronglyDisagree: number;
  }[];
}
