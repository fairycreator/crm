import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'not active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <div
      className={`inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium ${
        (status === Status.Active && 'text-green-700 bg-green-100') ||
        (status === Status.NotActive && 'text-green-700 bg-green-100') ||
        (status === Status.Pending && 'text-green-700 bg-green-100') ||
        (status === Status.Suspended && 'text-green-700 bg-green-100')
      }`}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}
