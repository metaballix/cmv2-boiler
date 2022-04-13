import "./styles/App.css";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/swiper.min.css";
import "./assets/css/color5.css";
import "./styles/Custom.css";
import "./styles/Timeline.css";
import "./styles/Animation.css";
import "./styles/devices.min.css";
import Particles from 'react-tsparticles';
import 'bootstrap';

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

/* 
  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }
*/

  return (
    <div id="app-main">

{/* CL Loader ::  
<div className="loader-wrapper">
      <div id="loader">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
    </div>
*/}

<header className="card text-center align-items-center" id="hero-minter">

{/* ORIGINAL NAV */}
{/* 
<div id="mobileNavContainer" className="mobile-nav noselect">
        <div className="mobile-nav-close-button">
          <img src="/icons/close.svg" alt="" onClick={toggleMenu} />
        </div>
        <ul>
          <li>
          <div className="stage" style={{ marginLeft: 0 }}><figure className="4x1 ball bubble"></figure></div>
          </li>
          <li>
          <span className="logo-3d-text">
            <a href="https://metaballix.com/" target="_blank" rel="noreferrer" className="effect-shine">
              <b>METABALLIX</b>
            </a></span>
          </li>
          <li>
            <a href="/#nft" onClick={toggleMenu}>
              Metaballs
            </a>
          </li>
          <li>
            <a href="/#xones" onClick={toggleMenu}>
              Xones
            </a>
          </li>
          <li>
            <a href="/#plasmaverse" onClick={toggleMenu}>
              PlasmaVerse
            </a>
          </li>
          <li>
            <a href="/#tokens" onClick={toggleMenu}>
              Tokenomics
            </a>
          </li>
          <li>
            <a href="/#roadmap" onClick={toggleMenu}>
              Roadmap
            </a>
          </li>
          <li>
            <a href="/#team" onClick={toggleMenu}>
              Team
            </a>
          </li>
          <li>
            <a href="/#faq" onClick={toggleMenu}>
              FAQs
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
        <div className="stage ball-topleft hide-800"><figure className="4x1 ball bubble"></figure></div>
        <a className="hide-800" href="/#nft">
            NFTs
          </a>
          <a className="hide-800" href="/#xones">
            Xones
          </a>
          <a className="hide-800" href="/#plasmaverse">
            PlasmaVerse
          </a>
          <a className="hide-800" href="/#tokens">
            Tokenomics
          </a>
          <a className="hide-800" href="/#roadmap">
            Roadmap
          </a>
          <a className="hide-800" href="/#team">
            Team
          </a>
          <a className="hide-800" href="/#faq">
            FAQs
          </a>
          <div className="social-icons hide-800">
            <a href="https://twitter.com/metaballix" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-twitter"> </i>
            </a>
            <a href="https://discord.gg/AG2Y93emkf" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-discord"> </i>
            </a>
          </div>
        </div>
      </nav> 
    */}
{/* End of ORIGINAL NAV */}

  <nav className="navbar navbar-expand-lg theme-nav fixed-top">
    <div className="container"><a className="navbar-brand" href="/"><img className="cl-nav-logo" src="images/logo.png" alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span></button>
      <div className="navbar-collapse collapse" id="mainmenu">
        <ul className="navbar-nav ms-auto" id="mymenu">
          <li className="nav-item"><a className="nav-link" href="/#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/#nft">NFT<span className="subtext">s</span></a></li>
          <li className="nav-item dropdown">
            <a id="xonemenuLink" className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Xones</a>
            <ul className="dropdown-menu shadow" aria-labelledby="xonemenuLink" style={{ fontSize: "0.8rem" }}>
              <li className="nav-item"><a className="nav-link" href="/#xone">Microverses</a></li>
              <li className="nav-item"><a className="nav-link" href="/#xonerator">Xonerator</a></li>
              <li className="nav-item"><a className="nav-link" href="/#xonefeats">Features</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="/#plasmaverse">PlasmaVerse</a></li>
          <li className="nav-item"><a className="nav-link" href="/#tokens">Tokenomics</a></li>
          <li className="nav-item"><a className="nav-link" href="/#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="/#faq">FAQ<span className="subtext">s</span></a></li>

        </ul>
      </div>
    </div>
  </nav>
  <div className="container text-center align-items-center p-1 my-auto pt-2">
  <div className="row align-items-center my-auto">
  <div className="col-md-6 col-12 px-1 mt-5 pb-1">
  <h3 className="hero-text text-secondary-color noselect">Welcome to the PlasmaVerse</h3>
    <h1 className="hero-title pb-3 noselect"><span className="h1-engage">ENGAGE. </span><span className="h1-expand">EXPAND. </span><span className="h1-earn">EARN. </span></h1>
  <p className="hero-desc pb-0 pl-1 px-2 noselect">
  Mint a <b style={{ animation: "animate-shadow 11s ease infinite" }}>Metaball NFT avatar</b> to unlock your own <b style={{ animation: "animate-shadow 11s ease infinite" }}>Hemispheric</b>, <b style={{ animation: "animate-shadow 11s ease infinite" }}>Extended Reality</b> microverses, or <b className="badge hero-xone-badge">XONES</b>
    </p>
  </div>

{/* METABALL MINTER v1.1 (cmv2) - Hero Dialog Box */}
  <div className="col-md-6 col-12 px-0 noselect">
  <div id="mint" className="mball-avatar"></div>
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
{/* End of METABALL MINTER Dialog Box */}

  </div>
  </div>
</header>

{/* START of SECTION :: FEATURES */}
<section id="features" className="theme-bg feature py-5 text-center overflow-visible">

{/* Feature Mob (ChatLoop) */}
  <div className="container my-5 overflow-visible">
    <div className="animation-circle-inverse py-3"><i></i><i></i><i></i></div>
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="section-title">
          <h1 className="pb-3 gradient-txt-purple section-h1">BUILD-TO-EARN</h1>
          <div className="line white"></div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mob-left">
        <div className="future-box">
          <div className="future-timeline">
            <ul>
              <li className="timeline">
                <h4 className="sub-title">Easy Installation</h4>
                <p>Lorem Ipsum has been the industry's</p>
              </li>
              <li className="timeline">
                <h4 className="sub-title">Multi Platform Chat App</h4>
                <p>Lorem Ipsum has been the industry's</p>
              </li>
              <li className="timeline">
                <h4 className="sub-title">Secure Backup &amp; Recovery</h4>
                <p>Many desktop publishing packages</p>
              </li>
              <li className="timeline">
                <h4 className="sub-title">Easy File Sharing</h4>
                <p>Lorem Ipsum has been the industry's</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 future-mobile">
      {/* <img className="img-fluid" src="images/color-5/feature-mob.png" alt="feature-mob" /> */}
      <div className="iphone iphone-pink">
        <div className="iphone-small-round-top"></div>
        <div className="iphone-round-top-left"></div>
        <div className="iphone-speaker"></div>
        <img className="iphone-screenshot" src="images/color-5/feature-mob-inset-800x1362.gif" alt="metaballs on mobile" />
        <div className="iphone-button"></div>
      </div>
      </div>
      <div className="col-lg-4 col-sm-6 mob-right">
        <div className="future-box">
          <div className="future-timeline-right">
            <ul className="text-start">
              <li className="timeline-right">
                <h4>Easy Installation</h4>
                <p>Lorem Ipsum has been the industry's</p>
              </li>
              <li className="timeline-right">
                <h4>Multi Platform Chat App</h4>
                <p>Lorem Ipsum has been the industry's</p>
              </li>
              <li className="timeline-right">
                <h4>Secure Backup &amp; Recovery</h4>
                <p>Many desktop publishing packages</p>
              </li>
              <li className="timeline-right">
                <h4>Easy File Sharing</h4>
                <p>Lorem Ipsum has been the industry's</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* End of Feature Mob CL */}
</section>
{/* End of FEATURES section */}

{/* Start of XONES Section */}
<section id="nft" className="container-fluid d-flex w-100 h-auto px-0 py-1 my-0 pb-5 mx-auto flex-column">
{/* <div className="b-divider mb-5"></div> */}

   {/* Video BG :: 
    <video autoPlay muted loop id="vid-xone">
    <source src="https://cdn.glitch.global/84180755-58e4-4c80-b543-77cacf869330/xone-bg-14s.mp4?v=1647881876712" type="video/mp4" />
    </video>*/}
<div className="container py-2 pb-4 my-0 mb-5 text-center mx-auto">

<div className="mbp-slider-card">

<div className="row px-2 mx-auto mb-3 p-0">
  <div className="mbp-photos custom-scrollbar-css" data-tilt="" data-tilt-perspective="100" data-tilt-speed="400" data-tilt-max="1.8">
    <a href="/#"><img className="img-box img3" src="images/nfts/9.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img4" src="images/nfts/13.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img5" src="images/nfts/15.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img2" src="images/nfts/8.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img6" src="images/nfts/19.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img7" src="images/nfts/20.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img8" src="images/nfts/25.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img9" src="images/nfts/110.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img10" src="images/nfts/35.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img26" src="images/nfts/148.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>   
    <a href="/#"><img className="img-box img11" src="images/nfts/39.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img12" src="images/nfts/40.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img13" src="images/nfts/43.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img14" src="images/nfts/47.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img15" src="images/nfts/75.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img16" src="images/nfts/96.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img17" src="images/nfts/108.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img18" src="images/nfts/114.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img19" src="images/nfts/130.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img20" src="images/nfts/132.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img21" src="images/nfts/134.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img22" src="images/nfts/147.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img23" src="images/nfts/145.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img24" src="images/nfts/155.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img25" src="images/nfts/146.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img27" src="images/nfts/162.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/163.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/35.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/52.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/57.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/60.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/68.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/70.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/89.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/99.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/100.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/102.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/103.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/104.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/105.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/106.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/107.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/109.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/111.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/112.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/113.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/115.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/116.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/117.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/118.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/119.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/120.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/121.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/122.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/124.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/125.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/126.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/127.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/128.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/129.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/131.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/133.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/135.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/136.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/137.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/138.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/139.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/140.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/141.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/142.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/143.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/144.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/146.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/148.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/149.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/150.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/151.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/152.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/153.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/154.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/155.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/156.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/157.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/158.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/159.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/160.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/161.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/162.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/166.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/167.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/168.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/169.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/170.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/171.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/172.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/173.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/174.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/175.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/176.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/177.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/178.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/179.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/180.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/181.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/182.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>
    <a href="/#"><img className="img-box img28" src="images/nfts/185.png" alt="Metaball NFT Variant (Sample)" data-tilt="" /></a>


  </div>
</div>

{/* <div className="mbp-logo"></div> */}
<div className="stage d-block mx-auto" style={{ marginLeft: 0, marginTop: "-65px" }}><figure className="4x1 ball bubble"></figure></div>

<div className="row justify-content-center mt-4 mx-2">
  <div className="col-10 content">
    <h1 className="display-5 fw-bold" style={{ letterSpacing: "0.15rem" }}>METABALLS</h1>
    <h3 className="sub-header fw-bold fs-2"><span style={{color: "rgb(182, 38, 182)"}}>UNLOCK. </span><span style={{color: "rgb(101, 38, 182)"}}>MINT. </span><span style={{color: "rgb(38, 137, 182)"}}>TRADE.</span></h3>
    <p className="py-3 description lead fs-3">Metaballs are dynamic asset-bearing avatars that reside in the Metaballix Plasmaverse. Each NFT is tied to $PLASMA holdings, activity records, and 'Xonership' metadata such as assets, configuration, and a spatial-social graph of monetizable Xone traffic.</p>
  </div>
</div>

<div className="row box mx-1">
    <div className="col-6 col-md-4 py-2">
    <div className="box media">
      <h2 className="gradient-txt-green fw-bold fs-2 pb-0">22,000</h2>
      <h4 className="text-white">NFTs, 11k per series</h4>
    </div>
    </div>
    <div className="col-6 col-md-4 py-2">
    <div className="box followers">
      <h2 className="gradient-txt-green fw-bold fs-2 pb-0">19,326,120</h2>
      <h4 className="text-white">Unlockable Variants</h4>
    </div>
    </div>
    <div className="col-6 col-md-4 py-2">
    <div className="box following">
      <h2 className="gradient-txt-green fw-bold fs-2 pb-0">38,652,240</h2>
      <h4 className="text-white">Monetizable Xones</h4>
    </div>
    </div>
</div>

<div className="row justify-content-center">
  <div className="col mb-3">
    <div className="profile-card-social">
    {/*         
            <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item facebook" target="_blank">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-facebook"></use></svg>
              </span>
            </a>

            <a href="https://www.instagram.com/iamuhammederdem" className="profile-card-social__item instagram" target="_blank" rel="noreferrer">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-instagram"></use></svg>
              </span>
            </a>

            <a href="https://www.behance.net/iaMuhammedErdem" className="profile-card-social__item behance" target="_blank" rel="noreferrer">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-behance"></use></svg>
              </span>
            </a>
    */}

            <a href="https://twitter.com/metaballix" className="profile-card-social__item twitter" target="_blank" rel="noreferrer">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-twitter"></use></svg>
              </span>
            </a>

            <a href="https://github.com/metaballix" className="profile-card-social__item github" target="_blank" rel="noreferrer">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-github"></use></svg>
              </span>
            </a>

            <a href="https://tg.me/metaballix" className="profile-card-social__item codepen" target="_blank" rel="noreferrer">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-codepen"></use></svg>
              </span>
            </a>

            <a href="https://t.co/bbFbL81076" className="profile-card-social__item link" target="_blank" rel="noreferrer">
              <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-link"></use></svg>
              </span>
            </a>
    </div>
  </div>
</div>

</div>

{/* ROW :: HONE YOUR XONE */}
<div id="xone" className="row">
    <div className="col col-lg-7 mb-5">
      <div className="mbp-wrapper-2">
        
        <div className="profile-card js-profile-card shadow">
          <div className="profile-card__img">
            <img src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/xone-body.gif?v=1649715485317" alt="xone body variants" />
            </div>

    <div className="profile-card__cnt js-profile-cnt">
    <h1 className="display-5 fw-bold gradient-txt-green">HONE YOUR XONE</h1>
      <div className="profile-card__txt fs-4 px-2">Xones are <strong>hemispheric digital estates</strong> within your Metaball sphere. Powered by $PLASMA, their outer cores mimic the fluid dynamics of simulated metaballs, allowing them to co-exist and interact with Plasmaverse entities in 3D space.</div>
      <div className="row">

      <div className="col-12">
          <h4 className="text-dark fw-bold">Every Metaball NFT holds</h4>
        </div>
        <div className="col-12">
          <h3 className="gradient-txt-green fw-bold fs-2">2 XONES + 1000 $PLASMA</h3>
        </div>
      </div>

{/* 
<div className="row">
  <div className="profile-card-loc">
        <span className="profile-card-loc__icon">
          <svg className="icon"><use xlinkHref="#icon-location"></use></svg>
        </span>
        <span className="profile-card-loc__txt">
          Istanbul, Turkey
        </span>
  </div>
</div>
*/}

<div className="profile-card-ctr">
    <button className="profile-card__button button--blue js-message-btn">Message</button>
    <button className="profile-card__button button--orange">Follow</button>
  </div>
</div>

<div className="profile-card-message js-message">
  <form className="profile-card-form">
    <div className="profile-card-form__container">
      <textarea placeholder="Say something..."></textarea>
    </div>

    <div className="profile-card-form__bottom">
      <button className="profile-card__button button--blue js-message-close">
        Send
      </button>

      <button className="profile-card__button button--gray js-message-close">
        Cancel
      </button>
    </div>
  </form>

  <div className="profile-card__overlay js-message-close"></div>
</div>

</div>

      </div>
    </div>

<div className="col col-lg-5 h-100">
{/* Start of Feature Squares Grid 4x2 */}
<div className="xone-feat">
    <div className="container">
        <div className="row h-100 xone-feat-wrapper">

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
                      <div className="xone-feat-icon" style={{ inset: "-30px auto auto -15px" }}>
                        <svg className="xone-feat-svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="155" width="155" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M17.363 11.045c1.404-1.393 3.68-1.393 5.084 0 1.404 1.394 1.404 3.654 0 5.047L17 21.5l-5.447-5.408c-1.404-1.393-1.404-3.653 0-5.047 1.404-1.393 3.68-1.393 5.084 0l.363.36.363-.36zm1.88-6.288c.94.943 1.503 2.118 1.689 3.338-1.333-.248-2.739-.01-3.932.713-2.15-1.303-4.994-1.03-6.856.818-2.131 2.115-2.19 5.515-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993C.417 10.637.496 7.019 2.757 4.757c2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"></path></g></svg>
                      </div>
											<span className="bg-success-grad fw-bold">3D</span>
                      <h6 className="ser-title">ENTITIES</h6>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded">
                      <div className="xone-feat-icon" style={{ inset: "-20px auto auto -30px", transform: "rotate(0deg)" }}>
                        <svg className="xone-feat-svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="150" width="160" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
                        <path d="M27,11c0-2-2.2-3.6-5.6-4.4C20.6,3.2,19,1,17,1s-3.6,2.2-4.4,5.6C9.2,7.4,7,9,7,11c0,2,2.2,3.6,5.6,4.4
                        c0.3,1.2,0.6,2.2,1.1,3.1c0.3,0.5,0.9,0.7,1.4,0.4c0.5-0.3,0.7-0.9,0.4-1.4c-0.3-0.5-0.5-1.1-0.7-1.8c0.7,0.1,1.5,0.1,2.2,0.1
                        c0.8,0,1.5,0,2.2-0.1c-0.3,1-0.7,1.9-1.1,2.5c-0.3,0.4-0.2,1.1,0.2,1.4c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4
                        c0.7-1,1.3-2.4,1.7-4C24.8,14.6,27,13,27,11z M17,3c0.7,0,1.6,1.2,2.2,3.3c-0.7-0.1-1.5-0.1-2.2-0.1s-1.5,0-2.2,0.1
                        C15.4,4.2,16.3,3,17,3z M9,11c0-0.7,1.2-1.6,3.3-2.2c-0.1,0.7-0.1,1.5-0.1,2.2c0,0.8,0,1.5,0.1,2.2C10.2,12.6,9,11.7,9,11z M17,13.9
                        c-1,0-1.9-0.1-2.7-0.2c-0.1-0.8-0.2-1.7-0.2-2.7c0-1,0.1-1.9,0.2-2.7C15.1,8.2,16,8.1,17,8.1s1.9,0.1,2.7,0.2
                        c0.1,0.8,0.2,1.7,0.2,2.7c0,0.9-0.1,1.8-0.2,2.7C18.9,13.8,18,13.9,17,13.9z M21.7,13.2c0.1-0.7,0.1-1.5,0.1-2.2
                        c0-0.8,0-1.5-0.1-2.2C23.8,9.4,25,10.3,25,11C25,11.7,23.8,12.6,21.7,13.2z"/>
                        <path d="M29.9,17.5C29.7,17.2,29.4,17,29,17c-2.2,0-4.3,1-5.6,2.8L22.5,21c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9
                        c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5
                        c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8
                        C30,18.2,30,17.8,29.9,17.5z"/>
                        </svg>
                      </div>
											<span className="bg-success-grad fw-bold">C</span>
                      <h6 className="ser-title">COMPONENTS</h6>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grad fw-bold">B</span>
                        <h6 className="ser-title">BOILERPLATES</h6>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded">
                      <div className="xone-feat-icon" style={{ inset: "-30px auto auto -15px" }}>
                        <svg className="xone-feat-svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="155" width="155" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M17.363 11.045c1.404-1.393 3.68-1.393 5.084 0 1.404 1.394 1.404 3.654 0 5.047L17 21.5l-5.447-5.408c-1.404-1.393-1.404-3.653 0-5.047 1.404-1.393 3.68-1.393 5.084 0l.363.36.363-.36zm1.88-6.288c.94.943 1.503 2.118 1.689 3.338-1.333-.248-2.739-.01-3.932.713-2.15-1.303-4.994-1.03-6.856.818-2.131 2.115-2.19 5.515-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993C.417 10.637.496 7.019 2.757 4.757c2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"></path></g></svg>
                      </div>
											<span className="bg-success-grad fw-bold">I</span>
                      <h6 className="ser-title">INTEGRATIONS</h6>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grad fw-bold">W</span>
                        <h6 className="ser-title">WEB3 ECONOMY</h6>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grad fw-bold">G</span>
                        <h6 className="ser-title">GAMIFICATION</h6>
                    </div>
                </div>
            </div>
            
            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grad fw-bold">D</span>
                        <h6 className="ser-title">DECENTRALIZED</h6>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card card-shadow border-0 mb-4">
                    <div className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grad fw-bold">S</span>
                        <h6 className="ser-title">SCALABLE</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* End of 4x2 Features Grid */}
