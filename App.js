import React, {useState} from 'react';
import {Button} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';
import {APPID, TOKEN} from './secret';

export default function App() {
  const [videoCall, setVideoCall] = useState(false);
  const connectionData = {
    appId: APPID,
    channel: 'test',
    token: TOKEN,
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Button
      onPress={() => setVideoCall(true)}
      title={'Start Call'}
      callbacks={rtcCallbacks}
    />
  );
}
