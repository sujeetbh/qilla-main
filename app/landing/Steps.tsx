import React from 'react'

const Steps = () => {
  return (
    <div className='container'>
      <header>
        <h2 
          className='
            text-6xl 
            tracking-tighter
            leading-tight
            font-bold max-w-[40rem]'>A fast-growing,global community</h2>
      </header>
      <p className='text-xl mt-6 max-w-[28em] text-neutral-300'>
        Join a fast-growing community of creators, collectors, and developers building the future of NFTs. By following these simple steps, you can start your journey with Qilla.
      </p>
      <div className='grid grid-cols-3 mt-12 gap-10 mb-20'>
        <StepText>Create a digital wallet: This is where you'll store your cryptocurrencies and NFTs.</StepText>
        <StepText>Top up your wallet: After creating your wallet, you'll need to add funds to it.</StepText>
        <StepText>Mint your NFT: This involves creating a unique digital asset that can be bought, sold, or traded on the blockchain.</StepText>
        <StepText>Store your NFT: Once minted, your NFT is stored in your digital wallet.</StepText>
        <StepText>Verify your NFT: The authentication and verification process for each NFT will be the same as in the case of a single NFT with the additional check that it is part of the originally minted group.</StepText>
        <StepText>Sell your NFT: Once verified, you can sell your NFT on the marketplace. The royalty terms associated with an NFT is stored at the time of initial minting of the NFT.</StepText>
        <StepText>Track your NFT: With the help of plusChain, each NFT can be securely tracked and traded across a metatoken.</StepText>
        <StepText>Enforce contract terms: Marketverse allows users to enforce relevant contract terms (including royalty rates) per marketplace, subject to them existing in the relevant smart contract</StepText>
      </div>
    </div>
  )
}

export default Steps

const StepText = ({ children } : { children: string}) => {
  return (
    <div className='text-lg flex items-start'>
      <div className='text-5xl mr-3 font-thin'>+</div>
      <div className='mt-4 text-neutral-300'>{children}</div>
    </div>
  )
}