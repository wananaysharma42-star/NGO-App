// Registered.jsx
import React from 'react'
import RegisteredCard from './RegisteredCard'

function Registered(props) {
  return (
    <div className="min-h-screen bg-[#F1EDE3] p-6 md:p-12 font-sans text-[#2D5A27]">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* List Section Title */}
        <div className="border-b-4 border-[#2D5A27] inline-block">
          <h2 className="text-3xl font-black uppercase tracking-tight pb-2">
            All registered events
          </h2>
        </div>

        {/* Updated Grid Structure: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.arr.map((obj, index) => (
                <RegisteredCard 
                  key={index}
                  title={obj.title} 
                  org={obj.organization.name} 
                  desc={obj.description} 
                  dates={obj.dates} 
                  duration={obj.duration} 
                  url={obj.url} 
                  fun={props.fun} 
                  val={props.val}
                />
            ))}
        </div>

      </div>
    </div>
  )
}

export default Registered