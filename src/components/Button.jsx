const Button = ({text, className}) => {
    return (
      
      <button className={`${className} bg-black text-white px-5 py-2 rounded-md`}>{text}</button>
    )
  }
  
  export default Button