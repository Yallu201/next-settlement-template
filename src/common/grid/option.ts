import { multiTextFilterParams } from './presenters';
import { AG_GRID_LOCALE_KO } from './locale';
import ManageButton from '@/components/manage-button';

export const defaultColDef = {
  // columnGroupShow: 'closed',
  resizable: true,
  editable: false,
  sortable: true,
  enableRowGroup: true,
  enablePivot: true,
  enableValue: true,
  menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
  floatingFilter: true,
  rowDragManaged: true,
  frameworkComponents: {
    actionRenderer: ManageButton,
  },
  filter: 'agMultiColumnFilter',
  filterParams: multiTextFilterParams,
  keyCreator: (params) => params.value,
  valueFormatter: (params) => params.value,
};

export const defaultGridOptions = {
  localeText: AG_GRID_LOCALE_KO,
  defaultColDef,
  // rowSelection: 'multiple',
  editType: 'fullRow',
  groupHeaderHeight: 32,
  enableRangeSelection: false,
  headerHeight: 40,
  suppressMenuHide: true,
  floatingFiltersHeight: 32,
  // groupSelectsChildren: true,
  groupSelectsFiltered: true,
  groupDefaultExpanded: -1,
  rowGroupPanelShow: 'always',
  pivotRowTotals: 'before',
  pivotPanelShow: 'always',
  // undoRedoCellEditing: true,
  // undoRedoCellEditingLimit: 10,
  // pagination: true,
  // paginationPageSize: 50,
  rowBuffer: 10,
  groupDisplayType: 'multipleColumns',
  // groupRemoveSingleChildren: true,
  // groupRemoveLowestSingleChildren: true,
  groupHideOpenParents: true,
  sideBar: {
    toolPanels: ['columns', 'filters'],
    // defaultToolPanel: 'columns',
  },
  tooltipShowDelay: '500',
  frameworkComponents: {
    actionRenderer: ManageButton,
  },
  onRowEditingStarted: (params) => {
    params.api.refreshCells({
      rowNodes: [params.node],
      force: true,
    });
  },
  onRowEditingStopped: (params) => {
    params.api.refreshCells({
      rowNodes: [params.node],
      force: true,
    });
  },
};

export const dateFilterParamsYMD = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    const dateAsString = cellValue;
    if (dateAsString == null) return -1;
    const dateParts = dateAsString.split('-');

    const cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
  minValidYear: 2000,
  maxValidYear: 2221,
  inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
};

export const dateFilterParamsYMDHms = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    const dateAsString = cellValue;
    if (dateAsString == null) return -1;
    const dateParts = dateAsString.split('-');

    const cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2].split(' ')[0]));
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
  minValidYear: 2000,
  maxValidYear: 2221,
  inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
};

export const dateColumnFilterParamsYMDHms = {
  filterOptions: ['inRange'],
  comparator: dateFilterParamsYMDHms.comparator,
  inRangeInclusive: true,
};

export const dateColumnFilterParamsYMD = {
  filterOptions: ['inRange'],
  comparator: dateFilterParamsYMD.comparator,
  inRangeInclusive: true,
};
