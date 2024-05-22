import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "fd2d20454085471fbfcc6312b24885ee";
const token =
  "007eJxTYKgPPVDjMTHNp9/6VlSrnPS9SZ71l/I6yqZaG00vMz8ny67AkJZilGJkYGJqYmBhamJumJaUlpxsZmxolGRkYmFhmpoaE/kipSGQkWH/uuusjAwQCOKzMoRl5uQkMjAAAPtMHsQ=";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Villa";