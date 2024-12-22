export function calculateMonthlyPayment(
  principal: number,
  annualInterestRate: number,
  loanTermMonths: number
): number {
  const monthlyInterestRate = (annualInterestRate / 100) / 12;
  
  if (monthlyInterestRate === 0) {
    return principal / loanTermMonths;
  }
  
  const payment = principal * 
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) / 
    (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
    
  return payment;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}