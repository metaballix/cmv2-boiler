import "./App.css";
import "./Custom.css";
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
import HowItWorksCustom2 from './components-custom/HowItWorksCustom2';
import Header1 from './components/headers/Header1';
import Features6 from './components/features/Features6';
import Features4 from './components/features/Features4';
import Testimonials1 from './components/testimonials/Testimonials1';
import Testimonials2 from './components/testimonials/Testimonials2';
import CallToAction2 from './components/call-to-action/CallToAction2';
import Footer3 from './components/footers/Footer3';

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
          <section className="stage"><figure className="4x1 ball bubble"></figure></section>
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
        <section className="stage"><figure className="4x1 ball bubble"></figure></section>
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
        <header className="card" id="link1">
          <div className="text-center" style={{ padding: "0 24px 0 24px 0" }}>
            <h3 className="text-secondary-color">Welcome to the PlasmaVerse</h3>
            <h1 className="pb-3"><span style={{ color: "#7111A1" }}>ENGAGE. </span>EVOLVE. EARN.</h1>
            <p className="text-secondary-color hero-text">
            Metaballs are generative NFT personas that reside &amp; evolve on the <b>Metaballix PlasmaVerse</b> <em>(under development)</em>, and immersive XR environment with unique gameplay physics. Build &amp; share income-generating Xone Microverses. Compete for $PLASMA density &amp; exclusive airdrops. Unlock traits &amp; mint new variations of metaball NFTs!
            </p>
          </div>
          <div>
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
{/* End of Content Wrapper # 1 */}


<div className="grid roadmap">
  <div>Auto-column</div>
  <div className="g-start-2" style={{ gridRow: "2" }}>Auto-column</div>
  <div className="g-start-3" style={{ gridRow: "3" }}>Auto-column</div>
  <div className="g-start-4" style={{ gridRow: "4" }}>Auto-column</div>
  <div className="g-start-5" style={{ gridRow: "5" }}>Auto-column</div>
</div>

{/* SCROLLING IMAGE REELS */}
<div className="nft-hero">
<div className="nft-reel-1"></div>
<div className="nft-reel-2"></div>
<div className="nft-reel-3"></div>
<div className="nft-reel-4"></div>
<div className="nft-reel-5"></div>
<div className="nft-reel-6"></div>
<div className="nft-reel-7"></div>
  <div className="nft-hero-text">
  <h1 className="pb-3 gradient-txt-green" style={{ fontSize: "3.2rem", letterSpacing: "0.1em" }}>19,326,120</h1>
    <h3>Tokenized DNA Compositions</h3>
    <button className="btn btn-wide btn-info" type="button">MINT 1 of 11,111 METABALL NFTs!</button>
  </div>
</div>
<div className="nft-hero-base">
<h1 className="pb-3 gradient-txt-green" style={{ fontSize: "4.2rem", letterSpacing: "0.1em" }}>19,326,120</h1>
    <h2 style={{ letterSpacing: "0.1em" }}>Tokenized DNA Compositions</h2>
    <button className="btn btn-wide btn-outline-info" type="button">MINT 1 of 11,111 METABALL NFTs!</button>
</div>
{/* End of img reels */}

<HowItWorksCustom2 />

<Features4 content={null} />

{/* Bootstrap Mix n Max containers */}
<div className="container">

  <div className="row">
    <div className="col-md-8" style={{ verticalAlign: "middle", margin: "auto" }}>.col-md-8</div>
    <div className="col-6 col-md-4">
    <img className="illustration metaball-slide" alt="metaball avatars slideshow" style={{ width: "100%" }} 
    src="https://cdn.glitch.global/37011ed6-4b84-44e8-8f53-630683dd483b/metaball-showcase-1.gif?v=1643398889757" />
    </div>
  </div>

  <div className="row">
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <div className="row">
    <div className="col-6">.col-6</div>
    <div className="col-6">.col-6</div>
  </div>
</div>
{/* End of bootstrap containers */}


{/* Start of Second Content Wrapper */}
<div className="content-wrapper">

<Header1 content={null} />

<figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

<Features6 content={null} />

        <div id="link2" className="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit
          aliquet, semper sapien sed, ornare augue. Phasellus sed velit
          interdum, sagittis metus quis, facilisis lectus. Cras sollicitudin
          purus at magna eleifend maximus. Nulla nec nulla in nunc maximus
          viverra in at mauris. Fusce sodales dolor nisi, et vehicula orci porta
          id. In placerat nunc sed erat lacinia tincidunt. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Vestibulum commodo eget metus
          vitae tempus. Aliquam pharetra mi at efficitur accumsan. Curabitur
          venenatis libero a ex porttitor, at auctor turpis hendrerit. Nam
          commodo, risus non consequat pretium, erat ante auctor purus, a cursus
          dolor erat at velit. Maecenas dignissim, dolor sed laoreet aliquam,
          tortor lacus faucibus urna, eget mattis massa sem ac dui. Nam semper
          hendrerit interdum. Etiam at dictum nisi.
        </div>

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

        <div id="link3" className="container card">
          <h1 className="pb-3 gradient-txt" style={{ fontSize: "4.2rem" }}>Xone Microverses</h1>
          <p>
Build and share fully functional, interactive and immersive web-based extended reality landing pages, or XONES. 
            </p>
        </div>

        <div id="link4" className="container faq">
          <h1 style={{ padding: "0 0 24px 0" }}>FAQ</h1>
          <div>
            <h4>Lorem ipsum?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id metus id mauris tincidunt posuere. Vivamus neque
              odio, imperdiet vitae.
            </p>

            <hr />
          </div>

          <div>
            <h4>Lorem ipsum?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id metus id mauris tincidunt posuere. Vivamus neque
              odio, imperdiet vitae.
            </p>

            <hr />
          </div>

          <div>
            <h4>Lorem ipsum?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id metus id mauris tincidunt posuere. Vivamus neque
              odio, imperdiet vitae.
            </p>

            <hr />
          </div>
        </div>


<Testimonials1 content={null} />

<Testimonials2 content={null} />

<CallToAction2 content={null} />

<Footer3 content={null} />
</div>
{/* End of Content Wrapper # 2 */}

<Particles id="tsparticles" options={{
        background: { color: "none", },
        fullScreen: { zIndex: -1, },
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
