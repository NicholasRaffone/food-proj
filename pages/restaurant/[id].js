import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMapContext } from "../../context/mapContext";

const Restaurant = () => {
    const phonesvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 fill-gray-700"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
    const locsvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-4 fill-gray-700"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
    const magsvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 fill-gray-700"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
    const usersvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 fill-gray-700"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    const router = useRouter();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = router.query;
    const {placeService} = useMapContext();
    const [hoursOpen, setHoursOpen] = useState(false);
    const hoursRef = useRef(null);
    const [reviewsOpen, setReviewsOpen] = useState(false);
    const reviewRef = useRef(null);
    const star = (classes) => <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    const leftSvg = (classes) => <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    
    useEffect(()=>{
        const fetchRestaurantDetails = async(id)=>{
            placeService.getDetails(
                {placeId: id},
                async (place, status)=>{
                    console.log(place)
                    if(place){
                        setData(place);
                        // await Promise.all(place?.photos.map(photo=>preloadImage(photo.getUrl())))
                    }
                    setLoading(false)
                }
            );
        }
        if(id && placeService){
            fetchRestaurantDetails(id)
            // setTimeout(()=>{
            //     setData(det)
            //     setLoading(false)
            // },2000)
        }
    },[id, placeService])
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[loading])

    if(loading){
        return (
            <div className="pt-24 pb-5 px-6 md:px-24">
                <div className="flex w-full h-64 md:h-80 rounded-xl">
                    <div className="w-1/2 h-full rounded-l-xl object-cover bg-gray-300 border border-white"/>
                    <div className="w-1/2 h-full rounded-r-xl">
                        <div className="h-1/2 rounded-r-xl w-full object-cover bg-gray-300 border border-white"/>
                        <div className="h-1/2 rounded-r-xl w-full object-cover bg-gray-300 border border-white"/>
                    </div>
                </div>
                <div className='w-full h-6 my-3 rounded-full bg-gray-300'/>
                <div className='w-10/12 h-4 my-3 rounded-full bg-gray-300'/>
                <div className='w-7/12 h-4 my-3 rounded-full bg-gray-300'/>
            </div>
        )
    }

    return(
        <div className={`pt-24 pb-5 px-6 md:px-24 duration-300 animate-slideIn`}>
            {
                data?.photos?.length>0?
                <div className="flex w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
                    <img src={data.photos[0].getUrl()} className={`${data.photos.length>1?"w-1/2":"w-full"} h-full object-cover`}/>
                    {
                        data?.photos?.length>1?
                    <div className="w-1/2 h-full rounded-r-xl">
                        {
                            data?.photos?.length>1?<img src={data.photos[1].getUrl()} className={`${data.photos.length>2?"h-1/2 ":"h-full"} w-full object-cover`}/>:<></>
                        }
                        {
                            data?.photos?.length>2?<img src={data.photos[2].getUrl()} className={`h-1/2 w-full object-cover`}/>:<></>
                        }
                    </div>:<></>
                    }
                </div>:<></>
            }
            <div className="px-2">
                <p className="text-3xl pt-5 font-bold">{data.name}</p>
                <p className="text-lg font-bold text-gray-700 flex items-center gap-1">
                    {star('h-4 fill-yellow-500')} <span>{data.rating}/5</span>
                </p>
                <div className="flex flex-col divide-y-2 py-2">
                    {
                        data?.formatted_address?
                    <a className="py-2 flex gap-3 w-full items-center" href={data.url} target="_blank" rel="noreferrer">
                        {locsvg}
                        <span className="text-md text-ellipsis overflow-hidden whitespace-nowrap">
                            {data.formatted_address}
                        </span>
                    </a>:<></>
                    }
                    {
                        data?.international_phone_number?
                        <a className="py-2 flex gap-3 w-full items-center" href={`tel:${data.international_phone_number.replace(' ','')}`}>
                            {phonesvg}
                            <span className="text-md">
                                {data.international_phone_number}
                            </span>
                        </a>:<></>
                    }
                    {
                        data?.website?
                        <a className="py-2 flex gap-3 w-full items-center" href={data.website} target="_blank" rel="noreferrer">
                            {magsvg}
                            <span className="text-md text-ellipsis overflow-hidden whitespace-nowrap">
                                {new URL(data.website).origin}
                            </span>
                        </a>:<></>
                    }
                </div>
                {
                    data?.opening_hours?.weekday_text?.length>0?
                    <>
                    <p className="cursor-pointer text-2xl justify-between items-center pt-5 pb-2 font-bold flex" onClick={()=>(setHoursOpen(!hoursOpen))}>
                        <span>Hours</span>
                        {leftSvg(`fill-black h-5 mr-1 duration-300 ${hoursOpen?"rotate-[270deg]":"rotate-180"}`)}
                    </p>
                    <div className={`duration-300 overflow-hidden`} style={{height:hoursRef?.current&&hoursOpen?`${hoursRef.current.scrollHeight}px`:'0px'}} ref={hoursRef}>
                    {
                        data.opening_hours.weekday_text.map(text=>(
                            <div className="" key={text}>
                                <p>
                                    <span>
                                        {text.split(": ")[0]}
                                    </span>
                                    <span className="float-right">
                                        {text.split(": ")[1]}
                                    </span>
                                </p>
                            </div>
                        ))
                    }
                    </div>
                    </>:<></>
                }
                {
                data?.reviews?.length > 0?
                <div className="py-3">
                    <p className="cursor-pointer text-2xl justify-between items-center pt-5 pb-2 font-bold flex" onClick={()=>(setReviewsOpen(!reviewsOpen))}>
                        <span>Reviews</span>
                        {leftSvg(`fill-black h-5 mr-1 duration-300 ${reviewsOpen?"rotate-[270deg]":"rotate-180"}`)}
                    </p>
                    <div className={`duration-300 overflow-hidden`} style={{height:reviewRef?.current&&reviewsOpen?`${reviewRef.current.scrollHeight}px`:'0px'}} ref={reviewRef}>
                    {
                        data.reviews.slice(0,3).map((review)=>(
                            <div key={review.text} className="rounded-xl p-3 border mb-5 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-slate-200 h-7 w-7 flex items-center justify-center">
                                        {usersvg}
                                    </div>
                                    <p>{review.author_name}</p>
                                </div>
                                <p className="pt-3 px-1">
                                {review.text}
                                </p>
                            </div>
                        ))
                    }
                    </div>
                </div>:<></>
                }

            </div>

            
        </div>
    )
}
export default Restaurant;
