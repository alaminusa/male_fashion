
const Badge = ({text, className}) => {
  return (
    <button className={`${className} bg-black text-white hover:bg-white hover:text-black px-5 font-Poppins font-medium text-sm `}>{text}</button>
  )
}

export default Badge
