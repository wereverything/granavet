import { RiStarSFill } from 'react-icons/ri'

export default function Comments({name, descrip}) {
    return (
        <div id="container-comments" className="flex flex-col gap-4 border-[1px] py-4 px-3 rounded-xl border-lime-100">
            <div id="comment" className='font-montserrat text-center text-lime-600 text-xs dark:text-lime-200'>{descrip}</div>
            <div id='camp-two' className='flex flex-row items-center justify-between'>
                <div id="name" className="text-sm text-lime-500 font-poppins dark:text-lime-100">{name}</div>
                <div id="stars" className='flex text-yellow-400'>
                    <div id="one"><RiStarSFill /></div>
                    <div id="two"><RiStarSFill /></div>
                    <div id="three"><RiStarSFill /></div>
                    <div id="four"><RiStarSFill /></div>
                    <div id="five"><RiStarSFill /></div>
                </div>
            </div>
        </div>
    )
}