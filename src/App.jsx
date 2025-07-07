import { useState } from "react";

const options = [
  { label: "Stage1", price: 250 },
  { label: "V/max off", price: 50 },
  { label: "AGR off", price: 50 },
  { label: "DPF off", price: 50 },
  { label: "Adblue off", price: 50 },
  { label: "Katt off", price: 50 },
  { label: "Schubknallen", price: 50 },
];

export default function App() {
  const [selected, setSelected] = useState([]);

  const toggleOption = (label) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const partnerMarge = 100;
  const eigeneMarge = 250;

  const kostenGesamt = selected.reduce((sum, label) => {
    const item = options.find((o) => o.label === label);
    return sum + (item?.price || 0);
  }, 0);

  const preisKunde = kostenGesamt + partnerMarge + eigeneMarge;

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 text-white"
      style={{ backgroundImage: 'url("/lrc-bg.png")' }}
    >
      <div className="max-w-md mx-auto bg-black bg-opacity-70 rounded-2xl shadow-xl p-6">
        <div className="grid gap-3">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => toggleOption(opt.label)}
              className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-150 ${
                selected.includes(opt.label)
                  ? "bg-green-600 border-green-400"
                  : "bg-gray-800 border-gray-600"
              }`}
            >
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-blue-700 text-center text-xl font-semibold">
          Gesamtpreis für den Kunden: {preisKunde}€
        </div>
      </div>
    </div>
  );
}
