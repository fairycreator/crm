import React from 'react';
import clsx from 'clsx';

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'not active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: CompanyStatus;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  console.log(process.env.CRM_SECRET);
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        {
          'opacity-50 cursor-not-allowed': disabled,
          'text-green-700 bg-green-100': status === CompanyStatus.Active,
          'text-red-700 bg-red-100': status === CompanyStatus.NotActive,
          'text-orange-700 bg-orange-100': status === CompanyStatus.Pending,
          'text-blue-700 bg-blue-100': status === CompanyStatus.Suspended,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}
