import React, { useState } from 'react';
import { Calculator } from 'lucide-react';  // Hesap makinesi simgesini içeri aktar
import { InputField } from './components/InputField';  // Kullanıcıdan girdi almak için bileşeni içeri aktar
import { ResultCard } from './components/ResultCard';  // Sonuçları görüntülemek için bileşeni içeri aktar
import { calculateMonthlyPayment } from './utils/loanCalculations';  // Kredi ödeme hesaplamalarını yapacak fonksiyonu içeri aktar

function App() {
  // Durum yönetimi için useState kullanıyoruz
  const [loanAmount, setLoanAmount] = useState('100000');  // Kredi tutarı durumu
  const [interestRate, setInterestRate] = useState('30');  // Faiz oranı durumu
  const [loanTerm, setLoanTerm] = useState('12');  // Vade süresi durumu
  const [monthlyPayment, setMonthlyPayment] = useState(0);  // Aylık ödeme tutarı durumu

  // Hesaplama butonuna tıklandığında çalışacak fonksiyon
  const handleCalculate = () => {
    // Hesaplamayı yaparak sonucu elde ediyoruz
    const payment = calculateMonthlyPayment(
      Number(loanAmount),  // Kredi tutarını sayıya dönüştür
      Number(interestRate),  // Faiz oranını sayıya dönüştür
      Number(loanTerm)  // Vade süresini sayıya dönüştür
    );
    setMonthlyPayment(payment);  // Hesaplanan ödeme tutarını duruma set et
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Calculator className="mx-auto h-12 w-12 text-blue-600" />  {/* Hesap makinesi simgesi */}
          <h1 className="mt-3 text-3xl font-bold text-gray-900">Kredi Hesaplama</h1>  {/* Başlık */}
          <p className="mt-2 text-gray-600">Aylık kredi ödemelerinizi hesaplayın</p>  {/* Açıklama */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Kredi tutarı için input alanı */}
          <InputField
            label="Kredi Tutarı (₺)"
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={setLoanAmount}
            min="0"
            step="1000"
          />
          
          {/* Faiz oranı için input alanı */}
          <InputField
            label="Yıllık Faiz Oranı (%)"
            id="interestRate"
            type="number"
            value={interestRate}
            onChange={setInterestRate}
            min="0"
            step="0.1"
          />
          
          {/* Vade süresi için input alanı */}
          <InputField
            label="Vade (ay)"
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={setLoanTerm}
            min="1"
            step="1"
          />
          
          {/* Hesapla butonu */}
          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Hesapla
          </button>
          
          {/* Aylık ödeme hesaplandıysa, sonuçları göster */}
          {monthlyPayment > 0 && <ResultCard monthlyPayment={monthlyPayment} />}
        </div>
      </div>
    </div>
  );
}

export default App;
