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

    public async autoLogin({
        navigateToLoginScreen,
        navigateToHomeScreen,
    }: {
        navigateToLoginScreen: () => void,
        navigateToHomeScreen: () => void,
    }) {
        const userId = await StorageUtils.getData(MyKeys.CurrentUserId);
        const password = await StorageUtils.getData(MyKeys.CurrentUserPassword);
        if (userId !== null && password !== null && await this.login({
            userId: userId,
            password: password,
            navigateToHomeScreen: navigateToHomeScreen,
            isAutoLogin: true,
        })) {
            return;
        }
        navigateToLoginScreen();
    };

    public async login({
        userId,
        password,
        navigateToHomeScreen,
        isAutoLogin = false,
    }: {
        userId: string,
        password: string,
        navigateToHomeScreen: () => void,
        isAutoLogin?: boolean,
    }): Promise<boolean> {
        const response = await UserService.login({
            userId: userId,
            password: password,
        });
        if (response.isSuccessful) {
            if (!isAutoLogin) {
                await StorageUtils.storeData(MyKeys.CurrentUserId, userId);
                await StorageUtils.storeData(MyKeys.CurrentUserPassword, password);
            }
            await StorageUtils.storeData(MyKeys.CurrentUserToken, response.data["access_csrf_token"]);
            navigateToHomeScreen();
            return true;
        }
        return false;
    };
};

export default MyAuthenticationUtils.getInstance();
