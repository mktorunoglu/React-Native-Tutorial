class ColorUtils {
    private static instance: ColorUtils;

    private constructor() { };

    public static getInstance(): ColorUtils {
        if (!ColorUtils.instance) {
            ColorUtils.instance = new ColorUtils();
        }
        return ColorUtils.instance;
    };

    public getColorWithOpacity(color: string, opacity: number): string {
        return color + Math.round(opacity * 255).toString(16).padStart(2, "0");
    };
};

export default ColorUtils.getInstance();
