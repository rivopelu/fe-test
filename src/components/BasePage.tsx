import { StyleVariable } from '../constants/StyleVariable.ts';
import { PageTypeEnum } from '../enums/PageTypeEnums.ts';
import { Sidebar } from './Sidebar.tsx';

export function BasePage(props: IProps) {
  if (props.type === PageTypeEnum.FULL_PAGE) {
    return <>{props.children}</>;
  } else {
    return (
      <div className={'flex'}>
        <Sidebar type={props.type} />
        {/*<TopBar type={props.type} />*/}
        <div className={'flex w-full min-h-screen pb-14 relative'} style={{ paddingTop: StyleVariable.sizing.topBarHeight }}>
          <div className={'w-full'}>{props.children}</div>
        </div>
      </div>
    );
  }
}

interface IProps {
  children: any;
  type: PageTypeEnum;
}
