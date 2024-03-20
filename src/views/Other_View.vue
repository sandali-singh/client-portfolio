<template>
  <v-main class="primary">
    <v-container class="other">
      <v-row class="section1">
        <v-col cols="12" sm="12" md="7">
          <h1 class="heading--main">Connect</h1>
          <p>✶ UI/UX Designer based in India. Currently working at agprop</p>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <p class="white--text">Socials</p>
          <p class="grey--text">
            <a href="https://www.linkedin.com/in/s-shivam/">Linkedin</a>
            .
            <a href="https://www.instagram.com/shivamsingh.ai/">Instagram</a>
            .
            <a href="https://www.threads.net/@shivamsingh.ai">Threads</a>
            .
            <a
              href="https://twitter.com/Shivamc504?t=Vc1j2jeHDLkS1-cSM1LSkg&s=09"
              >Twitter</a
            >
          </p>
        </v-col>
      </v-row>
      <v-row class="section2">
        <v-col cols="12" sm="12" md="12"> <p>~God is a Designer</p> </v-col>
      </v-row>
      <v-row class="section3">
        <v-col cols="12" md="12" class="mb-12">
          <div class="nav-section">
            <div class="mt-12 pt-12 text-center nav-slider">
              <v-btn dark fab small>
                <a href="/ongoing" class="ma-2">
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
                <a href="/" class="white--text">
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
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollButton = window.scrollY = 100; // Change 100 to the scroll position you want
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
.container {
  min-height: 100vh;
}
* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}
.other {
  max-width: 75%;
  margin: 1rem auto;
}
.row {
  margin: 5rem auto;
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
  font-size: 3.8rem;
  color: #fff;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
p {
  color: #878787;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0rem;
  line-height: 1.2rem;
  padding-bottom: 0.5rem;
}
.section1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section2 {
  margin-top: 23rem;
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
  .heading--main {
    font-size: 2.8rem;
  }

  .row {
    margin: 4rem auto;
  }
}
@media screen and (max-width: 1260px) {
  .other {
    max-width: 90%;
  }
}

@media screen and (max-width: 960px) {
  .other {
    max-width: 100%;
  }
}
</style>
