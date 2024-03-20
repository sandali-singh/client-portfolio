<template>
  <v-main class="primary">
    <v-container class="ongoing pt-15">
      <v-row class="section1">
        <v-col cols="12" md="4" sm="12">
          <h2>Upcoming</h2>
        </v-col>
      </v-row>
      <v-row class="section2">
        <v-col cols="12" md="5" sm="12">
          <h1 class="heading--main">Design System</h1>
          <h3>Comming soon</h3>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <p>
            ✶
            <br />
            Design System for Aura version 5
            <br />
            for Tech Communities like Google Developer Groups, Google Students
            Developer Clubs, or any other tech communities with Aura Admin.
          </p>
          <p>
            <a href="https://github.com/gdg-x/aura"
              >Resources
              <v-icon small>mdi-arrow-right</v-icon>
            </a>
          </p>
        </v-col>
        <v-col cols="12" md="4" sm="12" class="video">
          <video
            controls
            loop
            :style="{ width: videoWidth, height: videoHeight }"
          >
            <source src="../assets/videos/Presentation1.mp4" type="video/mp4" />
          </video>
        </v-col>
      </v-row>
      <v-row class="section3">
        <v-col cols="12" md="12" sm="12">
          <v-img
            src="../assets/images/ongoing.webp"
            alt="ongoing picture scale"
            max-height="auto"
            max-width="950"
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
                <a href="/darwin" class="ma-2">
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
                <a href="/other" class="white--text">
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
      videoWidth: "320px", // Set the width of the video
      videoHeight: "300px", // Set the height of the video

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
.ongoing {
  min-height: 100vh;
  max-width: 75%;
  margin: 1rem auto;
}
.row {
  margin: 1rem auto;
}
.theme--light.v-icon {
  color: #878787;
}
/* a:link a:active {
  color: #878787;
  font-size: 0.8rem;
}
a:visited {
  color: #878787;
} */
a:hover,
a:active {
  color: #878787;
}

a:link,
a:visited {
  color: #878787;
}
.heading--main {
  font-size: 3.5rem;
  color: #fff;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
h3 {
  color: #878787;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0rem;
  padding-bottom: 1rem;
}
h2 {
  color: #fff;
  font-size: 2rem;
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
.section3 div {
  margin: 0 auto 4rem;
}
.section2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
div video {
  text-align: center;
}
video {
  width: 300px;
  height: 360px;
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
  .section4 .v-btn--rounded {
    display: none;
  }
}
@media screen and (max-width: 1270px) {
  .heading--main {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 960px) {
  .heading--main {
    font-size: 3rem;
    line-height: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  .section2 .video {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 600px) {
  .heading--main {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1rem;
  }
}
@media screen and (max-width: 300px) {
  .heading--main {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 1rem;
  }
}
@media screen and (max-width: 1260px) {
  .ongoing {
    max-width: 90%;
  }
}

@media screen and (max-width: 960px) {
  .ongoing {
    max-width: 100%;
  }
}
</style>
