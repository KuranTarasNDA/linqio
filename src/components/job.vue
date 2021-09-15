<template>
  <section class="job">
    <a href="" id="job" class="anchor"></a>
    <div v-scrollanimation class="container">
      <h1>
        자기계발 채용 연계 솔루션
      </h1>
      <p>
        이직과 취업에 연계되는 자기계발은 일생 동안의 경력 관리에 가장 중요한 부분입니다. 이직 이나 취업을 원할 경우 상대 회사가 원하는 역량을 가지는 것이 무엇보다 중요합니다. 그런 관점에서 빅데이터를 기반으로 한 퀘스트가 당신을 더 돋보이게 할 수 있습니다. 채용 회사에게는 포지션에 가장 적합한 역량을 가진 사람을 찾아 낼 수 있도록 도와줍니다.
      </p>
    </div>
    <div class="bg">
      <img src="@/assets/job/01.png" alt="">
      <img src="@/assets/job/02.png" alt="">
      <img src="@/assets/job/03.png" alt="">
      <img src="@/assets/job/04.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/job/05.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.job
  padding: 146px 25px 87px 25px
  position: relative
  @media (max-width: 911px)
    padding: 98px 25px 122px 25px
    overflow: hidden
  .container
    align-items: center
    justify-content: space-between
    position: relative
    z-index: 2
    @media (max-width: 911px)
      flex-direction: column
      align-items: flex-start
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 44px
      line-height: 52px
      color: #0165A7
      margin-right: 40px
      min-width: 300px
      @media (max-width: 911px)
        min-width: auto
        margin-right: 0
        text-align: left
        margin-bottom: 46px
        font-size: 28px
        line-height: 33px
    p
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: 300
      font-size: 14px
      line-height: 170%
      color: #003354
      max-width: 550px
      @media (max-width: 911px)
        font-size: 12px
        line-height: 23px
        max-width: 100%
  .bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      z-index: 1
      &:first-child
        left: 0
        bottom: -76px
        width: 39.1%
      &:nth-child(2)
        left: 0
        bottom: -76px
        width: 31.52%
      &:nth-child(3)
        right: 0
        bottom: -76px
        width: 20.1%
      &:nth-child(4)
        bottom: 76px
        right: 0
        width: 14.37%
  .bg-mob
    img
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 651px
</style>