import {MyKeys} from '../enums/Keys';
import {MyLocalizations} from '../enums/Localizations';
import MyStorageUtils from './StorageUtils';

class MyLocalizationUtils {
  private static instance: MyLocalizationUtils;

  private constructor() {}

  public static getInstance(): MyLocalizationUtils {
    if (!MyLocalizationUtils.instance) {
      MyLocalizationUtils.instance = new MyLocalizationUtils();
    }
    return MyLocalizationUtils.instance;
  }

  public localization = MyLocalizations.English;
  private variableTextPattern = '_______';
  private variableTextPattern1 = '___1___';
  private variableTextPattern2 = '___2___';
  private variableTextPattern3 = '___3___';

  public async initialize() {
    const localization = await MyStorageUtils.getData(MyKeys.Localization);
    if (localization != null) {
      this.localization = localization as MyLocalizations;
    }
  }

  public async setLocalization(localization: MyLocalizations) {
    await MyStorageUtils.storeData(MyKeys.Localization, localization);
    this.localization = localization;
  }

  public getLocalizedText({
    localizationTextList,
    variableTextList = [],
  }: {
    localizationTextList: string[];
    variableTextList?: string[];
  }): string {
    let localizedText = {
      [MyLocalizations.English]: localizationTextList[0],
      [MyLocalizations.Turkish]: localizationTextList[1],
    }[this.localization];
    if (localizedText.includes(this.variableTextPattern1)) {
      if (variableTextList.length > 0) {
        localizedText = localizedText.replace(
          this.variableTextPattern1,
          variableTextList[0],
        );
      }
      if (variableTextList.length > 1) {
        localizedText = localizedText.replace(
          this.variableTextPattern2,
          variableTextList[1],
        );
      }
      if (variableTextList.length > 2) {
        localizedText = localizedText.replace(
          this.variableTextPattern3,
          variableTextList[2],
        );
      }
    } else {
      for (const variableText of variableTextList) {
        localizedText = localizedText.replace(
          this.variableTextPattern,
          variableText,
        );
      }
    }
    return localizedText;
  }

