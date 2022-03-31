import "./styles/App.css";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/swiper.min.css";
import "./assets/css/color5.css";
import "./styles/Custom.css";
import "./styles/Timeline.css";
import "./styles/Animation.css";
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

{/* Video BG ::  
    <video autoPlay muted loop id="vid-xone">
    <source src="https://cdn.glitch.global/84180755-58e4-4c80-b543-77cacf869330/xone-bg-14s.mp4?v=1647881876712" type="video/mp4" />
    </video>
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
          <li className="nav-item dropdown">
            <a id="xonemenuLink" className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Xones</a>
            <ul className="dropdown-menu shadow" aria-labelledby="xonemenuLink" style={{ fontSize: "0.8rem" }}>
              <li className="nav-item"><a className="nav-link" href="/#xones">Microverses</a></li>
              <li className="nav-item"><a className="nav-link" href="/#xonerator">Xonerator</a></li>
              <li className="nav-item"><a className="nav-link" href="/#xonefeats">Features</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="/#plasmaverse">PlasmaVerse</a></li>
          <li className="nav-item"><a className="nav-link" href="/#nft">NFT<span className="suptext">s</span></a></li>
          <li className="nav-item"><a className="nav-link" href="/#tokens">Tokenomics</a></li>
          <li className="nav-item"><a className="nav-link" href="/#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="/#faq">FAQ<span className="suptext">s</span></a></li>

        </ul>
      </div>
    </div>
  </nav>
  <div className="container text-center align-items-center p-1 my-auto pt-2">
  <div className="row align-items-center my-auto">
  <div className="col-md-6 col-12 px-1 mt-5 pb-1">
  <h3 className="hero-text text-secondary-color noselect">Welcome to the PlasmaVerse</h3>
    <h1 className="hero-title pb-3 noselect" style={{ fontWeight: 600, fontSize: "calc(1.3rem + 1.5vw)" }}><span style={{ color: "rgb(25, 55, 130)" }}>ENGAGE. </span><span style={{ color: "rgb(77, 25, 130)" }}>EVOLVE. </span><span style={{ color: "rgb(121, 11, 121)" }}>EARN.</span></h1>
  <p className="hero-desc pb-0 pl-1 px-2 noselect">
  Mint a <b style={{ animation: "animate-shadow 11s ease infinite" }}>Metaball NFT avatar</b> to unlock your own <b style={{ animation: "animate-shadow 11s ease infinite" }}>Solana</b>-powered <b style={{ animation: "animate-shadow 11s ease infinite" }}>eXtended Reality </b>landing space, or <b className="badge hero-xone-badge" style={{ background: "linear-gradient(45deg, indigo 30%, purple 80%)", letterSpacing: "0.02em" }}>XONE</b>
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

{/* START of SECTION :: XONES */}
<section id="xones" className="py-5 text-center">
  <div className="container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="pb-3 gradient-txt-purple xtrood-h1">BUILD-TO-EARN MICROVERSES</h1>
        <h1 className="fw-light">Album example</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="/#" className="btn btn-info btn-lg m-1">BUILD IN XONERATOR</a>
          <a href="/#" className="btn btn-secondary btn-lg m-1">MINT IN XTROOD</a>
        </p>
      </div>
    </div>
  </div>
</section>
{/* End of XONES section */}

{/* START OF XTROOD Section */}
<section id="plasmaverse" className="p-3 py-1 mb-2">
<div className="container-fluid mask2">
<div className="mask1">
<div id="link3" className="container card contentcard xonecard">
<h1 className="pb-3 gradient-txt-green xtrood-h1">METAVERSE OF XONES</h1>
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
  <div className="row service-6 p-2">
            <div className="col-md-3 wrap-service6-box mb-2">
                <div className="card h-100 border-0 bg-green-gradient text-white mb-2 shadow">
                <div className="card-header">XONE MICROVERSES</div>
                    <div className="card-body">
                        <h6 className="font-weight-medium text-white">Powerful Techniques</h6>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
                        <a href="/#f4" className="linking">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 wrap-service6-box mb-2">
                <div className="card h-100 border-0 bg-blue-gradient text-white mb-2 shadow">
                <div className="card-header">PLASMAVERSE XR</div>
                    <div className="card-body">
                        <h6 className="font-weight-medium text-white">Retargeting Market</h6>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
                        <a href="/#f4" className="linking">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 wrap-service6-box mb-2">
                <div className="card h-100 border-0 bg-purple-gradient text-white mb-2 shadow">
                <div className="card-header">NFT ECOSYSTEM</div>
                    <div className="card-body">
                        <h6 className="font-weight-medium text-white">Instant Solutions</h6>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
                        <a href="/#f4" className="linking">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 wrap-service6-box mb-2">
                <div className="card h-100 border-0 bg-pink-gradient text-white mb-2 shadow">
                <div className="card-header">PASSIVE INCOME</div>
                    <div className="card-body">
                        <h6 className="font-weight-medium text-white">Powerful Techniques</h6>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consecte tuam porttitor, nunc et fringilla.</p>
                        <a href="/#f4" className="linking">Learn More</a>
                    </div>
                </div>
            </div>

						<div className="col-md-12 mt-3 text-center">
                <button className="btn btn-dark btn-md service-btn rounded-circle shadow"><span>View Details</span></button>
            </div>
        </div>
