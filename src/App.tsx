import "./styles/App.css";
import "./styles/Custom.css";
import "./styles/Timeline.css";
import "./styles/Animation.css";
import { useMemo } from "react";
import Minter from "./Minter";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  getTorusWallet,
  getLedgerWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";

// import HorizontalNavsCustom1 from './components-custom/HorizontalNavsCustom1';
// import HowItWorksCustom2 from './components-custom/HowItWorksCustom2';
// import Header1 from './components/headers/Header1';
// import Features6 from './components/features/Features6';
// import Features4 from './components/features/Features4';
// import Testimonials1 from './components/testimonials/Testimonials1';
// import Testimonials2 from './components/testimonials/Testimonials2';
// import CallToAction2 from './components/call-to-action/CallToAction2';
// import Footer3 from './components/footers/Footer3';

/* // splideJS - splidejs.com/integration/react-splide
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// const splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   perPage: 3,
//   autoScroll: {
//     speed: 2,
//   },
// } );
// splide.mount( {AutoScroll} ); */

import Particles from 'react-tsparticles';

import 'bootstrap';

const theme = createTheme({
  typography: {
    fontFamily: '"Dosis", sans-serif !important',
  },
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
      getTorusWallet({
        options: {
            // TODO: Get your own tor.us wallet client Id
            clientId:
              "BPmlVobxM5YgrAepy0V76sxD3eVM52yqdYkxKHIiNVabPI30TJ2dsdZX9n8Fh3b2ONQUBMWWptM0jOVt1auXA6U",
          },
        }),
      getLedgerWallet(),
      getMathWallet(),
    ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }


  return (
    <div id="app-main">
      <div id="mobileNavContainer" className="mobile-nav noselect">
        <div className="mobile-nav-close-button">
          <img src="/icons/close.svg" alt="" onClick={toggleMenu} />
        </div>
        <ul>
          <li>
          <section className="stage" style={{ marginLeft: 0 }}><figure className="4x1 ball bubble"></figure></section>
          </li>
          <li>
          <span className="logo-3d-text">
            <a href="https://metaballix.com/" target="_blank" rel="noreferrer" className="effect-shine">
              <b>METABALLIX</b>
            </a></span>
          </li>
          <li>
            <a href="/#link1" onClick={toggleMenu}>
              Metaballs
            </a>
          </li>
          <li>
            <a href="/#link2" onClick={toggleMenu}>
              PlasmaVerse
            </a>
          </li>
          <li>
            <a href="/#link3" onClick={toggleMenu}>
              Tokenomics
            </a>
          </li>
          <li>
            <a href="/#link4" onClick={toggleMenu}>
              Roadmap
            </a>
          </li>
          <li>
            <a href="/#link4" onClick={toggleMenu}>
              Litepaper
            </a>
          </li>
          <li>
            <a href="/#link4" onClick={toggleMenu}>
              Mission
            </a>
          </li>
          <li>
            <div className="social-icons">
              <a href="https://twitter.com/metaballix" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-twitter"></i>
              </a>
              <a href="https://discord.gg/AG2Y93emkf" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-discord"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <i className="mobile-menu-button fa-solid fa-ellipsis-vertical" onClick={toggleMenu}> </i>
      <nav>
        <div className="nav-container">
        <section className="stage ball-topleft"><figure className="4x1 ball bubble"></figure></section>
          <a className="hide-800" href="/#link1">
            Metaballs
          </a>
          <a className="hide-800" href="/#link2">
            PlasmaVerse
          </a>
          <a className="hide-800" href="/#link3">
            Tokenomics
          </a>
          <a className="hide-800" href="/#link4">
            Roadmap
          </a>
          <a className="hide-800" href="/#link4">
            Litepaper
          </a>
          <a className="hide-800" href="/#link4">
            Mission
          </a>
          <a className="hide-800" href="/">
          </a>
          <div className="social-icons hide-800">
            <a href="https://twitter.com/metaballix" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-twitter"> </i>
              {/* <img className="nav-social" src="/icons/twitter.svg" alt="" /> */}
            </a>
            <a href="https://discord.gg/AG2Y93emkf" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-discord"> </i>
              {/* <img className="nav-social" src="/icons/discord.svg" alt="" /> */}
            </a>
          </div>
        </div>
      </nav>

{/* Start of Original Content Wrapper */}
<div className="content-wrapper">
<div id="mint" className="mball-avatar"></div>
        <header className="card contentcard" id="link1">
          <div className="text-center" style={{ padding: "0 24px 0 24px 0" }}>
            <h3 className="text-secondary-color">Welcome to the PlasmaVerse</h3>
            <h1 className="pb-3" style={{ fontWeight: 600 }}><span style={{ color: "rgb(25, 55, 130)" }}>ENGAGE. </span><span style={{ color: "rgb(77, 25, 130)" }}>EVOLVE. </span><span style={{ color: "rgb(121, 11, 121)" }}>EARN.</span></h1>
          </div>
          <div className="row align-items-center">
          <div className="col-6">
          <p className="text-secondary-color hero-text">
            Your Metaball NFT avatar grants you creator access to the PlasmaVerse, an extended reality GameFi ecosystem of immersive, interconnected Xones.
            </p>
          </div>
          <div className="col-6">
            <ThemeProvider theme={theme}>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletDialogProvider>
                    <Minter
                      candyMachineId={candyMachineId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </ThemeProvider>
          </div>
          </div>
        </header>

{/* Carousel 1 : Metaball NFTs Sample */}
{/* SplideJS (splidejs.com/integration/react-splide) */}
{/* module imported above, CSS Styles jsdeliver tag added to index.html */}
{/* <div className="splide">
  <div className="splide__track">
		<ul className="splide__list">
			<li className="splide__slide">Slide 01</li>
			<li className="splide__slide">Slide 02</li>
			<li className="splide__slide">Slide 03</li>
      <li className="splide__slide">
        <div className="splide__slide__container">
          <img src="/metaballs/1.png" alt="Metaball Sample #1"/>
        </div>
        Lorem Ipsum Dolor Sit Amet
      </li>
		</ul>
  </div>
</div> */}
</div>

{/* START of XONE CARDS 3x1 */}
<section id="features">
<div className="container">
  <div className="row align-items-center">
    <div className="feat-1 col-4 col-md-12 order-last">
     <p className="">First in DOM, ordered last</p>
    </div>
    <div className="feat-2 col-4 col-md-12">
    <p className="">Second in DOM, unordered</p>
    </div>
    <div className="feat-3 col-4 col-md-12 order-first">
    <p className="">Third in DOM, ordered first</p>
    </div>
  </div>
</div>
</section>
{/* End of Hero Features */}

{/* End of Content Wrapper # 1 */}
{/* ************************** */}

{/* SCROLLING IMAGE REELS */}
<div className="nft-hero">
<div className="nft-reel-1"></div>
<div className="nft-reel-2"></div>
<div className="nft-reel-3"></div>
{/* <div className="nft-reel-4"></div> */}
{/* <div className="nft-reel-7"></div> */}
<div className="nft-reel-5"></div>
<div className="nft-reel-6"></div>
  <div className="nft-hero-text">
  <h1 className="gradient-txt-green" style={{ fontSize: "2.8rem", letterSpacing: "0.1em" }}>19,326,120</h1>
    <h3>Tokenized DNA Compositions</h3>
    <a href="https://explorer.solana.com/address/E359HKTV192s4kpg4QXTmj7eQ6fzvsL2KbU9QJGDrM3e" target="_blank" rel="noreferrer">
      <button className="btn btn-lg btn-dark pd-3" type="button">
        <span style={{ letterSpacing: "0.05em", fontWeight: 500 }}>$MBALL ON </span>
        <img alt="Solana Explorer" src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/solana-explorer-logo-dark.svg?v=1646454031603" style={{ height:"1rem", marginTop: "-6px", paddingLeft: "5px" }} />
      </button></a>
  </div>
</div>
<div className="nft-hero-base">
<h1 className="pb-3 gradient-txt-green" style={{ fontSize: "3.8rem", letterSpacing: "0.1em" }}>19,326,120</h1>
    <h2 style={{ letterSpacing: "0.1em" }}>Tokenized DNA Compositions</h2>
    <button className="btn btn-lg btn-outline-info" type="button">MINT 1 of 11,111 METABALL NFTs!</button>
</div>
{/* End of img reels */}

{/* 
<HowItWorksCustom2 />
<Features4 content={null} /> 
*/}

{/* Start of Bootstrap Features grid 1 */}
<div className="section section-demo">
  <div className="container">
      <div className="row">
          <div className="col-md-6" style={{ textAlign: "right" }}>
          <h4 className="header-text">Easy to integrate</h4>
              <p>
                  With all the apps that users love! Make it easy for users to share, like, post and tweet their favourite things from the app. Be sure to let users know they continue to remain connected while using your app!
              </p>
              <a href="/#link1" id="Demo3" className="btn btn-fill btn-info" data-button="info">Get Free Demo</a>
          </div>
          <div className="col-md-6">
              <h4 className="header-text">Easy to integrate</h4>
              <p>
                  With all the apps that users love! Make it easy for users to share, like, post and tweet their favourite things from the app. Be sure to let users know they continue to remain connected while using your app!
              </p>
              <a href="/#link1" id="Demo3-2" className="btn btn-fill btn-info" data-button="info">Get Free Demo</a>
          </div>
      </div>
  </div>
</div>

<div className="section section-demo-2">
  <div className="container">
      <div className="row">
          <div className="col-md-4">
          <h4 className="header-text">Easy to integrate</h4>
              <p>
                  With all the apps that users love! Make it easy for users to share, like, post and tweet their favourite things from the app. Let users know to remain connected while using your app!
              </p>
              <a href="/#link1" className="btn btn-fill btn-info" data-button="info">Mint Now</a>
          </div>
          <div className="col-md-4">
              <h4 className="header-text">Easy to integrate</h4>
              <p>
                  With all the apps that users love! Make it easy for users to share, like, post and tweet their favourite things from the app. Let users know to remain connected while using your app!
              </p>
              <a href="/#link1" className="btn btn-fill btn-info" data-button="info">Learn More</a>
          </div>
          <div className="col-md-4">
              <h4 className="header-text">Easy to integrate</h4>
              <p>
                  With all the apps that users love! Make it easy for users to share, like, post and tweet their favourite things from the app. Let users know to remain connected while using your app!
              </p>
              <a href="/#link1" className="btn btn-fill btn-info" data-button="info">View Demo</a>
          </div>
      </div>
  </div>
</div>
{/* End of Bootstrap Features Grid */}


{/* Start of Second Content Wrapper */}
<div className="content-wrapper">

{/* Bootstrap MIX n MATCH containers */}
<div className="container">
  <div className="row">
    <div className="col-md-8" style={{ verticalAlign: "middle", margin: "auto" }}>.col-md-8</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <div className="row">
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <div className="row">
    <div className="col-6" style={{ verticalAlign: "middle", margin: "auto" }}>
    <img className="illustration metaball-slide" alt="metaball avatars slideshow" style={{ width: "100%" }} 
    src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/metaball-showcase-1.gif?v=1643398889757" />
    </div>
    <div className="col-6" style={{ verticalAlign: "middle", margin: "auto" }}>

{/* START OF Bootstrap List Groups */}

{/* END OF Bootstrap List Groups */}
    </div>
  </div>
</div>
{/* End of bootstrap containers */}

<figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

{/* 
<Header1 content={null} /> 
<Features6 content={null} /> 
*/}

{/* Scrolling Frames - stackoverflow.com/questions/43744887/fullscreen-infinite-scrolling-background*/}
<div className="nft-hero-2">
<div className="nft-img-container" id="nft-ctn1">
    <div className="nft-img-inner">
        <img className="nft-img" alt="metaball nft variations" src="https://i.stack.imgur.com/FlK9o.jpg" />
    </div>
</div>
<div className="nft-img-container" id="nft-ctn2">
    <div className="nft-img-inner">
        <img className="nft-img" alt="metaball nft variations" src="https://i.stack.imgur.com/FlK9o.jpg" />
    </div>
</div>
</div>
{/* End of Scrolling Frames */}


{/* START OF XONE SECTION */}
<div className="mask2">
<div className="mask1">
<div id="link3" className="container card contentcard xonecard">
<h1 className="pb-3 gradient-txt" style={{ fontSize: "3.8rem" }}>Xone Microverses</h1>
  <div className="row align-items-center w-100">
    <div className="col">
      <p>Build and share fully functional, interactive and immersive web-based extended reality landing pages, or XONES.</p>
    </div>
    <div className="col">
      <p>Build and share fully functional, interactive and immersive web-based extended reality landing pages, or XONES.</p>
    </div>
  </div>
  <div className="row align-items-center w-100">
    <div className="col">
    <p>1 of 3</p>
    </div>
    <div className="col-6">
    <p>-- 2 of 3 --</p>
    </div>
    <div className="col">
    <p>3 of 3</p>
    </div>
  </div>
</div>
<div className="row align-items-center">
<div className="col">
  <div className="container card contentcard xonecard">
  <p>1 of 5</p>
  </div>
</div>
<div className="col">
  <div className="container card contentcard xonecard">
  <p>2 of 5</p>
  </div>
</div>
<div className="col">
  <div className="container card contentcard xonecard">
  <p>3 of 5</p>
  </div>
</div>
<div className="col">
  <div className="container card contentcard xonecard">
  <p>4 of 5</p>
  </div>
</div>
</div>
</div>
</div>
{/* End of XONE SECTION */}


{/* Start of Bootstrap Timeline */}
<div className="container tl-roadmap">
  <hr style={{ margin: "60px 0 45px 0" }} />
  <h1 className="pb-3 gradient-txt-green text-center" style={{ fontSize: "3.8rem", letterSpacing: "0.07em" }}>ROADMAP</h1>
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline2">
                <div className="timeline2 tl-phase1">
                    <a id="tl2-1" href="/#tl2-1" className="timeline2-content">
                        <div className="timeline2-year">Phase 1</div>
                        <h3 className="title">Web Designing</h3>
                        <p className="description">
                            Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
{/* Start of List Group : PHASE 1 */}
<div className="list-group">
  <a href="/#tl2-1" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">List group item heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">now</small>
    </div>
  </a>
  <a href="/#tl2-1" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Another title here</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
      </div>
      <small className="opacity-50 text-nowrap">3d</small>
    </div>
  </a>
  <a href="/#tl2-1" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Third heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">1w</small>
    </div>
  </a>
</div>
{/* End of PHASE 1 */}
                    </a>
                </div>
                <div className="timeline2 tl-phase2">
                    <a id="tl2-2" href="/#tl2-2" className="timeline2-content">
                        <div className="timeline2-year">Phase 2</div>
                        <h3 className="title">Web Development</h3>
                        <p className="description">
                            Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
{/* Start of List Group : PHASE 2 */}
<div className="list-group">
  <a href="/#tl2-2" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">List group item heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">now</small>
    </div>
  </a>
  <a href="/#tl2-2" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Another title here</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
      </div>
      <small className="opacity-50 text-nowrap">3d</small>
    </div>
  </a>
  <a href="/#tl2-2" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Third heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">1w</small>
    </div>
  </a>
</div>
{/* End of PHASE 2 */}
                    </a>
                </div>
                <div className="timeline2 tl-phase3">
                    <a id="tl2-3" href="/#tl2-3" className="timeline2-content">
                        <div className="timeline2-year">Phase 3</div>
                        <h3 className="title">Web Development</h3>
                        <p className="description">
                            Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
{/* Start of List Group : PHASE 3 */}
<div className="list-group">
  <a href="/#tl2-3" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">List group item heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">now</small>
    </div>
  </a>
  <a href="/#tl2-2" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Another title here</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
      </div>
      <small className="opacity-50 text-nowrap">3d</small>
    </div>
  </a>
  <a href="/#tl2-2" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Third heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">1w</small>
    </div>
  </a>
</div>
{/* End of PHASE 3 */}
                    </a>
                </div>
                <div className="timeline2 tl-phase4">
                    <a id="tl2-4" href="/#tl2-4" className="timeline2-content">
                        <div className="timeline2-year">Phase 4</div>
                        <h3 className="title">Web Development</h3>
                        <p className="description">
                            Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
{/* Start of List Group : PHASE 4 */}
<div className="list-group">
  <a href="/#tl2-4" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">List group item heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">now</small>
    </div>
  </a>
  <a href="/#tl2-4" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Another title here</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
      </div>
      <small className="opacity-50 text-nowrap">3d</small>
    </div>
  </a>
  <a href="/#tl2-4" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Third heading</h6>
        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">1w</small>
    </div>
  </a>
</div>
{/* End of PHASE 4 */}
                    </a>
                </div>
                <div className="timeline2 tl-phase5">
                    <a id="tl2-5" href="/#tl2-5" className="timeline2-content">
                        <div className="timeline2-year">Phase 5</div>
                        <h3 className="title">Web Development</h3>
                        <p className="description">
                            Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
{/* Start of List Group : PHASE 5 */}
<div className="list-group">
  <a href="/#tl2-5" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">List group item heading</h6>
        <p className="mb-0 opacity-75 text-left">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">now</small>
    </div>
  </a>
  <a href="/#tl2-5" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Another title here</h6>
        <p className="mb-0 opacity-75 text-left">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
      </div>
      <small className="opacity-50 text-nowrap">3d</small>
    </div>
  </a>
  <a href="/#tl2-5" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">Third heading</h6>
        <p className="mb-0 opacity-75 text-left">Some placeholder content in a paragraph.</p>
      </div>
      <small className="opacity-50 text-nowrap">1w</small>
    </div>
  </a>
</div>
{/* End of PHASE 5 */}

                    </a>
                </div>
            </div>
        </div>
    </div>
  <hr style={{ margin: "60px 0 45px 0" }} />
</div>
{/* End of Bootstrap Timeline */}

{/* Start of FAQ Section */}

<div id="faqsection" className="faqsection container card contentcard">
<h1 className="pb-3 gradient-txt-green text-center" style={{ fontSize: "3.8rem", letterSpacing: "0.07em" }}>FAQs</h1>
<div className="accordion" id="faq">
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading-faq-nfts">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-nfts" aria-controls="faq-nfts" aria-expanded="true">
        NFTs &amp; Metaballs
      </button>
    </h2>
    <div id="faq-nfts" className="accordion-collapse collapse show" aria-labelledby="heading-faq-nfts" data-bs-parent="#faq">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading-faq-tokens">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-tokens" aria-controls="faq-tokens" aria-expanded="false">
        Ecosystem Tokens
      </button>
    </h2>
    <div id="faq-tokens" className="accordion-collapse collapse" aria-labelledby="heading-faq-tokens" data-bs-parent="#faq">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading-faq-tech">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-tech" aria-controls="faq-tech" aria-expanded="false">
        Platform Technologies
      </button>
    </h2>
    <div id="faq-tech" className="accordion-collapse collapse" aria-labelledby="heading-faq-tech" data-bs-parent="#faq">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>

{/* Original FAQs Section */}
        <div id="link4" className="container faq2">
          <h1 style={{ padding: "0 0 24px 0" }}>Our Team</h1>
          <div>
            <h4>Lorem ipsum?</h4>
            <p>
              Suspendisse id metus id mauris tincidunt posuere. Vivamus neque
              odio, imperdiet vitae.
            </p>

            <hr />
          </div>

          <div>
            <h4>Lorem ipsum?</h4>
            <p>
              Suspendisse id metus id mauris tincidunt posuere. Vivamus neque
              odio, imperdiet vitae.
            </p>

            <hr />
          </div>
        </div>

{/* End of FAQs */}

{/* 
<Testimonials1 content={null} /> 
<Testimonials2 content={null} /> 
*/}

{/* 
<CallToAction2 content={null} /> 
<Footer3 content={null} /> 
 */}

</div>
{/* End of Content Wrapper # 2 */}


{/* Start of Feature Squares Grid 4x2 */}
<div className="py-5 service-24">
    <div className="container">

        <div className="row wrap-service-24">

            <div className="col-lg-3 col-md-6">
                <div className="card rounded card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">R</span>
                        <h6 className="ser-title">Retargeting Market</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">D</span>
                        <h6 className="ser-title">Digital Marketing</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">S</span>
                        <h6 className="ser-title">SEO Techniques</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">C</span>
                        <h6 className="ser-title">Client Management</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">E</span>
                        <h6 className="ser-title">Email Campaign</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">W</span>
                        <h6 className="ser-title">Website Strategy</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">E</span>
                        <h6 className="ser-title">eCommerce Shop</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">C</span>
                        <h6 className="ser-title">Cloud Hosting</h6>
                    </div>
                </div>
            </div>
						<div className="col-md-12 mt-3 text-center">
              <div className="btn btn-outline-success btn-md"><span>View Details</span></div>
            </div>
        </div>
    </div>
</div>
{/* End of 4x2 Features Grid */}

<div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">Build Immersive Spaces</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
    <div className="overflow-hidden" style={{ maxHeight: "47vh" }}>
      <div className="container px-5">
        <img src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/xone-builder-aframe-inspector-registry.gif?v=1647314963979" className="img-fluid border rounded-3 shadow-lg mb-4 p-1" alt="xtrood xone builder aframe" width="800" height="650" loading="lazy" />
      </div>
    </div>
  </div>

  <div className="b-divider"></div>

{/* START OF Argon sections */}
{/* argsec: plasma */}
<section id="plasma" className="argsec section-basic-components">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 mb-md-5 pr-5">
            <div className="icon icon-shape icon-shape-primary shadow rounded-circle mb-4 mt--3">
              <i className="ni ni-app"></i>
            </div>
            <h2 className="display-3 font-weight-bolder">Choose from 100+ blocks<span className="text-primary"> Using Drag & Drop</span></h2>
            <p className="lead">We re-styled every Bootstrap element to match the Argon Design System style.
              All the Bootstrap components that you need in a development have been re-design with the new look.</p>
            <span className="badge badge-pill badge-default">Headers</span>
            <span className="badge badge-pill badge-default">Features</span>
            <span className="badge badge-pill badge-default">Blogs</span>
            <span className="badge badge-pill badge-default">Teams</span>
            <span className="badge badge-pill badge-default">Projects</span>
            <span className="badge badge-pill badge-default">Pricing</span>
            <span className="badge badge-pill badge-default">Testimonials</span>
            <span className="badge badge-pill badge-default">Contact Us</span>
            <span className="badge badge-pill badge-default">Tables</span>
          </div>
          <div className="col-lg-5 col-md-12 d-none d-lg-block">
            <div className="image-container">
              <img className="table-img shaddow" src="https://www.creative-tim.com/builder/assets/img/presentation-page/sections/feature-3.jpg" alt="" />
              <img className="coloured-card-btn-img shadow" src="https://www.creative-tim.com/builder/assets/img/presentation-page/sections/contact-1.jpg" alt="" />
              <img className="linkedin-btn-img shadow-lg" src="https://www.creative-tim.com/builder/assets/img/presentation-page/sections/header-2.jpg" alt="" />
              <img className="coloured-card-img shadow" src="https://www.creative-tim.com/builder/assets/img/presentation-page/sections/feature-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-dark" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>

{/* argsec: xr */}
<section id="xr" className="argsec section-content section-brand bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-md-5 order-md-2 order-lg-1 d-none d-lg-block">
            <div className="image-container">
              <img alt="" className="img shadow rounded img-theme-colors w-100" src="https://www.creative-tim.com/builder/assets/img/presentation-page/theme-colors.png" />
              <img alt="" className="img shadow rounded img-theme-fonts mt-5 w-100" src="https://www.creative-tim.com/builder/assets/img/presentation-page/theme-fonts.png" />
              <img alt="" className="img shadow rounded img-theme-css mt-5 w-100" src="https://www.creative-tim.com/builder/assets/img/presentation-page/theme-custom-css.png" />
            </div>
          </div>
          <div className="col-lg-6 mx-auto order-md-1">
            <div className="section-description">
              <div className="icon icon-shape icon-shape-white shadow rounded-circle mb-4 mt--3">
                <i className="ni ni-atom text-white"></i>
              </div>
              <h3 className="display-3 text-white">Customize the brand<span className="text-danger"> Choosing colors and fonts</span></h3>
              <p className="lead text-gray">We know how valuable your time is. That is why we worked hard on the development of a tool that would be easy to use and which you could make use of without the need for any training. Customize anything without
                touching the codebase.</p>
              <a href="/#" className="text-danger">Try for Free! <i className="fas fa-arrow-alt-circle-right"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="separator separator-bottom separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>

{/* argsec: gamefi 2x2 overlapping grid */}
    <section id="gamefi" className="argsec section features-2 section-content section-download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-left">
            <div className="icon icon-shape icon-shape-primary shadow rounded-circle mb-4 mt-4">
              <i className="ni ni-cloud-download-95"></i>
            </div>
            <h2 className="display-3 font-weight-bolder">Download<span className="text-primary"> The Source Code</span></h2>
            <p className="lead">When you select the appropriate components and Bootstrap settings,
              you can download source files in order to start combining front-end with back‑end.
            </p>

            <ul className="list-unstyled mt-5">
              <li className="py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="badge badge-circle badge-primary mr-3">
                      <i className="ni ni-check-bold"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0">Bootstrap 4.x.x</h6>
                  </div>
                </div>
              </li>

              <li className="py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="badge badge-circle badge-primary mr-3">
                      <i className="ni ni-check-bold"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0">SASS Variables</h6>
                  </div>
                </div>
              </li>

              <li className="py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="badge badge-circle badge-primary mr-3">
                      <i className="ni ni-check-bold"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0">Access to HTML, JS and SCSS Files</h6>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div className="col-lg-6 col-md-12 ml-auto">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="info text-left bg-info shadow">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-mobile-button text-info"></i>
                  </div>
                  <h5 className="info-title text-white">Optimized for Mobile</h5>
                  <p className="description">All the pages and sections work perfectly on mobile, tablets and desktops.</p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="info text-left bg-danger info-raised shadow">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-laptop text-danger"></i>
                  </div>
                  <h5 className="info-title text-white">Retina Ready</h5>
                  <p className="description">All the elements and icons that we used in the production look gorgeous on any type of screen.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="info text-left bg-primary shadow">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-books text-primary"></i>
                  </div>
                  <h5 className="info-title text-white">Complex Documentation</h5>
                  <p className="description">For those who want to digg deeper, we offer a full elements' documentation. </p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="info text-left bg-warning info-raised shadow">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-single-copy-04 text-warning"></i>
                  </div>
                  <h5 className="info-title text-white">Optimized Code</h5>
                  <p className="description">This product was built by developers for developers. All the classes and HTML elements are easy to be used.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* End of Argon */}


{/* Figma Slider */}
<div aria-hidden="true" className="figslide-1">
  <div className="figma-1n7ea00">
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>  
  </div>
  <div className="figma-1n7ea00">
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" stroke-width="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
  </div>
</div>
{/* End of Figma Slider */}

<Particles id="tsparticles" options={{
        background: { color: "none", },
        fullScreen: { enable: true, zIndex: -1, },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
            onClick: { enable: true, mode: "push", },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10, },
            },
          },
          modes: {
            push: { quantity: 4, },
            repulse: { distance: 50, duration: 0.7, },
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          },
        },
        particles: {
          color: { value: "#ffffff", },
          collisions: { enable: true, },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 1,
            straight: false,
            path: {},
            spin: {},
          },
          number: {
            density: { enable: true, area: 1100, },
            value: 100,
          },
          opacity: {
            random: true,
            value: { min: 0.25, max: 0.55, },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              startValue: "random",
              count: 1,
              destroy: "none",
            },
          },
          shape: { type: "circle", },
          size: { 
            random: true,
            value: { min: 1, max: 7, },
            animation: { enable: true, speed: 10, minimumValue: 2, },
          },
        },
        detectRetina: true,
      }}
    />
<div className="bg-overlay"> </div>

    </div>
  );
};

export default App;
