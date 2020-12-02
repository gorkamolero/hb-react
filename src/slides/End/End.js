import React, { useEffect, useState, useContext, useRef } from 'react';
import useVisibility from 'react-use-visibility';
import {SlideContext} from "../../context/SlideContext";
import './End.css'
import Navigation from "../../components/Navigation/Navigation";
import Loading from '../../components/Loading';
import Products from './partials/Products'
import Features from './partials/Features'
import Testimonials from './partials/Testimonials'
import { HbCircleIcon, icons, colors, useBreakpoint, HbWave, textstyles, HbButton } from "../../visly";
import { HbSection } from '../../visly/Pages'
import Video from './partials/ReactPlayerWistia2'
import MyWistiaFooter from './partials/VideoFooter'
import { Footer, Tip } from '../../styles/StyledComps';
import CustomHTML from '../../components/CustomHTML/CustomHTML';
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';
import { useLocalStorage } from 'react-use';
import { FlexBox } from 'react-styled-flex';
import { HbSuperProductEmpty } from '../../visly/Compounds';

let noTest = window.location.href.includes('dev') || window.location.href.includes('localhost')
noTest=false

const ProgressButton = ({icon, action, size}) => {
    const [buttonProgress, setButtonProgress] = useState(0)

    const onPress = () => {
        setButtonProgress(100);
        action();
    }

    if (icon) return (
        <Footer.HbButtonWithIcon className={`buttonWithProgress ${buttonProgress > 0 ? `progress-${buttonProgress}` : ''} ${size && size === 'small' ? `small` : ''}`} withProgress={true} onPress={onPress} />
    )
    else return (
        <HbButton text={'Continue to checkout'} className={`buttonWithProgress ${buttonProgress > 0 ? `progress-${buttonProgress}` : ''}  ${size && size === 'small' ? `small` : ''}`} withProgress={true} onPress={onPress} />
    )
}

