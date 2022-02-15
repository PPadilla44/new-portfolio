/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'

const Home: NextPage<{isOpen:boolean}> = ({ isOpen }) => {


  return (
    <div className="home">
{/* 
      <svg className='absolute -bottom-20 left-auto -z-10' width="1234" height="695" viewBox="0 0 1234 695" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 550L0 344L16 336.5L308 360V344L316.5 332L331 328L336 318C336.167 307 338 284.4 344 282C351.5 279 357.5 254 366.5 252.5C375.5 251 381 236 387 237.5C393 239 396 227 403.5 230.5C409.5 233.3 423.333 226.333 429.5 222.5C436.833 218.167 451.7 210.8 452.5 216C453.5 222.5 461.5 204 463.5 210C465.5 216 461 187.5 477 180.5C489.8 174.9 482.333 169.167 477 167C473.833 166.833 466.7 164 463.5 154C459.5 141.5 457 122.5 458 111.5C458.8 102.7 462 103.833 463.5 105.5C461.5 84.6667 461.4 41.1 477 33.5C496.5 24 483 15 532.5 2.00001C582 -11 626.5 58.5 612 88C597.915 116.655 618.741 106.154 619.488 105.528C619.482 105.509 619.486 105.5 619.5 105.5C619.514 105.5 619.51 105.51 619.488 105.528C619.68 106.186 631.164 118.381 619.5 149C616.848 155.962 615.759 160.384 615.504 163.087C621.927 163.334 614.716 171.453 615.504 163.087C614.616 163.052 613.467 163.169 612 163.5C596.5 167 616 210 619.5 210C622.3 210 671 223.667 695 230.5C700.5 212.167 713.7 177.9 722.5 187.5C731.3 197.1 707.833 151.833 695 128C715 139.833 755.9 163.5 759.5 163.5C763.426 163.5 789.808 161.978 793.816 165.242C796.302 154.597 813.92 106.688 825 102C835.4 97.6 845.333 106.5 849 111.5C856.333 121.333 870.8 143.6 870 154C869.2 164.4 886.667 176 895.5 180.5C909.167 197.833 935.8 236.5 933 252.5C946.2 267.3 948.5 278.333 948 282C959.167 285.5 981.4 304.8 981 354C1000 365.5 1092.5 372.5 1156.5 487.5C1182.5 573.5 1145.5 580 1156.5 584C1167.5 588 1238 624 1233.5 631C1229 638 1232.5 668.5 1194.5 674C1200.1 704.8 1162.17 707.5 1142.5 705C1012.5 712.333 752.2 722.6 751 705C749.8 687.4 756.167 655.667 759.5 642L344 651L339.5 614.5C335.833 616.333 327.3 615.1 322.5 595.5C299.7 589.9 114 562.833 24 550Z" fill="#D4ECFF" />
      </svg> */}

      <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-[1200px] flex flex-col">

        <h1 className='text-4xl sm:text-5xl lg:text-64 text-light mb-3'>Welcome,<br className='sm:hidden'/> I'm Pablo Padilla.</h1>
        <h3 className='text-lg lg:text-2xl text-darkish mb-16 sm:mb-28' >I am a committed & enthusiastic full-stack software engineer </h3>



        <button className='flex items-center justify-center w-fit  bg-lightblue px-3 py-2  md:px-10 md:py-4 rounded-lg drop-shadow-light'>
          <h2 className='w-fit font-sans font-extrabold text-dark text-lg sm:text-4xl'>Contact Me</h2>
        </button>



        <footer className='h-full  flex pb-3 items-end z-50'>
          
          <div className={`flex gap-10 fill-darkish ${isOpen && "fill-grey"} `}>

            <a href="https://github.com/PPadilla44" target="_blank" rel="noreferrer">

              <svg className='w-14 h-14'  viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_72_39)">
                  <path d="M30.0002 0C13.4337 0 0 13.7712 0 30.7595C0 44.3499 8.59598 55.8799 20.516 59.9471C22.0153 60.2319 22.5658 59.2799 22.5658 58.4674C22.5658 57.7339 22.5379 55.3109 22.525 52.7406C14.1789 54.6014 12.4178 49.1114 12.4178 49.1114C11.0531 45.556 9.08681 44.6107 9.08681 44.6107C6.36489 42.7016 9.29199 42.7408 9.29199 42.7408C12.3045 42.9578 13.8908 45.9106 13.8908 45.9106C16.5665 50.613 20.909 49.2535 22.6209 48.4676C22.8902 46.4795 23.6676 45.1226 24.5256 44.3545C17.8621 43.5767 10.8574 40.9392 10.8574 29.153C10.8574 25.7947 12.0293 23.0508 13.9484 20.8967C13.6369 20.1219 12.6101 16.9934 14.239 12.7565C14.239 12.7565 16.7583 11.9298 22.4912 15.9095C24.8843 15.228 27.4507 14.8862 30.0002 14.8745C32.5498 14.8862 35.1182 15.228 37.5157 15.9095C43.2417 11.9298 45.7575 12.7565 45.7575 12.7565C47.3904 16.9934 46.3631 20.1219 46.0516 20.8967C47.9752 23.0508 49.1391 25.7947 49.1391 29.153C49.1391 40.9672 42.121 43.5685 35.4406 44.33C36.5167 45.2846 37.4755 47.1565 37.4755 50.0262C37.4755 54.1419 37.4407 57.4543 37.4407 58.4674C37.4407 59.286 37.9807 60.2451 39.5014 59.9431C51.4149 55.8712 60 44.3453 60 30.7595C60 13.7712 46.5682 0 30.0002 0ZM11.2361 43.8176C11.17 43.9704 10.9355 44.0162 10.7219 43.9113C10.5043 43.811 10.3821 43.6026 10.4526 43.4493C10.5172 43.2919 10.7522 43.2481 10.9693 43.3535C11.1874 43.4539 11.3116 43.6643 11.2361 43.8176ZM12.7117 45.1676C12.5687 45.3036 12.289 45.2405 12.0992 45.0255C11.903 44.8111 11.8662 44.5243 12.0113 44.3863C12.1588 44.2503 12.4301 44.3139 12.6268 44.5284C12.823 44.7454 12.8613 45.0301 12.7117 45.1676ZM13.7241 46.895C13.5403 47.0259 13.2397 46.9031 13.0539 46.6296C12.8701 46.3561 12.8701 46.028 13.0579 45.8966C13.2442 45.7652 13.5403 45.8834 13.7286 46.1549C13.9119 46.433 13.9119 46.761 13.7241 46.895ZM15.4363 48.8955C15.2718 49.0814 14.9216 49.0315 14.6652 48.7778C14.4029 48.5298 14.3299 48.1778 14.4948 47.9919C14.6613 47.8055 15.0135 47.8579 15.2718 48.1095C15.5321 48.3571 15.6116 48.7116 15.4363 48.8955ZM17.649 49.5708C17.5765 49.8118 17.2392 49.9213 16.8994 49.8189C16.5601 49.7135 16.338 49.4313 16.4066 49.1878C16.4771 48.9453 16.8159 48.8312 17.1582 48.9408C17.497 49.0457 17.7196 49.3258 17.649 49.5708ZM20.1673 49.8573C20.1757 50.111 19.8876 50.3213 19.5309 50.3259C19.1722 50.3341 18.8821 50.1288 18.8781 49.8792C18.8781 49.623 19.1598 49.4147 19.5184 49.4086C19.8751 49.4014 20.1673 49.6052 20.1673 49.8573ZM22.6411 49.7601C22.6839 50.0076 22.436 50.2618 22.0817 50.3296C21.7335 50.3947 21.4111 50.2419 21.3669 49.9964C21.3236 49.7428 21.576 49.4886 21.9238 49.4229C22.2785 49.3597 22.5959 49.5085 22.6411 49.7601Z" />
                </g>
                <defs>
                  <clipPath id="clip0_72_39">
                    <rect width="60" height="60" />
                  </clipPath>
                </defs>
              </svg>

            </a>

            <a href="https://www.linkedin.com/in/pablo-padilla-6861b5137/" target="_blank" rel="noreferrer">

              <svg className='w-14 h-14' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_72_45)">
                  <path d="M51.1228 51.124H42.2327V37.2013C42.2327 33.8812 42.1735 29.6074 37.609 29.6074C32.9787 29.6074 32.2702 33.2247 32.2702 36.9596V51.1231H23.3801V22.4922H31.9146V26.4049H32.0341C32.8882 24.9445 34.1224 23.7432 35.6053 22.9287C37.0881 22.1143 38.7641 21.7173 40.4547 21.7801C49.4652 21.7801 51.1266 27.707 51.1266 35.4176L51.1228 51.124ZM13.3491 18.5786C12.3287 18.5788 11.3312 18.2764 10.4827 17.7096C9.63416 17.1429 8.97282 16.3372 8.58218 15.3946C8.19153 14.4519 8.08915 13.4146 8.28804 12.4138C8.48692 11.4129 8.97812 10.4936 9.6995 9.7719C10.4209 9.05025 11.34 8.55871 12.3408 8.35946C13.3415 8.16021 14.3788 8.26219 15.3216 8.65251C16.2643 9.04284 17.0702 9.70396 17.6372 10.5523C18.2043 11.4006 18.507 12.398 18.5072 13.4184C18.5073 14.096 18.374 14.7669 18.1148 15.3929C17.8557 16.0189 17.4758 16.5877 16.9968 17.0668C16.5178 17.546 15.9491 17.9261 15.3233 18.1855C14.6974 18.4449 14.0266 18.5785 13.3491 18.5786ZM17.7941 51.124H8.89474V22.4922H17.7941V51.124ZM55.5549 0.0040879H4.42748C3.26703 -0.00900821 2.14879 0.439159 1.3186 1.25011C0.488405 2.06105 0.0141626 3.16843 0 4.32891V55.6702C0.0136779 56.8313 0.487642 57.9394 1.31781 58.7512C2.14797 59.563 3.26645 60.012 4.42748 59.9997H55.5549C56.7183 60.0142 57.8399 59.5665 58.6733 58.7547C59.5068 57.9429 59.9839 56.8336 60 55.6702V4.32521C59.9834 3.16243 59.5059 2.05379 58.6725 1.24286C57.839 0.431933 56.7177 -0.0149536 55.5549 0.000382054"  />
                </g>
                <defs>
                  <clipPath id="clip0_72_45">
                    <rect width="60" height="60" />
                  </clipPath>
                </defs>
              </svg>

            </a>

          </div>

        </footer>

      </div>
    </div>
  )
}

export default Home
