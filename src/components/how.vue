<template>
  <section class="how">
    <a href="" id='how' class="anchor"></a>
    <div v-scrollanimation class="container">
      <h3>
        링큐아이오 플랫폼
      </h3>
      <h1>
        링큐아이오 사용법
      </h1>
      <h2>
        퀘스트를 선택하고 답변을 완성해 보세요. 그러면 채용 회사가 당신의 답변을 보고 당신에 연락할 수 있습니다.
      </h2>
      <div class="how__all">
        <div class="how__item">
          <div class="how__item-wrapper">
            <div class="how__item-img">
              <img src="@/assets/how/01.png" alt="">
            </div>
            <div class="how__item-text">
              <span>
                퀘스트 선택
              </span>
              <div></div>
            </div>
          </div>
          <div class="how__item-bg">
            <img src="@/assets/how/04.png" alt="">
            <img src="@/assets/how/07.png" alt="">
            <img src="@/assets/how/08.png" alt="">
          </div>
          <div class="how__arrow">
            <svg width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8 12L1 23" stroke="#203202" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="how__item">
          <div class="how__item-wrapper">
            <div class="how__item-img">
              <img src="@/assets/how/02.png" alt="">
            </div>
            <div class="how__item-text">
              <span>
                답변
              </span>
              <div></div>
            </div>
          </div>
          <div class="how__item-bg">
            <img src="@/assets/how/05.png" alt="">
            <img src="@/assets/how/09.png" alt="">
            <img src="@/assets/how/10.png" alt="">
          </div>
          <div class="how__arrow">
            <svg width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8 12L1 23" stroke="#203202" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="how__item">
          <div class="how__item-wrapper">
            <div class="how__item-img">
              <img src="@/assets/how/03.png" alt="">
            </div>
            <div class="how__item-text">
              <span>
                채용
              </span>
              <div></div>
            </div>
          </div>
          <div class="how__item-bg">
            <img src="@/assets/how/06.png" alt="">
            <img src="@/assets/how/11.png" alt="">
            <img src="@/assets/how/12.png" alt="">
          </div>
          <div class="how__arrow">
            <svg width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8 12L1 23" stroke="#203202" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="@/assets/how/14.png" alt="">
      <img src="@/assets/how/15.png" alt="">
      <img src="@/assets/how/16.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/how/17.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.how
  padding: 23px 25px 229px 25px
  position: relative
  @media (max-width: 911px)
    padding-bottom: 120px
  .anchor
    position: absolute
    top: -27px
  .container
    flex-direction: column
    position: relative
    z-index: 2
    h3
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 8px
      line-height: 9px
      letter-spacing: 0.14em
      text-transform: uppercase
      color: #268FD4
      margin: 0 auto
      background: #EAF4FB
      border-radius: 8px
      padding: 9px 34px
      @media (max-width: 911px)
        padding: 7px 13px
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 44px
      line-height: 52px
      color: #0165A7
      text-align: center
      margin: 4px 0 22px 0
      @media (max-width: 911px)
        font-size: 28px
        line-height: 33.18px
        margin: 8px 0 20px 0
    h2
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 170%
      text-align: center
      max-width: 364px
      margin: 0 auto
      color: rgba(1, 101, 167, 0.8)
    .how__all
      margin-top: 78px
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      grid-gap: 40px
      @media (max-width: 911px)
        grid-template-columns: 1fr
        grid-gap: 46px
        margin-top: 58px
      .how__item
        position: relative
        cursor: pointer
        background: linear-gradient(276.14deg, #3C8501 -18.77%, #C9FD9C 121%)
        transition-duration: 0.4s
        border-radius: 21px
        &:hover
          box-shadow: 0px 15px 58px rgba(0, 0, 0, 0.13)
          .how__item-wrapper
            transform: translateY(-6px)
        &:nth-child(2)
          background: linear-gradient(270.05deg, #4159DE -1.4%, #B6C0F3 101.05%)
          .how__item-wrapper
            background: #FFFFFF
            box-shadow: 0px 19px 30px rgba(33, 85, 164, 0.22)
            border-radius: 20px
            .how__item-text
              span
                color: #001990
              div
                background: #293AD3
                opacity: 0.6
                filter: blur(19px)
        &:nth-child(3)
          background: linear-gradient(270.05deg, #019F97 -1.4%, #01DDDD 101.05%)
          .how__item-wrapper
            background: #FFFFFF
            box-shadow: 0px 15px 58px rgba(3, 79, 74, 0.13)
            border-radius: 20px
            .how__item-text
              span
                color: #00667D
              div
                background: #29B3D3
                opacity: 0.6
                filter: blur(19px)
          .how__arrow
            display: none
        .how__item-wrapper
          padding: 48px 30px 36px 30px
          display: flex
          position: relative
          z-index: 2
          align-items: center
          flex-direction: column
          background: #FFFFFF
          transition-duration: 0.4s
          box-shadow: 0px 15px 58px rgba(87, 116, 3, 0.13)
          border-radius: 20px
          @media (max-width: 911px)
            padding: 29px 22px 19px 22px
          .how__item-text
            margin-top: 55px
            position: relative
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 20px
              line-height: 24px
              text-align: center
              color: rgba(9, 67, 0, 0.8)
              position: relative
              z-index: 2
            div
              width: calc(100% + 19px)
              height: 8px
              background: #93C01F
              opacity: 0.6
              filter: blur(19px)
              position: absolute
              bottom: -1px
              left: 50%
              transform: translateX(-50%)
              z-index: 1
        .how__item-bg
          position: absolute
          width: 100%
          height: 100%
          left: 0
          top: 0
          z-index: 2
          img
            position: absolute
            &:first-child
              top: 57px
              left: 50%
              transform: translateX(-50%)
            &:nth-child(2)
              left: 29px
              bottom: 27px
              @media (max-width: 911px)
                left: 22px
                bottom: 22px
            &:nth-child(3)
              top: 23px
              right: 32px
              @media (max-width: 911px)
                top: 22px
                right: 22px
        .how__arrow
          position: absolute
          right: -16px
          transform: translate(100%, -50%)
          top: 50%
          @media (max-width: 911px)
            bottom: -34px
            top: auto
            width: 8px
            height: 22px
            left: 50%
            transform: translate(-50%) rotate(90deg)
  .bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      z-index: 1
      &:first-child
        left: 0
        top: -70px
        width: 55.06%
        object-fit: fill
        height: 831px
      &:nth-child(2)
        right: 23.81%
        width: 22.7%
        bottom: 147px
      &:nth-child(3)
        right: 6.111%
        width: 16.111%
        top: 231px
  .bg-mob
    img
      position: absolute
      left: 0
      top: -15px
      width: 100%
      height: 1087px
      object-fit: fill

</style>



















