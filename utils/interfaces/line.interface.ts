export default interface ILine {
  data: ILineData[];
}
interface ILineData {
  id: string;
  color: string;
  data: IData[];
}

interface IData {
  x: string;
  y: number;
}
