import { MyApiUrls } from "../enums/ApiUrls";

class MyServiceUtils {
    private static instance: MyServiceUtils;

    private constructor() { };

    public static getInstance(): MyServiceUtils {
        if (!MyServiceUtils.instance) {
            MyServiceUtils.instance = new MyServiceUtils();
        }
        return MyServiceUtils.instance;
    };

    public serverAddress: string | null | undefined;

    private getApiUrl(apiUrl: string): string {
        return this.serverAddress + apiUrl;
    };

    public getUserApiUrl(): string {
        return this.getApiUrl(MyApiUrls.UserApi);
    };
};

export default MyServiceUtils.getInstance();
