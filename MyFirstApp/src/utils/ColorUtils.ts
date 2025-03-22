class MyColorUtils {
    private static instance: MyColorUtils;

    private constructor() { };

    public static getInstance(): MyColorUtils {
        if (!MyColorUtils.instance) {
            MyColorUtils.instance = new MyColorUtils();
        }
        return MyColorUtils.instance;
    };

    public getColorWithOpacity(color: string, opacity: number): string {
        return color + Math.round(opacity * 255).toString(16).padStart(2, "0");
    };
};

export default MyColorUtils.getInstance();
