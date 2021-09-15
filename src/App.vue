<template>
  <div id="app">
    <Header />
    <main class="main">
      <Hero />
      <How />
      <Video />
      <Why />
      <Way />
      <Join />
      <Job />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header";
import Hero from "./components/hero";
import How from "./components/how";
import Video from "./components/video";
import Why from "./components/why";
import Way from "./components/way";
import Job from "./components/job";
import Footer from "./components/footer";
import Join from "./components/join";
export default {
  name: 'App',
  components: {
    Join,
    Footer,
    Job,
    Way,
    Why,
    Video,
    How,
    Hero,
    Header
  },
}

</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
.container
  width: 100%
  max-width: 1140px
  margin: 0 auto
  display: flex
*
  margin: 0
  padding: 0
  box-sizing: border-box
  text-decoration: none
  outline: none
  appearance: none
  -webkit-appearance: none
  box-shadow: none
  border-radius: 0
  border: none
  line-height: 1
  scroll-behavior: smooth
.bg-mob
  display: none
  @media (max-width: 911px)
    display: flex
.scroll
  overflow: hidden
.before-enter
  opacity: 0
  transform: translateY(150px)
  transition: all 0.4s ease-out
.enter
  opacity: 1
  transform: translateY(0px)
</style>





















