import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Map from '../../../../subcomponents/Map/Map'
import Events from '../../../../subcomponents/events/Events/Events'
import { getGarden } from './aboutHelper'
import BarGraph from '../../../../subcomponents/dataVis/BarGraph'
import { motion } from 'framer-motion'
import { leftVariant, rightVariant } from '../../../animationVariants'
import ProduceList from '../../../../subcomponents/produce/ProduceList/ProduceList'
import Gallery from '../../../../subcomponents/Gallery/Gallery'

export default function About() {
  const { id } = useParams()
  const garden = useSelector((globalState) => globalState.garden)
  const user = useSelector((globalState) => globalState.user)
  const location = useSelector((globalState) => globalState.location)

  useEffect(() => {
    user.id && getGarden(id, user)
  }, [id, user])

  const { name, description, address, url, events, lat, lon } = garden

  return (
    <section className="flex-container column-9 centre-flex">
      <motion.div
        variants={leftVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="column-9">
          <article>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={url}>{url}</a>
          </article>
          <Events gardenid={id} events={events} />
          <ProduceList gardenid={id} />
        </div>
        <section className="flex-column flex-container">
          <Gallery />
        </section>
      </motion.div>
      {lat && lon ? (
        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="garden-side-bar"
        >
          <Map
            userCoordinates={location}
            coordinates={[{ lat: lat, lon: lon }]}
            addresses={[address]}
            names={[name]}
          />
          {user.isAdmin ? <BarGraph events={events} /> : null}
        </motion.div>
      ) : null}
    </section>
  )
}
