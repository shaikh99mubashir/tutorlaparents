import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Video, { OnLoadData, VideoProperties } from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const RNVideo: React.FC = () => {
  const videoPlayer = useRef<Video>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paused, setPaused] = useState<boolean>(false);
  const [playerState, setPlayerState] = useState<PLAYER_STATES>(
    PLAYER_STATES.PLAYING
  );

  const onSeek = (seek: number) => {
    if (videoPlayer.current) videoPlayer.current.seek(seek);
  };

  const onPaused = (playerState: PLAYER_STATES) => {
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING);
    if (videoPlayer.current) videoPlayer.current.seek(0);
  };

  const onProgress = (data: { currentTime: number }) => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const enterFullScreen = () => setIsFullScreen(true);

  const onFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) enterFullScreen();
  };

  const onSeeking = (currentTime: number) => setCurrentTime(currentTime);

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );
  
  return (
    <View style={{ flex: 1 }}>
      <Video
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={videoPlayer}
        resizeMode={isFullScreen ? 'cover' : 'contain'}
        source={{
          uri:
            'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
        }}
        // style={styles.mediaPlayer}
        volume={10}
        style={styles.video}
      />
     
      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={paused ? PLAYER_STATES.PAUSED : PLAYER_STATES.PLAYING}
        progress={currentTime}
        // toolbar={renderToolbar()}
      />
    </View>
  );
};

export default RNVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  video: {
    width: '99%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
