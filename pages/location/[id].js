import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMapContext } from '../../context/mapContext'

const def = [
  {
      "formatted_address": "35 Carmine St, New York, NY 10014, United States",
      "name": "Berber Street Food",
      "place_id": "ChIJqfQcVSBZwokREe4gnU3TVOY",
      "rating": 4.6,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDwfZACCc3sMCjhCdRmKEtDPLhbzinkpCkMunmTWUGPh1c7d39grUdRAGIczd5U4wJfQHj-zClSJ36onuW401bdGhZe8KMFj0JHs3MusuxezVITVUSGDmwKQAxIN7e2b1RQ7rKlrNHPvJrEEEODMIYtpGwY8s88M-zAEeeeEJzJSXuOz&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=22731"
  },
  {
      "formatted_address": "41 Carmine St, New York, NY 10014, United States",
      "name": "Urban Vegan Kitchen",
      "place_id": "ChIJ6QeO95JZwokRZXBnIGL5rEg",
      "rating": 4.5,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDzx2OCGCtkh9weIhQXSsXFMx8OLwVUjNgw60CwRoQfr1JJRhweUnKStIrm9736egNcP2AdV06rCIlgXUAK6Op7VC0n_kQwQVYAdRyyWfBBMYWAoc5dAZ-xJa-svM2NVoj877YQvD2VU8Kkc4UJnn0S6lAQIDR27rbfSTZhLguM5bXb8&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=44364"
  },
  {
      "formatted_address": "124 MacDougal St, New York, NY 10012, United States",
      "name": "Meskerem",
      "place_id": "ChIJsU0rhJFZwokRFWpq6n3GneM",
      "rating": 4.2,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDwxbx83rhnOgbOpmDFBkWMkfHdwt1NFeVObTCE1JTFaYO8pjgWioUDQEn1t9X7sLn4SalfWDSyHB9HK-QUY8029k8UlRI5QiseN8u5Z64kEl4MqbNszCGBQ-HzFwfKksnCP_SAwhholxSsVg8uy_BVfBxJYZ0W5oSCewIbn5U6OjYUb&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=98158"
  },
  {
      "formatted_address": "70 W 3rd St, New York, NY 10012, United States",
      "name": "Negril Village",
      "place_id": "ChIJ57MmsJFZwokRpjsY3y4xzdg",
      "rating": 4.3,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDz2c_3U1izOZa-TO4NnQylNYiLw9je_QNlis42FJn1oTogq3tjLIPNWnkWSIQB8Mm5wgLR_io2eqoEpXFMOu_tlNP70EKTGdp2RtEnzD-pvi8b_AAx3eyksuTzRI8PyTIA8tRk2wqgWuF1vZp-7-LmQaiLeLCz12jrp7QquwmVWT-Uy&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=104561"
  },
  {
      "formatted_address": "519 Hudson St, New York, NY 10014, United States",
      "name": "Cowgirl",
      "place_id": "ChIJLefnVOtZwokRN2j6XKEj8EU",
      "rating": 4.3,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDzEou6oQhs3sYLDU1Db5bPq1w8og8pa9AhIVQ8Nd0Ysr8DQIbqJIwcSyIwP9lpTNLWf3314sF6WWb7_ErdR2bt5CSmZ0xsH_VqikW_0QFNnf81VDeLmEu_6AglD37ggMDq3K5WItFpDoUY5W65GoNl3BU2J2D_B1u9w-f-P5CoaYkrt&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=25423"
  },
  {
      "formatted_address": "64 Carmine St, New York, NY 10014, United States",
      "name": "Sveta",
      "place_id": "ChIJZ9_Q8pJZwokRNgf0n3Ledmw",
      "rating": 4.4,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDwypDEDmF9rVLDXVdbV6wFlNZuGHGEmu4bkdsUQcCrjq8RRpCOaSYQynP5TsiYVp09J3ePDJ6iyppRXNNjKRFif54QI4QDyJWCFRBfEcp8pNFHFtJ1RWCk6qCWoOZMuDINbjWQnDky83vHrlYPRHef8zuA7E2qg7LPO60Z7KXGhkQN7&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=107762"
  },
  {
      "formatted_address": "185 Bleecker St, New York, NY 10012, United States",
      "name": "Beatnic - West Village",
      "place_id": "ChIJww9gXa9ZwokRS7BYko4mFPI",
      "rating": 4.3,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDyV25l7cDlSy3ann8WObly1iG80_tgOLEvV6b1wsJfs61afJoLL0_XlOou48JkZLgiBuW0VsKKsnQPAca2-_g7d-dURyIJTk8ou0bfCoQzmZPDZF8dnDdkELXvH7j4GDUr6EW0-vwCiieByhRuKQ7LHRXKSULH9i54onmb8N0tR_o6S&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=40274"
  },
  {
      "formatted_address": "141 W 10th St # A, New York, NY 10014, United States",
      "name": "Bell Book & Candle",
      "place_id": "ChIJRZ8iJpRZwokRPBpWkEwQEAo",
      "rating": 4.3,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDzWyIMqGyOQraRd64ogU3pyQ8mzaCbLmrjbKyUuCqHApIWjhkQDUkklM2s9a52M30v3KwjnIQ7019wsNnqd2NUlS7mmkipbjdoz7T4r2VhrB9trXWJg43DCQCdnA25Suq2eDQhMIGUcUuOXVe7LnSwWvcP9HQs_WQKzLqk-XN-8zM2-&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=59700"
  },
  {
      "formatted_address": "232 Bleecker St, New York, NY 10014, United States",
      "name": "DIG on Bleecker",
      "place_id": "ChIJ46DX8a1ZwokRex5GGYps7oE",
      "rating": 4.7,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDz7byOM_F6SmI7DTh9UHPLxEIbEIgkfjdY2ErhMtNLUmv89f4BFCcvdr1-sUjOTRAJ-ECG7TW7bme4gYIm9QfF1h3VBnfF6r-nXpg_FGduMI-7c7D0hTxB9D4pk5ODwEe1f9jn7TWv5s17PD4WGskQZILDNTYk05iFj7M1xJvlb135K&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=17201"
  },
  {
      "formatted_address": "466 Hudson St, New York, NY 10013, United States",
      "name": "Oscar's Place",
      "place_id": "ChIJYYVGLZNZwokRJGxEfwiqq4A",
      "rating": 4.6,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDyO4IKxQmLgTA0whW6Kj5LvQIJO_o24KqsPOVmG5nSKExQ2CH3jUkmoZ7lF7bDdq_l0AdcRFqmIET6C5-Eq5Lcb_bSXWHDWv20ovzxK968d1uNvvvTO2WnLXnXcQhJcldYs1Imr9fwEt570xN_oOKyvhs9d5HoDrfiQKD-yzVpLEjzg&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=105749"
  },
  {
      "formatted_address": "68 Greenwich Ave, New York, NY 10011, United States",
      "name": "Elephant & Castle",
      "place_id": "ChIJM0rq2JVZwokRDlxoPRqwCWs",
      "rating": 4.4,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDycdLw3gGO0csS_boAhuRnUkrsANIKfLgozAt7mbTmKm4c7dfSFTl7Xu02ubL-b3PipEjliL2OIoDfPlvGE3rgWrYcP3MqXV14hguQFH4K84KLql99vOXSsvqH46AR4anU3NiT8FDYGS2HS1HMwBn4Hc1dpJ1zQ6DrGmzIUShcENGez&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=92676"
  },
  {
      "formatted_address": "581 Hudson St, New York, NY 10014, United States",
      "name": "The Butcher's Daughter",
      "place_id": "ChIJp9DeK5VZwokRSGQyeM43s8I",
      "rating": 4.1,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDwRh9NCJpl9c84blqpdoIDcrFsvWxYjgdpKiKeBYdQm415iFn4QTlm2ZzXgV3rjWDRnPewO_8wH1e6II5HoTM5XVATFmCCh77LDmM9Dy9SCqS5uiTYGWJd983o8ajSozQnkWj8fM-4b_q0oc5BjqUwED6GO3Amd6IV1xWmj2SHej-Vg&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=69264"
  },
  {
      "formatted_address": "140 West 4th Street, New York, NY 10012, United States",
      "name": "Red Bamboo",
      "place_id": "ChIJwUWsZpFZwokRhNINc_5-u9I",
      "rating": 4.5,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDwpfaN7PkEEU873gcP5KYHiGN8434IPBTjA8-GOngbhm5Ol5w-XVHTawtMMM-eMF9bpQZHvlFVoD5pKCMLTM5CXINnmy5SdPLsX5n0OuCNO6BRortX2q0VjgyBNoCKGZOR0Sm89NYxPy4CEDoTZZH0DRlbOnqiSnnyyBACP1jlWmHHC&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=98713"
  },
  {
      "formatted_address": "108 Greenwich Ave, New York, NY 10011, United States",
      "name": "Tea & Sympathy",
      "place_id": "ChIJxwZIH75ZwokR_A9YYNU38os",
      "rating": 4.3,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDx0xZv8umahMWa38Dl0pnCwwDUz52D_ywYxCTwqy74cj8n_A4lHnAQ-jCE7S0iUGw040vqrjoa3dDTGIBnxCjy6aVZtYFI6km9PwBz9opX4-yDbPO-iQUVisivB5aBWPQ-NftCJoNznP8RS-J6bPEwYqvtYtsBJUjcJrXkKvfVX424g&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=108310"
  },
  {
      "formatted_address": "64 Charles St, New York, NY 10014, United States",
      "name": "Mary's Fish Camp",
      "place_id": "ChIJPRCpXpRZwokRtFAFKuIuG7M",
      "rating": 4.5,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDxXP_Wacrjmkk-B-g6Gj5yip13sOD6TiW23hNom0qRuOOcqOhFPG-SJDlq0XtcvQbHW0VRX31YcLPZ7XwtNEJkMhJ4WumhzKeN32MZ9KonRJoZfP4eQLadLcvY8eRs7sgJyiRe7yPiqsnlI-FEt_Lr0d6nF9qcvOl5MbXHNg9Dx6uZy&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=75236"
  },
  {
      "formatted_address": "170 Waverly Pl, New York, NY 10014, United States",
      "name": "Joseph Leonard",
      "place_id": "ChIJ2fUkDpRZwokRUfmdRhH-Czg",
      "rating": 4.6,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDwUPoFg_sUs4t6CmYtND0R3IXmJy60mUmz9BO_ntIAPhffzynVCweLSrBu6_qjGHc7FcAvs8MVMdc5CawaCyKjToRnICKy1ujR2MCc3Q1DXSDHAuR2NtcgPuwJZ5UiqphV1Xgr6kzPbDv5Jyhz-J5-u5nG8OhRCBllreeimJCUppKM0&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=65213"
  },
  {
      "formatted_address": "254 W 72nd St, New York, NY 10023, United States",
      "name": "Ashford & Simpson's Sugar Bar",
      "place_id": "ChIJyxs07mFYwokRGlBd5nyxHLc",
      "rating": 4.5,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDw4GoDuty8XkGj4feFc-RUOZnNsfft3e5kEXRbN8ZDbWkQILxehCFxMMHzJ2EZzWrcu4Lq87q5pjcIEw1cpJSU7vxBXPhDDr0TTOuVp0Acz4jYJypJBBgayjEQN4SqsgGoJDKh8YBOPp0HiICbkXRRVVlJ-lKOBvovmB8HrAs_jGc0q&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=7335"
  },
  {
      "formatted_address": "535 Hudson St, New York, NY 10014, United States",
      "name": "Wild",
      "place_id": "ChIJeVPytJRZwokRYDd-Jd2nO_w",
      "rating": 3.9,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDzKxkXNTyIY-66Ag320xPnxteFREGhzX9zbEOlgUETjqmXryEM8W2rqZLdPF1vheItqEqjTQPLW10M_R8bjX79CKLQkwQ16Mljwfo-uNnqP7nQfFCgbrcCJMemxnvjTTINamyecAGvXIVNPtkaOT4153k6sjBYSunA2zfnsMe_KVjdM&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=53858"
  },
  {
      "formatted_address": "228 West 4th Street, New York, NY 10014, United States",
      "name": "Wilfie & Nell",
      "place_id": "ChIJiyy1ZZRZwokRcP17CkI6abE",
      "rating": 4.4,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDx5oPQ7sLG6JYbv5wwQXhnbHGC3buWVzSHUHsARxzlYRjhdOtDri9muZge65ysFYC3iUeIa9RPa3qlS-aC74k2QlVqPJhuzCbFGWn-YNl1tW-StWvNm9VQxA84mX4tJQr1UJDj5uSHhcWcFwC8iVMtYt5RCWOREO4rOj6WCPXhxTKG1&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=23558"
  },
  {
      "formatted_address": "122 Christopher St, New York, NY 10014, United States",
      "name": "North Fork",
      "place_id": "ChIJTb3nqbVZwokRSxHi96bv17U",
      "rating": 4.1,
      "image_url": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDyqO3cNCwfGYvS436eKZ22OhfmhpRm9CDx4OZe_RIYI7UaHyHaCeNrDkQS7_uITelRou0_cTigjV36KIssUPENtVWJTEVBqwjP3Wg5TZMqBcLBr24Ms4qn2F-r9SHZAfKWkSw5jqJMCDPGOWjnrIOq6mH0G28Ptf556MlhZwHEuoZsO&3u640&5m1&2e1&callback=none&key=AIzaSyDQsWK5-SAeyflw7xXRIpL99XPgmGWGmbg&token=72668"
  }
]

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
