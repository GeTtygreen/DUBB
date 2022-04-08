export default function SidebarLink({Icon,text ,handlePlayerClick}) {
  return (
    <div className={`text-[orange] flex items justify center xl:justify-start text-xl space-x-3  hover:bg-[#660708] hover:rounded-full cursor-pointer  `}
    onClick={()=>handlePlayerClick()}
    
    >
        <Icon className="h-10"/>
        <span className="hidden xl:inline " >{text}</span>

    </div>
  )
}
