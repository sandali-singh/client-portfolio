<template>
  <v-main class="primary">
    <v-container class="aura pt-10">
      <v-row class="section1">
        <v-col cols="12" md="10" sm="12">
          <p>Community Work</p>
          <p class="heading--main">Aura v5</p>
        </v-col>
        <v-col cols="12" md="2" sm="12">
          <v-img
            src="../assets/images/aura logo.svg"
            alt="aura logo"
            max-height="100"
            max-width="100"
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
            Aura is the Web App that helps you to manage Tech Communities like
            Google Developer Groups, Google Developer Students Clubs, or any
            other tech communities with Aura Admin.
          </p>
        </v-col>
        <v-col cols="12" md="2" sm="12">
          <h3>Collaborators</h3>
          <p>Open Source Community</p>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <h3>Contributions</h3>
          <p>
            UI/UX Design<br />
            Multi-Lingual Design System
          </p>
        </v-col>
      </v-row>
      <v-row class="section3">
        <v-col cols="12" md="9" sm="12">
          <v-img
            src="../assets/images/flag2.webp"
            alt="country flags"
            max-height="500"
            max-width="550"
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
        <v-col cols="12" md="3" sm="12">
          <p>Asia Pacific &nbsp; North America &nbsp; Africa</p>
        </v-col>
      </v-row>
      <v-row class="section4">
        <v-col cols="12" md="9" sm="12">
          <v-img
            src="../assets/images/aura desktop.webp"
            alt="aura  desktop"
            max-height="700"
            max-width="700"
            contain
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
        <v-col cols="12" md="3" sm="12">
          <h3>
            ✶ Design <br />
            In progress
          </h3>
          <p>New modern design coming soon</p>

          <h2>20+ Countries</h2>
          <h2>40+ Communities in India</h2>
          <h2>400+ Tech Communities</h2>
        </v-col>
      </v-row>
      <v-row class="section5">
        <v-col cols="12" md="6" sm="12">
          <h3>Mission</h3>
          <p>
            Our mission is to equip our community members with practical skills,
            enabling them to communicate their insights and drive innovative
            solutions effectively.
          </p>
          <p>
            We are a thriving engineering community, dedicated to fostering a
            network of inquisitive individuals. Our focus is on providing
            startups and enterprises with practical solutions to their technical
            challenges.
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="table-blur">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th class="text-left">features</th>
                  <th class="text-left">Descripton</th>
                  <th class="text-left">My Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table" :key="item.features">
                  <td>{{ item.features }}</td>
                  <td>{{ item.Descripton }}</td>
                  <td :class="'data--color-' + (index % colors.length)">
                    {{ item.Contribution }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-col>
      </v-row>
      <v-row class="section6 mt-15">
        <v-col cols="12" md="12" sm="12">
          <v-img
            src="../assets/images/aura globe image.webp"
            alt="aura globe image"
            max-height="auto"
            max-width="700"
            contain
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
        <v-col cols="12" md="8" sm="12">
          <h3>Updates Coming soon</h3>
          <p>
            <a href="https://github.com/gdg-x/aura"
              >Resources
              <v-icon small>mdi-arrow-right</v-icon>
            </a>
          </p>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <p>Asia Pacific &nbsp; North America &nbsp; Africa</p>
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
                <a href="/musixverse" class="ma-2">
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
                <a href="/darwin" class="white--text">
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

      colors: ["#031b28", "#1a2f40", "#0f3a57", "#204867", "#215f77"],
      table: [
        {
          features: "Fast and optimized",
          Descripton: "PWA on Lighthouse",
          Contribution: "Optimized Images",
        },
        {
          features: "Dark/Light Theme Mode",
          Descripton: "Light/Dark Theme Mode",
          Contribution: "New Token Based Design",
        },
        {
          features: "Mobile first",
          Descripton:
            "Mobo Friendly Web app can be installed as a native app on your phone",
          Contribution: "Adaptive & Flexible Component based Design",
        },
        {
          features: "Usability",
          Descripton: "Any Tech Communities can use",
          Contribution: "Multi-Lingual Design",
        },
        {
          features: "Easy in management",
          Descripton: "Easy in Management by using Aura Admin",
          Contribution: "Redesigned Admin Panel",
        },
      ],
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
.aura {
  max-width: 75%;
  margin: 1rem auto;
}
.row {
  margin: 1rem auto;
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
  letter-spacing: 0rem;
  padding-bottom: 1rem;
}
h2 {
  color: #fff;
  font-size: 2rem;
  letter-spacing: 0rem;
  line-height: 2rem;
  padding-bottom: 3rem;
}
.heading--main {
  font-size: 4rem;
  color: #fff;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  padding-bottom: 2rem;
}
.theme--light.v-icon {
  color: #878787;
}
a:link a:active {
  color: #878787;
  font-size: 0.8rem;
}
a:visited {
  color: #878787;
}

.section4,
.section5,
.section1,
.section3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.section6 div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section7 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
}
.table-container {
  overflow-x: auto;
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
  width: 9px; /* Adjust the width as needed */
  height: 100%;
  background-color: transparent; /* This color will be blurred */
  box-shadow: -10px 0 10px 5px rgba(0, 0, 0, 0.5); /* Adjust the blur radius and color */
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
  padding: 0.5rem 1rem 2.5rem 1rem;
  font-size: 1rem;
  color: #878787;
  background: #191919;
  font-weight: 600;
}

th {
  background-color: #242424;
  padding: 1rem 1rem 2.5rem 1rem;
}
/* th:not(:first-child):not(:nth-child(2)) {} */
td:first-child {
  white-space: wrap; /* Prevent text wrapping */
}

.data--color-0 {
  background-color: #031b28;
  color: #42a5e7;
}
.data--color-1 {
  background-color: #1a2f40;
  color: #42a5e7;
}
.data--color-2 {
  background-color: #0f3a57;
  color: #42a5e7;
}
.data--color-3 {
  background-color: #204867;
  color: #42a5e7;
}
.data--color-4 {
  background-color: #215f77;
  color: #42a5e7;
}
/* .bg-red {
  background-color: #002116;
}
.bg-blue {
  background-color: #221b00;
}
.bg-green {
  background-color: #291314;
}
.bg-orange {
  background-color: #031b28;
}
.bg-purple {
  background-color: #080808;
} */

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
  p {
    font-size: 0.8rem;
  }
  h3 {
    color: #fff;
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  .heading--main {
    font-size: 4rem;
    color: #fff;
    font-weight: 600;
    line-height: 3rem;
    letter-spacing: -0.1rem;
    padding-bottom: 2rem;
  }

  .section7 {
    text-align: center;
  }
}
@media screen and (max-width: 850px) {
  .section6 div.v-image.v-responsive.theme--light {
    width: 600px;
  }
}
@media screen and (max-width: 650px) {
  .section6 div.v-image.v-responsive.theme--light {
    width: 450px;
  }
}
@media screen and (max-width: 550px) {
  .section6 div.v-image.v-responsive.theme--light {
    width: 420px;
  }
  th,
  td {
    white-space: wrap; /* Prevent text wrapping */
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
}
@media screen and (max-width: 450px) {
  .section6 div.v-image.v-responsive.theme--light {
    width: 300px;
  }
}
@media screen and (max-width: 300px) {
  .section6 div.v-image.v-responsive.theme--light {
    width: 200px;
  }
  .heading--main {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 1260px) {
  .aura {
    max-width: 90%;
  }
}
@media screen and (max-width: 1080px) {
  .aura {
    max-width: 95%;
  }
}

@media screen and (max-width: 960px) {
  .aura {
    max-width: 100%;
  }
}
</style>