</div>

{/* 2x1 cards with green-gradient :: 
<div className="row justify-content-center mt-3 mx-auto pb-0">
<div className="col-12 col-md-6 mb-3">
  <div className="mbp-wrapper-2">
    <div className="profile-card p-1">
      <div className="card bg-purp2 text-center shadow-md pb-1" style={{ borderRadius:"11px" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold">Cross-Browser Compatible</h5>
          <p className="card-text">Xones are built with A-Frame, a Three.js-based framework that leverages WebGL and WebXR to deliver web-based immersive experiences on computers, mobile devices, and AR/VR Headsets.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="https://xone.land/" target="_blank" rel="noreferrer">
            <button className="btn btn-lg btn-info" type="button">
            <h2 style={{ letterSpacing: "0.09em" }} className="text-light px-5"><em>TOUR THE DEMO</em></h2>
            <div className="badge bg-purp1 text-wrap" style={{ width: "95%" }}>Projected Launch : Phase 3</div>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-12 col-md-6 mb-3">
  <div className="mbp-wrapper-2">
    <div className="profile-card p-1">
      <div className="card bg-purp2 text-center shadow-md pb-1" style={{ borderRadius:"11px" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold">Cross-Browser Compatible</h5>
          <p className="card-text">Xones are built with A-Frame, a Three.js-based framework that leverages WebGL and WebXR to deliver web-based immersive experiences on computers, mobile devices, and AR/VR Headsets.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="https://xone.land/" target="_blank" rel="noreferrer">
            <button className="btn btn-lg btn-info" type="button">
            <h2 style={{ letterSpacing: "0.09em" }} className="text-light px-5"><em>TOUR THE DEMO</em></h2>
            <div className="badge bg-purp1 text-wrap" style={{ width: "95%" }}>Projected Launch : Phase 3</div>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
 */}

