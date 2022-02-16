/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { Footer } from '../components/footer/Footer';

const Home: NextPage = () => {

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



      <Footer />

      </div>
    </div>
  )
}

export default Home
