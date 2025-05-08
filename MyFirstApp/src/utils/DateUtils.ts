import MyLocalizationUtils from './LocalizationUtils';

class MyDateUtils {
  private static instance: MyDateUtils;

  private constructor() {}

  public static getInstance(): MyDateUtils {
    if (!MyDateUtils.instance) {
      MyDateUtils.instance = new MyDateUtils();
    }
    return MyDateUtils.instance;
  }

  public getHistoryTextFromMillisecondsSinceEpoch({
    millisecondsSinceEpoch,
    isLater = false,
  }: {
    millisecondsSinceEpoch?: number;
    isLater?: boolean;
  }): string {
    if ((millisecondsSinceEpoch ?? 0) == 0) {
      return '';
    }
    const timeText = isLater
      ? MyLocalizationUtils.getLocalizedLaterText()
      : MyLocalizationUtils.getLocalizedAgoText();
    const yearsCount = Math.floor(millisecondsSinceEpoch! / 29030400000);
    if (yearsCount != 0) {
      return (
        yearsCount +
        ' ' +
        MyLocalizationUtils.getLocalizedYearsText({yearsCount: yearsCount}) +
        ' ' +
        timeText
      );
    }
    const monthsCount = Math.floor(millisecondsSinceEpoch! / 2419200000);
    if (monthsCount != 0) {
      return (
        monthsCount +
        ' ' +
        MyLocalizationUtils.getLocalizedMonthsText({monthsCount: monthsCount}) +
        ' ' +
        timeText
      );
    }
    const daysCount = Math.floor(millisecondsSinceEpoch! / 86400000);
    if (daysCount != 0) {
      return (
        daysCount +
        ' ' +
        MyLocalizationUtils.getLocalizedDaysText({daysCount: daysCount}) +
        ' ' +
        timeText
      );
    }
    const hoursCount = Math.floor(millisecondsSinceEpoch! / 3600000);
    if (hoursCount != 0) {
      return (
        hoursCount +
        ' ' +
        MyLocalizationUtils.getLocalizedHoursText({hoursCount: hoursCount}) +
        ' ' +
        timeText
      );
    }
    const minutesCount = Math.floor(millisecondsSinceEpoch! / 60000);
    if (minutesCount != 0) {
      return (
        minutesCount +
        ' ' +
        MyLocalizationUtils.getLocalizedMinutesText({
          minutesCount: minutesCount,
        }) +
        ' ' +
        timeText
      );
    }
    return MyLocalizationUtils.getLocalizedJustNowText();
  }
}

export default MyDateUtils.getInstance();