</div>

</div>

{/* XONE DISPLAY PANEL */}
{/* <div className="b-divider"></div> */}

<div className="container my-5 mx-auto">
  <div className="row px-0 px-md-2 px-lg-3 py-4 pt-lg-5 mx-2 align-items-center justify-content-center text-center">
  <div className="col col-md-3">
      1 of 3
    </div>
    <div className="col md-1">
    <i className="fa-solid fa-circle-right fs-3 fs-md-2 fs-lg-1"></i>
    </div>
    <div className="col col-md-3">
      2 of 3
    </div>
    <div className="col md-1">
    <i className="fa-solid fa-circle-right fs-3 fs-md-2 fs-lg-1"></i>
    </div>
    <div className="col col-md-3">
      3 of 3
    </div>
  </div>
 </div>

<div className="row justify-content-center my-5 mx-2 pb-0">
<div className="col-12 col-md-10 mb-1">
  <div className="mbp-wrapper shadow-lg">
    <div className="profile-card float-card-1 p-1">
      <div className="card bg-purp2 text-center shadow-md pb-5" style={{ borderRadius:"11px"}}>
        <div className="card-body">
          <h5 className="card-title fw-bold">Cross-Platform</h5>

          <div className="row g-2 mt-2">
          <div className="col-4">
          <div className="card tech-card text-center">
            <div className="card-body">
              <h5 className="card-title">A</h5>
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="card tech-card text-center">
            <div className="card-body">
              <h5 className="card-title">B</h5>
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="card tech-card text-center">
            <div className="card-body">
              <h5 className="card-title">C</h5>
            </div>
          </div>
          </div>
          </div>
          
          <h5 className="card-title fw-bold mt-2">Cross-Browser</h5>

          <div className="row g-2 mt-1">
          <div className="col-4">
          <div className="card tech-card text-center">
            <div className="card-body">
              <h5 className="card-title">A</h5>
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="card tech-card text-center">
            <div className="card-body">
              <h5 className="card-title">B</h5>
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="card tech-card text-center">
            <div className="card-body">
              <h5 className="card-title">C</h5>
            </div>
          </div>
          </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <a href="https://xone.land/" target="_blank" rel="noreferrer">
            <button className="btn btn-lg btn-hover bg-blue-gradient btn-block w-100" type="button">
            <h2 style={{ letterSpacing: "0.09em" }} className="text-light px-5 fw-bold">DEMO</h2>
            <div className="badge bg-purp2 text-wrap" style={{ width: "98%" }}>Phase 3 Launch</div>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>

