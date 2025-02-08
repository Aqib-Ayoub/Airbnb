interface CustomButtonProps{
    label:string;
    onClick:() => void;
    className?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick,
    className
}) => {
    return (
        <div onClick={onClick}
         className={`py-4 bg-airbnb hover:bg-airbnb-dark
          text-white text-center rounded-xl transition cursor-pointer  ${className} w-full`} > {label}</div>
    )
}
export default CustomButton