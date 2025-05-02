class MyFilterUtils {
  private static instance: MyFilterUtils;

  private constructor() {}

  public static getInstance(): MyFilterUtils {
    if (!MyFilterUtils.instance) {
      MyFilterUtils.instance = new MyFilterUtils();
    }
    return MyFilterUtils.instance;
  }

  public isTextListContainsSearchText({
    textList,
    searchText,
  }: {
    textList: (string | null | undefined)[];
    searchText: string;
  }): boolean {
    if (searchText.trim() == '') {
      return true;
    }
    console.log(textList);
    const searchWordList = searchText
      .split(' ')
      .map(word => word.trim())
      .filter(word => word !== '');
    const normalizeText = (text: string): string =>
      text.replace(/\s+/g, '').toLocaleLowerCase();
    let counter = 0;
    for (const searchWord of searchWordList) {
      for (const text of textList) {
        if (normalizeText(text ?? '').includes(normalizeText(searchWord))) {
          counter++;
          break;
        }
      }
    }
    if (searchWordList.length == counter) {
      return true;
    }
    return false;
  }
}

export default MyFilterUtils.getInstance();