{/* START OF PLASMAVERSE Section */}
<section id="plasmaverse" className="container-fluid pt-5 px-2 px-md-3 px-lg-4 text-center align-items-center" style={{overflow: "visible"}}>
<div id="link3" className="card contentcard xonecard mt-3 mx-auto shadow-lg border border-info" style={{ marginBottom: "-222px", position: "relative", zIndex: 999 }}>
<h1 className="display-5 fw-bold my-3">Interconnected Microverses</h1>

<div className="row mt-1 p-1 p-md-2 p-lg-3 align-items-center justify-content-center">
  <div className="col-12 mb-2">
    <div className="card p-2 p-md-5 bg-purp-transparent">
      <div className="card-body">
        <p className="card-text fs-3">Xone microverses are built with A-Frame, a Three.js-based framework that leverages WebGL and WebXR to deliver "fully immersive interactive VR experiences that go beyond basic 360° content, making full use of positional tracking and controllers."</p>
      </div>
    </div>
  </div>
</div>

<div className="row service-6 p-1 p-md-2 p-lg-3">
    <div className="col-12 col-md-3 col-sm-6 wrap-service6-box mb-2">
        <div className="card h-100 border-0 bg-green-gradient text-white mb-2 shadow">
        <div className="card-header">XONE MICROVERSES</div>
            <div className="card-body">
                <h6 className="font-weight-medium text-white">Powerful Techniques</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-3 col-sm-6 wrap-service6-box mb-2">
        <div className="card h-100 border-0 bg-blue-gradient text-white mb-2 shadow">
        <div className="card-header">PLASMAVERSE XR</div>
            <div className="card-body">
                <h6 className="font-weight-medium text-white">Retargeting Market</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-3 col-sm-6 wrap-service6-box mb-2">
        <div className="card h-100 border-0 bg-purple-gradient text-white mb-2 shadow">
        <div className="card-header">NFT ECOSYSTEM</div>
            <div className="card-body">
                <h6 className="font-weight-medium text-white">Instant Solutions</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-3 col-sm-6 wrap-service6-box mb-2">
        <div className="card h-100 border-0 bg-pink-gradient text-white mb-2 shadow">
        <div className="card-header">PASSIVE INCOME</div>
            <div className="card-body">
                <h6 className="font-weight-medium text-white">Powerful Techniques</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
            </div>
        </div>
    </div>

    <div className="col-md-12 mt-3 text-center">
        <button className="btn btn-dark btn-md service-btn rounded-circle shadow"><span>View Details</span></button>
    </div>
