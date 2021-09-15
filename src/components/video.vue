<template>
  <section class="video">
    <a href="" id="video" class="anchor"></a>
    <div v-scrollanimation class="container">
      <div class="video__text">
        <h3>
          비디오 프레젠테이션
        </h3>
        <h1>
          동영상을 보면 더 쉽게 이해됩니다.
        </h1>
        <h2>
          링큐아이오 플랫폼 사용법에 대한 짧은 동영상
        </h2>
      </div>
      <div class="video__video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/U-sFmT2b9Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="bg">
      <img src="@/assets/video/02.png" alt="">
      <img src="@/assets/video/03.png" alt="">
      <img src="@/assets/video/04.png" alt="">
      <img src="@/assets/video/05.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/video/06.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.video
  padding: 0 25px 200px 25px
  position: relative
  @media (max-width: 911px)
    padding-bottom: 129px
  .anchor
    position: absolute
    top: -50px
  .container
    justify-content: space-between
    align-items: center
    position: relative
    z-index: 2
    @media (max-width: 911px)
      flex-direction: column
    .video__text
      display: flex
      flex-direction: column
      min-width: 330px
      margin-right: 30px
      @media (max-width: 911px)
        min-width: auto
        margin-right: 0
        width: 100%
        align-items: center
        margin-bottom: 44px
      h3
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 8px
        line-height: 9px
        letter-spacing: 0.14em
        text-transform: uppercase
        color: #268FD4
        margin: 0 auto 0 0
        background: #EAF4FB
        border-radius: 8px
        padding: 9px 34px
        @media (max-width: 911px)
          margin: 0 auto
          padding: 7px 9px
      h1
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 600
        font-size: 44px
        line-height: 52px
        color: #0165A7
        margin: 12px 0 22px 0
        max-width: 330px
        @media (max-width: 911px)
          font-size: 28px
          margin: 8px 0 21px 0
          max-width: 230px
          line-height: 33px
          text-align: center
      h2
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 14px
        line-height: 170%
        max-width: 269px
        color: rgba(1, 101, 167, 0.8)
        @media (max-width: 911px)
          max-width: none
          text-align: center
    .video__video
      width: 100%
      max-width: 746px
      height: 408px
      @media (max-width: 911px)
        max-width: 100%
        height: 400px
      @media (max-width: 700px)
        height: 300px
        @media (max-width: 600px)
          height: 200px
      img
        width: 100%
        height: 100%
        object-fit: cover
  .bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      z-index: 1
      &:first-child
        width: 10.13%
        top: 23px
        left: 4.02%
      &:nth-child(2)
        width: 10.13%
        left: 22.7%
        top: 278px
      &:nth-child(3)
        right: 0
        bottom: 29px
        width: 66.25%
        height: 663px
      &:nth-child(4)
        right: 0
        width: 67.01%
        bottom: 101px
        height: 622px
  .bg-mob
    img
      position: absolute
      width: 100%
      height: 549px
      left: 0
      top: 15px
      object-fit: fill
</style>














