
import ImageComp from "./ImageComp"

export default function Search(){
  return (
    <div className='bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full'>
      <ImageComp src="icons/explore.svg" alt="search" w={16} h={16}/>
      <input type="text" placeholder="Search" className="bg-transparent outline-none placeholder:text-textGray"/>
    </div>
  )
}