  public getLocalizedSelectUserText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Select User', 'Kullanıcı Seçiniz'],
    });
  }

  public getLocalizedChangeRepoPasswordFailText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'You have entered the current password of repo named ' +
          this.variableTextPattern +
          ' incorrectly.',
        this.variableTextPattern +
          ' isimli deponun mevcut şifresini yanlış girdiniz.',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedRepoPasswordChangedText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The password for the repo named ' +
          this.variableTextPattern +
          ' has been changed.',
        this.variableTextPattern + ' isimli deponun şifresi değiştirildi.',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedChangeRepoPasswordText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Change Repo Password', 'Depo Şifresini Değiştir'],
    });
  }

  public getLocalizedNewPasswordAgainText(): string {
    return this.getLocalizedText({
      localizationTextList: ['New Password (Again)', 'Yeni Şifre (Tekrar)'],
    });
  }

  public getLocalizedNewPasswordText(): string {
    return this.getLocalizedText({
      localizationTextList: ['New Password', 'Yeni Şifre'],
    });
  }

  public getLocalizedCurrentPasswordText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Current Password', 'Mevcut Şifre'],
    });
  }

  public getLocalizedChangePasswordText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Change Password', 'Şifreyi Değiştir'],
    });
  }

  public getLocalizedRepoDeletedText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The repo named ' + this.variableTextPattern + ' has been deleted',
        this.variableTextPattern + ' isimli depo silindi',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedRepoWillBeDeletedText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The repo named ' + this.variableTextPattern + ' will be deleted',
        this.variableTextPattern + ' isimli depo silinecek',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedSaveText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Save', 'Kaydet'],
    });
  }

  public getLocalizedRepoRenamedText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The repo named ' +
          this.variableTextPattern +
          ' has been renamed to ' +
          this.variableTextPattern +
          '.',
        this.variableTextPattern +
          ' isimli depo ' +
          this.variableTextPattern +
          ' olarak yeniden adlandırıldı.',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedRenameRepoText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Rename Repo', 'Depoyu Yeniden Adlandır'],
    });
  }

  public getLocalizedRepoAddedText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The repo named ' + this.variableTextPattern + ' has been added.',
        this.variableTextPattern + ' isimli depo eklendi.',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedPasswordsDontMatchValidationText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The entered passwords do not match.',
        'Girilen şifreler uyuşmuyor.',
      ],
    });
  }

  public getLocalizedPasswordNumberValidationText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Your password must contain at least 1 number.',
        'Şifreniz en az 1 adet rakam içermelidir.',
      ],
    });
  }

  public getLocalizedPasswordCapitalLetterValidationText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Your password must contain at least 1 capital letter.',
        'Şifreniz en az 1 adet büyük harf içermelidir.',
      ],
    });
  }

  public getLocalizedPasswordLowercaseLetterValidationText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Your password must contain at least 1 lowercase letter.',
        'Şifreniz en az 1 adet küçük harf içermelidir.',
      ],
    });
  }

  public getLocalizedPasswordLengthValidationText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Your password must be at least 8 characters length.',
        'Şifreniz en az 8 karakter uzunluğunda olmalıdır.',
      ],
    });
  }

  public getLocalizedCharactersCannotBeUsedText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'The characters ' + this.variableTextPattern + ' cannot be used.',
        this.variableTextPattern + ' karakterleri kullanılamaz.',
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedPasswordAgainText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Password (Again)', 'Şifre (Tekrar)'],
    });
  }

  public getLocalizedDontForgetPasswordDescriptionText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'If you forget your repo password, it will not be possible to recover the folders and files in your repo.',
        'Depo şifrenizi unutmanız durumunda deponuzdaki klasörlerin ve dosyaların geri dönüşümü mümkün olmayacaktır.',
      ],
    });
  }

  public getLocalizedAddText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Add', 'Ekle'],
    });
  }

  public getLocalizedSetPasswordText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Set Password', 'Şifrele'],
    });
  }

  public getLocalizedRepoNameText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Repo Name', 'Depo İsmi'],
    });
  }

  public getLocalizedJustNowText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Just now', 'Az önce'],
    });
  }

  public getLocalizedMinutesText({
    minutesCount,
  }: {
    minutesCount: number;
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        'minute' + (minutesCount == 1 ? '' : 's'),
        'dakika',
      ],
    });
  }

  public getLocalizedHoursText({hoursCount}: {hoursCount: number}): string {
    return this.getLocalizedText({
      localizationTextList: ['hour' + (hoursCount == 1 ? '' : 's'), 'saat'],
    });
  }

  public getLocalizedDaysText({daysCount}: {daysCount: number}): string {
    return this.getLocalizedText({
      localizationTextList: ['day' + (daysCount == 1 ? '' : 's'), 'gün'],
    });
  }

  public getLocalizedMonthsText({monthsCount}: {monthsCount: number}): string {
    return this.getLocalizedText({
      localizationTextList: ['month' + (monthsCount == 1 ? '' : 's'), 'ay'],
    });
  }

  public getLocalizedYearsText({yearsCount}: {yearsCount: number}): string {
    return this.getLocalizedText({
      localizationTextList: ['year' + (yearsCount == 1 ? '' : 's'), 'yıl'],
    });
  }

  public getLocalizedAgoText(): string {
    return this.getLocalizedText({
      localizationTextList: ['ago', 'önce'],
    });
  }

  public getLocalizedLaterText(): string {
    return this.getLocalizedText({
      localizationTextList: ['later', 'sonra'],
    });
  }

  public getLocalizedLastUpdateText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Last Update', 'Son Güncelleme'],
    });
  }

  public getLocalizedSizeText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Size', 'Boyut'],
    });
  }

  public getLocalizedRepoDetailsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Repo Details', 'Depo Ayrıntıları'],
    });
  }

  public getLocalizedAddNewRepoText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Add New Repo', 'Yeni Depo Ekle'],
    });
  }

  public getLocalizedThereIsNoRepoWithSearchedNameText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'There is no repo with the searched name',
        'Aranan isimde bir depo yok',
      ],
    });
  }

  public getLocalizedThereIsNoRepoYetText(): string {
    return this.getLocalizedText({
      localizationTextList: ['There is no repo yet', 'Henüz bir depo yok'],
    });
  }

  public getLocalizedPercentValueText({
    variableTextList,
  }: {
    variableTextList: string[];
  }): string {
    return this.getLocalizedText({
      localizationTextList: [
        this.variableTextPattern + '%',
        '%' + this.variableTextPattern,
      ],
      variableTextList: variableTextList,
    });
  }

  public getLocalizedDeleteText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Delete', 'Sil'],
    });
  }

  public getLocalizedShareText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Share', 'Paylaş'],
    });
  }

  public getLocalizedRenameText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Rename', 'Yeniden Adlandır'],
    });
  }

  public getLocalizedDetailsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Details', 'Ayrıntılar'],
    });
  }

  public getLocalizedRepoOperationsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Repo Operations', 'Depo İşlemleri'],
    });
  }

  public getLocalizedSizeDescendingText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Size (Descending)', 'Boyut (Azalan)'],
    });
  }

  public getLocalizedSizeAscendingText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Size (Ascending)', 'Boyut (Artan)'],
    });
  }

  public getLocalizedLastUpdateDescendingText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Last Update (Descending)',
        'Son Güncelleme (Azalan)',
      ],
    });
  }

  public getLocalizedLastUpdateAscendingText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Last Update (Ascending)',
        'Son Güncelleme (Artan)',
      ],
    });
  }

  public getLocalizedAlphabeticalDescendingText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Alphabetical (Descending)', 'Alfabetik (Azalan)'],
    });
  }

  public getLocalizedAlphabeticalAscendingText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Alphabetical (Ascending)', 'Alfabetik (Artan)'],
    });
  }

  public getLocalizedSortText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Sort', 'Sırala'],
    });
  }

  public getLocalizedAreYouSureText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Are you sure?', 'Emin misiniz?'],
    });
  }

  public getLocalizedAccountWillBeLoggedOutText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'You will be logged out of your account',
        'Hesabınızdan çıkış yapılacak',
      ],
    });
  }

  public getLocalizedFilesText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Files', 'Dosyalar'],
    });
  }

  public getLocalizedWithUsersText(): string {
    return this.getLocalizedText({
      localizationTextList: ['With Users', 'Kullanıcılarla'],
    });
  }

  public getLocalizedSharedLinksText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Shared Links', 'Paylaşım Bağlantıları'],
    });
  }

  public getLocalizedWithYourGroupsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['With Your Groups', 'Gruplarınızla'],
    });
  }

  public getLocalizedWithYouText(): string {
    return this.getLocalizedText({
      localizationTextList: ['With You', 'Sizinle'],
    });
  }

  public getLocalizedTotalText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Total', 'Toplam'],
    });
  }

  public getLocalizedUsageText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Usage', 'Kullanım'],
    });
  }

  public getLocalizedSharedByYouText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Shared By You', 'Paylaştıklarınız'],
    });
  }

  public getLocalizedSharedWithYouText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Shared With You', 'Sizinle Paylaşılanlar'],
    });
  }

  public getLocalizedMyUsageText(): string {
    return this.getLocalizedText({
      localizationTextList: ['My Usage', 'Kullanımım'],
    });
  }

  public getLocalizedSearchText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Search', 'Ara'],
    });
  }

  public getLocalizedAnErrorOccurredText(): string {
    return this.getLocalizedText({
      localizationTextList: ['An error occurred', 'Bir hata oluştu'],
    });
  }

  public getLocalizedUserText(): string {
    return this.getLocalizedText({
      localizationTextList: ['User', 'Kullanıcı'],
    });
  }

  public getLocalizedMessagesText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Messages', 'Mesajlar'],
    });
  }

  public getLocalizedNotificationsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Notifications', 'Bildirimler'],
    });
  }

  public getLocalizedActionsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Actions', 'Eylemler'],
    });
  }

  public getLocalizedOperationsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Operations', 'İşlemler'],
    });
  }

  public getLocalizedProfileText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Profile', 'Profil'],
    });
  }

  public getLocalizedFavoritesText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Favorites', 'Favoriler'],
    });
  }

  public getLocalizedSharingText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Sharing', 'Paylaşım'],
    });
  }

  public getLocalizedReposText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Repos', 'Depolar'],
    });
  }

  public getLocalizedHomeText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Home', 'Ana Sayfa'],
    });
  }

  public getLocalizedCheckLoginInformationText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Please check your login information and try again.',
        'Lütfen giriş bilgilerinizi kontrol edip tekrar deneyiniz.',
      ],
    });
  }

  public getLocalizedOkeyText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Okey', 'Tamam'],
    });
  }

  public getLocalizedChangeLanguageText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Change Language', 'Dili Değiştir'],
    });
  }

  public getLocalizedTurkishText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Turkish', 'Türkçe'],
    });
  }

  public getLocalizedEnglishText(): string {
    return this.getLocalizedText({
      localizationTextList: ['English', 'İngilizce'],
    });
  }

  public getLocalizedOptionsText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Options', 'Seçenekler'],
    });
  }

  public getLocalizedLogoutText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Log Out', 'Çıkış Yap'],
    });
  }

  public getLocalizedLoginText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Log In', 'Giriş Yap'],
    });
  }

  public getLocalizedPasswordText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Password', 'Şifre'],
    });
  }

  public getLocalizedUserIdText(): string {
    return this.getLocalizedText({
      localizationTextList: ['User ID', 'Kullanıcı Kimliği'],
    });
  }

  public getLocalizedServerAddressText(): string {
    return this.getLocalizedText({
      localizationTextList: ['Server Address', 'Sunucu Adresi'],
    });
  }

  public getLocalizedAppCopyrightDescriptionText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Copyright © 2023, All Rights Reserved',
        'Copyright © 2023, Tüm Hakları Saklıdır',
      ],
    });
  }

  public getLocalizedAppNameFullText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'Corporate File Sharing Platform',
        'Kurumsal Dosya Paylaşım Platformu',
      ],
    });
  }

  public getLocalizedThereIsNoUserYetText(): string {
    return this.getLocalizedText({
      localizationTextList: ['There is no user yet', 'Henüz bir kullanıcı yok'],
    });
  }

  public getLocalizedThereIsNoUserWithSearchedNameText(): string {
    return this.getLocalizedText({
      localizationTextList: [
        'There is no user with the searched name',
        'Aranan isimde bir kullanıcı yok',
      ],
    });
  }
}

export default MyLocalizationUtils.getInstance();
