import UserService from "../services/UserService";

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
    }: {
        userId: string,
        password: string,
    }): Promise<boolean> {
        const response = await UserService.login({
            userId: userId,
            password: password,
        });
        if(response.isSuccessful){
            
        }
        return false;
    };
};

export default MyAuthenticationUtils.getInstance();
