export default interface IPie {
  data: {
    id: 'string';
    label: 'string';
    value: number;
    color: `hls(${number}, ${number}%, ${number}%})`;
  }[];
}
