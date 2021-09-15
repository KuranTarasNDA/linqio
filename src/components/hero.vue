<template>
  <section class="hero">
    <div class="container">
      <div class="hero__text">
        <h3>링큐아이오 플랫폼</h3>
        <h1>
          당신의 역량을 PR하세요
        </h1>
        <h2>
          당신을 채용할 회사를 보다 쉽게 찾고 싶나요? 퀘스트에 답변을 올리고 당신을 채용 회사에 PR하세요.
        </h2>
        <div class="hero__buttons">
          <a href="#join" class="hero__btn">
            <div class="hero__btn-wrapper">
              <span>
                로그인
              </span>
              <div class="hero__btn-gradients">
                <img src="@/assets/hero/04.png" alt="">
                <img src="@/assets/hero/05.png" alt="">
              </div>
            </div>
            <div class="hero-blur"></div>
          </a>
          <a href="#join" class="hero__btn">
            <span>
               계정 만들기
            </span>
          </a>
        </div>
      </div>
      <div class="hero__text hero__text_hide">
        <h3>링큐아이오 플랫폼</h3>
        <h1>
          인재를 찾아 보세요
        </h1>
        <h2>
          인재를 채용하는데 어려움이 있나요? 퀘스트에 대한 답변을 검토하고 좋은 답변을 올린 사람에게 인터뷰를 요청해 보세요.
        </h2>
        <div class="hero__buttons">
          <a href="#join" class="hero__btn">
            <div class="hero__btn-wrapper">
              <span>
                로그인
              </span>
              <div class="hero__btn-gradients">
                <img src="@/assets/hero/04.png" alt="">
                <img src="@/assets/hero/05.png" alt="">
              </div>
            </div>
            <div class="hero-blur"></div>
          </a>
          <a href="#join" class="hero__btn">
            <span>
               계정 만들기
            </span>
          </a>
        </div>
      </div>
      <div class="hero__img">
        <img src="@/assets/hero/01.png" alt="">
      </div>
    </div>
    <div class="hero__bg">
      <img src="@/assets/hero/06.png" alt="">
      <img src="@/assets/hero/07.png" alt="">
      <img src="@/assets/hero/08.png" alt="">
      <img src="@/assets/hero/09.png" alt="">
      <img src="@/assets/hero/10.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/hero/12.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.hero
  padding: 93px 25px 0 25px
  position: relative
  @media (max-width: 911px)
    padding: 157px 25px 115px 25px
  .container
    justify-content: space-between
    position: relative
    z-index: 2
    @media (max-width: 911px)
      flex-direction: column-reverse
    .hero__text
      display: flex
      flex-direction: column
      margin-top: 83px
      width: 37.8%
      @media (max-width: 911px)
        width: 100%
        margin-top: 0
      h3
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 8px
        line-height: 9px
        letter-spacing: 0.18em
        text-transform: uppercase
        color: #268FD4
      h1
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 600
        font-size: 70px
        line-height: 118%
        letter-spacing: -0.01em
        color: #212F80
        margin: 8px 0 20px 0
        width: 100%
        @media (max-width: 1440px)
          font-size: 4.861vw
        @media (max-width: 911px)
          font-size: 40px
          width: auto
          margin: 10px 0 29px 0
          max-width: 235px
      h2
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 145%
        color: rgba(63, 81, 181, 0.8)
        max-width: 337px
        @media (max-width: 911px)
          max-width: 100%
      .hero__buttons
        display: flex
        align-items: center
        margin-top: 51px
        @media (max-width: 911px)
          justify-content: space-between
          margin-top: 64px
        .hero__btn
          cursor: pointer
          &:first-child
            position: relative
            transition-duration: 0.4s
            border-radius: 10px
            &:hover
              opacity: 0.8
              box-shadow: 0px 10px 14px rgba(38, 143, 212, 0.2)
              transition-duration: 0.4s
              .hero__btn-wrapper
                span
                  color: #212F80
            .hero__btn-wrapper
              background: linear-gradient(86.58deg, #28B3D3 -2.91%, #93C01F 110.26%)
              border-radius: 10px
              padding: 12px 60px 13px 60px
              position: relative
              overflow: hidden
              z-index: 2
              @media (max-width: 911px)
                padding: 12px 55px 13px 55px
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 14px
                line-height: 17px
                transition-duration: 0.4s
                text-transform: capitalize
                color: #FFFFFF
                position: relative
                z-index: 2
                white-space: nowrap
              .hero__btn-gradients
                img
                  position: absolute
                  z-index: 1
                  &:first-child
                    top: 0
                    right: 0
                  &:last-child
                    left: 0
                    bottom: 0
            .hero-blur
              background: linear-gradient(93.21deg, #3BF9B4 -9.23%, #B0DF4B 112.53%)
              opacity: 0.6
              filter: blur(26px)
              border-radius: 10px
              width: 114px
              height: 30px
              position: absolute
              top: 22px
              left: 50%
              transform: translateX(-50%)
              z-index: 1
              pointer-events: none
          &:last-child
            margin-left: 36px
            @media (max-width: 911px)
              margin-left: 0
            &:hover
              span
                color: #212F80
                border-bottom-color: #212F80
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 500
              transition-duration: 0.4s
              font-size: 14px
              line-height: 17px
              color: #E8921F
              border-bottom: 1px solid #E8921F
              white-space: nowrap
    .hero__text_hide
      display: none
    .hero__img
      display: flex
      max-width: 754px
      height: 629px
      margin-right: -107px
      @media (max-width: 1400px)
        margin-right: 0
      @media (max-width: 1200px)
        margin-top: -100px
      @media (max-width: 911px)
        width: 100%
        height: 350px
        margin-top: -80px
        margin-bottom: -30px
      img
        width: 100%
        height: 100%
        object-fit: contain
  .hero__bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      &:first-child
        top: 0
        left: 0
        width: 100%
        height: calc(100% + 164px)
        object-fit: fill
      &:nth-child(2)
        width: 8.125%
        left: 5.2777%
        bottom: 115px
      &:nth-child(3)
        width: 15.972%
        left: 31.25%
        top: 109px
      &:nth-child(4)
        width: 10.138%
        top: 128px
        right: 35.208%
      &:nth-child(5)
        width: 6.18%
        top: 124px
        right: 18.055%
  .bg-mob
    img
      width: 100%
      object-fit: fill
      left: 0
      top: 0
      position: absolute
      height: 665px




</style>
















