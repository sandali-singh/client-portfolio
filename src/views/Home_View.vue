<template>
  <v-main class="primary">
    <v-container class="home white--text pt-10 mt-5">
      <v-row class="section1">
        <v-col cols="12" md="7" sm="12">
          <h1 class="heading--main">Shivam Singh</h1>
          <p class="title mt-5">
            UI/UX Designer based in India. Currently working at agprop
          </p>
          <p class="mt-12">Socials</p>
          <p class="grey--text">
            <a class="grey--text" href="https://www.linkedin.com/in/s-shivam/"
              >Linkedin</a
            >
            .
            <a
              class="grey--text"
              href="https://www.instagram.com/shivamsingh.ai/"
              >Instagram</a
            >
            .
            <a class="grey--text" href="https://www.threads.net/@shivamsingh.ai"
              >Threads</a
            >
            .
            <a
              class="grey--text"
              href="https://twitter.com/Shivamc504?t=Vc1j2jeHDLkS1-cSM1LSkg&s=09"
              >Twitter</a
            >
          </p>
        </v-col>
        <v-col cols="12" md="5" sm="12" class="mt-6">
          <v-img
            ref="image"
            class="profile-img"
            :class="{
              'float-right': $vuetify.breakpoint.mdAndUp,
              'text-center': $vuetify.breakpoint.smAndDown,
            }"
            src="../assets/images/Picture12.webp"
            alt="shivam's peofile picture"
            max-height="400"
            max-width="350"
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
        <v-col cols="12" md="12" class="mb-12">
          <h4 class="mt-9 mb-7 grey--text">Navigation</h4>
          <div class="custom-text pt-4 font-weight-bold">
            <p>
              <a href="/about" class="grey--text text-decoration-none"
                >About
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
            <p>
              <a href="/agprop" class="grey--text text-decoration-none"
                >Project 1 agprop
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
            <p>
              <a href="/musixverse" class="grey--text text-decoration-none"
                >Project 2 Musixverse
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
            <p>
              <a href="/aura" class="grey--text text-decoration-none"
                >Project 3 Aura (Community Project)
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
            <p>
              <a href="/darwin" class="grey--text text-decoration-none"
                >Project 4 DarwinBlock
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
          </div>
          <div class="grey--text custom-text mt-10 font-weight-bold">
            <p>
              <a href="/ongoing" class="grey--text text-decoration-none">
                Ongoing (design System)
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
            <p>
              <a href="/other" class="grey--text text-decoration-none"
                >Other & Resources
                <v-icon x-small>mdi-arrow-right</v-icon>
              </a>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="section3">
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
                <a href="/about" class="white--text">
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
.home {
  max-width: 75%;
  margin: 1rem auto;
  min-height: 100vh;
}

.heading--main {
  margin-top: 2rem;
  font-size: 5.5rem;
  color: #fff;
  font-weight: 600;
  line-height: 5rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
.profile-img {
  border-radius: 1rem;
}
.custom-text {
  line-height: 0.2rem; /* Adjust line height as needed */
  font-size: 0.9rem;
}
.v-icon.v-icon {
  line-height: 0;
}
.theme--light.v-icon {
  color: #ccc;
}
.placeholder {
  width: 100%; /* Set the width of the placeholder */
  height: 100%; /* Set the height of the placeholder */
  background-color: #f0f0f0; /* Placeholder background color */
  /* Add loading animation or placeholder image styles */
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
  .section3 .v-btn--rounded {
    display: none;
  }
}

@media screen and (max-width: 960px) {
  .section1 .profile-img {
    margin: 0 auto;
  }
  .heading--main {
    font-size: 4.5rem;
    line-height: 3rem;
  }
}
@media screen and (max-width: 600px) {
  .heading--main {
    font-size: 3rem;
    line-height: 3rem;
  }
}
@media screen and (max-width: 1260px) {
  .home {
    max-width: 90%;
  }
}

@media screen and (max-width: 960px) {
  .home {
    max-width: 100%;
  }
}
</style>
