import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import AgGridStyle from '@/styles/emotion/ag-grid';

const AgGrid = forwardRef<AgGridReact, AgGridReactProps>((props, ref) => {
  const globalClasses = AgGridStyle();
  return <AgGridReact ref={ref} className={clsx(globalClasses.agGridContainer, 'ag-theme-alpine')} {...props} />;
});

AgGrid.displayName = 'AgGrid';
export default AgGrid;
