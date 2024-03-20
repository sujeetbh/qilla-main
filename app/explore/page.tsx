import React from 'react'
import CardSection from './card-section'

const Explore = () => {
  return (
    <div className="container mt-10">
      <CardSection title='Trending in Security NFTs' />
      <CardSection title='Top Collector Buys Today' />
      <CardSection title='Trending in Gaming' />
      <CardSection title='Trending in Membership' />
    </div>
  )
}

export default Explore