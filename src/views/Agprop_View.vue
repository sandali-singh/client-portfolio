<template>
  <v-main>
    <v-container class="agprop black--text pt-10">
      <v-row class="section1">
        <v-col cols="12" md="8" sm="12">
          <p>July'23 - Present</p>
          <h1 class="heading--main">agprop - Propvision</h1>
        </v-col>
        <v-col cols="12" md="2" sm="12">
          <v-img
            class="text-right"
            src="../assets/images/Group 2774.webp"
            alt="Award Winner Image"
            max-height="300"
            max-width="300"
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
        <v-col cols="12" md="2" sm="12">
          <v-img
            class="text-right"
            src="../assets/images/dsf.png"
            alt="agprop provision logo"
            max-height="150"
            max-width="150"
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
      <v-row class="pt-8 section2">
        <v-col cols="12" md="7" sm="12">
          <h3>Project Overview</h3>
          <p>
            As an Intern I was provided with a great opportunity to revamp the
            web version and create the mobile UI from scratch for agprop's
            flagship real estate products 'Propvisison' & Broker Network*.
          </p>
          <p>
            With no restrictions from stakeholders, the project turned out to be
            quite challenging due to the lack of proper design systems. This
            turned out to be a huge opportunity to create and learn about design
            Systems & component Libraries as well.
          </p>
        </v-col>
        <v-col cols="12" md="2" sm="12">
          <h3>Collaborators</h3>
          <p>
            Shivam Singh <br />
            (UI/UX Designer)
          </p>
          <p>agprop Private Limited</p>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <h3>Roles</h3>
          <p>UI/UX Design</p>
          <p>
            Design system and digital assets design
            <v-icon small>mdi-arrow-right</v-icon>
          </p>
          <p>
            (Logo, Brand assets, Print and Digital Materials, Corporate Swags)
          </p>
        </v-col>
      </v-row>
      <v-row class="section3">
        <v-col cols="12" md="12" sm="12">
          <v-img
            class="img-round-edge"
            src="../assets/images/agprop.webp"
            alt="agprop provision flags"
            max-height="550"
            max-width="100%"
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
        <v-col cols="12" md="4" sm="12">
          <v-img
            src="../assets/images/Frame 2608858.webp"
            alt="agprop mobile frame view1"
            max-height="500"
            max-width="600"
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
          <div>
            <h2>“</h2>
            <h2>Empowering Commercial Real Estate Ecosystem.</h2>
            <p>-agprop</p>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-img
            src="../assets/images/Frame 2608859.webp"
            alt="agprop mobile frame view2"
            max-height="500"
            max-width="600"
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
        <v-col cols="12" md="4" sm="12">
          <h3>Problem Statement</h3>
          <p>
            Real Estate in India is growing faster than ever but digitation in
            real estate has yet not caught up with this faster-growing sector.
          </p>
          <p>
            There are not many centralized platforms or services that provide
            online services such as creating property requirements, searching,
            and acquiring it, and also helping medium-sized companies/
            franchises/ Organizations manage their property needs and employees
            associated with that real estate.
          </p>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-img
            src="../assets/images/svsa.jpg"
            alt="agprop mobile frame grid view2"
            max-height="700"
            max-width="600"
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
          <h3>Challenges</h3>
          <ol>
            <li>Consistent Design for Multiple platforms Web & Mobile.</li>
            <li>
              To create an inclusive and equitable product that addresses users
              with different Real Estate needs.
            </li>
            <li>
              Reducing the complexity of the product into easy-to-use
              applications.
            </li>
            <li>
              Creating a product that is adaptable to users with little
              knowledge of technology and the Internet.
            </li>
          </ol>
        </v-col>
      </v-row>
      <v-row class="section6">
        <v-col cols="12" md="4" sm="12">
          <div class="section6--left">
            <h3>The Process</h3>
            <p>
              I noted everything that might go into making this product to get
              started with the process
              <v-icon small>mdi-arrow-right</v-icon>
            </p>
            <h3>1. Focus on UX first</h3>
            <p>
              I first started empathizing with possible user types and tried to
              address users' pain points.
            </p>
            <p>
              As there are many components and features to this project, it was
              clear that the user might find the application difficult to
              navigate and understand the complete features and capabilities.
            </p>
            <h3>2. Understand pain points & Ideate</h3>
            <p>
              The idea was to solve one problem and extend it to many. making
              the product more universally inclusive and equitable.
            </p>
            <h3>3. Simplify Interface & Design</h3>
            <p>
              The next step is to simplify the interface. There are many
              components and features to this project it was clear that the user
              might find it difficult to navigate and understand.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="8" sm="12" class="section6--right">
          <v-img
            class="img-round-edge"
            src="../assets/images/Hardcover Opened Book Mockup.webp"
            alt="Hardcover Opened Book Mockup"
            height="650px"
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
      <v-row class="section7">
        <v-col cols="12" md="8" sm="12">
          <v-img
            class="img-round-edge"
            src="../assets/images/image 13.webp"
            alt="Opened Book Mockup"
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
          <v-img
            class="img-round-edge"
            src="../assets/images/image 14.webp"
            alt="Opened Book Mockup"
            max-height="90%"
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
        <v-col cols="12" md="6" sm="12">
          <p>Low-Fidelity Wireframing and design concepts.</p>
        </v-col>
      </v-row>
      <v-row class="section9">
        <v-col cols="12" md="4" sm="12">
          <v-img
            src="../assets/images/Picture6.webp"
            alt="Desktop_Mobile view"
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
          <v-img
            src="../assets/images/Group 3587.webp"
            alt="Arrow flow layout"
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
          <h3>Feedback Driven Design</h3>
          <p>
            Regular Scrum Meetings with stakeholders and Team Leads helped
            gather feedback and insights for refining the interface, user flows,
            and overall experience. This resulted in the creation of a more
            user-centric product with great visual experience.
          </p>
          <p>
            By aligning UX principles together I was able to craft a product
            that was ready to Revolutionize the real estate sector.
          </p>
        </v-col>
      </v-row>
      <v-row class="section10">
        <v-col cols="12" md="6" sm="12">
          <h3 class="arrow">
            Design Process Outcomes
            <v-icon medium>mdi-arrow-right</v-icon>
          </h3>
          <p>
            I was able to create a product that will help Indian companies &
            brands manage their property, requirements, employees associated
            with a specific property, and future real estate needs seamlessly
            with better experiences.
          </p>
          <ol>
            <li>
              Improved Information Architecture - Content and features are
              redefined logically for easy navigation and efficient access to
              required information.
            </li>
            <li>
              Inclusive Design - Accessibility standards were incorporated &
              added to address the diverse needs of different brands
            </li>
            <li>
              Responsive Design - Implemented responsive design principles to
              adapt to various screen sizes and platforms.
            </li>
            <li>
              Feedback Process - Established a process for collecting user
              feedback for product improvements.
            </li>
          </ol>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-img
            src="../assets/images/Group 2855.webp"
            alt="Different View Port view"
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
      <v-row class="section11">
        <v-col cols="12" md="12" sm="12">
          <v-img
            src="../assets/images/Frame 2103.webp"
            alt="Mobile View layout"
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
      <v-row class="section12">
        <v-col cols="12" md="7" sm="12">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              This project helped me learn, understand, and create design
              systems, and design using variables, tokens, and components.
            </li>
            <li>
              Understood different approaches for designing mobile and web-based
              applications.
            </li>
            <li>Getting technical insights from Android and Web developers.</li>
          </ul>
        </v-col>
        <v-col cols="12" md="5" sm="12">
          <v-img
            class="mb-10"
            src="../assets/images/Group 2774.webp"
            alt="Award Winner image"
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

      <v-row class="section13">
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
                <a href="/about" class="ma-2">
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
                <a href="/musixverse" class="white--text">
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
.agprop {
  max-width: 75%;
  margin: 1rem auto;
}
.row {
  margin: 1rem auto;
}
.theme--light.v-icon {
  color: #878787;
}
.arrow .theme--light.v-icon {
  color: #000;
}

