import React, { useEffect, useRef, useState } from 'react';
import AdvertisementCard from '../AdvertisementCard/AdvertisementCard';
import { ADVERTISEMENT_LIMIT } from '../../constants';
import { useRecoilState } from 'recoil';
import { timerAtom } from '../../atoms/atom';
import { getRandomLargeAdvertisement, getRandomNumber, getRandomShortAdvertisement } from '../../utils/getRandomAdvertisement.utils';

/**
 * @description HOC wraps the child component with the advertisement
 * @param Component child which needs to be wrapped by advertisement
 * @returns wrapped component with advertisement
 */
const WithAdvertisement = (Component: any) => {
  
  const Advertisement = (props: any) => {
    const { advertisement, resetAdvertisement } = props;
    const [videoStatus, setVideoStatus] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showAdvertisement, setShowAdvertisement] = useState(false);
    const [adStatus, setAdStatus] = useState(false);
    const [limit, setLimit] = useState(-2);
    const [imageUrl, setImageUrl] = useState('')
    const { LIMIT_5S } = ADVERTISEMENT_LIMIT;

    /**
     * @description function that enables all state to show ad
     */
    const showAd = () => {
      setShowAdvertisement(true);
      setVideoStatus(false);
      setLimit(advertisement.DURATION);
      setImageUrl(advertisement.DURATION === LIMIT_5S? getRandomLargeAdvertisement() : getRandomShortAdvertisement());
    }

    /**
     * @description function that disables all state to hide ad
     */
    const hideAd = () => {
      setShowAdvertisement(false);
      setAdStatus(true);
      setVideoStatus(true);
      setLimit(-3);
    }

    /**
     * @description function called when the video starts to play
     * @param currentVideoStatus - status that mentions the video play status
     */
    const handleClick = (currentVideoStatus: boolean) => {
      setVideoStatus(currentVideoStatus);
      setLimit(limit>0? limit : advertisement.START);
    }

    const resetAd = () => {
        setShowAdvertisement(false);
        setAdStatus(false);
        setVideoStatus(true);
        setLimit(advertisement.START);
    }

    /**
     * counter based on which the showing and hiding of ad starts
     */
    useEffect(() => {
      let id: number| any;
      if(!adStatus) {
        if(limit >= -1 && (videoStatus || showAdvertisement)) {
        id = setTimeout(()=>{
          setLimit(limit-1);
        }, 1000)
        if(limit === 0) {
          if(videoStatus){
            showAd();
          }
          else {
            hideAd();
          }
        }
      }
    }
    return () => {clearTimeout(id)}
  },[videoStatus, limit, showAdvertisement, adStatus]);

  useEffect(() => {
    if(resetAdvertisement)
    resetAd();
  },[resetAdvertisement])
    return (showAdvertisement? <AdvertisementCard imageUrl={imageUrl} alt='advertisement' title={props.title} limit={limit} size={advertisement.DURATION === LIMIT_5S? 'large' : 'small'} /> : <Component {...props} onclick={handleClick} videoStatus={videoStatus} adStatus={adStatus} videoRef={videoRef} limit={limit} setAdStatus={setAdStatus} />)
  }
  return Advertisement;
};

export default WithAdvertisement;
