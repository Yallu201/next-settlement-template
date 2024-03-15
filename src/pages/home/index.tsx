import { Grid, Paper } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import clsx from 'clsx';
import { useRef } from 'react';
import useGrid from '@/pages/home/define';
import AgGridStyle from '@/styles/emotion/ag-grid';
import useOrderStore from '@/stores/order';
import SearchFilter from '@/pages/home/search';

const Home = () => {
  const { gridOptions, onGridReady, onFirstDataRendered } = useGrid();
  const globalClasses = AgGridStyle();
  const { list } = useOrderStore();
  const gridRef = useRef<AgGridReact>(null);

  return (
    <Grid container spacing={3} sx={{ maxWidth: '100%' }}>
      {/* Search filter */}
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <SearchFilter gridRef={gridRef.current as AgGridReact} />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500 }}>
          <AgGridReact
            rowData={list}
            ref={gridRef}
            onGridReady={onGridReady}
            className={clsx(globalClasses.agGridContainer, 'ag-theme-alpine')}
            gridOptions={gridOptions}
            onFirstDataRendered={onFirstDataRendered}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Home;