</div>

<div className="row align-items-center my-0 w-100">
{/*   
  <div className="col">
  <p>1 of 3</p>
  </div>
  <div className="col-6">
  <p>-- 2 of 3 --</p>
  </div>
  <div className="col">
  <p>3 of 3</p>
  </div> 
*/}
<div className="b-divider mt-5 rounded rounded-3"></div>
</div>

</div>
</section>
{/* End of XTROOD Section */}

{/* START OF XONERATOR Section */}
<section id="xonerator" className="my-0 py-5 p-0 p-md-3 p-lg-5">
<div className="container mx-auto p-5"><span> </span></div>
<div className="container mx-auto p-3"><span> </span></div>
  <div className="container w-99 mx-auto my-5 py-4 border-none rounded-0 rounded-md-3 shadow-lg" style={{ background: "linear-gradient(-11deg, rgba(0, 196, 204,0.33), rgba(3, 24, 88,0.55))" }} >
    <div className="row p-md-4 pt-lg-5 pe-lg-0 align-items-center text-center">
      <div className="col-lg-7 p-5 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-2">Build &amp; Share Functional Virtual Spaces</h1>
        <p className="lead">Quickly design and customize Xones in <b className="badge" style={{ background: "#662D91", letterSpacing: "0.02em" }}>XONERATOR</b>, an intuitive <b>A-Frame scene builder</b> with pre-built objects, customizable components, and other powerful features.</p>
      </div>

      <div className="xtrood-img-col col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="xtrood-img rounded-lg-3" src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/xtrood-mockup-1-nomargin-min.png?v=1647557553264" alt="" width="720" />
      </div>
    </div>

    <div className="container-fluid p-4 pb-0 my-5 text-center">
    <h1 className="display-4 fw-bold lh-2">Deliver Value, Earn From Your Traffic</h1>
    <div className="col-lg-7 mx-auto">
      <p className="lead mb-2">Add areas, artifacts and automatons to your Xone in <b className="badge" style={{ background: "#662D91", letterSpacing: "0.02em" }}>XONERATOR</b>. Engage with Xone visitors, gather information, and automate workflows. Earn $PLASMA through <b>monetized traffic</b> and <b>automaton transactions</b>.</p>
    </div>
    <div className="mt-5">
      <div className="container px-0 px-md-2 px-lg-5">
        <img src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/xtrood_logo_text.png?v=1647382314441" className="xtrood-logo img-fluid p-5 pb-0 mt-5" alt="xtrood xone builder logo" width="400" height="auto" loading="lazy" />
        <img src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/xone-builder-aframe-inspector-registry.gif?v=1647314963979" className="img-fluid border border-info rounded-3 shadow p-1 mt-5" style={{ background: "rgba(255,255,255,0.11)" }} alt="aframe inspector xtrood xone builder" width="800" height="650" loading="lazy" />
      </div>
    </div>
    </div>

    <div className="col-lg-7 mx-auto text-center">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center align-items-center mt-3 mb-5">
        <a href="https://xone.land/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-info btn-lg px-4 me-sm-3 w-100">XONE DEMO [ SOLOS ]</button></a>
        <a href="https://plasmaver.se/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-danger btn-lg px-4 w-100">PLASMAVERSE DEMO</button></a>
      </div>
    </div>
  </div>
</section>
{/* End of Xonerator */}