.heading--main {
  font-size: 3.5rem;
  color: #000;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.2rem;
  padding-bottom: 1rem;
}
p {
  color: #878787;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0rem;
  line-height: 1.2rem;
  padding-bottom: 0.5rem;
}
li {
  color: #878787;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0rem;
  line-height: 1.2rem;
  padding-bottom: 0.5rem;
}
h3 {
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0rem;
  padding-bottom: 1rem;
}
h2 {
  color: #000;
  font-size: 2.5rem;
  letter-spacing: 0rem;
  line-height: 2.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
}
.section1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.theme--light.v-icon {
  color: #878787;
}
.img-round-edge {
  border-radius: 1rem;
}

.section4,
.section6 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section5 {
  display: flex;
  align-items: center;
}
.section6--left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.section12 {
  margin: 3rem 0 3rem;
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
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
  .section13 .v-btn--rounded {
    display: none;
  }
}
@media screen and (max-width: 660px) {
  .heading--main {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 600;
  }
}
@media screen and (max-width: 960px) {
  .section12 div.v-image.v-responsive.theme--light {
    max-width: 400px;
  }
  .section12 div,
  .section1 div,
  .section4 div,
  .section5 div {
    margin: 0 auto;
  }
}

@media screen and (max-width: 850px) {
  .section6 .section6--right div.v-image.v-responsive.theme--light {
    max-height: 500px;
  }
}
@media screen and (max-width: 700px) {
  .section6 .section6--right div.v-image.v-responsive.theme--light {
    max-height: 300px;
  }
  .section12 div.v-image.v-responsive.theme--light {
    max-width: 200px;
  }
}
@media screen and (max-width: 1260px) {
  .agprop {
    max-width: 90%;
  }
}

@media screen and (max-width: 960px) {
  .agprop {
    max-width: 100%;
  }
}
</style>
