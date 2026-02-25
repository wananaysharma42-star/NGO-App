// RegisteredCard.jsx
import React from 'react'

function RegisteredCard(props) {
  return (
    <div className="bg-white border-2 border-[#2D5A27]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full w-full">
      
      {/* Visual Header */}
      <div className="bg-[#2D5A27]/5 px-5 py-3 border-b border-[#2D5A27]/5">
        <div className="text-[#E67E22] text-xs font-black uppercase tracking-widest truncate">
          {props.org}
        </div>
      </div>

      {/* Increased padding to p-5 to add height */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="text-[#2D5A27] text-xl font-black uppercase tracking-tighter leading-tight mb-2 line-clamp-1">
            {props.title}
          </div>
          {/* Increased back to 3 lines for more height */}
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

        {/* Action Section */}
        <div className="mt-5 space-y-3">
          <div className="text-[#2D5A27] text-sm font-bold border-b border-[#2D5A27] inline-block hover:text-[#E67E22] hover:border-[#E67E22] cursor-pointer transition-colors">
            <a href={props.url} target="_blank" rel="noreferrer">Visit Website</a>
          </div>
          
          <button 
            onClick={() => {
                const eventData = { title: props.title  , remove : true};
                props.fun(eventData)
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-black uppercase tracking-widest py-3 rounded-xl transition-all active:scale-[0.98] shadow-sm"
          >
            Remove Registration
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisteredCard