import { useCallback, useState } from 'react';
import { format, subDays } from 'date-fns';
import { defaultGridOptions } from '@/common/grid';
import { autoSizeColumns } from '@/common/grid/presenters';

export const getInitialFilter = () => ({
  startDate: format(subDays(new Date(), 0), 'yyyy-MM-dd'),
  endDate: format(new Date(), 'yyyy-MM-dd'),
});

const useGrid = () => {
  const [gridApi, setGridApi] = useState([]);

  const [gridColumnApi, setGridColumnApi] = useState(null);

  const autoGroupColumnDef = {
    pinned: 'left',
    minWidth: 80,
    width: 175,
  };
  const columnDefs = [
    {
      headerName: '그룹ID',
      field: 'groupId',
    },
    {
      headerName: '도소매ID',
      field: 'storeId',
    },
    {
      headerName: '계정ID',
      field: 'userId',
    },
    {
      headerName: '사업자번호',
      field: 'regNum',
    },
    {
      headerName: '사업자명',
      field: 'storeName',
    },
    {
      headerName: '대표자명',
      field: 'ceoName',
    },
    {
      headerName: '사업자정보 변경일시',
      field: 'storeUpdatedAt',
      cellDataType: 'dateString',
    },
    {
      headerName: '계정상태',
      field: 'ceoStatus',
    },
    {
      headerName: '계정상태 변경일시',
      field: 'ceoStatusUpdatedAt',
      cellDataType: 'dateString',
    },
    {
      headerName: '그룹관리',
      field: 'id',
      cellStyle: { minWidth: '160px' },
    },
  ];
  const gridOptions = {
    ...defaultGridOptions,
    statusBar: {
      statusPanels: [
        {
          statusPanel: 'agTotalAndFilteredRowCountComponent',
          align: 'left',
        },
      ],
    },
    groupHideOpenParents: true,
    groupDisplayType: 'multipleColumns', // option: groupRows, multipleColumns, custom, singleColumn
    groupRemoveLowestSingleChildren: true, // 단독 컬럼 제거(rowGroup 제거)
    autoGroupColumnDef, // rowGroup시 생성되는 group column에 대한 정의
    columnDefs,
  };

  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    autoSizeColumns(params);
    // params.api.sizeColumnsToFit();
  }, []);

  return {
    gridApi,
    gridColumnApi,
    gridOptions,
    onGridReady,
    onFirstDataRendered,
  };
};

export default useGrid;
