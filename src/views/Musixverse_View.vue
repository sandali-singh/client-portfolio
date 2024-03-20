<template>
  <v-main class="primary pt-15">
    <v-container class="musixverse">
      <v-row class="section1">
        <v-col cols="12" sm="12" md="8">
          <p class="heading--grey">Nov'21 - Dec'22</p>
          <h1>Musixverse</h1>
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-img
            src="../assets/images/Group 3794.webp"
            alt="contest-participated-logo"
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
        <v-col cols="12" sm="12" md="2">
          <v-img
            src="../assets/images/DV.png"
            alt="MXV Musixverse logo"
            max-height="150"
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
        <v-col cols="12" sm="12" md="7">
          <h3 class="subheading--white">Project Overview</h3>
          <p class="heading--grey">
            Musixverse aims to power ownership, provenance, and discovery of
            music across the web and beyond. It will be the one-stop shop for
            artists, fans, collectors, investors, record labels, managers, and
            other personas in the music industry.
          </p>
          <p class="heading--grey">
            Each of these people will be able to come to Musixverse and run
            workflows that will be mutually beneficial for the wider community.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <h3 class="subheading--white">Collaborators</h3>
          <div class="heading--grey">
            <p>Pushpit Bhardwaj</p>
            <p>Sparsh Sharma</p>
            <p>Shivam Singh</p>
            <p>
              Yuvraj Chandra<br />
              +4 Members
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="3">
          <h3 class="subheading--white">Roles</h3>
          <div class="heading--grey">
            <p>UI/UX Design</p>
            <p>Brand strategy & Identity design</p>
            <p>Design system and digital assets design</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="section3">
        <v-col cols="12" sm="12" md="3">
          <v-img
            class="img-round-edge"
            src="../assets/images/1.webp"
            alt="card-1"
            height="650"
            width="auto"
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
        <v-col cols="12" sm="12" md="3">
          <v-img
            class="img-round-edge"
            src="../assets/images/2.jpg"
            alt="card-2"
            height="650"
            width="auto"
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
        <v-col cols="12" sm="12" md="3">
          <v-img
            class="img-round-edge"
            src="../assets/images/3.webp"
            alt="card-3"
            height="650"
            width="auto"
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
        <v-col cols="12" sm="12" md="3">
          <v-img
            class="img-round-edge"
            src="../assets/images/4.webp"
            alt="card-4"
            height="650"
            width="auto"
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
      <v-row class="section4">
        <v-col cols="12" sm="12" md="6">
          <h3 class="subheading--white">Problem Statement</h3>
          <p class="heading--grey">
            Music artists are facing significant challenges in generating
            revenue from distributors and expanding their fan base. Due to the
            limited reach of traditional distribution channels and the
            increasing competition in the music industry.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <h3 class="subheading--white">Challenges</h3>
          <ol>
            <li class="heading--grey">
              An equitable platform for artists and fans.
            </li>
            <li class="heading--grey">
              A useful platform that helps Artists, fans, and collectors to buy
              and sell music as an NFT.
            </li>
            <li class="heading--grey">
              A platform that is enjoyable to mint NFT and make transactions.
            </li>
          </ol>
        </v-col>
      </v-row>
      <v-row class="section5">
        <v-col cols="12" sm="12" md="12">
          <h3 class="subheading--white">Design Process</h3>
          <p class="heading--grey">
            Web 3 is new for everyone, it is difficult to understand the new web
            make transactions using digital wallets, and grasp how data are
            stored on blockchain. It was important to understand what challenges
            may be faced by our users while making transactions and signing up
            using digital wallets for the first time.
          </p>
          <p class="heading--grey">
            Empathizing with users helped us understand their pain points and
            lay initial ideas for how to tackle various issues from signing in
            using MetaMask and buying and selling NFTs.
          </p>
          <p class="heading--grey">
            Design Process
            <v-icon small>mdi-arrow-right</v-icon>
          </p>
        </v-col>
      </v-row>
      <v-row class="section6">
        <v-col cols="12" sm="12" md="12">
          <v-img
            src="../assets/images/text.svg"
            alt=" impression-text"
            max-height="450"
            max-width="750"
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
      <v-row class="section7">
        <v-col cols="12" sm="12" md="4">
          <v-img
            class="img-round-edge"
            src="../assets/images/5.webp"
            alt="mobile-view"
            height="650"
            width="auto"
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
        <v-col cols="12" sm="12" md="8">
          <v-img
            class="img-round-edge"
            src="../assets/images/sva.jpg"
            alt="desktop-view"
            height="650"
            width="auto"
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
        <v-col cols="12" sm="12" md="4">
          <h3 class="subheading--white">Foundational Research</h3>
          <p class="heading--grey">
            Gathering basic questions like what needs to be built, what are
            users’ real problems, and how can we solve user problems?
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <h3 class="subheading--white">Quantitative Research</h3>
          <ol>
            <li class="heading--grey">
              Created the user surveys, to determine our target audience and to
              gain a basic understanding of our users. About 45 responses were
              recorded. And based on the responses here are the key insights
              presented below.
            </li>
            <li class="heading--grey">
              The survey confirmed that people have some difficulties
              understanding digital wallets and Metamask.
            </li>
            <li class="heading--grey">
              Most people have an interest in Music as an NFT.
            </li>
            <li class="heading--grey">
              The survey confirmed that most fans are willing to invest in their
              favorite artists.
            </li>
          </ol>
        </v-col>
      </v-row>
      <v-row class="section9">
        <v-col cols="12" sm="12" md="4">
          <h3 class="subheading--white">Define Phase</h3>
          <p class="heading--grey">
            Created personas, empathy maps, and customer journey maps to
            understand more about the user's problems.
          </p>
          <h3 class="subheading--white">Ideation Phase</h3>
          <p class="heading--grey">
            Created ecosystem to learn more about the domain, task flows to
            align design decisions with user's behavior, and information
            architecture to understand the domain and IA which forms the basis
            for the Musixverse.
          </p>
          <h3 class="subheading--white">Design Phase</h3>
          <p class="heading--grey">
            Followed the below steps in the design phase:
          </p>
          <ol>
            <li class="heading--grey">Paper Sketches</li>
            <li class="heading--grey">
              Low-fidelity wireframes with variations
            </li>
            <li class="heading--grey">Mid-fidelity wireframes</li>
            <li class="heading--grey">Final Design</li>
          </ol>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-img
            class="img-round-edge"
            src="../assets/images/cover1.webp"
            alt="Open Book Mockup"
            height="550"
            width="auto"
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
      <v-row class="section10">
        <v-col cols="12" sm="12" md="6">
          <h3 class="subheading--white">Key Takeaways</h3>
          <ul>
            <li class="heading--grey">
              This project introduced me to web3 space and helped me empathize
              with my users and create a final product that is useful, joyful,
              and equitable.
            </li>
            <li class="heading--grey">
              This project also helped me realize how communication and taking
              ownership of tasks are essential for a project to succeed.
            </li>
            <li class="heading--grey">
              Organizing and prioritizing work is required for self-growth.
            </li>
          </ul>
          <h3 class="subheading--white pt-15">Project Featured on</h3>
          <p class="text--grey-big">Music Plus+ | CryptoKnowmics</p>
          <p class="no-padding">
            <a
              href="https://www.musicplus.in/decentralised-start-up-musixverse-artists-marketplace-defi-loans-management-record-label/#:~:text=Musixverse%20is%20a%20blockchain%2Dbased%20start%2Dup%20based%20out,and%20distribution%20across%20the%20web%20and%20beyond"
              >Read Article
              <v-icon small>mdi-arrow-right</v-icon>
            </a>
          </p>
          <p class="no-padding">
            <a href="https://musixverse.com/#/"
              >Visit Musixverse
              <v-icon small>mdi-arrow-right</v-icon>
            </a>
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <iframe
            src="https://musixverse.com/#/"
            width="560"
            height="850"
            frameborder="0"
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></iframe>
          <div v-if="loading" class="preloader text-center">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
      </v-row>
      <v-row class="section11">
        <v-col cols="12" sm="12" md="12">
          <v-img
            src="../assets/images/Group 3794.webp"
            alt="contest-participated-logo"
            max-height="300"
            max-width="250"
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
      <v-row class="section12">
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
                <a href="/agprop" class="ma-2">
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
                <a href="/aura" class="white--text">
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
  data() {
    return {
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
.musixverse {
  max-width: 75%;
  margin: 1rem auto;
}
a:hover,
a:active {
  color: #878787;
}

a:link,
a:visited {
  color: #878787;
}

.row {
  margin: 0 auto;
}
.img-round-edge {
  border-radius: 1rem;
}
.heading--grey {
  color: #878787;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0rem;
  line-height: 1.2rem;
  padding-bottom: 0.5rem;
}
.subheading--white {
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 0rem;
  padding-bottom: 1rem;
}
h1 {
  font-size: 4rem;
  color: #fff;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
.text--grey-big {
  color: #878787;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0rem;
}

.section4 {
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section6 div {
  margin: 1rem auto;
}

.section8 {
  padding: 3rem 0;
}

iframe {
  border-radius: 1rem;
}

.section10 {
  display: flex;
  align-items: center;
}
.theme--light.v-icon {
  color: #878787;
}
.no-padding {
  margin-bottom: 0rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.section11 div {
  margin: 2rem auto;
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
  .section12 .v-btn--rounded {
    display: none;
  }
}
@media screen and (max-width: 1260px) {
  iframe {
    width: 100%;
    height: 400px;
  }
  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }
}

@media screen and (max-width: 1000px) {
  .section1 div div {
    margin: 0 auto;
    max-width: 70%;
    max-height: auto;
    margin-bottom: 1rem;
  }
  .section3 div,
  .section7 div {
    max-width: auto;
    max-height: 400px;
    margin-top: 1rem;
  }
}
@media screen and (max-width: 550px) {
  .section9 div.v-image.v-responsive.theme--light {
    max-height: 350px;
    width: auto;
  }
}
@media screen and (max-width: 400px) {
  h1 {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
}
@media screen and (max-width: 1260px) {
  .musixverse {
    max-width: 90%;
  }
}

@media screen and (max-width: 960px) {
  .musixverse {
    max-width: 100%;
  }
}
</style>
