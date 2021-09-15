<template>
  <section class="header">
    <div class="container">
      <div class="header__logo">
        <img src="@/assets/header/01.png" alt="">
      </div>
      <div class="header__menu">
        <a href="#how" class="header__link">
          사용법
        </a>
        <a href="#video" class="header__link">
          동영상
        </a>
        <a href="#why" class="header__link">
          베네핏
        </a>
        <a href="#way" class="header__link">
          활용법
        </a>
        <a href="#join" class="header__link">
          가입하기
        </a>
      </div>
      <div class="header__buttons">
        <div @click="tabFirst" class="header__btn header__btn_active">
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0C5.61533 0 4.08203 1.5333 4.08203 3.41797C4.08203 5.30264 5.61533 6.83594 7.5 6.83594C9.38467 6.83594 10.918 5.30264 10.918 3.41797C10.918 1.5333 9.38467 0 7.5 0Z" fill="white"/>
            <path d="M7.54421 7.65625H7.4379C6.92829 7.65625 6.42514 7.72868 5.94238 7.86775L7.50104 10.2779L9.05788 7.87049C8.56977 7.72961 8.06044 7.65625 7.54421 7.65625Z" fill="white"/>
            <path d="M12.9063 12.2489C12.637 10.4777 11.5021 8.93614 9.84393 8.16486L7.91016 11.1551V14H13.1725L12.9063 12.2489Z" fill="white"/>
            <path d="M5.15559 8.16211C3.4891 8.93812 2.36152 10.4887 2.09388 12.2489L1.82764 14H7.09002V11.1534L5.15559 8.16211Z" fill="white"/>
          </svg>
          <span>
            사용자
          </span>
        </div>
        <div @click="tabSecond" class="header__btn">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <g clip-path="url(#clip1)">
                <path d="M8.60083 1.59082L2.19 0.616655C1.8925 0.569989 1.58917 0.651655 1.36167 0.844155C1.13417 1.04249 1 1.32832 1 1.62582V13.9167C1 14.2375 1.2625 14.5 1.58333 14.5H3.47917V11.4375C3.47917 10.8717 3.93417 10.4167 4.5 10.4167H5.95833C6.52417 10.4167 6.97917 10.8717 6.97917 11.4375V14.5H9.45833V2.59999C9.45833 2.09832 9.09667 1.67249 8.60083 1.59082ZM4.20833 9.10416H3.33333C3.09183 9.10416 2.89583 8.90816 2.89583 8.66666C2.89583 8.42516 3.09183 8.22916 3.33333 8.22916H4.20833C4.44983 8.22916 4.64583 8.42516 4.64583 8.66666C4.64583 8.90816 4.44983 9.10416 4.20833 9.10416ZM4.20833 7.35416H3.33333C3.09183 7.35416 2.89583 7.15816 2.89583 6.91666C2.89583 6.67516 3.09183 6.47916 3.33333 6.47916H4.20833C4.44983 6.47916 4.64583 6.67516 4.64583 6.91666C4.64583 7.15816 4.44983 7.35416 4.20833 7.35416ZM4.20833 5.60416H3.33333C3.09183 5.60416 2.89583 5.40816 2.89583 5.16666C2.89583 4.92516 3.09183 4.72916 3.33333 4.72916H4.20833C4.44983 4.72916 4.64583 4.92516 4.64583 5.16666C4.64583 5.40816 4.44983 5.60416 4.20833 5.60416ZM4.20833 3.85416H3.33333C3.09183 3.85416 2.89583 3.65816 2.89583 3.41666C2.89583 3.17516 3.09183 2.97916 3.33333 2.97916H4.20833C4.44983 2.97916 4.64583 3.17516 4.64583 3.41666C4.64583 3.65816 4.44983 3.85416 4.20833 3.85416ZM7.125 9.10416H6.25C6.0085 9.10416 5.8125 8.90816 5.8125 8.66666C5.8125 8.42516 6.0085 8.22916 6.25 8.22916H7.125C7.3665 8.22916 7.5625 8.42516 7.5625 8.66666C7.5625 8.90816 7.3665 9.10416 7.125 9.10416ZM7.125 7.35416H6.25C6.0085 7.35416 5.8125 7.15816 5.8125 6.91666C5.8125 6.67516 6.0085 6.47916 6.25 6.47916H7.125C7.3665 6.47916 7.5625 6.67516 7.5625 6.91666C7.5625 7.15816 7.3665 7.35416 7.125 7.35416ZM7.125 5.60416H6.25C6.0085 5.60416 5.8125 5.40816 5.8125 5.16666C5.8125 4.92516 6.0085 4.72916 6.25 4.72916H7.125C7.3665 4.72916 7.5625 4.92516 7.5625 5.16666C7.5625 5.40816 7.3665 5.60416 7.125 5.60416ZM7.125 3.85416H6.25C6.0085 3.85416 5.8125 3.65816 5.8125 3.41666C5.8125 3.17516 6.0085 2.97916 6.25 2.97916H7.125C7.3665 2.97916 7.5625 3.17516 7.5625 3.41666C7.5625 3.65816 7.3665 3.85416 7.125 3.85416Z" fill="#268FD4"/>
                <path d="M14.1953 6.82452L10.042 5.95477V14.5H13.9795C14.5424 14.5 15.0003 14.0421 15.0003 13.4792V7.82202C15.0003 7.34019 14.6719 6.93011 14.1953 6.82452ZM12.8128 12.75H11.9378C11.6963 12.75 11.5003 12.554 11.5003 12.3125C11.5003 12.071 11.6963 11.875 11.9378 11.875H12.8128C13.0543 11.875 13.2503 12.071 13.2503 12.3125C13.2503 12.554 13.0543 12.75 12.8128 12.75ZM12.8128 11H11.9378C11.6963 11 11.5003 10.804 11.5003 10.5625C11.5003 10.321 11.6963 10.125 11.9378 10.125H12.8128C13.0543 10.125 13.2503 10.321 13.2503 10.5625C13.2503 10.804 13.0543 11 12.8128 11ZM12.8128 9.25002H11.9378C11.6963 9.25002 11.5003 9.05402 11.5003 8.81252C11.5003 8.57102 11.6963 8.37502 11.9378 8.37502H12.8128C13.0543 8.37502 13.2503 8.57102 13.2503 8.81252C13.2503 9.05402 13.0543 9.25002 12.8128 9.25002Z" fill="#268FD4"/>
              </g>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="14" height="14" fill="white" transform="translate(0.5 0.5)"/>
              </clipPath>
              <clipPath id="clip1">
                <rect width="14" height="14" fill="white" transform="translate(1 0.5)"/>
              </clipPath>
            </defs>
          </svg>
          <span>
            채용회사
          </span>
        </div>
      </div>
      <div @click="menuOpen" class="header__burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="header__mob">
        <div @click="menuClose" class="header__mob-exit">
          <div class="header__mob-exit-wrapper">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.76777" y1="2" x2="17" y2="17.2322" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="1.25" y1="-1.25" x2="22.7916" y2="-1.25" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 17)" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div class="header__mob-cont">
          <div @click="menuClose" class="header__mob-buttons">
            <div @click="tabFirst" class="header__mob-btn header__mob-btn_active">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M7.5 0.5C5.61533 0.5 4.08203 2.0333 4.08203 3.91797C4.08203 5.80264 5.61533 7.33594 7.5 7.33594C9.38467 7.33594 10.918 5.80264 10.918 3.91797C10.918 2.0333 9.38467 0.5 7.5 0.5Z" fill="white"/>
                  <path d="M7.54323 8.15625H7.43692C6.92732 8.15625 6.42416 8.22868 5.94141 8.36775L7.50006 10.7779L9.05691 8.37049C8.56879 8.22961 8.05946 8.15625 7.54323 8.15625Z" fill="white"/>
                  <path d="M12.9063 12.7489C12.637 10.9777 11.5021 9.43614 9.84393 8.66486L7.91016 11.6551V14.5H13.1725L12.9063 12.7489Z" fill="white"/>
                  <path d="M5.1551 8.66211C3.48861 9.43812 2.36104 10.9887 2.09339 12.7489L1.82715 14.5H7.08954V11.6534L5.1551 8.66211Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="14" height="14" fill="white" transform="translate(0.5 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <span>
                사용자
              </span>
            </div>
            <div @click="tabSecond" class="header__mob-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <g clip-path="url(#clip1)">
                    <path d="M8.10083 1.09082L1.69 0.116655C1.3925 0.0699886 1.08917 0.151655 0.861667 0.344155C0.634167 0.542489 0.5 0.828322 0.5 1.12582V13.4167C0.5 13.7375 0.7625 14 1.08333 14H2.97917V10.9375C2.97917 10.3717 3.43417 9.91666 4 9.91666H5.45833C6.02417 9.91666 6.47917 10.3717 6.47917 10.9375V14H8.95833V2.09999C8.95833 1.59832 8.59667 1.17249 8.10083 1.09082ZM3.70833 8.60416H2.83333C2.59183 8.60416 2.39583 8.40816 2.39583 8.16666C2.39583 7.92516 2.59183 7.72916 2.83333 7.72916H3.70833C3.94983 7.72916 4.14583 7.92516 4.14583 8.16666C4.14583 8.40816 3.94983 8.60416 3.70833 8.60416ZM3.70833 6.85416H2.83333C2.59183 6.85416 2.39583 6.65816 2.39583 6.41666C2.39583 6.17516 2.59183 5.97916 2.83333 5.97916H3.70833C3.94983 5.97916 4.14583 6.17516 4.14583 6.41666C4.14583 6.65816 3.94983 6.85416 3.70833 6.85416ZM3.70833 5.10416H2.83333C2.59183 5.10416 2.39583 4.90816 2.39583 4.66666C2.39583 4.42516 2.59183 4.22916 2.83333 4.22916H3.70833C3.94983 4.22916 4.14583 4.42516 4.14583 4.66666C4.14583 4.90816 3.94983 5.10416 3.70833 5.10416ZM3.70833 3.35416H2.83333C2.59183 3.35416 2.39583 3.15816 2.39583 2.91666C2.39583 2.67516 2.59183 2.47916 2.83333 2.47916H3.70833C3.94983 2.47916 4.14583 2.67516 4.14583 2.91666C4.14583 3.15816 3.94983 3.35416 3.70833 3.35416ZM6.625 8.60416H5.75C5.5085 8.60416 5.3125 8.40816 5.3125 8.16666C5.3125 7.92516 5.5085 7.72916 5.75 7.72916H6.625C6.8665 7.72916 7.0625 7.92516 7.0625 8.16666C7.0625 8.40816 6.8665 8.60416 6.625 8.60416ZM6.625 6.85416H5.75C5.5085 6.85416 5.3125 6.65816 5.3125 6.41666C5.3125 6.17516 5.5085 5.97916 5.75 5.97916H6.625C6.8665 5.97916 7.0625 6.17516 7.0625 6.41666C7.0625 6.65816 6.8665 6.85416 6.625 6.85416ZM6.625 5.10416H5.75C5.5085 5.10416 5.3125 4.90816 5.3125 4.66666C5.3125 4.42516 5.5085 4.22916 5.75 4.22916H6.625C6.8665 4.22916 7.0625 4.42516 7.0625 4.66666C7.0625 4.90816 6.8665 5.10416 6.625 5.10416ZM6.625 3.35416H5.75C5.5085 3.35416 5.3125 3.15816 5.3125 2.91666C5.3125 2.67516 5.5085 2.47916 5.75 2.47916H6.625C6.8665 2.47916 7.0625 2.67516 7.0625 2.91666C7.0625 3.15816 6.8665 3.35416 6.625 3.35416Z" fill="#268FD4"/>
                    <path d="M13.6953 6.32452L9.54199 5.45477V14H13.4795C14.0424 14 14.5003 13.5421 14.5003 12.9792V7.32202C14.5003 6.84019 14.1719 6.43011 13.6953 6.32452ZM12.3128 12.25H11.4378C11.1963 12.25 11.0003 12.054 11.0003 11.8125C11.0003 11.571 11.1963 11.375 11.4378 11.375H12.3128C12.5543 11.375 12.7503 11.571 12.7503 11.8125C12.7503 12.054 12.5543 12.25 12.3128 12.25ZM12.3128 10.5H11.4378C11.1963 10.5 11.0003 10.304 11.0003 10.0625C11.0003 9.82102 11.1963 9.62502 11.4378 9.62502H12.3128C12.5543 9.62502 12.7503 9.82102 12.7503 10.0625C12.7503 10.304 12.5543 10.5 12.3128 10.5ZM12.3128 8.75002H11.4378C11.1963 8.75002 11.0003 8.55402 11.0003 8.31252C11.0003 8.07102 11.1963 7.87502 11.4378 7.87502H12.3128C12.5543 7.87502 12.7503 8.07102 12.7503 8.31252C12.7503 8.55402 12.5543 8.75002 12.3128 8.75002Z" fill="#268FD4"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <span>
                채용회사
              </span>
            </div>
          </div>
          <div @click="menuClose" class="header__mob-menu">
            <a href="#how" class="header__mob-link">
              사용법
            </a>
            <a href="#video" class="header__mob-link">
              동영상
            </a>
            <a href="#why" class="header__mob-link">
              베네핏
            </a>
            <a href="#way" class="header__mob-link">
              활용법
            </a>
            <a href="#join" class="header__mob-link">
              가입하기
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.header
  position: absolute
  top: 0
  width: 100%
  z-index: 20
  padding: 0 26px
  .container
    align-items: center
    padding: 20px 0
    @media (max-width: 700px)
      padding: 14px 0
    .header__logo
      cursor: pointer
      width: 64px
      height: 50px
      border-radius: 8px
      margin-right: 80px
      transition-duration: 0.4s
      @media (max-width: 911px)
        margin-right: 25px
        width: 40px
        height: 32px
      &:hover
        opacity: 0.7
      img
        width: 100%
        height: 100%
        object-fit: cover
    .header__menu
      display: flex
      @media (max-width: 700px)
        display: none
      .header__link
        cursor: pointer
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 17px
        text-transform: capitalize
        color: #004E82
        transition-duration: 0.4s
        &:hover
          opacity: 0.6
        &:not(:last-child)
          margin-right: 40px
          @media (max-width: 911px)
            margin-right: 15px
    .header__buttons
      display: flex
      margin-left: auto
      @media (max-width: 700px)
        display: none
      .header__btn
        cursor: pointer
        transition-duration: 0.4s
        background: rgba(38, 143, 212, 0.1)
        border-radius: 10px
        padding: 11.5px 22.5px
        display: flex
        align-items: center
        @media (max-width: 700px)
          display: none
        &:first-child
          margin-right: 14px
        &:hover
          background: #268FD4
          box-shadow: 0px 10px 14px rgba(38, 143, 212, 0.2)
          transition-duration: 0.4s
          span
            color: #FFFFFF
          svg
            path
              fill: #FFFFFF
        span
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: 500
          font-size: 14px
          line-height: 17px
          text-transform: capitalize
          color: #268FD4
          margin-left: 14px
          transition-duration: 0.4s
        svg
          path
            transition-duration: 0.4s
            fill: #268FD4
      .header__btn_active
        background: #268FD4
        border-radius: 10px
        padding: 11.5px 22.5px
        display: flex
        align-items: center
        @media (max-width: 911px)
          padding: 9px 23.5px
        @media (max-width: 700px)
          margin-right: 21px
        span
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: 500
          font-size: 14px
          line-height: 17px
          text-transform: capitalize
          color: #FFFFFF
          transition-duration: 0.4s
          margin-left: 14px
          @media (max-width: 911px)
            font-size: 12px
            line-height: 14px
            margin-left: 9.5px
        svg
          @media (max-width: 911px)
            width: 10px
            height: 10px
          path
            transition-duration: 0.4s
            fill: #FFFFFF

    .header__burger
      display: none
      margin-left: auto
      flex-direction: column
      width: 30px
      height: 16px
      justify-content: space-between
      align-items: flex-end
      @media (max-width: 700px)
        display: flex
      div
        width: 100%
        height: 2px
        border-radius: 5px
        background: #004E82
        &:nth-child(2)
          width: 25px
        &:nth-child(3)
          width: 19px
    .header__mob
      display: none
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      transform: translateX(100%)
      transition-duration: 0.6s
      @media (max-width: 700px)
        display: flex
      .header__mob-exit
        background: rgba(3, 37, 58, 0.58)
        width: 70px
        height: 100%
        display: flex
        justify-content: center
        backdrop-filter: blur(8px)
        opacity: 0
        transition-delay: .6s
        transform: translateX(100%)
        visibility: hidden
        position: relative
        z-index: 1
        transition-duration: 0.4s
        .header__mob-exit-wrapper
          margin-top: 34px
      .header__mob-cont
        width: calc(100% - 70px)
        background: #FFFFFF
        padding: 25px
        display: flex
        flex-direction: column
        position: relative
        z-index: 2
        .header__mob-buttons
          display: flex
          .header__mob-btn
            display: flex
            cursor: pointer
            align-items: center
            padding: 14px 0
            width: 50%
            justify-content: center
            background: rgba(38, 143, 212, 0.1)
            border-radius: 10px
            &:first-child
              margin-right: 10px
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 500
              font-size: 14px
              line-height: 17px
              text-transform: capitalize
              color: #268FD4
              margin-left: 16px
            svg
              path
                fill: #268FD4
          .header__mob-btn_active
            background: #268FD4
            box-shadow: 0px 10px 14px rgba(38, 143, 212, 0.2)
            border-radius: 10px
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 500
              font-size: 14px
              line-height: 17px
              text-transform: capitalize
              color: #FFFFFF
              margin-left: 16px
            svg
              path
                fill: #FFFFFF
        .header__mob-menu
          display: flex
          flex-direction: column
          margin-top: 150px
          .header__mob-link
            cursor: pointer
            border-radius: 10px
            transition-duration: 0.4s
            font-family: Rubik, sans-serif
            font-style: normal
            font-weight: 300
            font-size: 18px
            line-height: 21px
            text-transform: capitalize
            color: #004E82
            padding: 12px 0
            text-align: center
            background: #FFFFFF
            &:hover
              background: rgba(38, 143, 212, 0.1)
            &:not(:last-child)
              margin-bottom: 22px
    .header__mob_active
      transform: translateX(0)
      .header__mob-exit
        opacity: 1
        visibility: visible
        transform: translateX(0)
</style>
<script>
export default {
  name: 'vue',
  methods: {
    menuOpen: function () {
      document.querySelector('.header__mob').classList.add('header__mob_active')
      document.querySelector('body').classList.add('scroll')
    },
    menuClose: function () {
      document.querySelector('.header__mob').classList.remove('header__mob_active')
      document.querySelector('body').classList.remove('scroll')
    },
    tabFirst: function () {
      let elements = document.getElementsByClassName("hero__text");
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("hero__text_hide")
        if (i === 0) {
          elements[i].classList.remove("hero__text_hide")
        }
      }
      document.querySelectorAll('.header__btn')[0].classList.add('header__btn_active')
      document.querySelectorAll('.header__btn')[1].classList.remove('header__btn_active')
      document.querySelectorAll('.header__mob-btn')[0].classList.add('header__mob-btn_active')
      document.querySelectorAll('.header__mob-btn')[1].classList.remove('header__mob-btn_active')

    },
    tabSecond: function () {
      let elements = document.getElementsByClassName("hero__text");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("hero__text_hide")
        if (i === 1) {
          elements[i].classList.remove("hero__text_hide")
        }
      }
      document.querySelectorAll('.header__btn')[0].classList.remove('header__btn_active')
      document.querySelectorAll('.header__btn')[1].classList.add('header__btn_active')
      document.querySelectorAll('.header__mob-btn')[0].classList.remove('header__mob-btn_active')
      document.querySelectorAll('.header__mob-btn')[1].classList.add('header__mob-btn_active')
    }
  }
}
</script>


















