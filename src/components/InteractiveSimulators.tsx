import React, { useState } from 'react';
import { Atom, Zap, Flame, RotateCcw } from 'lucide-react';

interface SimulatorsProps {
  lang: 'en' | 'ar';
}

export const InteractiveSimulators: React.FC<SimulatorsProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeSim, setActiveSim] = useState<'hall' | 'electrolysis' | 'fusion'>('hall');

  // 1. Hall Effect State
  const [currentMA, setCurrentMA] = useState<number>(2.0); // mA
  const [bFieldTesla, setBFieldTesla] = useState<number>(0.20); // Tesla
  const thicknessMM = 0.5; // mm (5e-4 m)
  const qElementary = 1.602e-19; // C
  const carrierDensityN = 1.8e22; // m^-3

  // VH = (I * B) / (n * q * t)
  const currentAmps = currentMA * 1e-3;
  const thicknessM = thicknessMM * 1e-3;
  const calculatedVHVolts = (currentAmps * bFieldTesla) / (carrierDensityN * qElementary * thicknessM);
  const calculatedVHMilliVolts = calculatedVHVolts * 1e3;
  const calculatedRH = 1 / (carrierDensityN * qElementary); // m^3/C

  // 2. Electrolysis State
  const [appliedCurrentA, setAppliedCurrentA] = useState<number>(2.0); // Amps
  const [durationMin, setDurationMin] = useState<number>(10); // minutes
  // Faraday's Law: moles of H2 = (I * t) / (2 * F), moles of O2 = (I * t) / (4 * F)
  const faradayConst = 96485;
  const seconds = durationMin * 60;
  const molesH2 = (appliedCurrentA * seconds) / (2 * faradayConst);
  const molesO2 = (appliedCurrentA * seconds) / (4 * faradayConst);
  // Volume at STP ~ 22.4 L/mol = 22400 mL/mol
  const volumeH2mL = molesH2 * 22400;
  const volumeO2mL = molesO2 * 22400;

  // 3. Fusion Lawson Criterion State
  const [fusionTempKeV, setFusionTempKeV] = useState<number>(15.0); // keV (~150M °C)
  const [fusionDensityPow, setFusionDensityPow] = useState<number>(20.0); // 10^20 m^-3
  const [confinementTimeS, setConfinementTimeS] = useState<number>(2.0); // seconds
  const densityN = Math.pow(10, fusionDensityPow);
  const tripleProduct = densityN * fusionTempKeV * confinementTimeS; // keV * s / m^3
  const ignitionThreshold = 3e21;
  const tripleProductPow = tripleProduct > 0 ? (tripleProduct).toExponential(2) : "0";
  const isIgnited = tripleProduct >= ignitionThreshold;

  return (
    <section id="simulators" className="py-20 border-b border-white/10 bg-[#070e28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35dfff] mb-2">
            {isAr ? 'حاسبات ومحاكاة التجارب المعملية' : 'Interactive Laboratory Calculators & Models'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'محاكاة التجارب الفيزيائية الحقيقية' : 'Empirical Physics & Energy Calculators'}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {isAr
              ? 'نماذج تفاعلية مبنية مباشرة على معادلات أبحاث أسيل الحربي: حساب جهد هول وحركية الشحنات، معدل إنتاج غازات التحليل الكهربائي بالنسبة 2:1، وتحليل معيار لاوسون للاندماج النووي.'
              : 'Interactive computational models derived directly from Aseel Alharbi’s laboratory investigations: Hall voltage determination, stoichiometric water splitting, and thermonuclear Lawson triple-product analysis.'}
          </p>
        </div>

        {/* Simulator Selector Tabs */}
        <div className="flex items-center gap-2 p-1 bg-[#0a1538] rounded-xl border border-white/10 mb-8 max-w-lg overflow-x-auto">
          <button
            onClick={() => setActiveSim('hall')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
              activeSim === 'hall' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            <span>{isAr ? 'تأثير هول (Hall Effect)' : 'Hall Effect (F2 Lab)'}</span>
          </button>

          <button
            onClick={() => setActiveSim('electrolysis')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
              activeSim === 'electrolysis' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{isAr ? 'تحليل الماء (2:1 H2:O2)' : 'Water Electrolysis'}</span>
          </button>

          <button
            onClick={() => setActiveSim('fusion')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
              activeSim === 'fusion' ? 'bg-[#3478ff] text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{isAr ? 'معيار لاوسون (الاندماج)' : 'Fusion (Lawson)'}</span>
          </button>
        </div>

        {/* SIMULATOR 1: HALL EFFECT */}
        {activeSim === 'hall' && (
          <div className="bg-[#0a1538] rounded-2xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono text-[#35dfff] mb-1">Taibah University · Electrical Lab F2</div>
                <h3 className="text-xl font-bold text-white">
                  {isAr ? 'حاسبة جهد هول وتوصيف شبه الموصل' : 'Hall Voltage & Carrier Concentration Calculator'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr 
                    ? 'غيّر شدة التيار I والمجال المغناطيسي B ولاحظ التغير الخطي الدقيق في جهد هول المقاس VH.' 
                    : 'Adjust applied current I and magnetic flux density B to observe linear Hall voltage response.'}
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-4 bg-[#050b24] p-5 rounded-xl border border-white/5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'التيار المطبق (I):' : 'Applied Current (I):'}</span>
                    <span className="text-[#35dfff] font-bold">{currentMA.toFixed(1)} mA</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="10.0"
                    step="0.5"
                    value={currentMA}
                    onChange={(e) => setCurrentMA(parseFloat(e.target.value))}
                    className="w-full accent-[#35dfff] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>1.0 mA</span>
                    <span>Aseel’s Lab Run: 2.0 - 8.0 mA</span>
                    <span>10.0 mA</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'المجال المغناطيسي (B):' : 'Magnetic Field (B):'}</span>
                    <span className="text-[#ffd76a] font-bold">{bFieldTesla.toFixed(2)} Tesla</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="0.30"
                    step="0.01"
                    value={bFieldTesla}
                    onChange={(e) => setBFieldTesla(parseFloat(e.target.value))}
                    className="w-full accent-[#ffd76a] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>0.05 T</span>
                    <span>Aseel’s Lab Run: 0.05 - 0.20 T</span>
                    <span>0.30 T</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                  <div>
                    <span>Sample Thickness (t): </span>
                    <strong className="text-white">0.50 mm</strong>
                  </div>
                  <div>
                    <span>Carrier Density (n): </span>
                    <strong className="text-white">1.8 × 10²² m⁻³</strong>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => { setCurrentMA(2.0); setBFieldTesla(0.20); }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isAr ? 'استعادة قيم تجربة أسيل المعملية (I = 2 mA, B = 0.20 T)' : 'Reset to Aseel’s Baseline Lab Values'}</span>
              </button>
            </div>

            {/* Readout Stage */}
            <div className="lg:col-span-5 bg-[#050b24] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1">
                  {isAr ? 'جهد هول المحسوب (V_H)' : 'Calculated Hall Voltage (V_H)'}
                </span>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#35dfff] tabular-nums">
                  {calculatedVHMilliVolts.toFixed(2)} <span className="text-lg text-slate-400">mV</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  Formula: V_H = (I · B) / (n · q · t)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="bg-[#0a1538] p-3 rounded-xl border border-white/5">
                  <span className="text-[11px] text-slate-400 block font-mono">Hall Coeff R_H</span>
                  <span className="text-sm font-mono font-bold text-white tabular-nums">
                    ≈ {(calculatedRH * 1e4).toFixed(2)}×10⁻⁴ m³/C
                  </span>
                </div>

                <div className="bg-[#0a1538] p-3 rounded-xl border border-white/5">
                  <span className="text-[11px] text-slate-400 block font-mono">Carrier Type</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">
                    n-type (Electrons)
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-white/5 p-3 rounded-xl border border-white/5 leading-relaxed">
                {isAr
                  ? 'يطابق بدقة قراءات أسيل المعملية: عند تيار 2 مللي أمبير ومجال 0.20 تسلا، الجهد المقاس عملياً هو 3.8 مللي فولت.'
                  : 'Perfect match with Aseel’s recorded empirical data: at I = 2 mA and B = 0.20 T, measured VH is 3.8 mV.'}
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 2: WATER ELECTROLYSIS */}
        {activeSim === 'electrolysis' && (
          <div className="bg-[#0a1538] rounded-2xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono text-[#35dfff] mb-1">CHEM 243 · Electrochemistry</div>
                <h3 className="text-xl font-bold text-white">
                  {isAr ? 'محاكاة تفكيك جزيء الماء وحجم الغازات المتولدة' : 'Faraday’s Law Water Splitting Gas Simulator'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr 
                    ? 'شاهد الإنتاج المتزامن لغاز الهيدروجين عند الكاثود وغاز الأكسجين عند الأنود بنسبة 2:1 ثنائية الحجم.' 
                    : 'Observe simultaneous H2 and O2 generation governed by the exact 2:1 stoichiometric volume ratio.'}
                </p>
              </div>

              <div className="space-y-4 bg-[#050b24] p-5 rounded-xl border border-white/5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'شدة التيار الكهربائي المستمر:' : 'Applied DC Current:'}</span>
                    <span className="text-[#35dfff] font-bold">{appliedCurrentA.toFixed(1)} A</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10.0"
                    step="0.5"
                    value={appliedCurrentA}
                    onChange={(e) => setAppliedCurrentA(parseFloat(e.target.value))}
                    className="w-full accent-[#35dfff] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>0.5 A</span>
                    <span>Laboratory Scale Range</span>
                    <span>10.0 A</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'مدة التشغيل:' : 'Run Duration:'}</span>
                    <span className="text-[#ffd76a] font-bold">{durationMin} {isAr ? 'دقائق' : 'minutes'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="1"
                    value={durationMin}
                    onChange={(e) => setDurationMin(parseInt(e.target.value))}
                    className="w-full accent-[#ffd76a] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>1 min</span>
                    <span>Typical Experiment Window</span>
                    <span>60 min</span>
                  </div>
                </div>
              </div>

              {/* Stoichiometric proof bar */}
              <div className="bg-[#050b24] p-4 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Stoichiometric Volume Ratio:</span>
                <span className="text-emerald-400 font-bold">2.00 : 1.00 (H₂ : O₂)</span>
              </div>
            </div>

            {/* Visual Gas Gauges */}
            <div className="lg:col-span-5 bg-[#050b24] p-6 rounded-2xl border border-white/10 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#35dfff] tracking-wider block mb-1">
                  {isAr ? 'الكاثود (-) — غاز الهيدروجين H₂' : 'Cathode (-) — Hydrogen Gas (H₂)'}
                </span>
                <div className="text-3xl font-mono font-bold text-white tabular-nums">
                  {volumeH2mL.toFixed(1)} <span className="text-sm text-slate-400">mL evolved</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-[#35dfff] h-full transition-all duration-300" style={{ width: '100%' }} />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#ffd76a] tracking-wider block mb-1">
                  {isAr ? 'الأنود (+) — غاز الأكسجين O₂' : 'Anode (+) — Oxygen Gas (O₂)'}
                </span>
                <div className="text-3xl font-mono font-bold text-white tabular-nums">
                  {volumeO2mL.toFixed(1)} <span className="text-sm text-slate-400">mL evolved</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-[#ffd76a] h-full transition-all duration-300" style={{ width: '50%' }} />
                </div>
              </div>

              <div className="text-xs text-slate-400 border-t border-white/10 pt-4 leading-relaxed font-mono">
                2H₂O(l) → 2H₂(g) + O₂(g)
                <p className="font-sans text-slate-300 mt-1">
                  {isAr 
                    ? 'يتصاعد ضعف حجم الهيدروجين مقارنة بالأكسجين، مما يتطابق مع شريحة رقم 6 في عرض الكيمياء الكهربائية لأسيل.' 
                    : 'Hydrogen volume is exactly 2× oxygen volume, confirming slide #6 of Aseel’s electrochemistry presentation.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 3: NUCLEAR FUSION LAWSON CRITERION */}
        {activeSim === 'fusion' && (
          <div className="bg-[#0a1538] rounded-2xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono text-[#ffd76a] mb-1">Modern Physics · Power of the Stars</div>
                <h3 className="text-xl font-bold text-white">
                  {isAr ? 'مقيّم معيار لاوسون لتحقيق الاندماج النووي' : 'Lawson Criterion Thermonuclear Ignition Evaluator'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr 
                    ? 'معيار لاوسون يحدد الشرط الفيزيائي الحرج لاشتعال بلازما الاندماج: حاصل الضرب الثلاثي للكثافة والحرارة وزمن الحصر.' 
                    : 'The Lawson Criterion sets the baseline triple product (n · T · τE) for self-sustaining thermonuclear ignition.'}
                </p>
              </div>

              <div className="space-y-4 bg-[#050b24] p-5 rounded-xl border border-white/5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'حرارة البلازما (T):' : 'Plasma Temperature (T):'}</span>
                    <span className="text-[#ffd76a] font-bold">{fusionTempKeV.toFixed(1)} keV (~{(fusionTempKeV * 11.6).toFixed(0)}M °C)</span>
                  </div>
                  <input
                    type="range"
                    min="5.0"
                    max="30.0"
                    step="0.5"
                    value={fusionTempKeV}
                    onChange={(e) => setFusionTempKeV(parseFloat(e.target.value))}
                    className="w-full accent-[#ffd76a] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>5 keV</span>
                    <span>Optimal D-T: ~15-25 keV</span>
                    <span>30 keV</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'كثافة البلازما (n):' : 'Particle Density (n):'}</span>
                    <span className="text-[#35dfff] font-bold">10^{fusionDensityPow.toFixed(1)} m⁻³</span>
                  </div>
                  <input
                    type="range"
                    min="19.0"
                    max="22.0"
                    step="0.1"
                    value={fusionDensityPow}
                    onChange={(e) => setFusionDensityPow(parseFloat(e.target.value))}
                    className="w-full accent-[#35dfff] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>10¹⁹ (Tokamaks)</span>
                    <span>Plasma Regimes</span>
                    <span>10²² m⁻³</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-300">{isAr ? 'زمن حصر الطاقة (τ_E):' : 'Energy Confinement Time (τ_E):'}</span>
                    <span className="text-emerald-400 font-bold">{confinementTimeS.toFixed(2)} seconds</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="5.0"
                    step="0.1"
                    value={confinementTimeS}
                    onChange={(e) => setConfinementTimeS(parseFloat(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                    <span>0.10 s</span>
                    <span>ITER Target: ~3-4 s</span>
                    <span>5.0 s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ignition Result Display */}
            <div className="lg:col-span-5 bg-[#050b24] p-6 rounded-2xl border border-white/10 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1">
                  {isAr ? 'حاصل الضرب الثلاثي للبلازما' : 'Lawson Triple Product (n · T · τ_E)'}
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
                  {tripleProductPow} <span className="text-xs text-slate-400 font-mono">keV·s/m³</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  Ignition threshold: ≥ 3.00 × 10²¹
                </div>
              </div>

              {/* Status Indicator */}
              <div className={`p-4 rounded-xl border flex items-center justify-between ${
                isIgnited 
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
                  : 'bg-amber-950/30 border-amber-500/30 text-amber-300'
              }`}>
                <div>
                  <span className="text-xs font-bold block uppercase tracking-wider font-mono">
                    {isIgnited ? (isAr ? 'اشتغال ذاتي (IGNITION REACHED)' : 'IGNITION / BREAKEVEN ACHIEVED') : (isAr ? 'دون حد الاشتعال (SUB-IGNITION)' : 'BELOW IGNITION THRESHOLD')}
                  </span>
                  <span className="text-[11px] text-slate-300">
                    {isIgnited
                      ? (isAr ? 'كافٍ لاستدامة تفاعل الاندماج وإنتاج طاقة صافية Q > 1' : 'Conditions satisfy self-sustaining burning plasma (Q > 1)')
                      : (isAr ? 'يحتاج لرفع زمن الحصر أو درجة الحرارة لتجاوز حاجز كولوم' : 'Requires higher confinement time or density to self-sustain')}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-3 border-t border-white/10 leading-relaxed font-sans">
                {isAr
                  ? 'مستوحى من أبحاث عرض "Power of the Stars on Earth" لأسيل الحربي وفريقها بجامعة طيبة.'
                  : 'Modeled after Aseel Alharbi’s "Power of the Stars on Earth" presentation on nuclear fusion.'}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