function End({loading, setLoading}) {
    const { nav, Engine } = useContext(SlideContext);
    const prodRef = useRef();
    const prodRef2 = useRef();
    const isFooterVisible = useVisibility(prodRef.current);
    const isFooterVisible2 = useVisibility(prodRef2.current);

    /* eslint-disable */
    const currentDog = Engine.getLocalStorageItem('currentDog', 1);
    window.currentDog = currentDog;
    const isNewDog = currentDog != 1
    /* eslint-enable */

    // const [loadingScreenIsSeen, setLoadingScreenIsSeen] = useLocalStorage(`loadingScreenIsSeen-${currentDog}`, noTest ? true : false);
    // const [videoIsDone, setVideoIsDone] = useLocalStorage(`videoIsSeen-${currentDog}`, noTest ? true : false);
    const [loadingScreenIsSeen, setLoadingScreenIsSeen] = useState(noTest ? true : false);
    const [videoIsDone, setVideoIsDone] = useLocalStorage(`videoIsSeen-${currentDog}`, (noTest || isNewDog) ? true : false);
    window.videoIsDone = videoIsDone
    const [showWistiaFooter, setShowWistiaFooter] = useState(true)
    const [showFooter, setShowFooter] = useState(false)
    const [videoOff, setVideoOff] = useState(false)

    useEffect(() => {
        if (loadingScreenIsSeen) setLoading(false)
        if (isNewDog) setVideoIsDone(true)
        // if (videoIsDone) setLoading(false)
    }, [loadingScreenIsSeen, setLoading, isNewDog, setVideoIsDone])

    useEffect(() => {
        const onScroll = e => {
            setTimeout(() => {
                if (videoIsDone && e.target.documentElement.scrollTop > 100) {
                    setShowWistiaFooter(false)
                    window.removeEventListener("scroll", onScroll);
                }
            })
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [videoIsDone]);

    const [hungry, setHungry] = useState(null)
    const [dog, setDog] = useState(null)
    const [products, setProducts] = useState(null)
    const [texts, setTexts] = useState(null)
    const [reviews, setReviews] = useState(null)
    const [subscribePriceFactor, setSubscribePriceFactor] = useState({trial:0, postTrial:0});
    const size = useBreakpoint("small", ["medium", "large", "super"]);

    const [selectedResults, setSelectedResults] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [subscription, setSubscription] = useState(true)

    useEffect(() => {
        const waitForWindowData = () => {
            if (window.hungry.end && window.hungry.values) {
                setHungry({...window.hungry.end, ...window.hungry.values})
                setDog({
                    name: window.hungry.end.dogName,
                    weight: window.hungry.end.dogWeight,
                    gender: window.hungry.end.dogGender,
                })
                setProducts({
                    kibble: window.hungry.end.kibble ? window.hungry.end.kibble : null,
                    supplement:window.hungry.end.supplement ? window.hungry.end.supplement : null,
                    mixin: window.hungry.end.mixin ? window.hungry.end.mixin : null
                })

                // setProducts({
                //     kibble: null,
                //     supplement:null,
                //     mixin: null
                // })

                if (window.hungry.end.kibble) {
                    setReviews(window.hungry.end.reviews[window.hungry.end.kibble.key])
                } else {
                    setReviews(window.hungry.end.reviews['chicken_rice'])
                }

                setSubscribePriceFactor(window.hungry.end.subscribePriceFactor);

                if (window.hungry.end.onlySubscription) setSubscription(true)
                if (window.hungry.values.videoIsOff) {
                    setVideoOff(true)
                    setVideoIsDone(true)
                }
            } else {
                setTimeout(() => waitForWindowData(), 500);
            }
        }

        waitForWindowData()

    }, [setVideoIsDone])

    const getPrice =  (price, factor) => Number(price * (factor||1)).toFixed(2);

    const roundPrice = (price) => Number(price).toFixed(2)
    const totalProducts = selectedResults.filter(s => s).length

    const continueToCheckout = () => {
        // setButtonProgress(1)
        // const currentDog = Engine.getLocalStorageItem('currentDog', 1);
        // localStorage.setItem(`videoIsSeen-${currentDog}`, false);
        
        hungry.goToCheckout(subscription, selectedResults);
    }

    const addAnotherDog = () => {
        hungry.addAnotherDog( subscription, selectedResults, () => {
            // const currentDog = Engine.getLocalStorageItem('currentDog', 1);
            // localStorage.setItem(`videoIsSeen-${currentDog}`, false);

            nav.restart();
        });
    }

    const restartQuiz = () => {
        hungry.startOver( () => {
            // const currentDog = Engine.getLocalStorageItem('currentDog', 1);
            // localStorage.setItem(`videoIsSeen-${currentDog}`, false);

            nav.restart();
        });
    }

    useEffect(() => {
        if (!hungry) return
        
        let trialText = hungry.TrialText.replace('[PRICETRIAL]',getPrice(totalPrice, subscribePriceFactor.trial))

        let afterTrialPrice = totalPrice*subscribePriceFactor.postTrial*2;

        let afterTrialText = hungry.AfterTrialText
            .replace('[PRICE]', getPrice(afterTrialPrice))
            .replace('[PRICEPERDAY]', getPrice(afterTrialPrice/28))
            .replace('[SHIPPING]', hungry.getShippingText(afterTrialPrice))

        let rest = {
            AfterTrialHeading: hungry.AfterTrialHeading || '',
            TrialHeading: hungry.TrialHeading || '',
            OneTimeBoxText: hungry.OneTimeBoxText || '',
            SwitchOneTimeText: hungry.SwitchOneTimeText || '',
            SwitchSubscribeText: hungry.SwitchSubscribeText || '',
        }

        let loadingMainText = hungry.lsMainText.replace('[DOGNAME]', hungry.dogName)

        setTexts({
            plan: {
                trial: trialText,
                afterTrial: afterTrialText,
                rest
            },
            loading: {
                lsTitle1: hungry.lsTitle1,
                lsSubtitle1: hungry.lsSubtitle1,
                lsTitle2: hungry.lsTitle2,
                lsSubtitle2: hungry.lsSubtitle2,
                lsTitle3: hungry.lsTitle3,
                lsSubtitle3: hungry.lsSubtitle3,
                main: loadingMainText
            }
        })
    }, [hungry, totalPrice, subscribePriceFactor.postTrial, subscribePriceFactor.trial])

    useEffect(() => {
        return () => setLoading(true)
    }, [setLoading])

    useEffect(() => {
        if (isFooterVisible || isFooterVisible2) setShowFooter(true)
    }, [isFooterVisible, isFooterVisible2])
    
    if (!hungry || !products || !texts) return <div></div>

    let onlySubscription = hungry.onlySubscription

    return (
        <FlexBox column center width="100%">
            {
                loading && !loadingScreenIsSeen && (
                    <Loading texts={texts.loading} dogName={hungry.dogName} loading={loading} setLoading={setLoading} setLoadingScreenIsSeen={setLoadingScreenIsSeen}  timing={hungry.loadingScreenTimeMilliseconds ? hungry.loadingScreenTimeMilliseconds : 9000} outTiming={100} />
                )
            }

            {
                !loading && !videoOff && (
                    <HbSection noHeadNoPadding style={videoIsDone ? {} : { minHeight: '100vh' }}>
                        <FlexBox column center width="100%">
                            <Video video={hungry.video} play={true} />

                            {/* Maybe evaluate isNewDog */}
                            <MyWistiaFooter hex={hungry.footerHexCode || `#00aeaa`} className={`HbVideoFooter ${showWistiaFooter ? 'show' : ''}`} dogName={hungry.dogName} videoIsDone={videoIsDone} setVideoIsDone={setVideoIsDone} />
                        </FlexBox>
                    </HbSection>
                )
            }

            {
                videoIsDone && (
                    <>

                        {
                            !products.kibble && !products.supplement && !products.mixin ? (
                                <HbSection
                                    noMaxWidth
                                    waveslot1={<HbWave className="HbWave" double />}
                                    waveslot2={<HbWave className="HbWave" invert />}
                                    column
                                    alignItems="center"
                                    className="wave"
                                    style={{ backgroundColor: colors.hbGoldLight}}
                                    title={'Recommended Plan'}
                                >
                                    <HbSuperProductEmpty
                                        className="HbSuperProductEmpty"
                                        Extratext={
                                            <CustomHTML style={{ ...textstyles.hbFeatureText, color: colors.hbBrown }}
                                                html={`It looks like ${hungry.dogName} has some very specific nutrition challenges. We don’t have any Hungry Bark products to offer. If you would like to discuss this further, please contact our team at Clinical Pet Nutritionists at <span class="hungryBlue">nutritionist@hungrybark.com</span>`}
                                            />
                                        }
                                        oops={`Oops… Looks like ${hungry.dogName} has some very specific needs…`}
                                    />
                                </HbSection>
                            ) : (
                                <Products ProgressButton={ProgressButton} continueToCheckout={continueToCheckout} onlySubscription={onlySubscription} products={products} dog={dog} goals={hungry.goals} texts={texts} totalPrice={totalPrice} setTotalPrice={setTotalPrice} preselectedResults={hungry.Preselections} selectedResults={selectedResults} setSelectedResults={setSelectedResults} subscription={subscription} setSubscription={setSubscription} getPrice={getPrice} subscribePriceFactor={subscribePriceFactor} />
                            )
                        }

                        { window.location.href.includes('localhost') && <Navigation />}
                        <div className="visibility div" ref={prodRef} style={{ height: 1 }}> </div>

                        <Features reviews={reviews} stack={size === 'small'} />
                        <div className="visibility div2" ref={prodRef2} style={{ height: 1 }}> </div>

                        <Testimonials />

                        <Footer
                            className={`HbEndFooter ${size === 'small' ||  size === 'medium' ? 'stack' : ''} ${showFooter && 'show'}`}
                            total={`Total (${totalProducts})`}
                            priceOriginal={subscription && selectedResults.length ? '$' + roundPrice(totalPrice) : ''}
                            priceFinal={'$' + getPrice(totalPrice, subscription?subscribePriceFactor.trial:1)}
                            HbLinkButton={<Footer.HbLinkButton text={size === 'small' ? '+ Dog' : 'Add another dog'} onPress={addAnotherDog} />}
                            YOLO
                            HbButtonWithIcon={<ProgressButton icon={true} action={continueToCheckout} />}
                            HbButtonWithIconMobile={<ProgressButton icon={true} action={continueToCheckout} />}
                            
                            RestartSlot={<Footer.RestartSlot onPress={restartQuiz} />}
                            RestartSlotMobile={<Footer.RestartSlotMobile className="" onPress={restartQuiz} />}
                            NoHbAddAnotherDog={hungry.currentDog >= hungry.dogsInHousehold}
                            stack={size === 'small' ||  size === 'medium'}
                            HelpSlot={
                                <Tooltip
                                    // options
                                    position="top"
                                    trigger="mouseenter click"
                                    style={{ padding: 0 }}
                                    theme="light"
                                    html={(
                                        <Tip>
                                            Your current selections have been saved. Click to create a plan for your other dog.
                                        </Tip>
                                    )}
                                >
                                    <HbCircleIcon icon={icons.hbHelp2} style={{ width: 32, height: 32, color: colors.hbBrown }} />
                                </Tooltip>
                            }
                        />
                    </>
               )
            }
        </FlexBox>
    );

}

export default End;