{/* Start of NFTs Section - ChatLoop */}
<section id="partners" className="slide-bg">
  
</section>
<div className="animation-circle" style={{ zIndex: 3, marginTop: "-38px" }}><i></i><i></i><i></i></div>
{/* End of NFTs section (ChatLoop) */}

{/* START OF Service1 3x1 GRID */}
<div id="xtrood" className="service-1 py-5">
    <div className="container">
    <div className="hero-header my-5">
      <h1 className="pb-3 gradient-txt-green section-h1">XTR<span className="xtrood-oo gradient-txt-green">OO</span>D MINTER</h1>
      <button className="btn btn-lg btn-outline-info px-5" type="button" disabled>
      <h2 style={{ letterSpacing: "0.1em" }} className="text-light"><em>Imagine. Realize.</em></h2>
      <div className="badge bg-info text-wrap" style={{ width: "95%" }}>Projected Launch : Phase 5</div>
      </button>
      </div>

      <div className="row">
        <div className="col-md-4 wrap-service1-box">
          <div className="card border-0 card-shadow mb-4">
            <div className="card-body text-center">
              <div className="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/market.png" alt="wrapkit" /></div>
              <h6 className="font-weight-medium">Compose NFTs</h6>
              <p className="mt-3">Compose one of the 19,304,120 remaining Metaballs using traits that you unlock in the PlasmaVerse.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 wrap-service1-box">
          <div className="card border-0 card-shadow mb-4">
            <div className="card-body text-center">
              <div className="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/fruit.png" alt="wrapkit" /></div>
              <h6 className="font-weight-medium">Mint Artifacts</h6>
              <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 wrap-service1-box">
          <div className="card border-0 card-shadow mb-4">
            <div className="card-body text-center">
              <div className="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/instant.png" alt="wrapkit" /></div>
              <h6 className="font-weight-medium">Manage Assets</h6>
              <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3 text-center">
          <a className="btn service-btn text-white btn-md border-0" href="#f1"><span>View Details</span></a>
        </div>
      </div>
    </div>
</div>
<div className="b-divider"></div>
{/* End of Service1 3x1 Grid (Snippet) */}

{/* Start of ROADMAP Section */}
<section id="roadmap" className="py-4 m-3 mb-0">
<div className="container tl-roadmap rounded-3 border border-info mb-0 p-3 shadow" style={{ background: "linear-gradient(11deg, rgba(202, 44, 182, 0.3), rgba(113, 17, 161, 0.3))" }}>
  <h1 className="my-3 gradient-txt-green text-center" style={{ fontSize: "3.5rem", letterSpacing: "0.07em" }}>ROADMAP</h1>
  <hr style={{ margin: "11px 0" }} />
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
</section>
{/* End of Roadmap Section */}

{/* START OF TEAMS SECTION */}
<section id="team" className="mx-3 mt-0">
<div className="container mb-5 pb-5">
<div className="row mb-5 pb-5">
  <div className="col-12 col-md-4 col-sm-6">
    <div className="card bg-transparent shadow border border-info text-center my-2">
    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div className="card-body">
        <h5 className="card-title">PRODUCTIVITY</h5>
        <h6 className="card-subtitle mb-3 fw-light fst-italic">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-footer">First Item</div>
      <div className="card-footer">Second Item</div>
      <div className="card-footer">Third Item</div>
    </div>
  </div>
  <div className="col-12 col-md-4 col-sm-6">
    <div className="card bg-transparent shadow border border-info text-center my-2">
    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div className="card-body">
        <h5 className="card-title">PRODUCTIVITY</h5>
        <h6 className="card-subtitle mb-3 fw-light fst-italic">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-footer">First Item</div>
      <div className="card-footer">Second Item</div>
      <div className="card-footer">Third Item</div>
    </div>
  </div>
  <div className="col-12 col-md-4 col-sm-6">
    <div className="card bg-transparent shadow border border-info text-center my-2">
    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div className="card-body">
        <h5 className="card-title">PRODUCTIVITY</h5>
        <h6 className="card-subtitle mb-3 fw-light fst-italic">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-footer">First Item</div>
      <div className="card-footer">Second Item</div>
      <div className="card-footer">Third Item</div>
    </div>
  </div>
</div>
</div>
</section>
{/* End of Teams */}

{/* START OF FAQs SECTION */}
<section id="faq" className="mx-3 mt-0">
<div className="container rounded-3 border border-info shadow p-2" style={{backgroundColor: "#1D002F"}}>
<div className="row h-100">
<div className="col-12 col-md-8 h-100">
<div className="faqcard container card h-100">
<h1 className="pb-3 gradient-txt-green text-center">FAQs</h1>
<div className="card-header w-100">
  <div className="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="faq-nfts-tab" data-bs-toggle="tab" data-bs-target="#faq-nfts" type="button" role="tab" aria-controls="faq-nfts" aria-selected="true">NFTs</button>
    <button className="nav-link" id="faq-xones-tab" data-bs-toggle="tab" data-bs-target="#faq-xones" type="button" role="tab" aria-controls="faq-xones" aria-selected="false">Xones</button>
    <button className="nav-link" id="faq-plasma-tab" data-bs-toggle="tab" data-bs-target="#faq-plasma" type="button" role="tab" aria-controls="faq-plasma" aria-selected="false">Plasma</button>
  </div>
