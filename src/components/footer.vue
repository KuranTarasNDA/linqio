<template>
  <footer class="footer">
    <div class="container">
      <a href="https://www.lingq.io/register" class="footer__left">
        <div class="footer__left-img">
          <img src="@/assets/footer/01.png" alt="">
        </div>
        <div class="footer__left-text">
          <span>
            퀘스트 선택
          </span>
        </div>
      </a>
      <div class="footer__center">
        <a :href="pdfOne" target="_blank">개인정보보호정책</a>
        <a :href="pdfTwo" target="_blank">서비스사용정책</a>
      </div>
      <a href="http://lingq.io/login" class="footer__right">
        <span>
           로그인
        </span>
      </a>
    </div>
    <div class="bg-mob">
      <img src="@/assets/footer/02.png" alt="">
    </div>
  </footer>
</template>
<style lang="sass">
.footer
  background: linear-gradient(267.57deg, #4B50C5 17.97%, #7F87D5 92.09%)
  padding: 0 25px
  position: relative
  z-index: 10
  @media (max-width: 911px)
    background: linear-gradient(30.93deg, #7F87D5 -4.62%, #4B50C5 121.47%)
  .container
    align-items: center
    padding: 17px 0
    justify-content: space-between
    @media (max-width: 911px)
      padding: 28px 0 122px 0
    .footer__left
      display: flex
      align-items: center
      transition-duration: 0.4s
      cursor: pointer
      &:hover
        opacity: 0.7
      .footer__left-img
        background: linear-gradient(52.78deg, rgba(255, 255, 255, 0.448) -18.46%, rgba(255, 255, 255, 0.077) 111.82%)
        box-shadow: 0px 4px 18px rgba(0, 58, 62, 0.13)
        border-radius: 50%
        min-width: 42px
        height: 42px
        display: flex
        align-items: center
        justify-content: center
        margin-right: 12px
      .footer__left-text
        span
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 14px
          line-height: 100%
          color: #FFFFFF
    .footer__center
      @media (max-width: 911px)
        position: absolute
        bottom: 35px
        left: 50%
        transform: translateX(-50%)
        display: flex
        flex-direction: column
        z-index: 5
      a
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 100%
        color: #FFFFFF
        cursor: pointer
        transition-duration: 0.4s
        @media (max-width: 911px)
          text-align: center
        &:hover
          opacity: 0.7
        &:first-child
          margin-right: 30px
          @media (max-width: 911px)
            margin-right: 0
            margin-bottom: 24px
    .footer__right
      &:hover
        span
          transition-duration: 0.4s
          box-shadow: 0px 15px 58px rgba(0, 0, 0, 0.13)
          opacity: 0.7
      span
        cursor: pointer
        transition-duration: 0.4s
        background: linear-gradient(49.15deg, rgba(255, 255, 255, 0.448) -22.44%, rgba(255, 255, 255, 0.077) 115.32%)
        box-shadow: 0px 4px 18px rgba(0, 58, 62, 0.13)
        border-radius: 10px
        padding: 11.5px 56px
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 500
        font-size: 16px
        line-height: 19px
        letter-spacing: 0.02em
        text-transform: capitalize
        color: #FFFFFF
        @media (max-width: 911px)
          padding: 11.5px 51px
  .bg-mob
    img
      width: 213px 
      height: 95px
      position: absolute
      right: 0
      bottom: 0
      object-fit: cover
</style>
<script>
export default {
  name: 'vue',
  data() {
    return {
      pdfOne : require('@/assets/pdf/privacy-policy.pdf'),
      pdfTwo : require('@/assets/pdf/service-use-policy.pdf')
    }
  }
}
</script>

















