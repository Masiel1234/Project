
import PlanCard from "../components/PlanCard";
import { useTranslation } from "react-i18next";
import {useCurrencyConversion} from "../hooks/planCard/useCurrencyConversion";
import BackgroundIndex from "../components/background/BackgroundIndex";
import LanguageSelector from "../components/button/LanguageSelector"
import Button from "../components/button/Button";
import { basePlansData } from "../data/plansData/plansData";



const PlansPage: React.FC = () => {
  const { t } = useTranslation();
  const plansToDisplay = useCurrencyConversion(basePlansData)
  return (
    <BackgroundIndex>
        <Button name="" variant="return" to="/index"/>
        <LanguageSelector/>
    <div className="">
      <h1 className="text-2xl border- font-bold text-center mb-4">{t('our_plans_title')}</h1>
      <div className="flex flex-2 md:flex-row md:justify-center md:space-x-8 items-center">
       <LanguageSelector />
        {plansToDisplay.map((plan) => (
          <PlanCard key={plan.name} name={plan.name} price={plan.price} />
          ))};

      </div>
    </div>
    </BackgroundIndex>
  );
};

export default PlansPage;