</div>
<div className="tab-content p-2 bg-white" id="nav-tabContent">
{/* FAQ Accordion 1 : NFTs */}
<div className="tab-pane fade show active" id="faq-nfts" role="tabpanel" aria-labelledby="faq-nfts-tab">
<div id="faq-nfts-qna" className="accordion w-100">
  <div className="accordion-item">
    <h2 className="accordion-header" id="faq-nfts-q1-h">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-nfts-q1" aria-controls="faq-nfts-q1" aria-expanded="true">
        NFTs &amp; Metaballs
      </button>
    </h2>
    <div id="faq-nfts-q1" className="accordion-collapse collapse show" aria-labelledby="faq-nfts-q1-h" data-bs-parent="#faq-nfts-qna">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="faq-nfts-q2-h">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-nfts-q2" aria-controls="faq-nfts-q2" aria-expanded="false">
        Ecosystem Tokens
      </button>
    </h2>
    <div id="faq-nfts-q2" className="accordion-collapse collapse" aria-labelledby="faq-nfts-q2-h" data-bs-parent="#faq-nfts-qna">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="faq-nfts-q3-h">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-nfts-q3" aria-controls="faq-nfts-q3" aria-expanded="false">
        Platform Technologies
      </button>
    </h2>
    <div id="faq-nfts-q3" className="accordion-collapse collapse" aria-labelledby="faq-nfts-q3-h" data-bs-parent="#faq-nfts-qna">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
{/* FAQ Accordion 2 : Xones */}
<div className="tab-pane fade" id="faq-xones" role="tabpanel" aria-labelledby="faq-xones-tab">
<div id="faq-xones-qna" className="accordion w-100">
  <div className="accordion-item">
    <h2 className="accordion-header" id="faq-xones-q1-h">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-xones-q1" aria-controls="faq-xones-q1" aria-expanded="true">
        NFTs &amp; Metaballs
      </button>
    </h2>
    <div id="faq-xones-q1" className="accordion-collapse collapse show" aria-labelledby="faq-xones-q1-h" data-bs-parent="#faq-xones-qna">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="faq-xones-q2-h">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-xones-q2" aria-controls="faq-xones-q2" aria-expanded="false">
        Ecosystem Tokens
      </button>
    </h2>
    <div id="faq-xones-q2" className="accordion-collapse collapse" aria-labelledby="faq-xones-q2-h" data-bs-parent="#faq-xones-qna">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="faq-xones-q3-h">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-xones-q3" aria-controls="faq-xones-q3" aria-expanded="false">
        Platform Technologies
      </button>
    </h2>
    <div id="faq-xones-q3" className="accordion-collapse collapse" aria-labelledby="faq-xones-q3-h" data-bs-parent="#faq-xones-qna">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
{/* FAQ Accordion 3 : Xones */}
<div className="tab-pane fade" id="faq-plasma" role="tabpanel" aria-labelledby="faq-plasma-tab">
  <div className="card-body">
    <h5 className="card-title">Faq Tab 3</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
</div>

