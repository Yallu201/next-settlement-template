import React from 'react';
import ReactDOM from 'react-dom/client';
import { LicenseManager } from 'ag-grid-enterprise';
import App from './App.tsx';

// AG Grid 인증
LicenseManager.setLicenseKey(
  'CompanyName=dealicious inc.,LicensedGroup=dealicious,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-024088,ExpiryDate=29_December_2022_[v2]_MTY3MjI3MjAwMDAwMA==d88df6c863258a7aef212825dfaaff71',
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
