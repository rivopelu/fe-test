export function MainCard(props: IProps) {
  return <div className={`bg-white p-5 rounded-lg ${props.className}`}>{props.children}</div>;
}

interface IProps {
  children: any;
  className?: string;
}
