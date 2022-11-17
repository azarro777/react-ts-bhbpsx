export default interface IRadialBar {
  data: {
    id: string;
    data: {
      x: 'Vegetables' | 'Fruits' | 'Meat';
      y: number;
    }[];
  }[];
}
