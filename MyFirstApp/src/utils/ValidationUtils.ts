import MyLocalizationUtils from './LocalizationUtils';

class MyValidationUtils {
  private static instance: MyValidationUtils;

  private constructor() {}

  public static getInstance(): MyValidationUtils {
    if (!MyValidationUtils.instance) {
      MyValidationUtils.instance = new MyValidationUtils();
    }
    return MyValidationUtils.instance;
  }

  public validateName({name}: {name: string}): string | null {
    for (const character of name) {
      if (
        ["'", ':', '*', '?', '<', '>', '|', '/', '"', '\\'].includes(character)
      ) {
        return MyLocalizationUtils.getLocalizedCharactersCannotBeUsedText({
          variableTextList: [`' : * ? < > | / " \\`],
        });
      }
    }
    return null;
  }

  public validatePasswords({
    password,
    passwordAgain,
  }: {
    password: string;
    passwordAgain: string;
  }): string | null {
    if (password.length < 8) {
      return MyLocalizationUtils.getLocalizedPasswordLengthValidationText();
    }
    if (!/[a-z]/.test(password)) {
      return MyLocalizationUtils.getLocalizedPasswordLowercaseLetterValidationText();
    }
    if (!/[A-Z]/.test(password)) {
      return MyLocalizationUtils.getLocalizedPasswordCapitalLetterValidationText();
    }
    if (!/[0-9]/.test(password)) {
      return MyLocalizationUtils.getLocalizedPasswordNumberValidationText();
    }
    if (password !== passwordAgain) {
      return MyLocalizationUtils.getLocalizedPasswordsDontMatchValidationText();
    }
    return null;
  }
}

export default MyValidationUtils.getInstance();
