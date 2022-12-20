import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMapContext } from "../context/mapContext";

const SearchBar = ({searchQuery, setSearchQuery}) =>{
    const router = useRouter();
    const {placeService, autoCService} = useMapContext();
    const [focused, setFocused] = useState(false);
    const [locSuggestions, setLocSuggestions] = useState([]);
    const [empty, setEmpty] = useState(false);

    const leftSvg = <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    const locationArrow = <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
    const xmark = <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    const restaurant = <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
    const mag = <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        const results = document.getElementById('searchresults')
        if(focused){
            body.style.overflow = 'hidden'
            results.scrollTop = 0;
        }else{
            body.style.overflow = 'scroll'
        }
    }, [focused])

    const handleKeyPress = (e) =>{
        if(e.keyCode === 13){
            e.target.blur()
            if(searchQuery){
                router.push({
                    pathname: `/location/${searchQuery}`,
                })
                setFocused(false)
            }
          // search restaurants using searchbar input location
          // if click, search restaurants using clicked location
        }
     }

    
    useEffect(()=>{
        setEmpty(false);
        if(searchQuery){
            getLocationSuggestions(searchQuery);
        }else{
            setLocSuggestions([])
        }
    },[searchQuery])

    const getLocationSuggestions = (location)=>{
        if(autoCService){
            const autoCompTypes = ["geocode"];

            autoCService.getPlacePredictions({ input: location, types: autoCompTypes }, (
              results,
              status
            ) => {
              if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                setLocSuggestions(results)
              }else{
                  setEmpty(true);
               }
            });
        }
    }
     
    return(
        <div className="w-screen rounded-full pt-5 fixed flex items-center h-auto z-10">
            <div className={`z-20 w-[90vw] mx-[5vw] duration-100 rounded-full ${focused?"border-b after:shadow-xl":"border-none shadow-xl"} flex items-center after:content-[''] after:absolute after:bg-white ${focused?"after:opacity-100":"after:opacity-0"} after:duration-100 after:w-screen after:top-0 after:left-0 after:z-[-1] after:bottom-0`}>
                <div className={`duration-300 ${focused?"w-4":"w-0"} cursor-pointer`} onClick={()=>setFocused(false)}>
                    {leftSvg}
                </div>
                <input 
                    className={`text-lg py-3 outline-none px-5 w-full bg-white rounded-full`}
                    placeholder="Find black owned restaurants near..."
                    value={searchQuery}
                    onChange={e=>{
                        setSearchQuery(e.target.value);
                    }}
                    onFocus={()=>setFocused(true)}
                    onKeyUp={handleKeyPress}
                    />
                <div className={`${searchQuery&&focused?"w-4":"w-0"}`} onClick={()=>{setSearchQuery('');}}>
                    {xmark}
                </div>
            </div>
            <div id="searchresults" className={`fixed pt-20 overflow-scroll w-screen h-screen bg-white z-5 top-0 left-0 duration-300 ${focused?"opacity-100 visible":"opacity-0 invisible"}`}>
                {
                   empty?
                    <Link href={`/location/${searchQuery}`} key={`elem_${searchQuery}`} onClick={()=>setFocused(false)}>
                        <div className="w-full h-20 p-3 pb-1 border-b flex items-center">
                            <div className={`w-5 mr-3`}>
                                {mag}
                            </div>
                            <div className="w-full min-w-0">
                                <p className="text-xl">
                                    Search for {searchQuery}
                                </p>
                            </div>
                        </div>
                    </Link>:
                    locSuggestions.map((elem)=>{
                        const {place_id, terms} = elem;
                        if(!terms?.length)
                            return <></>
                        return (
                            <Link href={`/location/${terms[0].value}`} key={`elem_${place_id}`} onClick={()=>setFocused(false)}>
                                <div className="w-full h-20 p-3 pb-1 border-b flex items-center" onClick={()=>{setSearchQuery(terms[0].value)}}>
                                    <div className={`w-5 mr-3`}>
                                        {locationArrow}
                                    </div>
                                    <div className="w-full min-w-0">
                                        <p className="text-xl">
                                            {terms[0].value}
                                        </p>
                                        {
                                            terms.length>1 && 
                                            <p className="text-md text-gray-500 text-ellipsis overflow-hidden truncate">
                                                {terms.slice(1).map(e=>e.value).join(", ")}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                        }
                    )
                }
            </div>
        </div>
    )
}
export default SearchBar;
