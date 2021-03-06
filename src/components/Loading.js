import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { HbLoadingScreen } from "../visly/Pages";
import { useBreakpoint } from "../visly";
import Loading1 from '../assets/images/loading1.png'
import Loading2 from '../assets/images/loading2.png'
import Loading3 from '../assets/images/loading3.png'

const Loaders = [
  Loading1,
  Loading2,
  Loading3,
]

const LoadingScreen = styled(HbLoadingScreen)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: white;
  z-index: 99999999999;
  & > * {
    width: 100%;
  }
`


const Loading = ({ timing = 6000, loading, setLoading, outTiming = 0, setLoadingScreenIsSeen, dogName, texts }) => {
  const [rotation, setRotation] = useState(0)
  const [progress, setProgress] = useState(0)
  const size = useBreakpoint("small", ["medium", "large", "large"]);

  useEffect(() => {
    return () => setLoadingScreenIsSeen(true)
  }, [setLoadingScreenIsSeen])

  useEffect(() => {
    document.body.classList.add('noscroll')

    return () => document.body.classList.remove('noscroll')
  }, [])
  
  // Rotate images
  useEffect(() => {
    // if (progress === 100) return

    const interval = setInterval(
      () => {
        setRotation(rotation => rotation + 1)
        setProgress(progress + 33)
      }, timing / 3);


    return () => clearInterval(interval);
  }, [timing, progress, rotation])

  // Set loading when complete
  useEffect(() => {
    setTimeout(() => {
      setProgress(100)
    }, timing);

    setTimeout(() => {
      setLoading(false)
    }, timing + 100)
  })
  
  return (
    <LoadingScreen
      HbProgressBar={<HbLoadingScreen.HbProgressBar value={progress / 100} />}
      HbFirstSlideFooter={
        <HbLoadingScreen.HbFirstSlideFooter
          HbFooterRectangle={<HbLoadingScreen.HbFirstSlideFooter.HbFooterRectangle title={texts && texts.lsTitle1 ? texts.lsTitle1 : `Super premium ingredients`} subtitle={texts && texts.lsSubtitle1 ? texts.lsSubtitle1 : `Made with real meat and superfoods`} />}
          HbFooterRectangle1={<HbLoadingScreen.HbFirstSlideFooter.HbFooterRectangle1 title={texts && texts.lsTitle2 ? texts.lsTitle2 :`Vet approved`} subtitle={texts && texts.lsSubtitle2 ? texts.lsSubtitle2 : `Shop with confidence`} />}
          HbFooterRectangle2={<HbLoadingScreen.HbFirstSlideFooter.HbFooterRectangle2 title={texts && texts.lsTitle3 ? texts.lsTitle3 :`Custom nutrition`} subtitle={texts && texts.lsSubtitle3 ? texts.lsSubtitle3 : `Personalized plan for your dog`} />} 
          size={size}
        />
      }
      className={`HbLoadingScreen ${rotation >= 2 ? 'lastImage' : ''} ${loading ? 'screenIsLoading' : 'screenIsLoaded'}`}
      text={texts.main ? texts.main : `We are creating ${dogName}'s custom plan`}
      imageSrc={Loaders[rotation]}
    >
    </LoadingScreen>
  );
}
 
export default Loading;