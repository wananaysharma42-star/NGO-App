import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Home(props) {
    let [event , setEvent] = useState([])
    useEffect(() => {
        async function getData(){
            let response = await fetch("https://www.volunteerconnector.org/api/search/?page=1")
            let data = await response.json()
            setEvent(data.results)
        }   
        getData()
    } , [])
  return (
    <div className="min-h-screen bg-[#F1EDE3] font-sans text-[#2D5A27]">
      
      {/* 1. Banner Section: Promoting Event Registration */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd9d7a915490?auto=format&fit=crop&q=80&w=2000" 
            alt="People volunteering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2D5A27]/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-[#F1EDE3] tracking-tighter uppercase mb-6 drop-shadow-lg">
            Be the Change <br /> <span className="text-[#E67E22]">Register Today</span>
          </h1>
          <p className="text-xl text-[#F1EDE3]/90 font-medium mb-8 max-w-2xl mx-auto">
            Join hundreds of volunteers making a real-world impact. Browse our upcoming events and claim your spot in the movement.
          </p>
          <Link to="/Search" className="bg-[#E67E22] hover:bg-[#d35400] text-white font-black uppercase tracking-widest px-10 py-4 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95">
            View All Events
          </Link>
        </div>
      </section>

      {/* 2. Popular Events Section (Layout Only) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#E67E22] font-bold uppercase tracking-[0.3em] text-sm">Happening Soon</span>
            <h2 className="text-4xl font-black text-[#2D5A27] uppercase tracking-tighter">Popular Events</h2>
          </div>
          <div className="h-1 flex-grow mx-8 bg-[#2D5A27]/10 hidden md:block mb-4 rounded-full"></div>
          <Link to="/Search" className="text-[#2D5A27] font-bold border-b-2 border-[#2D5A27] hover:text-[#E67E22] hover:border-[#E67E22] transition-colors">
            See everything
          </Link>
        </div>

        {/* Your Event Components will be mapped here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component Mapping Placeholder */}
            <div className="aspect-[4/5] rounded-3xl border-2 border-dashed border-[#2D5A27]/20 flex items-center justify-center text-[#2D5A27]/40 font-bold italic">
                {
                    event.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 space-y-4">
                            {/* Animated Spinner/Circle */}
                            <div className="w-12 h-12 border-4 border-[#2D5A27]/10 border-t-[#E67E22] rounded-full animate-spin"></div>
                            <p className="text-[#2D5A27] font-black uppercase tracking-widest animate-pulse">
                                Fetching Opportunities...
                            </p>
                        </div>
                    ) : (
                        <Card title={event[0].title} org={event[0].organization.name} desc={event[0].description} dates={event[0].dates} duration={event[0].duration} url={event[0].url } fun={props.fun} val={props.val} check={props.check}/>
                    )
                }
            </div>
            <div className="aspect-[4/5] rounded-3xl border-2 border-dashed border-[#2D5A27]/20 flex items-center justify-center text-[#2D5A27]/40 font-bold italic">
                {
                    event.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 space-y-4">
                            {/* Animated Spinner/Circle */}
                            <div className="w-12 h-12 border-4 border-[#2D5A27]/10 border-t-[#E67E22] rounded-full animate-spin"></div>
                            <p className="text-[#2D5A27] font-black uppercase tracking-widest animate-pulse">
                                Fetching Opportunities...
                            </p>
                        </div>
                    ) : (
                        <Card title={event[1].title} org={event[1].organization.name} desc={event[1].description} dates={event[1].dates} duration={event[1].duration} url={event[1].url} fun={props.fun} val={props.val} check={props.check}/>
                    )
                }
            </div>
            <div className="aspect-[4/5] rounded-3xl border-2 border-dashed border-[#2D5A27]/20 flex items-center justify-center text-[#2D5A27]/40 font-bold italic">
                {
                    event.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 space-y-4">
                            {/* Animated Spinner/Circle */}
                            <div className="w-12 h-12 border-4 border-[#2D5A27]/10 border-t-[#E67E22] rounded-full animate-spin"></div>
                            <p className="text-[#2D5A27] font-black uppercase tracking-widest animate-pulse">
                                Fetching Opportunities...
                            </p>
                        </div>
                    ) : (
                        <Card title={event[2].title} org={event[2].organization.name} desc={event[2].description} dates={event[2].dates} duration={event[2].duration} url={event[2].url} fun={props.fun} val={props.val} check={props.check}/>
                    )
                }
            </div>
        </div>
      </section>

      {/* 3. Our Story & Journey Section */}
      <section className="bg-white py-24 px-6 border-y border-[#2D5A27]/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E67E22]/10 rounded-full -z-10"></div>
            <h2 className="text-4xl font-black text-[#2D5A27] uppercase leading-tight mb-6">
              Our Story & <br /> <span className="text-[#E67E22]">The Journey So Far</span>
            </h2>
            <div className="space-y-4 text-[#2D5A27]/80 leading-relaxed text-lg">
              <p>
                What started as a small group of concerned citizens has grown into a global platform connecting advocates with the causes that need them most.
              </p>
              <p className="font-bold text-[#2D5A27]">
                We believe that transparency and local action are the keys to sustainable change.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F1EDE3] p-8 rounded-2xl text-center">
              <div className="text-4xl font-black text-[#2D5A27]">12K+</div>
              <div className="text-xs uppercase font-bold text-[#E67E22] mt-2">Volunteers</div>
            </div>
            <div className="bg-[#2D5A27] p-8 rounded-2xl text-center text-[#F1EDE3]">
              <div className="text-4xl font-black">500+</div>
              <div className="text-xs uppercase font-bold text-[#E67E22] mt-2">NGOs Joined</div>
            </div>
            <div className="bg-[#2D5A27] p-8 rounded-2xl text-center text-[#F1EDE3] col-span-2">
              <div className="text-4xl font-black">$2.4M</div>
              <div className="text-xs uppercase font-bold text-[#E67E22] mt-2">Impact Generated</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home