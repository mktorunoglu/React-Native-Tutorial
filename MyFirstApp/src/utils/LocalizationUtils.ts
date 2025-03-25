import { MyLocalizationTexts } from "../constants/LocalizationTexts";
import { MyKeys } from "../enums/Keys";
import { MyLocalizations } from "../enums/Localizations";
import { MyLocalizationTextKeys } from "../enums/LocalizationTextKeys";
import MyStorageUtils from "../utils/StorageUtils";

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

    public async initialize() {
        const localization = await MyStorageUtils.getData(MyKeys.Localization);
        if (localization != null) {
            this.localization_ = localization as MyLocalizations;
        }
    };

    public async setLocalization(localization: MyLocalizations) {
        await MyStorageUtils.storeData(MyKeys.Localization, localization);
        this.localization_ = localization;
    };

    public getLocalizedText(localizationTextKey: MyLocalizationTextKeys): string {
        return MyLocalizationTexts[localizationTextKey][this.localization_];
    };
};

export default MyLocalizationUtils.getInstance();