</div>

</div>
</div>

</section>
{/* End of XTROOD Section */}



<div className="b-divider"></div>

{/* START OF XONERATOR Section */}
<section id="xonerator" className="py-5" style={{ background: "rgba(11, 218, 227,0.11)" }} >
  <div className="container w-99 mx-auto my-5 py-4 border-none rounded-3 rounded-sm-0 shadow-lg" style={{ background: "linear-gradient(-11deg, rgba(0, 196, 204,0.33), rgba(3, 24, 88,0.55))" }} >
    <div className="row p-md-4 pt-lg-5 pe-lg-0 align-items-center text-center">
      <div className="col-lg-7 p-5 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-2">Build &amp; Share Functional Virtual Spaces</h1>
        <p className="lead">Quickly design and customize Web3-enabled A-Frame landing spaces in <b className="badge" style={{ background: "#662D91", letterSpacing: "0.02em" }}>XtrOOd</b> Xone Builder, an intuitive <b>open-source A-Frame WebXR scene designer</b> app with prebuilt objects and powerful JS components.</p>
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
<div className="b-divider"></div>
{/* End of Xonerator */}

{/* Start of NFTs Section - ChatLoop */}
<section id="nft" className="slide-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex-1">
              <div className="slide-text">
                <div className="px-sm-4">
                  <em>Solana-Powered NFT Ecosystem</em>
                  <h1>Collect, swap &amp; sell Metaball NFTs with your preferred 
                    <span className="main-title" style={{ color: "rgba(3, 24, 88, 0.88)", paddingLeft: "7px" }}> 
  <svg
    width="47"
    height="38"
    xmlns="http://www.w3.org/2000/svg"
    className="inline"
  >
    <defs>
      <linearGradient
        x1="90.737%"
        y1="34.776%"
        x2="35.509%"
        y2="55.415%"
        id="a"
      >
        <stop stopColor="#00FFA3" offset="0%" />
        <stop stopColor="#DC1FFF" offset="100%" />
      </linearGradient>
      <linearGradient x1="66.588%" y1="43.8%" x2="11.36%" y2="64.439%" id="b">
        <stop stopColor="#00FFA3" offset="0%" />
        <stop stopColor="#DC1FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="78.586%"
        y1="39.317%"
        x2="23.358%"
        y2="59.956%"
        id="c"
      >
        <stop stopColor="#00FFA3" offset="0%" />
        <stop stopColor="#DC1FFF" offset="100%" />
      </linearGradient>
    </defs>
    <g fillRule="nonzero" fill="none">
      <path
        d="M7.256 26.713c.27-.27.64-.427 1.033-.427h35.64a.73.73 0 0 1 .517 1.247l-7.04 7.04c-.27.27-.64.427-1.034.427H.732a.73.73 0 0 1-.516-1.246l7.04-7.04Z"
        fill="url(#a)"
        transform="translate(.98)"
      />
      <path
        d="M7.256.427C7.536.157 7.907 0 8.289 0h35.64a.73.73 0 0 1 .517 1.246l-7.04 7.04c-.27.27-.64.428-1.034.428H.732a.73.73 0 0 1-.516-1.247l7.04-7.04Z"
        fill="url(#b)"
        transform="translate(.98)"
      />
      <path
        d="M37.405 13.486c-.27-.27-.64-.427-1.033-.427H.732a.73.73 0 0 0-.516 1.246l7.04 7.04c.27.27.64.428 1.033.428h35.64a.73.73 0 0 0 .517-1.247l-7.04-7.04Z"
        fill="url(#c)"
        transform="translate(.98)"
      />
    </g>
  </svg>olana</span> wallet.</h1>
                  <h3 style={{ fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>Access your digital assets on the go: Try SolFlare on Android, or Phantom on iOS. Torus, Sollet, Slope, Solong and Ledger wallets are also supported.</h3>
                  <div className="slid-btn">
                    <a href="/#"><img className="img-fluid" src="images/app1.png" alt="app1" data-tilt="" data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8" /></a>
                      <a href="/#"><img className="img-fluid" src="images/app2.png" alt="app2" data-tilt="" data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8" /></a>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home-right">
              <div className="mobile-slid"><img className="img-fluid" src="images/top-mobile.png" alt="top1" /></div>
              <div className="profile-msg"><img className="img-fluid" src="images/top2.png" alt="top2" /></div>
              <div className="awesome"><img className="img-fluid" src="images/top3.png" alt="top3" /></div>
              <div className="profile-1"><img className="img-fluid" src="images/top4.png" alt="top4" /></div>
              <div className="emoji"><img className="img-fluid" src="images/top5.png" alt="top5" /></div>
              <div className="profile-2"><img className="img-fluid" src="images/top1.png" alt="top1" /></div>
            </div>
          </div>
        </div>
      </div>
</section>
<div className="animation-circle" style={{ zIndex: 3, marginTop: "-38px" }}><i></i><i></i><i></i></div>
{/* End of NFTs section (ChatLoop) */}

{/* START OF Service1 3x1 GRID */}
<div id="xtrood" className="service-1 py-5">
    <div className="container">
    <div className="hero-header my-5">
      <h1 className="pb-3 gradient-txt-green xtrood-h1">MINT IN XTR<span className="xtrood-h1-oo gradient-txt-green">OO</span>D</h1>
      <h2 style={{ letterSpacing: "0.1em" }} className="text-light">Imagine. Create. Expand.</h2>
      <button className="btn btn-lg btn-outline-info" type="button" disabled>UNDER DEVELOPMENT
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
        </div>
    </div>
</div>
{/* End of 4x2 Features Grid */}

{/* Scrolling img reels */}
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
<div className="b-divider"></div>
{/* End of img reels */}

{/* Start of ROADMAP Section */}
<section id="roadmap" className="py-4 m-3 mb-0">
<div className="container tl-roadmap rounded-3 border border-info mb-0 p-3 shadow" style={{ background: "linear-gradient(11deg, rgba(202, 44, 182, 0.3), rgba(113, 17, 161, 0.3))" }}>
  <h1 className="my-3 gradient-txt-green text-center" style={{ fontSize: "3.8rem", letterSpacing: "0.07em" }}>ROADMAP</h1>
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

{/* START OF FAQs ACCORDION SECTION */}
<section id="faq" className="m-3 mt-0">
<div id="faqsection" className="faqsection container card contentcard">
<h1 className="pb-3 gradient-txt-green text-center" style={{ fontSize: "3.8rem", letterSpacing: "0.07em" }}>FAQs</h1>
<div className="accordion w-100">
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

{/* START of Features XONE CARDS 3x1 */}
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
{/* End of Features XONE CARDS 3x1 */}

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

{/* Figma Slider */}
<div aria-hidden="true" className="figslide-1">
  <div className="figma-1n7ea00">
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>  
  </div>
  <div className="figma-1n7ea00">
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 77 52" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1 51V26C1 9 9 1 22 1c17 0 25 17 37 17 9 0 13-4 13-17h4v25c0 17-8 25-21 25-16 0-25-17-37-17-8 0-13 5-13 17H1z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 60 60" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M23.93 32.75h-7.05a15.88 15.88 0 1115.87-15.88v7.05a3.33 3.33 0 003.33 3.33h7.05a15.88 15.88 0 11-15.88 15.88v-7.05a3.33 3.33 0 00-3.32-3.33z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 67 50" className="figma-1vyk1t4"><mask id="a" fill="#fff"><path d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path></mask><path fill="#FF8577" d="M12.5 0H0v50h12.5c8.7 0 16.35-4.44 20.83-11.18A24.98 24.98 0 0054.17 50h12.5V0h-12.5c-8.7 0-16.36 4.44-20.84 11.18A24.98 24.98 0 0012.5 0z"></path><path fill="#000" d="M0 0v-2h-2v2h2zm0 50h-2v2h2v-2zm33.33-11.18l1.67-1.1-1.67-2.5-1.66 2.5 1.66 1.1zM66.67 50v2h2v-2h-2zm0-50h2v-2h-2v2zm-12.5 0v-2 2zM33.33 11.18l-1.66 1.1 1.66 2.5 1.67-2.5-1.67-1.1zM0 2h12.5v-4H0v4zm2 48V0h-4v50h4zm10.5-2H0v4h12.5v-4zm19.17-10.28A22.98 22.98 0 0112.5 48v4c9.4 0 17.66-4.8 22.5-12.07l-3.33-2.21zM54.17 48c-8 0-15.05-4.08-19.17-10.28l-3.33 2.21A26.98 26.98 0 0054.17 52v-4zm12.5 0h-12.5v4h12.5v-4zm-2-48v50h4V0h-4zm-10.5 2h12.5v-4h-12.5v4zM35 12.28A22.98 22.98 0 0154.17 2v-4c-9.4 0-17.67 4.8-22.5 12.07L35 12.28zM12.5 2c8 0 15.04 4.08 19.17 10.28L35 10.07A26.98 26.98 0 0012.5-2v4z" mask="url(#a)"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 62" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M49.87 2.4L8.32 32.13a15.92 15.92 0 1022.21 22.22L60.3 12.83A7.47 7.47 0 0049.87 2.4z"></path></svg>
    Community
    <svg fill="none" viewBox="0 0 63 56" className="figma-1vyk1t4"><path fill="#FF8577" stroke="#000" strokeWidth="2" d="M1.7 1.8v52.5l18.7-9.6 11.3 9.5 11.2-9.5 18.8 9.5V1.8l-18.8 10-11.2-10-11.3 10-18.7-10z"></path></svg>
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