<div className="col-12 col-md-4 h-100">
<div className="card bg-purple-gradient mb-3" style={{maxWidth: "25rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card bg-purple-gradient mb-3" style={{maxWidth: "25rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card bg-purple-gradient mb-3" style={{maxWidth: "25rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title.</p>
  </div>
  <div className="card-footer">Third Item</div>
</div>

    </div>
</div>
<div className="row m-3">
  <div className="col">col</div>
  <div className="col">col</div>
  <div className="col">col</div>
  <div className="col">col</div>
  <div className="col">col</div>
  <div className="col">col</div>
</div>
</div>

</section>
{/* END of FAQs Section */}

<div className="b-divider"></div>

{/* START OF MBALL-MAIN GROUP (with animated gradient bg) */}
<div id="mball-main">

{/* START OF CONTENT WRAPPER # 3 */}
<div className="content-wrapper">

<figure className="text-center my-5">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

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

{/* 
<Testimonials1 content={null} /> 
<Testimonials2 content={null} /> 
*/}

{/* 
<CallToAction2 content={null} /> 
<Footer3 content={null} /> 
 */}
</div>
{/* End of Content Wrapper # 3 */}

</div>
{/* END OF GROUP MBALL-MAIN */}

{/* START of Features XONE CARDS 3x1 :: 
<section id="feature-cards">
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
*/}

{/* START of NFT GRID 8x2 - jsfiddle.net/webtiki/MpXYr/2/ */}
<section id="nft-display">
<div className="container-fluid shadow text-center mx-auto pb-2">
  {/* 1st row verticaly centered text in the square columns */}
  <div className="nft-square img_1-1">
    <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_1-2">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_1-3">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_1-4">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_1-5">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_1-6">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_blank">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_blank">
  <div className="mask nft-mask"></div>
  </div>
  {/* 2nd row verticaly centered images in square columns */}
  <div className="nft-square img_2-1">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_2-2">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_2-3">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_2-4">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_2-5">
  <div className="mask nft-mask"></div>
  </div>
  <div className="nft-square img_2-6">
  <div className="mask nft-mask"></div>
  </div>
</div>
</section>

{/* End of NFT Grid 8x2 */}

{/* mbp Profile Cards - Social SVGs */}
<svg visibility="hidden">
  <defs>
    <symbol id="icon-codepen" viewBox="0 0 32 32">
      <title>codepen</title>
      <path d="M31.872 10.912v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096l-0.192-0.192v-0.064l-0.064-0.064-14.592-9.696c-0.448-0.32-1.056-0.32-1.536 0l-14.528 9.696-0.32 0.32c0 0-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064 0 0.064-0.064 0.096v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.096 0 0.16v9.696c0 0.064 0 0.096 0 0.16v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096l0.256 0.256 0.064 0.032 14.528 9.728c0.224 0.16 0.48 0.224 0.768 0.224s0.544-0.064 0.768-0.224l14.528-9.728 0.32-0.32c0 0 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0-0.064 0.064-0.096v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.096 0-0.16v-9.664c0-0.064 0-0.096 0-0.224zM17.312 4l10.688 7.136-4.768 3.168-5.92-3.936v-6.368zM14.56 4v6.368l-5.92 3.968-4.768-3.168 10.688-7.168zM2.784 13.664l3.392 2.304-3.392 2.304c0 0 0-4.608 0-4.608zM14.56 28l-10.688-7.136 4.768-3.2 5.92 3.936v6.4zM15.936 19.2l-4.832-3.232 4.832-3.232 4.832 3.232-4.832 3.232zM17.312 28v-6.432l5.92-3.936 4.8 3.168-10.72 7.2zM29.12 18.272l-3.392-2.304 3.392-2.304v4.608z"></path>
    </symbol>

    <symbol id="icon-github" viewBox="0 0 32 32">
      <title>github</title>
      <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"></path>
      <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"></path>
      <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"></path>
      <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"></path>
      <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"></path>
      <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"></path>
      <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"></path>
      <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"></path>
    </symbol>

    <symbol id="icon-location" viewBox="0 0 32 32">
      <title>location</title>
      <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
      <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
    </symbol>

    <symbol id="icon-facebook" viewBox="0 0 32 32">
      <title>facebook</title>
      <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
    </symbol>

    <symbol id="icon-instagram" viewBox="0 0 32 32">
      <title>instagram</title>
      <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
      <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
      <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
    </symbol>

    <symbol id="icon-twitter" viewBox="0 0 32 32">
      <title>twitter</title>
      <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
    </symbol>

    <symbol id="icon-behance" viewBox="0 0 32 32">
      <title>behance</title>
      <path d="M9.281 6.412c0.944 0 1.794 0.081 2.569 0.25 0.775 0.162 1.431 0.438 1.988 0.813 0.55 0.375 0.975 0.875 1.287 1.5 0.3 0.619 0.45 1.394 0.45 2.313 0 0.994-0.225 1.819-0.675 2.481-0.456 0.662-1.119 1.2-2.006 1.625 1.213 0.35 2.106 0.962 2.706 1.831 0.6 0.875 0.887 1.925 0.887 3.163 0 1-0.194 1.856-0.575 2.581-0.387 0.731-0.912 1.325-1.556 1.781-0.65 0.462-1.4 0.8-2.237 1.019-0.831 0.219-1.688 0.331-2.575 0.331h-9.544v-19.688h9.281zM8.719 14.363c0.769 0 1.406-0.181 1.906-0.55 0.5-0.363 0.738-0.963 0.738-1.787 0-0.456-0.081-0.838-0.244-1.131-0.169-0.294-0.387-0.525-0.669-0.688-0.275-0.169-0.588-0.281-0.956-0.344-0.356-0.069-0.731-0.1-1.113-0.1h-4.050v4.6h4.388zM8.956 22.744c0.425 0 0.831-0.038 1.213-0.125 0.387-0.087 0.731-0.219 1.019-0.419 0.287-0.194 0.531-0.45 0.706-0.788 0.175-0.331 0.256-0.756 0.256-1.275 0-1.012-0.287-1.738-0.856-2.175-0.569-0.431-1.325-0.644-2.262-0.644h-4.7v5.419h4.625z"></path>
      <path d="M22.663 22.675c0.587 0.575 1.431 0.863 2.531 0.863 0.788 0 1.475-0.2 2.044-0.6s0.913-0.825 1.044-1.262h3.45c-0.556 1.719-1.394 2.938-2.544 3.675-1.131 0.738-2.519 1.113-4.125 1.113-1.125 0-2.131-0.181-3.038-0.538-0.906-0.363-1.663-0.869-2.3-1.531-0.619-0.663-1.106-1.45-1.45-2.375-0.337-0.919-0.512-1.938-0.512-3.038 0-1.069 0.175-2.063 0.525-2.981 0.356-0.925 0.844-1.719 1.494-2.387s1.413-1.2 2.313-1.588c0.894-0.387 1.881-0.581 2.975-0.581 1.206 0 2.262 0.231 3.169 0.706 0.9 0.469 1.644 1.1 2.225 1.887s0.994 1.694 1.25 2.706c0.256 1.012 0.344 2.069 0.275 3.175h-10.294c0 1.119 0.375 2.188 0.969 2.756zM27.156 15.188c-0.462-0.512-1.256-0.794-2.212-0.794-0.625 0-1.144 0.106-1.556 0.319-0.406 0.213-0.738 0.475-0.994 0.787-0.25 0.313-0.425 0.65-0.525 1.006-0.1 0.344-0.163 0.663-0.181 0.938h6.375c-0.094-1-0.438-1.738-0.906-2.256z"></path>
      <path d="M20.887 8h7.981v1.944h-7.981v-1.944z"></path>
    </symbol>

    <symbol id="icon-link" viewBox="0 0 32 32">
      <title>link</title>
      <path d="M17.984 11.456c-0.704 0.704-0.704 1.856 0 2.56 2.112 2.112 2.112 5.568 0 7.68l-5.12 5.12c-2.048 2.048-5.632 2.048-7.68 0-1.024-1.024-1.6-2.4-1.6-3.84s0.576-2.816 1.6-3.84c0.704-0.704 0.704-1.856 0-2.56s-1.856-0.704-2.56 0c-1.696 1.696-2.624 3.968-2.624 6.368 0 2.432 0.928 4.672 2.656 6.4 1.696 1.696 3.968 2.656 6.4 2.656s4.672-0.928 6.4-2.656l5.12-5.12c3.52-3.52 3.52-9.248 0-12.8-0.736-0.672-1.888-0.672-2.592 0.032z"></path>
      <path d="M29.344 2.656c-1.696-1.728-3.968-2.656-6.4-2.656s-4.672 0.928-6.4 2.656l-5.12 5.12c-3.52 3.52-3.52 9.248 0 12.8 0.352 0.352 0.8 0.544 1.28 0.544s0.928-0.192 1.28-0.544c0.704-0.704 0.704-1.856 0-2.56-2.112-2.112-2.112-5.568 0-7.68l5.12-5.12c2.048-2.048 5.632-2.048 7.68 0 1.024 1.024 1.6 2.4 1.6 3.84s-0.576 2.816-1.6 3.84c-0.704 0.704-0.704 1.856 0 2.56s1.856 0.704 2.56 0c1.696-1.696 2.656-3.968 2.656-6.4s-0.928-4.704-2.656-6.4z"></path>
    </symbol>
  </defs>
</svg>

{/* Scrolling img reels */}
<div className="nft-hero">
<div className="nft-reel-1"></div>
<div className="nft-reel-2"></div>
<div className="nft-reel-3"></div>
{/* <div className="nft-reel-4"></div> */}
{/* <div className="nft-reel-7"></div> */}
<div className="nft-reel-6"></div>
<div className="nft-reel-5"></div>
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
{/* End of img reels */}

{/* m-Slider */}
<div aria-hidden="true" className="mslide-1">
  <div className="metaballix-sl1d3r">
    Community
    <svg fill="none" viewBox="0 0 77 52" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="metaballix-sl1d3"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 77 52" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="metaballix-sl1d3"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>  
  </div>
  <div className="metaballix-sl1d3r">
    Community
    <svg fill="none" viewBox="0 0 77 52" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="metaballix-sl1d3"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 77 52" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="metaballix-sl1d3"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="metaballix-sl1d3"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
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
            value: { min: 0.2, max: 0.45, },
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

{/* <div className="bg-overlay"> </div> */}

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
    
  );
};

export default App;
