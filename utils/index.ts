
export const filterFn = (list: IOSApp.TopApps, searchKey: string) => {
  return list?.feed.entry.filter((item) => {
      const {
        /** 应用名称 */
        "im:name": name,
        /** 应用作者 */
        "im:artist": artist,
        /** 应用描述 */
        summary,
      } = item;
      /** 转换小写后的应用名称 */
      const localeName = name.label ? name.label.toLocaleLowerCase() : '';
      /** 转换小写后的作者 */
      const localArtist = artist.label ? artist.label.toLocaleLowerCase() : '';
      /** 转化小写后的描述 */
      const localSummary = summary.label ? summary.label.toLocaleLowerCase() : '';
      /** 转换小写后的搜索关键词 */
      const localeLowerCaseSearchKey = searchKey ? searchKey.toLocaleLowerCase() : '';
      /** 是否匹配应用名称 */
      const ifMatchName = localeName.includes(localeLowerCaseSearchKey);
      /** 是否匹配作者 */
      const ifMatchArtist = localArtist.includes(localeLowerCaseSearchKey);
      /** 是否匹配描述 */
      const ifMatchSummary =
        localSummary.includes(localeLowerCaseSearchKey);
      return ifMatchName || ifMatchArtist || ifMatchSummary;
    });
}
