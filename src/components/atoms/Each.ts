import { Children } from 'react';

export function Each({ of, render }: IProps) {
  return Children.toArray(of.map((item, i) => render(item, i)));
}

interface IProps {
  of: any[];
  render: (item: any, i?: number) => any;
}
