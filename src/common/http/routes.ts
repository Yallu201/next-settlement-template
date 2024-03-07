export const API_ENDPOINTS = {
  LOGIN: '/login',
  REGISTER: '/register',
  SSM: {
    HOME_TABS: {
      LIST: 'admin/ssm/home_tabs/list',
      SHOW: 'admin/ssm/home_tabs',
      SEQUENCE: 'admin/ssm/home_tabs/sequence',
      CREATE: 'admin/ssm/home_tabs',
      UPDATE: 'admin/ssm/home_tabs/{id}',
    },
    BUILDINGS: {
      BUILDING_LIST: 'admin/ssm/buildings/building_list',
      FLOOR_LIST: 'admin/ssm/buildings/floor_list',
      STORE_LIST: 'admin/ssm/buildings/store_number_list',
    },
  },
  PROMOTION: {
    /**
     * 포인트 코드 관리
     */
    CODE: {
      LIST: 'sinsang-cash/point-type',
      EXCHANGERATE: 'exchange-rate/search-target',
      CREATE: 'sinsang-cash/point-type',
    },

    /**
     * 포인트 지급/회수 관리
     */
    // 포인트 적립
    CASH: {
      ACCUMULATE: {
        LIST: 'sinsang-cash/management/auto-saving',
        CREATE: 'sinsang-cash/management/auto-saving',
        CANCEL: 'sinsang-cash/management/auto-saving',
      },
      // 포인트 지급
      GETPAID: {
        LIST: 'sinsang-cash/management/manual-saving',
        CREATE: 'sinsang-cash/management/manual-saving',
        SEARCH: 'retail/search-target',
        EXCELUPLOAD: 'sinsang-cash/management/manual-saving/excel',
        CANCEL: 'sinsang-cash/management/manual-saving',
      },
      // 포인트 회수
      RECLAIM: {
        LIST: 'sinsang-cash/management/manual-withdrawing',
        CREATE: 'sinsang-cash/management/manual-withdrawing',
        SEARCH: 'retail/search-target',
        SEARCH_POINT: 'sinsang-cash',
      },
    },

    /**
     * 포인트 현황
     */
    HISTORY: {
      LIST: 'sinsang-cash/history',
    },

    /**
     * 포인트 상세 현황
     */
    DETAILHISTORY: {
      LIST: 'sinsang-cash/history/detail',
    },

    /**
     * 포인트 충전 관리
     */
    CHARGE: {
      LIST: 'sinsang-cash/point-charge',
      APPROVAL: 'sinsang-cash/point-charge',
      REJECT: 'sinsang-cash/point-charge',
    },

    /**
     * 포인트 환불 관리
     */
    REFUND: {
      DOMESTIC: {
        LIST: 'sinsang-cash/point-refund/domestic',
        DECIDE: 'sinsang-cash/point-refund/domestic/:rsIdx/refund/:id/decide',
        APPROVAL: 'sinsang-cash/point-refund/domestic',
        REJECT: 'sinsang-cash/point-refund/domestic',
        ALL_REFUND: 'sinsang-cash/point-refund/domestic/done-transfer',
      },
      INTERNATIONAL: {
        LIST: 'sinsang-cash/point-refund/international',
        UPDATE_TO_DOWNLOAD_AT: 'sinsang-cash/point-refund/international/download-date',
        DOUZONE: 'sinsang-cash/point-refund/international/excel-modal',
        EXCELUPLOAD: 'sinsang-cash/point-refund/international/excel-upload',
        REQUESTREFUND: 'sinsang-cash/point-refund/international/select-request',
        LIST_MEMO: 'sinsang-cash/point-refund/international/memo',
        UPDATE_MEMO: 'sinsang-cash/point-refund/international/memo',
      },
    },

    /**
     * 포인트 송금 관리
     */
    TRANSFER: {
      LIST: 'sinsang-cash/point-transfer',
      CANCEL: 'sinsang-cash/point-transfer',
    },
  },
  SETTLEMENT: {
    /**
     * 글로벌수출입신고
     */
    IMPORT_EXPORT: {
      LIST: 'settlement/import-export',
      EXCEL_UPLOAD: 'settlement/import-export/excel-upload',
    },

    /**
     * 글로벌거래검증
     */
    VERIFICATION_TRANSACTION: {
      LIST: 'settlement/verification/international',
    },

    /**
     * 도매 계산서
     */
    WHOLESALE_MONTHLY_PROCESS: {
      LIST: 'settlement/wholesale-monthly-process',
      EXCEL_UPLOAD: 'settlement/wholesale-monthly-process/excel-upload',
    },

    /**
     * 소매 계산서
     */
    RETAILSTORE_TAX_INVOICE: {
      LIST: 'settlement/retailstore-tax-invoice',
    },

    /**
     * 세금 계산서
     */
    PAYMENT_RECONCILIATION_INFOS: {
      LIST: 'settlement/payment-reconciliation-infos',
    },

    /**
     * 세금 계산서(상세)
     */
    TAX_INVOICE_DETAIL: {
      LIST: 'settlement/tax-invoice-detail',
    },

    /**
     * 포인트 잔액관리
     */
    POINT_REMAIN: {
      LIST: 'settlement/point-remain',
    },

    /**
     * PG 일대사
     */
    PG_COMPARISON: {
      LIST: 'compare-statistics',
      DAILY: 'compare-results',
      DETAIL: 'compare-results',
      CREATE_MEMO: 'compare-memos',
      RETRY: 'compare-retry',
      MEMO: 'compare-memos',
    },

    /**
     * PG 정산대사
     */
    PG_SETTLEMENT: {
      LIST: 'compare/settlement/statistics',
      DAILY: 'compare/settlement/results',
      RETRY: 'compare/settlement/retry',
      DETAIL: 'compare/settlement/results',
    },

    /**
     * 환율관리
     */
    EXCHANGE_RATES: {
      LIST: 'exchange-rate',
      CREATE: 'exchange-rate',
      MODIFY: 'exchange-rate',
      DELETE: 'exchange-rate',
    },

    /**
     * 중화권 구독 정산현황
     */
    CHINA_STATUS: {
      PAYMENT_STANDARD: 'settlement/status/payment-standard',
      SALES_STANDARD: 'settlement/status/sales-standard',
    },
  },
  PAYMENTS: {
    /**
     * 도매 포인트 관리
     */
    POINTS: {
      LIST: 'wholesale/search-target',
      DETAIL: 'point/wholesales',
      // CREATE: '',
    },

    /**
     * 도매 포인트 지급/차감 내역
     */
    POINTHISTORY: {
      LIST: 'point/wholesale/change-history',
    },

    /**
     * 포인트 관리
     */
    POINTTYPES: {
      LIST: 'point/wholesale/point-types',
      DETAIL: 'point/wholesale/point-types',
    },

    /**
     * 포인트 환급 관리
     */
    POINTREFUNDS: {
      LIST: 'point/wholesale/point-refunds',
    },

    /**
     * 공통코드/메세지관리
     */
    COMMONMAPPING: {
      LIST: 'code/code-mapping',
    },

    /**
     * 공통코드/메세지관리
     */
    COMMONCODES: {
      LIST: 'code/common-code',
    },

    /**
     * 업체관리
     */
    PGPAYMETHODSCOMPANIES: {
      LIST: 'deali-pg/pg-management/pg-companies',
    },

    /**
     * 플랫폼관리
     */
    PLATFORMS: {
      LIST: 'dealipg/platforms',
      MODIFY: 'dealipg/platforms',
    },

    /**
     * 결제내역
     */
    PGPAYMENTS: {
      SUCCESSES: 'dealipg/payments/success',
      FAILED: 'dealipg/payments/fail',
    },

    /**
     * 취소내역
     */
    PGPAYMENTCANCELS: {
      SUCCESSES: 'dealipg/cancel/successes',
      FAILED: 'dealipg/cancel/fails',
    },

    /**
     * 장애관리
     */
    OBSTACLES: {
      LIST: 'fault-managements',
      DELETE: 'fault-managements',
      UI: '/fault-managements/meta-info',
      CREATE: '/fault-managements',
      UPDATE: '/fault-managements',
      UPLOAD_IMAGE: '/fault-managements/image-upload',
    },

    /**
     * 별도계좌관리
     */
    CORPORATE: {
      LIST: 'account/corporate-accounts',
      DELETE: 'account/corporate-accounts',
    },
  },
  DDINGDONG: {
    JOBLIST: {
      LIST: 'job',
      JSON: 'job',
      UPDATE: 'job',
      DELETE: 'job',
      HISTORY: 'job_history',
    },
    CUSTOMJOBLIST: {
      LIST: 'custom',
      UPDATE: 'custom',
    },
  },
  MEMBERSHIP: {
    ZH_MEMBERS: {
      SUBSCRIPTIONS: {
        LIST: 'gmbs',
        HISTORY: (params) => `gmbs/${params.id}/history`,
        CANCELLATION: (params) => `gmbs/${params.id}/request_refund`,
      },
      CANCELLATIONS: {
        LIST: 'gmbs/refunds',
        CANCEL: (params) => `gmbs/${params.gmbs_refund_id}/cancel_refund`,
        REFUND: (params) => `gmbs/${params.gmbs_refund_id}/complete_refund`,
        MEMO: (params) => `gmbs/${params.history_id}/update_memo`,
      },
      PAYMENTS: {
        LIST: 'membership/payments',
      },
      PROMOTIONS: {
        LIST: 'promotions',
        CODE: 'promotions',
      },
    },
  },
  USERS: {
    BUSINESS_LICENSES: {
      META: '/admin/api/v1/users/business_licenses/meta',
      FETCH: '/admin/api/v1/users/business_licenses/fetch',
    },
    REG_NUM_GROUP: {
      LIST: 'admin/api/v1/reg_num_group',
      DETAIL: 'admin/api/v1/reg_num_group/{group_id}',
      CREATE: 'admin/api/v1/reg_num_group',
      UPDATE: 'admin/api/v1/reg_num_group/{group_id}',
      SEARCH_STORE: 'admin/api/v1/reg_num_group/search',
    },
  },
};

export default {
  API_ENDPOINTS,
};
