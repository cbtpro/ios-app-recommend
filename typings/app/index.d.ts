
declare module IOSApp {
  /** IOS App详情 */
  interface AppDetail {
    resultCount: number;
    results: Result[];
  }

  interface Result {
    screenshotUrls: string[];
    ipadScreenshotUrls: string[];
    appletvScreenshotUrls: any[];
    artworkUrl60: string;
    artworkUrl512: string;
    artworkUrl100: string;
    artistViewUrl: string;
    isGameCenterEnabled: boolean;
    features: string[];
    supportedDevices: string[];
    advisories: string[];
    kind: string;
    currentVersionReleaseDate: Date;
    averageUserRatingForCurrentVersion: number;
    averageUserRating: number;
    trackCensoredName: string;
    languageCodesISO2A: string[];
    fileSizeBytes: string;
    sellerUrl: string;
    formattedPrice: string;
    contentAdvisoryRating: string;
    userRatingCountForCurrentVersion: number;
    trackViewUrl: string;
    trackContentRating: string;
    releaseNotes: string;
    artistId: number;
    artistName: string;
    genres: string[];
    price: number;
    description: string;
    genreIds: string[];
    trackId: number;
    trackName: string;
    primaryGenreName: string;
    primaryGenreId: number;
    bundleId: string;
    isVppDeviceBasedLicensingEnabled: boolean;
    currency: string;
    sellerName: string;
    minimumOsVersion: string;
    releaseDate: Date;
    version: string;
    wrapperType: string;
    userRatingCount: number;
  }
  /** IOS App 列表 */
  interface TopApps {
    feed: Feed;
  }

  interface Feed {
    author: Author;
    entry: Entry[];
    updated: Value;
    rights: Value;
    title: Value;
    icon: Value;
    link: FeedLink[];
    id: Value;
  }

  interface Author {
    name: Value;
    uri: Value;
  }

  interface Value {
    /**
     * 值
     */
    label: string;
  }

  /** IOS top应用 */
  interface Entry {
    "im:name": Value;
    "im:image": IMImage[];
    summary: Value;
    "im:price": IMPrice;
    "im:contentType": IMContentType;
    rights: Value;
    title: Value;
    link: EntryLink[];
    id: ID;
    "im:artist": IMArtist;
    category: Category;
    "im:releaseDate": IMReleaseDate;
  }

  interface Category {
    attributes: CategoryAttributes;
  }

  interface CategoryAttributes {
    "im:id": string;
    term: PurpleTerm;
    scheme: string;
    label: PurpleLabel;
  }

  enum PurpleLabel {
    相片與影片 = "相片與影片",
    遊戲 = "遊戲",
  }

  enum PurpleTerm {
    Games = "Games",
    PhotoVideo = "Photo & Video",
  }

  interface ID {
    /** ID 值 */
    label: string;
    attributes: IDAttributes;
  }

  interface IDAttributes {
    "im:id": string;
    "im:bundleId": string;
  }

  interface IMArtist {
    label: string;
    attributes: IMArtistAttributes;
  }

  interface IMArtistAttributes {
    href: string;
  }

  interface IMContentType {
    attributes: IMContentTypeAttributes;
  }

  interface IMContentTypeAttributes {
    term: FluffyTerm;
    label: FluffyLabel;
  }

  enum FluffyLabel {
    應用程式 = "應用程式",
  }

  enum FluffyTerm {
    Application = "Application",
  }

  interface IMImage {
    /** 图片 uri */
    label: string;
    attributes: IMImageAttributes;
  }

  interface IMImageAttributes {
    height: string;
  }

  interface IMPrice {
    label: IMPriceLabel;
    attributes: IMPriceAttributes;
  }

  interface IMPriceAttributes {
    amount: string;
    currency: Currency;
  }

  enum Currency {
    Hkd = "HKD",
  }

  enum IMPriceLabel {
    取得 = "取得",
  }

  interface IMReleaseDate {
    label: Date;
    attributes: Value;
  }

  interface EntryLink {
    attributes: PurpleAttributes;
    "im:duration"?: Value;
  }

  interface PurpleAttributes {
    rel: Rel;
    type: Type;
    href: string;
    title?: Title;
    "im:assetType"?: IMAssetType;
  }

  enum IMAssetType {
    Preview = "preview",
  }

  enum Rel {
    Alternate = "alternate",
    Enclosure = "enclosure",
  }

  enum Title {
    預覽 = "預覽",
  }

  enum Type {
    ImageJPEG = "image/jpeg",
    TextHTML = "text/html",
  }

  interface FeedLink {
    attributes: FluffyAttributes;
  }

  interface FluffyAttributes {
    rel: string;
    type?: Type;
    href: string;
  }
}