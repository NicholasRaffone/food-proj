import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMapContext } from '../../context/mapContext'

const Post = () => {
  const router = useRouter()
  const [rests, setRests] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = router.query
  const {placeService} = useMapContext();
  const star = (classes) => <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    // set load, query restaurants, display results
    // onclick, href to /restaurant/id (make design)
  function toTitleCase(str) {
    return str?.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  useEffect(()=>{
    const findRestaurants = (location) => {
      const request = {
        query: `Black owned ${location}`,
        type: ["restaurant"],
      };
      //set Loading
      placeService.textSearch(request, (
          results,
          status
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const userRests = [];
            for(let i=0; i< results.length; i+=1){
              const {formatted_address, name, place_id, rating, photos} = results[i];
              userRests.push({
                formatted_address,
                name,
                place_id,
                rating,
                image_url: photos?.length?photos[0].getUrl({maxWidth:640}):''
              })
            }
            setRests(userRests)
          }
          setLoading(false);
      });
    }
    if(id && placeService){
      findRestaurants(id);
      // setRests(def);
    }
  },[id, placeService])

  return (
    <div className='pt-24 md:px-24 lg:px-48 xl:px-60'>
        <p className='px-5 pb-5 text-2xl font-bold border-b'>
          {loading||rests.length>0?"Black Owned Restaurants Near:":"No Results Found Near: " }
          <span className='text-red-500'>
            &nbsp;
            {toTitleCase(id)}
          </span>
        </p>
        <div className='p-5'>
          {loading?
          new Array(3).fill(1).map((val, index)=>(
            <div key={index} className="w-full rounded-xl shadow-xl mb-10 gap-3 animate-pulse">
              <div className='h-32 rounded-t-xl w-full bg-gray-300'/>
              <div className='p-4'>
                <div className='w-full h-4 mb-3 rounded-full bg-gray-300'/>
                <div className='w-5/12 h-4 mb-3 rounded-full bg-gray-300'/>
                <div className='w-9/12 h-4 rounded-full bg-gray-300'/>
              </div>
            </div>
          ))
          :rests.map(rest=>(
            <Link href={`/restaurant/${rest.place_id}`} key={rest.name}>
              <div className='w-full rounded-xl shadow-xl mb-10 gap-3'>
                <img src={rest.image_url} className="h-32 rounded-t-xl w-full object-cover"/>
                <div className='h-full p-4'>
                  <p className='text-lg font-bold text-black'>
                    {rest.name} 
                  </p>
                  <div className='flex items-baseline gap-1'>
                    {star('fill-yellow-500 h-3')}
                  <p className='text-sm'>
                    {rest.rating}/5
                  </p>
                  </div>
                  
                  <p className='text-xs font-bold text-gray-500'>{rest.formatted_address}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Post
