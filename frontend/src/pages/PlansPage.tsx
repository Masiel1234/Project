import React, { useState, useEffect } from "react";
import PlanCard from "../components/PlanCard";
import { useTranslation } from "react-i18next";
import { getDisplayCurrencyCode, convertCurrency } from "../utils/currencyUtils"; 
import BackgroundIndex from "../components/background/BackgroundIndex";
import LanguageSelector from "../components/button/LanguageSelector"
import Button from "../components/button/Button";

interface PlanData {
  name: string; 
  price: number;
  originalCurrency: string; 
}

const basePlansData: PlanData[] = [
  { name: "plans.basic_plan", price: 25000, originalCurrency: "COP" },
  { name: "plans.premium_plan", price: 49.99, originalCurrency: "USD" },
  { name: "plans.pro_plan", price: 100000, originalCurrency: "COP" },
];

const PlansPage: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [convertedPlans, setConvertedPlans] = useState<PlanData[]>([]);
  const targetDisplayCurrency = getDisplayCurrencyCode(i18n.language);
  useEffect(() => {
    const newConvertedPlans: PlanData[] = basePlansData.map(plan => {
      const finalPrice = convertCurrency(
        plan.price,
        plan.originalCurrency,
        targetDisplayCurrency
      );
      return {
        ...plan,
        price: finalPrice, 
      };
    });
    setConvertedPlans(newConvertedPlans);
  }, [i18n.language, targetDisplayCurrency]); 
  return (
    <BackgroundIndex>
        <Button name="" variant="return" to="/index"/>
        <LanguageSelector/>
    <div className="">
      <h1 className="text-2xl border- font-bold text-center mb-4">{t('our_plans_title')}</h1>
      <div className="flex flex-2 md:flex-row md:justify-center md:space-x-8 items-center">
        {convertedPlans.map((plan) => (
          <PlanCard key={plan.name} name={plan.name} price={plan.price} />
        ))}
      </div>
    </div>
    </BackgroundIndex>
  );
};

export default PlansPage;