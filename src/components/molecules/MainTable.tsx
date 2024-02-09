import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Fragment } from 'react';
import { Each } from '../atoms/Each.ts';
import { StyleVariable } from '../../constants/StyleVariable.ts';

export function MainTable(props: IProps) {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius: 2 }} className={'border'}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <Each of={props.columns} render={(item: ITableColumnData) => <TableCell align="left">{item.headerTitle?.toUpperCase()}</TableCell>} />
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data &&
            props.data.map((item, i) => (
              <TableRow
                key={i}
                sx={{
                  background: i % 2 === 0 && !props.disableMultiColor ? StyleVariable.colors.primary['5'] : 'white',
                }}
              >
                {props.columns.map((c, id) => (
                  <TableCell key={id} component="th" scope="row">
                    {props.columns.map((e, index) => {
                      if (e.key === c.key) {
                        return (
                          <Fragment key={index}>
                            {item[e.value ?? '']}
                            {e.layouts && e.layouts(item, i)}
                          </Fragment>
                        );
                      }
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface IProps {
  data: any[];
  columns: ITableColumnData[];
  disableMultiColor?: boolean;
}

export interface ITableColumnData {
  sort?: boolean;
  headerTitle?: string;
  headerClassName?: string;
  value?: string;
  key: string;
  className?: string;
  layouts?: (data?: any, index?: number) => any;
  loadingComponents?: any;
  paddingNone?: boolean;
  onSort?: (e: any) => void;
}
