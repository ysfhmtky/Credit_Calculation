import React from 'react';
import { formatCurrency } from '../utils/loanCalculations';

interface ResultCardProps {
  monthlyPayment: number;
}

export function ResultCard({ monthlyPayment }: ResultCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Aylık Ödeme</h2>
      <p className="text-3xl font-bold text-blue-600">
        {formatCurrency(monthlyPayment)}
      </p>
    </div>
  );
}