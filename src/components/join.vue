<template>
  <section class="join">
    <a href="" id="join" class="anchor"></a>
    <div v-scrollanimation class="container">
      <div class="join__left">
        <div class="join__img">
          <img src="@/assets/join/01.png" alt="">
        </div>
        <div class="join__left-text">
          <h1>
            링큐아이오에 가입하세요
          </h1>
        </div>
      </div>
      <div class="join__right">
        <!--<div class="join__right-title">
          <span>
            회원가입하기
          </span>
          <div></div>
        </div>
        -->
        <form action="" class="join__form">
          <!--<div class="join__inputs">
            <div class="join__input">
              <input type="text" placeholder="이름">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip12)">
                  <path d="M10.1428 9.63406C8.81921 9.63406 7.67313 9.15936 6.73669 8.22278C5.80026 7.28635 5.32556 6.14057 5.32556 4.81688C5.32556 3.49364 5.80026 2.34771 6.73685 1.41097C7.67343 0.474699 8.81937 0 10.1428 0C11.4665 0 12.6122 0.474699 13.5487 1.41113C14.4851 2.34756 14.96 3.49349 14.96 4.81688C14.96 6.14057 14.4851 7.2865 13.5485 8.22293C12.6119 9.1592 11.466 9.63406 10.1428 9.63406Z" fill="#565AA1" fill-opacity="0.4"/>
                  <path d="M1.71371 15.3789C1.74072 14.9891 1.79535 14.564 1.87576 14.1151C1.95694 13.6629 2.06146 13.2353 2.18658 12.8445C2.31583 12.4406 2.49161 12.0418 2.70889 11.6595C2.93442 11.2628 3.19931 10.9174 3.49655 10.6331C3.80737 10.3357 4.18793 10.0966 4.62799 9.92218C5.06653 9.74869 5.55252 9.6608 6.07239 9.6608C6.27655 9.6608 6.474 9.74457 6.85532 9.99283C7.09 10.1459 7.3645 10.3229 7.6709 10.5186C7.93289 10.6856 8.28781 10.842 8.7262 10.9836C9.1539 11.122 9.58817 11.1922 10.0168 11.1922C10.4454 11.1922 10.8795 11.122 11.3077 10.9836C11.7456 10.8421 12.1005 10.6857 12.3622 10.5188C12.6657 10.3249 12.9404 10.1479 13.1786 9.99267C13.5594 9.74442 13.757 9.66064 13.9612 9.66064C14.4812 9.66064 14.967 9.74869 15.4054 9.92233C15.8452 10.0964 16.2259 10.3355 16.537 10.6332C16.8341 10.9177 17.0992 11.263 17.3244 11.6595C17.5415 12.0418 17.7173 12.4405 17.8467 12.8447C17.9716 13.2355 18.0762 13.6629 18.1573 14.1151C18.2378 14.5634 18.2924 14.9887 18.3194 15.3793C18.3459 15.762 18.3594 16.1592 18.3594 16.5603C18.3594 17.6043 18.0275 18.4495 17.373 19.0728C16.7267 19.6879 15.8714 20 14.8314 20H5.20126C4.16122 20 3.30627 19.6881 2.65976 19.0728C2.00516 18.45 1.67328 17.6046 1.67328 16.5602C1.67343 16.1572 1.68701 15.7597 1.71371 15.3789Z" fill="#565AA1" fill-opacity="0.4"/>
                </g>
                <defs>
                  <clipPath id="clip12">
                    <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="join__input">
              <input type="text" placeholder="이메일">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip11)">
                  <path d="M18.2423 2.38281H1.75797C1.48738 2.38281 1.23406 2.44934 1.00488 2.55898L9.96109 11.5152L11.9685 9.58602C11.9685 9.58602 11.9686 9.58582 11.9687 9.58574C11.9687 9.58566 11.9689 9.58559 11.9689 9.58559L18.9957 2.55914C18.7665 2.44941 18.513 2.38281 18.2423 2.38281Z" fill="#565AA1" fill-opacity="0.4"/>
                  <path d="M19.8245 3.3877L13.2119 9.99996L19.8243 16.6123C19.9339 16.3832 20.0005 16.1298 20.0005 15.8593V4.14051C20.0005 3.87008 19.9341 3.6168 19.8245 3.3877Z" fill="#565AA1" fill-opacity="0.4"/>
                  <path d="M0.176172 3.3877C0.0665234 3.61688 0 3.8702 0 4.14078V15.8595C0 16.13 0.0664453 16.3833 0.176016 16.6124L6.78863 10.0002L0.176172 3.3877Z" fill="#565AA1" fill-opacity="0.4"/>
                  <path d="M12.3833 10.8287L10.3757 12.7581C10.2612 12.8726 10.1113 12.9298 9.96141 12.9298C9.81152 12.9298 9.66156 12.8726 9.54715 12.7581L7.61762 10.8286L1.00488 17.4409C1.2341 17.5506 1.48758 17.6172 1.75824 17.6172H18.2426C18.5132 17.6172 18.7665 17.5507 18.9957 17.4411L12.3833 10.8287Z" fill="#565AA1" fill-opacity="0.4"/>
                </g>
                <defs>
                  <clipPath id="clip11">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="join__input">
              <input type="text" placeholder="전화번호">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4755 14.678L16.6786 11.8869C15.6797 10.8901 13.9816 11.2889 13.582 12.5847C13.2823 13.4819 12.2834 13.9803 11.3844 13.7809C9.38661 13.2825 6.68957 10.6908 6.19012 8.59746C5.89045 7.7003 6.48979 6.70349 7.3888 6.40448C8.68738 6.00576 9.08694 4.31119 8.08804 3.31438L5.2911 0.523324C4.49198 -0.174441 3.29329 -0.174441 2.59406 0.523324L0.696143 2.41726C-1.20177 4.41087 0.895924 9.69395 5.59077 14.3789C10.2856 19.0639 15.5798 21.2569 17.5776 19.2633L19.4755 17.3694C20.1748 16.5719 20.1748 15.3757 19.4755 14.678Z" fill="#565AA1" fill-opacity="0.4"/>
              </svg>
            </div>
            <div class="join__input">
              <input type="text" placeholder="패스워드">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip14)">
                  <path d="M15.625 7.5H15V5C15 2.2425 12.7575 0 10 0C7.2425 0 5 2.2425 5 5V7.5H4.375C3.34167 7.5 2.5 8.34083 2.5 9.375V18.125C2.5 19.1592 3.34167 20 4.375 20H15.625C16.6583 20 17.5 19.1592 17.5 18.125V9.375C17.5 8.34083 16.6583 7.5 15.625 7.5ZM6.66667 5C6.66667 3.16167 8.16167 1.66667 10 1.66667C11.8383 1.66667 13.3333 3.16167 13.3333 5V7.5H6.66667V5ZM10.8333 13.935V15.8333C10.8333 16.2933 10.4608 16.6667 10 16.6667C9.53917 16.6667 9.16667 16.2933 9.16667 15.8333V13.935C8.67083 13.6458 8.33333 13.1142 8.33333 12.5C8.33333 11.5808 9.08083 10.8333 10 10.8333C10.9192 10.8333 11.6667 11.5808 11.6667 12.5C11.6667 13.1142 11.3292 13.6458 10.8333 13.935Z" fill="#565AA1" fill-opacity="0.4"/>
                </g>
                <defs>
                  <clipPath id="clip14">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="join__input">
              <input type="text" placeholder="패스워드확인">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip13)">
                  <path d="M9.9999 6.78125C8.22409 6.78125 6.78125 8.22409 6.78125 9.9999C6.78125 11.7757 8.22409 13.2186 9.9999 13.2186C11.7757 13.2186 13.2186 11.7757 13.2186 9.9999C13.2186 8.22409 11.7757 6.78125 9.9999 6.78125ZM9.75573 9.04541C9.35617 9.04541 9.02321 9.37837 9.02321 9.77793H7.95772C7.97992 8.77903 8.77904 7.97992 9.75573 7.97992V9.04541Z" fill="#565AA1" fill-opacity="0.4"/>
                  <path d="M19.7669 9.33411C18.6792 7.98006 14.7947 3.56274 10 3.56274C5.20533 3.56274 1.32075 7.98006 0.233074 9.33411C-0.0776914 9.71147 -0.0776914 10.2664 0.233074 10.666C1.32075 12.02 5.20533 16.4373 10 16.4373C14.7947 16.4373 18.6792 12.02 19.7669 10.666C20.0777 10.2886 20.0777 9.73366 19.7669 9.33411ZM10 14.6615C7.42508 14.6615 5.33851 12.575 5.33851 10C5.33851 7.42512 7.42508 5.33855 10 5.33855C12.5749 5.33855 14.6615 7.42512 14.6615 10C14.6615 12.575 12.5749 14.6615 10 14.6615Z" fill="#565AA1" fill-opacity="0.4"/>
                </g>
                <defs>
                  <clipPath id="clip13">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div class="join__buttons">
            <div class="join__btn">
              <span>
                가입
              </span>
              <div class="join__btn-bg">
                <img src="@/assets/join/02.png" alt="">
                <img src="@/assets/join/03.png" alt="">
              </div>
            </div>
            <div class="join__btn">
              <span>
                이미 가입하였다면?
              </span>
            </div>
          </div>
          <div class="join__hr">
            <span>
              또는
            </span>
          </div>
          <div class="join__google">
            <div class="join__google-img">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12.14 19.018C8.272 19.018 5.14 15.878 5.14 12C5.14 8.122 8.272 4.982 12.14 4.982C14.03 4.982 15.61 5.679 16.822 6.811L14.848 8.789V8.785C14.113 8.083 13.181 7.723 12.14 7.723C9.83 7.723 7.953 9.679 7.953 11.996C7.953 14.311 9.83 16.273 12.14 16.273C14.236 16.273 15.662 15.071 15.956 13.421H12.14V10.684H18.725C18.813 11.154 18.86 11.644 18.86 12.158C18.86 16.168 16.183 19.018 12.14 19.018Z" fill="white"/>
              </svg>
            </div>
            <div class="join__google-text">
              <span>
                구글로 회원가입
              </span>
            </div>
          </div>
          -->
          <iframe src="https://www.lingq.io/register" frameborder="0"></iframe>
        </form>
      </div>
    </div>
    <div class="bg">
      <img src="@/assets/join/04.png" alt="">
      <img src="@/assets/join/05.png" alt="">
      <img src="@/assets/join/06.png" alt="">
      <img src="@/assets/join/07.png" alt="">
    </div>
    <div class="bg-mob">
      <img src="@/assets/join/08.png" alt="">
    </div>
  </section>
