import BackgroundIndex from "../components/background/BackgroundIndex"
import MainHeading from "../components/heading/MainHeading"
import Button from "../components/button/Button"
import MenuButton from "../components/button/MenuButton"
import ButtonCurrency from "../components/button/ButtonCurrency"
import LanguageSelector from "../components/button/LanguageSelector"
import { useTranslation } from 'react-i18next'
const Index: React.FC = () => {
    const { t } = useTranslation()
    return(
        <BackgroundIndex>
          <ButtonCurrency name="" to="/index"/>
          <LanguageSelector/>
            <div className="flex flex-col align-middle">
               <MainHeading title="Quiz Note" />
              <div className="px-0 py-2 text-center font-bold inset-x-10 bottom-0">
                <Button name={t("index.random_button")} to="/random" />
</div>    
<ButtonCurrency name="" to="/plans"/>
      <MenuButton
        title={t("index.category_title")}
        items={[
          { label: "Isekai", to: "/isekai"},
          { label: "Seinen", to: "/seinen"},
          { label: "Shonen", to: "/shonen" },
          { label: "Shojo", to: "/shojo" },
          { label: "Spokon", to: "/spokon" },
        ]}
      />
    </div>
     
        </BackgroundIndex>
    )
}
export default Index