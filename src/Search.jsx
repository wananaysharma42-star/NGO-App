import {React , useEffect , useState} from 'react'
import Card from './Card'

function Search(props) {
    let [event , setEvent] = useState([])
    let [search , setSearch] = useState("")
    let [filter , setFilter] = useState([])
    let [page , setPage] = useState(1)
    useEffect(() => {
        async function getData(){
            let response = await fetch(`https://www.volunteerconnector.org/api/search/?page=${page}`)
            let data = await response.json()
            setEvent(data.results)
        }   
        getData()
    } , [page])

    useEffect(() => {
        let filterEvent = event.filter((obj) => {
            const titleMatch = obj.title.toLowerCase().includes(search.toLowerCase())
            const descMatch = obj.description.toLowerCase().includes(search.toLowerCase())
            return titleMatch || descMatch
        })
        setFilter(filterEvent)
    } , [search])

  return (
    <div className="min-h-screen bg-[#F1EDE3] font-sans text-[#2D5A27] p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* SearchBar Section - Compact Height */}
        <div className="space-y-3">
          <label className="block text-xs font-black uppercase tracking-widest text-[#2D5A27]/60 ml-2">
            Search for events or causes
          </label>
          <div className="relative bg-white border-2 border-[#2D5A27]/20 rounded-xl p-1.5 shadow-sm focus-within:border-[#2D5A27] transition-all">
            <div className="flex flex-col sm:flex-row gap-2">
              <textarea 
                placeholder="Type here..."
                className="w-full min-h-[60px] p-3 bg-transparent resize-none text-lg font-medium placeholder-[#2D5A27]/30 focus:outline-none text-[#2D5A27]"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
              />
              <div className="flex items-end justify-end p-1">
                <button className="h-full bg-[#E67E22] text-white px-6 py-2 rounded-lg font-black uppercase tracking-widest hover:bg-[#d35400] transition-all shadow-md text-sm">
                  Find
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Events</h2>
            <div className="h-[2px] flex-grow bg-[#2D5A27]/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {   
                (event.length === 0)?(
                    <div className="col-span-full flex flex-col items-center justify-center py-20 space-y-4">
                        {/* Animated Spinner/Circle */}
                        <div className="w-12 h-12 border-4 border-[#2D5A27]/10 border-t-[#E67E22] rounded-full animate-spin"></div>
                        <p className="text-[#2D5A27] font-black uppercase tracking-widest animate-pulse">
                            Fetching Opportunities...
                         </p>
                    </div>
                ):(search === "")?(
                    event.map((obj , index) => {
                        return (<div className="flex h-full">
                            <Card key={index} title={obj.title} org={obj.organization.name} desc={obj.description} dates={obj.dates} duration={obj.duration} url={obj.url } fun={props.fun} check={props.check} page={props.page}/>
                        </div>)
                    })
                ):(filter.length === 0)?(
                    <div className="col-span-full text-center py-20 text-[#2D5A27]/50 font-bold">
                        No results found for "{search}"
                    </div>
                ):(
                    filter.map((obj , index) => {
                        return (<div className="flex h-full">
                            <Card key={index} title={obj.title} org={obj.organization.name} desc={obj.description} dates={obj.dates} duration={obj.duration} url={obj.url } fun={props.fun} check={props.check} page={props.page}/>
                        </div>)
                    })
                )
            }
          </div>
        </div>
        {/* --- Pagination Section --- */}
        <div className="pt-12 flex items-center justify-center gap-4">
  
            <button onClick={() => {
                if(page > 1){
                    setPage(page-1)
                }
            }} className="px-6 py-2 rounded-lg font-black uppercase tracking-widest border-2 border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-[#F1EDE3] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              Prev
            </button>

            <div className="flex items-center justify-center w-10 h-10 rounded-full text-[#2D5A27] font-bold hover:bg-[#2D5A27]/10 transition-colors cursor-pointer border border-transparent hover:border-[#2D5A27]/20">
                {page}
            </div>

            <button onClick={() => {
                setPage(page+1)
            }} className="px-6 py-2 rounded-lg font-black uppercase tracking-widest border-2 border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-[#F1EDE3] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              Next
            </button>

        </div>
      </div>
    </div>
  )
}

export default Search