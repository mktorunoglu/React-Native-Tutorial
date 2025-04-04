import { MyKeys } from "../enums/Keys";
import UserService from "../services/UserService";
import StorageUtils from "./StorageUtils";

class MyAuthenticationUtils {
    private static instance: MyAuthenticationUtils;

    private constructor() { };

    public static getInstance(): MyAuthenticationUtils {
        if (!MyAuthenticationUtils.instance) {
            MyAuthenticationUtils.instance = new MyAuthenticationUtils();
        }
        return MyAuthenticationUtils.instance;
    };

    public async login({
        userId,
        password,
        navigateToHomeScreen,
    }: {
        userId: string,
        password: string,
        navigateToHomeScreen: () => void,
    }): Promise<boolean> {
        const response = await UserService.login({
            userId: userId,
            password: password,
        });
        if (response.isSuccessful) {
            await StorageUtils.storeData(MyKeys.CurrentUserId, userId);
            await StorageUtils.storeData(MyKeys.CurrentUserPassword, password);
            await StorageUtils.storeData(MyKeys.CurrentUserToken, response.data["access_csrf_token"]);
            navigateToHomeScreen();
            return true;
        }
        return false;
    };
};

export default MyAuthenticationUtils.getInstance();
