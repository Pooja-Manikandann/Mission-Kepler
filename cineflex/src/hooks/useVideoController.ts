export const useVideoController = (ref: any, playIconRef: any) => {
    const playVideo = (startTiming: number, showControls=false) => {
        if (ref?.current?.paused) {
            ref.current.currentTime = startTiming;
            ref?.current?.play();
            const element = playIconRef.current || { className: '' };
            element.style.display = 'none'
            if(showControls) ref.current.controls = true
        }
    }
    const pauseVideo = () => {
        ref?.current?.pause();
        const element = playIconRef.current || { className: '' };
        element.style.display = 'block'
    }
    return {
        playVideo,
        pauseVideo,
    }
}