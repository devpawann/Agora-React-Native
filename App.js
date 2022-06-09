import React, {useState} from 'react';
import {Text} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

export default function App() {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '<Agora App ID>',
    channel: 'test',
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
}
