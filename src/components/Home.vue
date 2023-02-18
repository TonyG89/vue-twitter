<template>
        <section
          id="home"
          class="grid place-items-center mt-20 md:mt-10 overflow-hidden"
        >
          <div
            class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10"
          >
            <div
              class="text-5xl md:text-6xl font-bold text-white w-full pb-20 order-2 lg:order-1"
            >
              <div class="flex items-center gap-3">
                <h2>BOOO</h2>
                <img src="/images/head1-img.png" alt="head1-img" />
              </div>
              <h2 class="text-4xl md:text-5xl">TRICK OR TREAT!!</h2>
              <p class="pt-5 text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id
                consequat, eu faucibus nulla. Ultrices mattis lacus, sed
                maecenas nascetur.
              </p>
            </div>
            <div class="w-full h-full order-1 lg:order-2">
              <div
                class="swiper swiper-initialized swiper-horizontal swiper-pointer-events pb-8"
              >
                <!----><!---->
                <div
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <span class="swiper-pagination-bullet"></span
                  ><span class="swiper-pagination-bullet"></span
                  ><span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></span
                  ><span class="swiper-pagination-bullet"></span
                  ><span class="swiper-pagination-bullet"></span>
                </div>
                <div
                  class="swiper-wrapper"
                  style="
                    transform: translate3d(-576px, 0px, 0px);
                    transition-duration: 0ms;
                  "
                >
                  <div
                    class="swiper-slide grid place-items-center"
                    style="width: 288px"
                  >
                    <img
                      src="/images/home1-img.webp"
                      class="w-2/3 lg:w-[90%]"
                    />
                  </div>
                  <div
                    class="swiper-slide grid place-items-center swiper-slide-prev"
                    style="width: 288px"
                  >
                    <img
                      src="/images/slider_img1.webp"
                      class="w-2/3 lg:w-[90%]"
                    />
                  </div>
                  <div
                    class="swiper-slide grid place-items-center swiper-slide-active"
                    style="width: 288px"
                  >
                    <img
                      src="/images/slider_img2.webp"
                      class="w-2/3 lg:w-[90%]"
                    />
                  </div>
                  <div
                    class="swiper-slide grid place-items-center swiper-slide-next"
                    style="width: 288px"
                  >
                    <img
                      src="/images/slider_img3.webp"
                      class="w-2/3 lg:w-[90%]"
                    />
                  </div>
                  <div
                    class="swiper-slide grid place-items-center h-60"
                    style="width: 288px"
                  >
                    <img
                      src="/images/slider_img4.webp"
                      class="w-[90%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid place-items-center gap-2 text-white font-medium pt-8"
          >
            <svg
              class="w-5 md:w-6"
              viewBox="0 0 26 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="24"
                height="47"
                rx="12"
                stroke="white"
                stroke-width="2"
              ></rect>
              <circle cx="13" cy="11" r="5" fill="#FF693A"></circle>
            </svg>
            Scroll
          </div>
        </section>
        
</template>