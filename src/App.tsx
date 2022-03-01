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
import Particles from "react-tsparticles";

const theme = createTheme({
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

const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
};


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
    <div>

<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "autoPlay": true,
        "background": {
          "color": {
            "value": "#7111a100"
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "source-atop",
          "cover": {
            "color": {
              "value": "#000000"
            },
            "opacity": 0.75
          },
          "enable": true
        },
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "bounce"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "attract",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 3,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "mix": true,
              "opacity": 0.8,
              "size": 55
            },
            "connect": {
              "distance": 8,
              "links": {
                "opacity": 0.5
              },
              "radius": 8
            },
            "grab": {
              "distance": 100,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#423159"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#291740"
                },
                "length": 2000
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#01eaf3",
            "animation": {
              "h": {
                "count": 22,
                "enable": true,
                "offset": 0,
                "speed": 2,
                "sync": false
              },
              "s": {
                "count": 22,
                "enable": true,
                "offset": 0,
                "speed": 2,
                "sync": true
              },
              "l": {
                "count": 22,
                "enable": true,
                "offset": 0,
                "speed": 2,
                "sync": false
              }
            }
          },
          "destroy": {
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true
            }
          },
          "gradient": [],
          "groups": {},
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#6ceff4"
            },
            "consent": false,
            "distance": 100,
            "enable": true,
            "frequency": 1,
            "opacity": 0.5,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 100,
              "enable": true,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 28
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "destroy",
              "bottom": "destroy",
              "left": "destroy",
              "right": "destroy",
              "top": "destroy"
            },
            "random": false,
            "size": false,
            "speed": 5,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 0
          },
          "opacity": {
            "random": {
              "enable": true,
              "minimumValue": 0.9
            },
            "value": 0.6,
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 1,
              "sync": false,
              "destroy": "none",
              "startValue": "random",
              "minimumValue": 0.4
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "reduceDuplicates": false,
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "mode": "vertical",
            "speed": 25
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": false,
              "minimumValue": 1
            },
            "value": {
              "min": 0.1,
              "max": 20
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 5,
              "sync": true,
              "destroy": "max",
              "startValue": "min",
              "minimumValue": 0.1
            }
          },
          "stroke": {
            "width": 0
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": 50
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "style": {},
        "themes": [],
        "zLayers": 100,
        "emitters": {
          "autoPlay": true,
          "fill": true,
          "life": {
            "wait": false
          },
          "rate": {
            "quantity": 2,
            "delay": 0.1
          },
          "shape": "square",
          "startCount": 0,
          "size": {
            "mode": "percent",
            "height": 0,
            "width": 100
          },
          "direction": "top",
          "position": {
            "x": 50,
            "y": 100
          }
        }
      }}
    />

      <div id="mobileNavContainer" className="mobile-nav">
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
              <i className="nav-social fa-brands fa-twitter"> </i>
                {/* <img className="nav-social" src="/icons/twitter.svg" alt="" /> */}
              </a>
              <a href="https://discord.gg/AG2Y93emkf" target="_blank" rel="noreferrer">
              <i className="nav-social fa-brands fa-discord"> </i>
                {/* <img className="nav-social" src="/icons/discord.svg" alt="" /> */}
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
      <div className="content-wrapper">
        <header className="card" id="link1">
          <div style={{ padding: "0 24px 0 24px 0" }}>
            <h3 className="text-secondary-color">Welcome to the PlasmaVerse</h3>
            <h1 className="pb-3">ENGAGE. EVOLVE. EARN.</h1>
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
<HowItWorksCustom2 />

<Header1 content={null} />

<Features6 content={null} />

<Features4 content={null} />

<Testimonials1 content={null} />

<Testimonials2 content={null} />

<CallToAction2 content={null} />

<Footer3 content={null} />

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

        <div id="link3" className="container card">
          <h1 className="pb-3">Lorem ipsum</h1>
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
      </div>
    </div>
  );
};

export default App;
