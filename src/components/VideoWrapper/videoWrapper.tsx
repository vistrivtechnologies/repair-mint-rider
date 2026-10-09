import React, { useRef } from "react";
import Video from "react-native-video";
import PropTypes from "prop-types";
import { StyleProp, ViewStyle } from "react-native";

type VideoWrapperProps = {
    muted?: boolean;
    repeat?: boolean;
    resizeMode?: any;
    source: any;
    style?: StyleProp<ViewStyle>;
};

const VideoWrapper: React.FC<VideoWrapperProps> = ( {
    muted = true,
    repeat = true,
    resizeMode = "cover",
    source,
    style,
} ) => {
    //@ts-ignore
    const playerRef = useRef<Video | null>( null );
    const onBuffer = () => {

        console.log( "Video is buffering" );
    };

    const videoError = ( error: any ) => {
        console.error( "Video error:", error );
    };

    return (
        <Video
            muted={ muted }
            repeat={ repeat }
            resizeMode={ resizeMode }
            source={ source }
            style={ {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "black",
                ...( ( style as object ) || {} ),
            } }
            disableFocus={ true }
            playInBackground={ true }
            ref={ playerRef }
            onBuffer={ onBuffer }
            onError={ videoError }
        />
    );
};

VideoWrapper.propTypes = {
    muted: PropTypes.bool,
    repeat: PropTypes.bool,
    resizeMode: PropTypes.string,
    source: PropTypes.number.isRequired,
    style: PropTypes.object,
};

export default VideoWrapper;
