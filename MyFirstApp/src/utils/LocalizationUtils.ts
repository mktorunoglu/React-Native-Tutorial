import { MyLocalizationTexts } from "../constants/LocalizationTexts";
import { MyLocalizations } from "../enums/Localizations";
import { MyLocalizationTextKeys } from "../enums/LocalizationTextKeys";

class MyLocalizationUtils {
    private static instance: MyLocalizationUtils;

    private constructor() { };

    public static getInstance(): MyLocalizationUtils {
        if (!MyLocalizationUtils.instance) {
            MyLocalizationUtils.instance = new MyLocalizationUtils();
        }
        return MyLocalizationUtils.instance;
    };

    private localization_ = MyLocalizations.English;

    public getLocalizedText(localizationTextKey: MyLocalizationTextKeys): string {
        return MyLocalizationTexts[localizationTextKey][this.localization_];
    };
};

export default MyLocalizationUtils.getInstance();
