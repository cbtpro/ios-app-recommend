import { useAppRequest } from "@/composables/AppRequest";
import useConfig from "@/utils/config";


export const useGetAppleTopApps1 = (params: IUrlParams): any => {
  const { api, buildApiUrl } = useConfig();
  console.log('====', api.appleTopAppsUrl)
  return useAppRequest.get(
    buildApiUrl(api.appleTopAppsUrl, params),
    {}
  );
};
export const useGetAppleTopApps = async (params: IUrlParams) => {
  const { api, buildApiUrl } = useConfig();
  const topApps = ref([])
  useAsyncData('topApps', () => useAppRequest.get(
    buildApiUrl(api.appleTopAppsUrl, params),
  ))
  return {
    topApps
  }
};
