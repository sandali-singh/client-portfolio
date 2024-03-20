<template>
  <v-main class="primary">
    <v-container class="darwin">
      <v-row class="section1 mt-15">
        <v-col cols="12" md="9" sm="12">
          <h6 class="top">UI Design</h6>
          <h1 class="heading--main">DarwinBlock</h1>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-img
            src="../assets/images/darwin-logo.svg"
            alt="darwin logo"
            max-height="100"
            max-width="150"
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></v-img>
          <div v-if="loading" class="preloader text-center">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
      </v-row>
      <v-row class="section2">
        <v-col cols="12" md="7" sm="12">
          <h3>Project Overview</h3>
          <p>
            DarwinBlock is the catalyst for businesses seeking evolutionary
            blockchain solutions, specializing in NFT marketplaces, private
            blockchain development, decentralized applications, DEX aggregators,
            smart contract development, and crypto-native payment solutions.
          </p>
        </v-col>
        <v-col cols="12" md="2" sm="12">
          <h3>Collaborators</h3>
          <p>
            Akshit <br />
            Pushpit Bhardwaj<br />
            Shivam Singh
          </p>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <h3>Contribution</h3>
          <p>
            UI/UX Design<br />
            Identity & Brand Design
          </p>
        </v-col>
      </v-row>
      <v-row class="section3">
        <v-col cols="12" md="7" sm="12" class="blur">
          <h2 class="heading--main-secondary">
            Empowering the decentralized future by providing cutting-edge
            blockchain solutions.
          </h2>
        </v-col>
        <v-col cols="12" md="5" sm="12">
          <h3>
            Vision: <br />
            To be the leading force in shaping the next generation of
            decentralized technologies.
          </h3>
        </v-col>
      </v-row>
      <v-row class="section4">
        <v-col cols="12" md="4" sm="12">
          <h3 class="">Innovative</h3>
          <h4>Pioneering new possibilities in blockchain technology.</h4>

          <h3>Reliable</h3>
          <h4>Building trust through secure and scalable solutions.</h4>

          <h3>Adaptable</h3>
          <h4>Tailoring services to meet diverse client needs.</h4>

          <h3>Progressive</h3>
          <h4>
            Embracing change and staying ahead in technological advancements.
          </h4>
        </v-col>
        <v-col cols="12" md="8" sm="12">
          <v-img
            class="img-round-edge"
            src="../assets/images/phone.webp"
            alt="phone view"
            max-height="auto"
            max-width="auto"
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></v-img>
          <div v-if="loading" class="preloader text-center">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
      </v-row>
      <v-row class="section5">
        <v-col cols="12" md="8" sm="12">
          <v-img
            class="img-round-edge"
            src="../assets/images/mackbook1.webp"
            alt="mackbook1"
            max-height="auto"
            max-width="auto"
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></v-img>
          <div v-if="loading" class="preloader text-center">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <h3>
            DarwinBlock pioneers NFT Marketplace Development, Private Blockchain
            Solutions, Decentralized Applications, DEX Aggregators, Smart
            Contracts, and Crypto Native Payments.
          </h3>
        </v-col>
      </v-row>
      <v-row class="section6">
        <v-col cols="12" md="5" sm="12">
          <v-img
            class="img-round-edge"
            src="../assets/images/mackbook2.webp"
            alt="mackbook2"
            height="1000px"
            max-width="auto"
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></v-img>
          <div v-if="loading" class="preloader text-center">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
        <v-col cols="12" md="7" sm="12" class="table-blur">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th class="text-left">Services</th>
                  <th class="text-left">Descriptons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website & Web <br />Developement</td>
                  <td>
                    Embark on a digital journey with DarwinBlock's Website and
                    <br />
                    Web App Development service, where innovation meets
                    <br />
                    seamless functionality.
                  </td>
                </tr>
                <tr>
                  <td>Product & Website <br />Design</td>
                  <td>
                    Our user-centric interface design ensures a seamless and
                    <br />
                    engaging experience for decentralized applications and<br />
                    platforms.
                  </td>
                </tr>
                <tr>
                  <td>
                    Private Blockchain
                    <br />Developement
                  </td>
                  <td>
                    Experience the power of tailored private blockchain networks
                    <br />
                    designed to enhance security and scalability, ensuring a
                    <br />decentralized future tailored to your unique needs.
                  </td>
                </tr>
                <tr>
                  <td>Decentralized <br />Application <br />Development</td>
                  <td>
                    Transform your business with our decentralized
                    application<br />
                    development services, putting the control back in your hands
                    <br />and unlocking new possibilities for user engagement.
                  </td>
                </tr>
                <tr>
                  <td>NFT Marketplace <br />Developement</td>
                  <td>
                    Elevate your brand with our NFT marketplace development,<br />
                    where innovation meets art, creating a seamless
                    experience<br />
                    for buyers and sellers alike.
                  </td>
                </tr>
                <tr>
                  <td>Defi Solutions</td>
                  <td>
                    Streamline decentralized exchanges with our Defi
                    solutions,<br />
                    providing a unified platform for seamless trading
                    experiences <br />across diverse blockchain networks.
                  </td>
                </tr>
                <tr>
                  <td>
                    Smart Contract <br />
                    Development
                  </td>
                  <td>
                    Empower your operations with secure and automated smart
                    <br />contract solutions, ensuring transparency, efficiency,
                    and <br />
                    trust in your blockchain transactions.
                  </td>
                </tr>
                <tr>
                  <td>
                    Crypto Native Payment<br />
                    Solutions
                  </td>
                  <td>
                    Integrate cryptocurrency payments effortlessly into your
                    <br />business with our crypto-native payment solutions,
                    <br />embracing the future of secure and borderless
                    financial <br />transactions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-col>
      </v-row>
      <v-row class="section7">
        <v-col cols="12" md="6" sm="12">
          <h3 class="mb-8">
            For: <br />
            Entrepreneurs, startups, and enterprises looking to integrate
            blockchain technology.
          </h3>
          <h3 class="mb-8">
            Developers, crypto enthusiasts, and businesses exploring innovative
            financial solutions.
          </h3>
          <p class="mt-15">
            Resource
            <br />
            <a href="https://darwinblock.com/"
              >Visit DarwainBlock
              <v-icon small>mdi-arrow-right</v-icon>
            </a>
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-img
            class="img-round-edge mb-10"
            src="../assets/images/mackbook3.webp"
            alt="mackbook3"
            max-height="auto"
            max-width="auto"
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></v-img>
          <div v-if="loading" class="preloader text-center">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
      </v-row>
      <v-row class="section8">
        <v-col cols="12" md="12" class="mb-12">
          <div class="nav-section">
            <div
              class="scroll-to-top"
              @click="scrollToTop"
              v-show="showScrollButton"
            >
              <v-btn dark fab small>
                <v-icon small>mdi-arrow-up</v-icon>
              </v-btn>
            </div>
            <div class="mt-12 pt-12 text-center nav-slider">
              <v-btn dark fab small>
                <a href="/aura" class="ma-2">
                  <v-icon>mdi-chevron-left</v-icon>
                </a>
              </v-btn>
              <v-btn dark fab small class="ma-2">
                <a href="/" class="white--text">
                  <v-icon small>mdi-home</v-icon>
                </a>
              </v-btn>
              <v-btn dark rounded small class="pa-5 ma-1">
                <a href="/agprop"><span small>agprop</span></a>
                <a href="/musixverse"><span small>Musixverse</span></a>
                &nbsp; <a href="/aura"><span small>Aura</span></a>
                <a href="/darwin"><span small>DarwinBlock</span></a>
              </v-btn>
              <v-btn dark rounded x-small class="pa-5 ma-2">
                <a href="tel:+917061992455">
                  <v-icon small>mdi-phone</v-icon>
                </a>
                <a href="mailto:Shivamsinghc502@gmail.com"
                  ><v-icon small>mdi-email</v-icon>
                </a>
              </v-btn>
              <v-btn dark fab small>
                <a href="/ongoing" class="white--text">
                  <v-icon>mdi-chevron-right</v-icon>
                </a>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: "darwinView",
  data() {
    return {
      table: [
        {
          Services: "Website & Web Developement",
          Descripton:
            "Embark on a digital journey with DarwinBlock's Website and Web App Development service, where innovation meets seamless functionality.",
        },
        {
          Services: "Product & Website Design",
          Descripton:
            "Our user-centric interface design ensures a seamless and engaging experience for decentralized applications and platforms.",
        },
        {
          Services: "Private Blockchain Developement",
          Descripton:
            "Experience the power of tailored private blockchain networks designed to enhance security and scalability, ensuring a decentralized future tailored to your unique needs.",
        },
        {
          Services: "Decentralized Application Development",
          Descripton:
            "Transform your business with our decentralized application development services, putting the control back in your hands and unlocking new possibilities for user engagement.",
        },
        {
          Services: "NFT Marketplace Development",
          Descripton:
            "Elevate your brand with our NFT marketplace development, where innovation meets art, creating a seamless experience for buyers and sellers alike.",
        },
        {
          Services: "Defi Solutions",
          Descripton:
            "Streamline decentralized exchanges with our Defi solutions, providing a unified platform for seamless trading experiences across diverse blockchain networks.",
        },
        {
          Services: "Smart Contract Development",
          Descripton:
            "Empower your operations with secure and automated smart contract solutions, ensuring transparency, efficiency, and trust in your blockchain transactions.",
        },
        {
          Services: "Crypto Native Payment Solutions",
          Descripton:
            "Integrate cryptocurrency payments effortlessly into your business with our crypto-native payment solutions, embracing the future of secure and borderless financial transactions.",
        },
      ],
      showScrollButton: false,
      loading: true, // Initial loading state
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    imageLoaded() {
      this.loading = false; // Update loading state
    },
    imageErrorHandler() {
      console.error("Failed to load image");
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 100; // Change 100 to the scroll position you want
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}
.darwin {
  max-width: 75%;
  margin: 1rem auto;
}
.row {
  margin: 1rem auto;
}
.theme--light.v-icon {
  color: #878787;
}
a:hover,
a:active {
  color: #878787;
}

a:link,
a:visited {
  color: #878787;
}

.top {
  color: #878787;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0rem;
}
p {
  color: #878787;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0rem;
  line-height: 1.2rem;
  padding-bottom: 0.5rem;
}
h3 {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0rem;
  padding-bottom: 1rem;
}
.section4 h3 {
  padding: 0rem;
}
h4 {
  color: #878787;
  font-size: 1.3rem;
  letter-spacing: 0rem;
  padding-bottom: 1rem;
  font-weight: 500;
}
.heading--main {
  font-size: 4rem;
  color: #fff;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
.heading--main-secondary {
  font-size: 3.8rem;
  color: #fff;
  font-weight: 500;
  line-height: 4rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
.blur {
  position: relative;
  overflow: hidden; /* Ensure the rotated background image doesn't overflow */
  border-radius: 2rem;
  padding: 1rem;
}

.blur::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200%; /* Increase width and height to cover entire area */
  height: 200%;
  background: url("../assets/images/spotblur.png");
  z-index: 0;
  transform-origin: top right;
}
.section3,
.section1,
.section4,
.section5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-round-edge {
  border-radius: 1rem;
}

.table-container {
  overflow-y: auto;
  max-width: 100%;
  max-height: 100%;
}
/* Custom scrollbar */
.table-container::-webkit-scrollbar {
  width: 0; /* Hide the scrollbar */
}
/* Optional: Style the track and thumb */
.table-container::-webkit-scrollbar-track {
  background-color: transparent; /* Optional: Change the background color of the track */
}
.table-container::-webkit-scrollbar-thumb {
  background-color: transparent; /* Optional: Change the color of the scrollbar thumb */
}

.table-blur {
  position: relative;
}

.table-blur::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 10px; /* Adjust the width as needed */
  height: 100%;
  background-color: transparent; /* This color will be blurred */
  box-shadow: -10px 0 10px 5px rgba(0, 0, 0, 0.7); /* Adjust the blur radius and color */
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  white-space: nowrap; /* Prevent text wrapping */

  border: 4px solid black;
  border-radius: 0.6rem;
  padding: 0.5rem 1rem 1.5rem 1rem;
  font-size: 1rem;
  color: #909090;
  background: #191919;
  font-weight: 600;
}
/* td:not(:first-child):not(:nth-child(1)) {
  white-space: wrap; /// Prevent text wrapping
} */

th {
  background-color: #242424;
  padding: 1rem 1rem 1.5rem 1rem;
}
.scroll-to-top {
  position: fixed;
  bottom: 28px;
  right: 3%;
  transform: translateX(-50%);
  display: block;
}
.nav-section a {
  padding: 0.5rem;
}
.nav-section {
  width: 100%;
  height: 100px; /* Adjust height as needed */
  background: linear-gradient(to top, rgba(0, 0, 0, 5), rgba(0, 0, 0, 0));
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-section a:hover,
.nav-section a:active {
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.7rem;
}
.nav-section a:link,
.nav-section a:visited {
  color: #fff;
  text-decoration: none;
  font-size: 0.7rem;
}

.nav-slider {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
/* ---------------------------- media query------------------------------- */
@media screen and (max-width: 1330px) {
  .section8 .v-btn--rounded {
    display: none;
  }
}
@media screen and (max-width: 960px) {
  .section1 div {
    margin: 0 auto;
  }
  .heading--main {
    font-size: 2rem;
  }
  .heading--main-secondary {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }
  .blur::before {
    width: 250%; /* Increase width and height to cover entire area */
    height: 250%;
  }
}
@media screen and (max-width: 550px) {
  th,
  td {
    white-space: nowrap; /* Prevent text wrapping */
    padding: 0.5rem 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .section6 div.v-image.v-responsive.theme--light {
    max-height: 450px;
    width: auto;
  }
}
@media screen and (max-width: 1260px) {
  .darwin {
    max-width: 90%;
  }
}
@media screen and (max-width: 1080px) {
  .darwin {
    max-width: 95%;
  }
}

@media screen and (max-width: 960px) {
  .darwin {
    max-width: 100%;
  }
}
</style>
