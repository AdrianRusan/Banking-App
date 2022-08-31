import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div key={stat.id} className={`flex-1 flex justify-evenly items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">{stat.title}</p>
        <p className={`font-poppins font-normal text-[15px] text-gray-500 ${index === stats.length - 1 ? 'hidden' : 'ml-9'}`}>|</p>
      </div>
    ))}
  </section>
)


export default Stats