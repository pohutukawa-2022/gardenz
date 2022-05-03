import React, { useEffect, useState } from 'react'
import { getProduce } from '../produceHelper'

export default function ProduceList({ gardenid }) {
  const [produce, setProduce] = useState([])

  useEffect(() => {
    getProduce(gardenid).then((data) => {
      console.log('data:', data)
      setProduce(data.produce)
      return null
    })
  }, [gardenid])

  return (
    <>
      <div className="column-9 event-container">
        <h1 className="events-title">Produce</h1>
      </div>

      <div>
        <section className="events-list">
          <ul>
            {produce.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'

// import { getProduce } from '../../components/produce/produceHelper'
// //import { produceList } from './components/produceList?

// export default function Produce() {
//   const { id } = useParams()

//   const [produce, setProduce] = useState({})

//   const user = useSelector((globalState) => globalState.user)

//   useEffect(() => {
//     // eslint-disable-next-line promise/catch-or-return
//     getProduce().then((produce) => {
//       //will likely be an array of objects
//       setProduce(produce)
//       return null
//     })
//   }, [])

//   return (
//     <>
//       {user?.isAdmin ? (
//         <>
//           <section>
//             <ProduceList produce={produce} gardenId={id} />
//           </section>
//         </>
//       ) : null}
//       {/* <EventDetail eventId={eventId} user={user} /> */}
//     </>
//   )
// }

// //This file/component is to display our produce
