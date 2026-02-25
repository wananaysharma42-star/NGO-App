import React, { useEffect, useState } from 'react'

function Card(props) {
    const [status , setStatus] = useState("Register")
    useEffect(() => {
        let isRegistered = false 
        props.check.some((obj) => {
            if(obj.title === props.title){
                setStatus("Registered")
                isRegistered = true
            }
            if(!isRegistered){
                setStatus("Register")
            }
        })
    } )
        
  return (
    <div className="bg-white border-2 border-[#2D5A27]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full w-full">
      {/* Visual Header / Organization Stripe */}
      <div className="bg-[#2D5A27]/5 px-5 py-3 border-b border-[#2D5A27]/5">
        <div className="text-[#E67E22] text-xs font-black uppercase tracking-widest">
          {props.org}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Title and Description */}
        <div className="mb-4">
          <div className="text-[#2D5A27] text-xl font-black uppercase tracking-tighter leading-tight mb-2">
            {props.title}
          </div>
          <div className="text-[#2D5A27]/70 text-sm leading-relaxed line-clamp-3">
            {props.desc}
          </div>
        </div>

        {/* Event Details Section */}
        <div className="mt-auto pt-4 border-t border-[#2D5A27]/5 space-y-2">
          <div className="flex items-center gap-2 text-[#2D5A27]/80 text-xs font-bold">
            <span className="uppercase text-[#2D5A27]/40">When:</span>
            {props.dates}
          </div>
          <div className="flex items-center gap-2 text-[#2D5A27]/80 text-xs font-bold">
            <span className="uppercase text-[#2D5A27]/40">Time:</span>
            {props.duration}
          </div>
        </div>

        {/* Footer Links and Actions */}
        <div className="mt-5 space-y-3">
          <div className="text-[#2D5A27] text-sm font-bold border-b border-[#2D5A27] inline-block hover:text-[#E67E22] hover:border-[#E67E22] cursor-pointer transition-colors">
            <a href={props.url} target="_blank">Visit Website</a>
          </div>
          
          <button onClick={() => {
            const eventData = {
                title: props.title,
                organization: { name: props.org }, // Matches your Home.jsx structure
                description: props.desc,
                dates: props.dates,
                duration: props.duration,
                url: props.url
            };
            if(status === "Register"){
                props.fun(eventData)
            }
            }} className="w-full bg-[#2D5A27] hover:bg-[#1f3f1b] text-[#F1EDE3] font-black uppercase tracking-widest py-3 rounded-xl transition-all active:scale-[0.98] shadow-sm" value={status}>
            {status}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card