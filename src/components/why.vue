<template>
  <section class="why">
    <a href="" id="why" class="anchor"></a>
    <div v-scrollanimation class="container">
      <h3>
        베네핏
      </h3>
      <h1>
        이 서비스의 장점
      </h1>
      <div class="why__all">
        <div class="why__item">
          <div class="why__item-wrapper">
            <div class="why__item-img">
              <img src="@/assets/why/01.png" alt="">
              <img src="@/assets/why/02.png" alt="">
            </div>
            <div class="why__item-text">
              <div class="why__item-title">
              <span>
                퀘스트
              </span>
                <div></div>
              </div>
              <p>
                퀘스트는 직업 및 산업 동향을 근거로 개발 되었습니다.
              </p>
            </div>
          </div>
          <div class="why__item-bg">
            <img src="@/assets/why/03.png" alt="">
          </div>
        </div>
        <div class="why__item">
          <div class="why__item-wrapper">
            <div class="why__item-img">
              <img src="@/assets/why/04.png" alt="">
              <img src="@/assets/why/05.png" alt="">
            </div>
            <div class="why__item-text">
              <div class="why__item-title">
              <span>
                당신의 역량 기록
              </span>
                <div></div>
              </div>
              <p>
                당신의 역량은 일생 동안 기록 되어 이직 시 도움이 됩니다.
              </p>
            </div>
          </div>
          <div class="why__item-bg">
            <img src="@/assets/why/06.png" alt="">
          </div>
        </div>
        <div class="why__item">
          <div class="why__item-wrapper">
            <div class="why__item-img">
              <img src="@/assets/why/07.png" alt="">
              <img src="@/assets/why/08.png" alt="">
            </div>
            <div class="why__item-text">
              <div class="why__item-title">
              <span>
                채용회사의 경쟁력
              </span>
                <div></div>
              </div>
              <p>
                채용 회사는 보다 적합한 인재를 빨리 찾을 수 있습니다.
              </p>
            </div>
          </div>
          <div class="why__item-bg">
            <img src="@/assets/why/09.png" alt="">
          </div>
        </div>
        <div class="why__item">
          <div class="why__item-wrapper">
            <div class="why__item-img">
              <img src="@/assets/why/10.png" alt="">
              <img src="@/assets/why/11.png" alt="">
            </div>
            <div class="why__item-text">
              <div class="why__item-title">
              <span>
                익명성
              </span>
                <div></div>
              </div>
              <p>
                ID이외에 당신의 이름은 노출 되지 않습니다. 역량만 먼저 알리세요.
              </p>
            </div>
          </div>
          <div class="why__item-bg">
            <img src="@/assets/why/12.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="@/assets/why/13.png" alt="">
      <img src="@/assets/why/14.png" alt="">
      <img src="@/assets/why/15.png" alt="">
      <img src="@/assets/why/16.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/why/17.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.why
  position: relative
  padding: 0 25px 294px 25px
  @media (max-width: 911px)
    padding-bottom: 120px
  .anchor
    position: absolute
    top: -50px
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
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 44px
      line-height: 52px
      color: #0165A7
      text-align: center
      margin: 4px 0 78px 0
      @media (max-width: 911px)
        margin-bottom: 58px
    .why__all
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 40px
      @media (max-width: 1024px)
        grid-gap: 18px
      @media (max-width: 911px)
        grid-template-columns: 1fr
      .why__item
        position: relative
        cursor: pointer
        border-radius: 32px
        background: linear-gradient(276.14deg, #3C8501 -18.77%, #C9FD9C 121%)
        transition-duration: 0.4s
        &:hover
          box-shadow: 0px 15px 58px rgba(0, 0, 0, 0.13)
          transition-duration: 0.4s
          .why__item-wrapper
            transform: translateY(-6px)
        &:nth-child(2n)
          background: linear-gradient(276.14deg, #016D85 -18.77%, #9CFDFD 121%)
          .why__item-wrapper
            box-shadow: 0px 15px 39px rgba(3, 116, 109, 0.16)
            .why__item-text
              .why__item-title
                div
                  background: #1FB6C0
                  opacity: 0.4
                  filter: blur(19px)
                span
                  color: rgba(0, 55, 67, 0.8)
              p
                color: rgba(0, 55, 67, 0.6)
        &:nth-child(3n)
          background: linear-gradient(276.14deg, #853101 -18.77%, #FFD53F 88.24%)
          .why__item-wrapper
            box-shadow: 0px 15px 39px rgba(116, 71, 3, 0.16)
            .why__item-text
              .why__item-title
                div
                  background: #C09D1F
                  opacity: 0.4
                  filter: blur(19px)
                span
                  color: #985700
              p
                color: rgba(46, 36, 4, 0.6)
        &:nth-child(4n)
          background: linear-gradient(270.05deg, #4159DE -1.4%, #B6C0F3 101.05%)
          .why__item-wrapper
            box-shadow: 0px 15px 39px rgba(3, 8, 116, 0.17)
            .why__item-text
              .why__item-title
                div
                  background: #1F2FC0
                  opacity: 0.4
                  filter: blur(19px)
                span
                  color: #0B208C
              p
                color: rgba(2, 16, 91, 0.6)
        .why__item-wrapper
          display: flex
          background: #FFFFFF
          border-radius: 30px
          box-shadow: 0px 20px 39px rgba(68, 90, 4, 0.16)
          transition-duration: 0.4s
          align-items: center
          padding: 35px 40px
          position: relative
          z-index: 2
          @media (max-width: 1024px)
            padding: 20px 25px
          .why__item-img
            position: relative
            img
              &:first-child
                @media (max-width: 911px)
                  width: 90px
                  height: 90px
                  object-fit: contain
              &:nth-child(2)
                position: absolute
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
                @media (max-width: 911px)
                  width: 49px
                  height: 49px
                  object-fit: contain
          .why__item-text
            display: flex
            flex-direction: column
            margin-left: 40px
            @media (max-width: 1024px)
              margin-left: 25px
            .why__item-title
              position: relative
              margin-right: auto
              margin-bottom: 28px
              @media (max-width: 911px)
                margin-bottom: 23px
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: 600
                font-size: 24px
                line-height: 28px
                color: rgba(9, 67, 0, 0.8)
                position: relative
                z-index: 2
                @media (max-width: 911px)
                  font-size: 18px
                  line-height: 21px
              div
                width: calc(100% + 16px)
                height: 8px
                background: #93C01F
                opacity: 0.4
                filter: blur(19px)
                position: absolute
                z-index: 1
                bottom: 0
                left: 50%
                transform: translateX(-50%)
            p
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 500
              font-size: 16px
              line-height: 170%
              color: rgba(10, 46, 4, 0.6)
              max-width: 239px
              @media (max-width: 911px)
                font-size: 12px
                line-height: 20px
                max-width: 100%
        .why__item-bg
          img
            position: absolute
            right: 40px
            top: 50%
            transform: translateY(-50%)
            z-index: 2
            @media (max-width: 911px)
              display: none
  .bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      z-index: 1
      &:first-child
        left: 2.29%
        width: 25.4%
        top: -26px
      &:nth-child(2)
        left: 13.75%
        top: 105px
        width: 18.26%
      &:nth-child(3)
        left: 0
        bottom: 78px
        width: 35.13%
      &:nth-child(4)
        right: 0
        bottom: 128px
        width: 65.62%
        height: 523px
  .bg-mob
    img
      position: absolute
      left: 0
      width: 100%
      top: 46px
      object-fit: fill
      height: 837px



</style>























