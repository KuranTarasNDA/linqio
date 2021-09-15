<template>
  <section class="way">
    <a href="" id="way" class="anchor"></a>
    <div v-scrollanimation class="container">
      <div class="way__text">
        <h3>
          이 서비스의 장점
        </h3>
        <h1>
          이 서비스의 쉬운 활용법
        </h1>
      </div>
      <div class="way__all">
        <div class="way__item">
          <div class="way__item-wrapper">
            <div class="way__img">
              <img src="@/assets/way/01.png" alt="">
            </div>
            <div class="way__text">
              <p>
                김과장은 퀘스트에 답변을 올리면서 자신에게 더 나은 곳으로 이직할 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="way__item">
          <div class="way__item-wrapper">
            <div class="way__img">
              <img src="@/assets/way/03.png" alt="">
            </div>
            <div class="way__text">
              <p>
                만일 채용 회사가 퀘스트를 직접 올리면 퀘스트에 대한 답변을 검토하면서 가장 적합한 인재를 찾을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="way__item">
          <div class="way__item-wrapper">
            <div class="way__img">
              <img src="@/assets/way/05.png" alt="">
            </div>
            <div class="way__text">
              <p>
                대학 졸업생은 좋은 답변을 누적 시켜 일생동안 경력관리에 활용 할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="@/assets/way/09.png" alt="">
      <img src="@/assets/way/10.png" alt="">
      <img src="@/assets/way/11.png" alt="">
      <img src="@/assets/way/12.png" alt="">
      <img src="@/assets/way/13.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/way/14.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.way
  position: relative
  padding: 0 25px
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
    .way__text
      display: flex
      flex-direction: column
      margin-right: 40px
      @media (max-width: 911px)
        margin-right: 0
        align-items: center
        margin-bottom: 89px
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
        background: rgba(38, 143, 212, 0.15)
        border-radius: 8px
        padding: 9px 34px
        @media (max-width: 911px)
          margin-right: 0
          padding: 7px 19px
      h1
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 600
        font-size: 44px
        line-height: 52px
        color: #0165A7
        margin: 20px 0 0 0
        @media (max-width: 911px)
          margin: 8px 0 0 0
          font-size: 28px
          line-height: 33px
    .way__all
      display: grid
      grid-template-columns: 1fr
      grid-gap: 20px
      max-width: 490px
      width: 100%
      .way__item
        border-radius: 32px
        cursor: pointer
        background: linear-gradient(99.04deg, #CBEAAC -12.3%, #FFFFFF 102.16%)
        display: flex
        transition-duration: 0.4s
        &:hover
          box-shadow: 0px 15px 58px rgba(0, 0, 0, 0.23)
          transition-duration: 0.4s
          .way__item-wrapper
            transform: translateY(-6px)
        &:nth-child(2n)
          background: linear-gradient(99.04deg, #ACEAE6 -12.3%, #FFFFFF 102.16%)
          .way__item-wrapper
            background: linear-gradient(100.16deg, #41BAC1 -2.61%, #9FE2E7 102.4%)
            box-shadow: 0px 8px 28px rgba(3, 182, 193, 0.1)
            border-radius: 30px
          .way__img
            background: linear-gradient(360deg, rgba(255, 255, 255, 0.448) 2.45%, rgba(255, 255, 255, 0.077) 112.5%)
            box-shadow: 0px 4px 18px rgba(0, 58, 62, 0.13)
            border-radius: 30px
        &:nth-child(3n)
          background: linear-gradient(99.04deg, #AEACEA -12.3%, #FFFFFF 102.16%)
          .way__item-wrapper
            background: linear-gradient(100.16deg, #4146C1 -2.61%, #9FA7E7 102.46%)
            box-shadow: 0px 8px 28px rgba(7, 3, 193, 0.1)
            border-radius: 30px
          .way__img
            background: linear-gradient(360deg, rgba(255, 255, 255, 0.448) -2.45%, rgba(255, 255, 255, 0.077) 112.5%)
            box-shadow: 0px 4px 18px rgba(0, 58, 62, 0.13)
            border-radius: 30px
        .way__item-wrapper
          transition-duration: 0.4s
          background: linear-gradient(100.16deg, #81C141 -2.61%, #C7E79F 102.4%)
          box-shadow: 0px 8px 28px rgba(96, 165, 8, 0.3)
          display: flex
          align-items: center
          padding: 24px 40px
          border-radius: 30px
          @media (max-width: 911px)
            padding: 20px 25px
          .way__img
            min-width: 106px
            height: 106px
            display: flex
            background: linear-gradient(360deg, rgba(255, 255, 255, 0.448) -2.45%, rgba(255, 255, 255, 0.077) 112.5%)
            box-shadow: 0px 4px 18px rgba(0, 58, 62, 0.13)
            border-radius: 30px
            margin-right: 40px
            @media (max-width: 911px)
              min-width: 90px
              margin-right: 26px
              height: 90px
              border-radius: 25px
            img
              margin: auto
              @media (max-width: 911px)
                width: 59.43px
                height: 59.43px
          .way__text
            margin: auto 0
            p
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 500
              font-size: 16px
              line-height: 170%
              color: #FFFFFF
              @media (max-width: 911px)
                font-size: 12px
                line-height: 20px
  .bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      z-index: 1
      &:first-child
        left: 0
        top: 330px
        width: 25.41%
      &:nth-child(2)
        width: 68.26%
        left: 0
        bottom: 0
        height: 494px
      &:nth-child(3)
        width: 10.13%
        right: 42.1%
        bottom: -61px
      &:nth-child(4)
        width: 18.61%
        right: 4.93%
        bottom: -16px
      &:nth-child(5)
        top: -217px
        right: 0
        width: 30.69%
  .bg-mob
    img
      width: 100%
      height: 725px
      left: 0
      top: -39px
      position: absolute
      object-fit: fill

</style>


























