<template>
  <v-main class="primary">
    <v-container class="about white--text pt-10">
      <v-row class="section1">
        <v-col cols="12" md="5" class="header">
          <v-img
            src="../assets/images/Group2.webp"
            alt="auraLogo"
            max-height="100"
            max-width="100"
            contain
            @load="imageLoaded"
            @error="imageErrorHandler"
          ></v-img>
          <div v-if="loading" class="preloader text-right">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>

          <h1 class="display-3 font-weight-medium">About</h1>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="grey--text custom-text font-weight-medium content"
        >
          <p>
            A problem solver who uses his creative talents to tackle
            design-related challenges. With a keen eye for detail and an innate
            understanding of infographics, visual design, and UI/UX.
          </p>
          <p>
            I can transform complex information into visually compelling and
            user-friendly designs. Whether it includes working on a brand-new
            project or revamping an existing design.
          </p>
          <p>Keep scrolling for Experiences ↓</p>
        </v-col>
        <v-col cols="12" md="3" class="title content">
          <p>
            ✶ Using the power of Design to create delightful Experiences<br />
            <strong class="grey--text body-2">Like to do ⛱️⛺🏸🎮🎨</strong>
          </p>
          <p>4x Hackathons 🥇🥉🏅 Open Source Contributer</p>
        </v-col>
      </v-row>
      <v-row cols="12" md="12" sm="12" class="section2">
        <v-col>
          <video controls loop>
            <source
              src="../assets/videos/Animated intro.mp4"
              type="video/mp4"
              @load="imageLoaded"
              @error="imageErrorHandler"
            />
          </video>
          <div v-if="loading" class="preloader text-right">
            <v-progress-circular
              color="grey"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
      </v-row>
      <v-row class="section3 pt-15">
        <v-col cols="12" md="4" sm="12">
          <p>jobs/</p>
          <p class="text-h4 font-weight-medium">Experiences</p>
        </v-col>
        <v-col cols="12" md="8" sm="12" class="content--experience pa-4">
          <div class="experience--body">
            <div class="experience--heading">
              <p>agprop</p>
              <p>UI/UX Designer (July'23 - Present)</p>
            </div>
            <p class="custom-text">
              Worked on building The <strong>Design System</strong> based on
              Material 3 design systems, aligned various
              <strong>UX principles</strong> together for a great visual
              experience ensuring
              <strong>usability and accessibility.</strong>
            </p>
            <p class="custom-text">
              Created
              <strong>cross-platform responsive interfaces</strong> for multiple
              products. Played an integral role in implementing a powerful brand
              image for the company and
              <strong>user-focused product design</strong> for various products.
            </p>
          </div>
          <div class="experience--body">
            <div class="experience--heading">
              <p>Musixverse</p>
              <p>UI/UX & Graphics Design ( Nov'21 - Dec'22)</p>
            </div>
            <p class="custom-text">
              Streamlined user experience by addressing pain points, resulting
              in a user-centric interface.
            </p>
            <p class="custom-text">
              Pioneered the complete <strong>brand identity</strong> and
              interface through in-depth
              <strong>foundational research,</strong>
              setting a compelling visual foundation.
            </p>
            <p class="custom-text">
              Collaborated seamlessly in
              <strong>cross-functional scrum meetings,</strong>
              implementing
              <strong>feedback-driven enhancements.</strong> crafted various
              design assets for branding, advertising, and socials.
            </p>
          </div>
          <div class="experience--body">
            <div class="experience--heading">
              <p>PitchKrafts</p>
              <p>Presentation & Creative Designer (Dec'20 - Dec'22)</p>
            </div>
            <p class="custom-text">
              <strong>Lead the design team,</strong> crafting visually
              compelling and data-rich investment and business pitch
              decks.Collaborated cross-functional with content, finance, and
              legal teams, contributing to
              <strong>the successful delivery of 800+ projects</strong> and
              facilitating <strong>over $30 million in fundraising.</strong>
            </p>
            <p class="custom-text">
              Orchrested client meetings to drive project discussions and
              dynamic presentation deliveries.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row class="section4 mt-10 pt-10">
        <v-col cols="12" md="5" sm="12">
          <p class="text-h4 font-weight-medium">
            Resume <v-icon large>mdi-arrow-right</v-icon>
          </p>
        </v-col>
        <v-col cols="12" md="7" sm="12">
          <div class="container--resume text-center">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRHNMviTL7_4TbZHkCtjTCYe80vUlyy-eZAcTx-PImujGMbPxWfb-i0myabu0Elnw/embed?start=true&loop=true&delayms=3000"
              frameborder="0"
              width="582"
              height="870"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
        </v-col>
      </v-row>

      <v-row class="pt-15 pb-15">
        <v-col cols="12" md="8" sm="12">
          <p class="text-h4 font-weight-medium">Tech Stack</p>
        </v-col>

        <v-col cols="12" md="4" sm="12" class="">
          <div class="text-right">
            <v-img
              class="text-right"
              src="../assets/images/Picture11.webp"
              alt="Tech Stack"
              max-height="300"
              max-width="300"
              contain
              @load="imageLoaded"
              @error="imageErrorHandler"
            ></v-img>
            <div v-if="loading" class="preloader text-right">
              <v-progress-circular
                color="grey"
                indeterminate
              ></v-progress-circular>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="section5">
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
                <a href="/" class="ma-2">
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
                <a href="/agprop" class="white--text">
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
  name: "EmbeddedSlide",
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
.about {
  max-width: 75%;
  margin: 1rem auto;
}

.row {
  margin: 1rem auto;
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

video {
  max-width: 100%; /* Make the video responsive */
}
.content--experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
}
.experience--heading {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 400;
}
.experience--heading :first-child {
  font-weight: 700;
}
.experience--body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-size: 0.6rem;
  color: #bbb;
}
.experience--body strong {
  color: #ddd;
}
/* Style the video controls */
/* .video-container video::-webkit-media-controls {
  transform: scale(0.9);
} */

iframe {
  border-radius: 1.2rem;
}
.custom-text {
  line-height: 1.4rem; /* Adjust line height as needed */
  font-size: 0.9rem;
}
.theme--light.v-icon {
  color: #fff;
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
  .section5 .v-btn--rounded {
    display: none;
  }
}
@media screen and (max-width: 1260px) {
  iframe {
    width: 450px; /* Adjust the width for smaller screens */
    height: 650px; /* Adjust the height for smaller screens */
  }
}
@media screen and (max-width: 600px) {
  iframe {
    width: 300px; /* Adjust the width for smaller screens */
    height: 450px; /* Adjust the height for smaller screens */
  }
  .header {
    flex-direction: column;
  }
}
@media screen and (max-width: 1260px) {
  .about {
    max-width: 90%;
  }
}

@media screen and (max-width: 960px) {
  .about {
    max-width: 100%;
  }
}
</style>