</template>
<style lang="sass">
.join
  position: relative
  padding: 148px 25px 0 25px
  @media (max-width: 911px)
    padding-top: 210px
  .anchor
    position: absolute
    top: 98px
    @media (max-width: 911px)
      top: 160px
  .container
    justify-content: space-between
    position: relative
    z-index: 2
    @media (max-width: 911px)
      flex-direction: column
    .join__left
      position: relative
      min-height: 100%
      max-height: 100%
      display: flex
      margin-right: 40px
      @media (max-width: 911px)
        margin-right: 0
        align-items: center
        justify-content: center
      .join__img
        @media (max-width: 911px)
          display: none
        img
          position: absolute
          left: -136px
          top: -87px
          z-index: 1
          width: 165%
      .join__left-text
        position: relative
        z-index: 2
        margin-top: auto
        margin-bottom: 57px
        @media (max-width: 911px)
          margin: 0 0 65px 0
        h1
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: 600
          font-size: 44px
          line-height: 52px
          color: #fff
          @media (max-width: 911px)
            font-size: 27px
            line-height: 32px
            color: #FFFFFF
            text-align: center
    .join__right
      display: flex
      flex-direction: column
      background: linear-gradient(218.7deg, #F5F6FF 7.53%, #CDD0ED 92.92%)
      box-shadow: 0px 15px 39px rgba(13, 18, 62, 0.1)
      border-radius: 30px
      //padding: 32px 34px 34px 34px
      padding: 0
      overflow: hidden
      width: 100%
      max-width: 418px
      @media (max-width: 911px)
        max-width: 100%
        padding: 0
      .join__right-title
        position: relative
        margin: 0 auto
        span
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 26px
          line-height: 31px
          text-align: center
          color: #565AA2
          position: relative
          z-index: 2
          @media (max-width: 911px)
            font-size: 20px
            line-height: 24px
        div
          background: #2B06C0
          opacity: 0.3
          z-index: 1
          height: 9px
          filter: blur(19px)
          width: calc(100% + 14px)
          left: 50%
          transform: translateX(-50%)
          bottom: 0
          position: absolute
      .join__form
        display: flex
        flex-direction: column
        .join__inputs
          display: grid
          grid-template-columns: 1fr
          grid-gap: 10px
          margin-bottom: 10px
          margin-top: 30px
          @media (max-width: 911px)
            margin-top: 26px
            grid-gap: 8px
          .join__input
            position: relative
            &:hover
              input
                opacity: 0.5
            input
              width: 100%
              transition-duration: 0.4s
              background: rgba(75, 80, 197, 0.09)
              border: 0.5px solid rgba(75, 80, 197, 0.08)
              border-radius: 8px
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 14px
              line-height: 17px
              color: rgba(73, 76, 130, 1)
              padding: 17px 20px 16px 55px
              @media (max-width: 911px)
                font-size: 12px
                line-height: 14px
                padding: 16px 44px
                border-radius: 10px
              &::placeholder
                color: rgba(73, 76, 130, 0.3)
            svg
              position: absolute
              left: 20px
              top: 50%
              transform: translateY(-50%)
              pointer-events: none
              @media (max-width: 911px)
                width: 16px
                height: 16px
                left: 16px
        .join__buttons
          display: flex
          align-items: center
          .join__btn
            display: flex
            cursor: pointer
            &:first-child
              position: relative
              padding: 16px 0
              background: linear-gradient(92.91deg, #7B69E9 -8.76%, #444AD5 135.81%)
              border-radius: 10px
              overflow: hidden
              width: 175px
              margin-right: auto
              transition-duration: .4s
              @media (max-width: 911px)
                width: 144px
              &:hover
                transition-duration: 0.4s
                box-shadow: 0px 15px 58px rgba(0, 0, 0, 0.13)
                span
                  opacity: 0.7
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: 500
                font-size: 16px
                line-height: 19px
                letter-spacing: 0.02em
                transition-duration: .4s
                text-transform: capitalize
                color: #FFFFFF
                text-align: center
                position: relative
                z-index: 2
                margin: 0 auto
                @media (max-width: 911px)
                  font-size: 14px
                  line-height: 17px
              .join__btn-bg
                img
                  position: absolute
                  z-index: 1
                  &:first-child
                    right: 0
                    top: 0
                  &:last-child
                    left: 0
                    bottom: 0
            &:last-child
              &:hover
                span
                  opacity: 0.7
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: normal
                transition-duration: 0.4s
                font-size: 14px
                line-height: 21px
                text-transform: capitalize
                color: #565AA1
                border-bottom: 1px solid #565AA1
                @media (max-width: 911px)
                  font-size: 12px
                  line-height: 14px
        .join__hr
          position: relative
          display: flex
          align-items: center
          padding: 10px 0
          &:after
            content: ''
            position: absolute
            left: 0
            top: 50%
            transform: translateY(-50%)
            width: calc(50% - 23.5px)
            height: 1px
            background: rgba(86, 90, 161, 0.1)
            @media (max-width: 911px)
              width: calc(50% - 17px)
          &:before
            content: ''
            position: absolute
            right: 0
            top: 50%
            transform: translateY(-50%)
            width: calc(50% - 23.5px)
            height: 1px
            background: rgba(86, 90, 161, 0.1)
            @media (max-width: 911px)
              width: calc(50% - 17px)
          span
            font-family: Rubik, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 14px
            line-height: 149%
            text-align: center
            text-transform: uppercase
            margin: 0 auto
            color: rgba(86, 90, 161, 0.4)
            @media (max-width: 911px)
              font-size: 10px
              line-height: 15px
        .join__google
          display: flex
          align-items: center
          background: #DD5353
          border: 1px solid #F35050
          border-radius: 10px
          padding: 13px 0
          justify-content: center
          cursor: pointer
          transition-duration: 0.4s
          @media (max-width: 911px)
            padding: 12px 0
          &:hover
            background: #F35050
            transition-duration: 0.4s
            box-shadow: 0px 15px 58px rgba(0, 0, 0, 0.13)
            .join__google-text
              span
                opacity: 0.7
            .join__google-img
              opacity: 0.7
          .join__google-text
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 14px
              line-height: 17px
              color: #FFFFFF
              margin-left: 10px
              transition-duration: 0.4s
          .join__google-img
            transition-duration: 0.4s
            svg
              @media (max-width: 911px)
                width: 22px
                height: 22px
        iframe
          height: 645px
          div
            a
              display: none!important
  .bg
    @media (max-width: 911px)
      display: none
    img
      position: absolute
      z-index: 1
      &:first-child
        width: 100%
        bottom: -50px
        height: 575px
        left: 0
      &:nth-child(2)
        bottom: 31px
        width: 10.13%
        left: 6.8%
      &:nth-child(3)
        right: 24.3%
        width: 40.55%
        bottom: -41px
      &:nth-child(4)
        right: 0
        width: 30.9%
        bottom: 60px
  .bg-mob
    img
      position: absolute
      width: 100%
      height: 830px
      left: 0
      bottom: -23px
      object-fit: fill

</style>



















