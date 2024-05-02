import { CardContainer, CardItem, CardBody } from '@/components/ui/3d-card'

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle
} from '@/components/ui/text-reveal-card'

//import { featureData } from './data'
import { cn } from '@/lib/utils'
import { fetchFeatureData } from '../(protectedRoutes)/_actions/featureSection/getFeatureData'

const FeatureGrid = async() => {
  const featureData = await fetchFeatureData();
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 row-auto container mx-auto md:gap-x-6 gap-y-6'>
      {featureData?.map((feature, index): any => {
          if(index === 1) {
            return (
              <div key={index} className='rounded-3xl border-white/5 col-span-2 row-span-1 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] bg-black'>
                <TextRevealCard
                  text="Unsecured NFTs"
                  revealText="Secure with Qilla"
                >
                  <TextRevealCardTitle className='text-xl mb-2 font-semibold'>
                    {feature.title}
                  </TextRevealCardTitle>
                  <TextRevealCardDescription className='text-[15px]'>
                    {feature.description}
                  </TextRevealCardDescription>
                </TextRevealCard>
              </div>
            )
          } else {
            return (
              <CardContainer key={feature.id} className={cn("inter-var", index === 1 || index === 3 || index === 4 ? "col-span-2" : "")}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full min-h-[19rem] rounded-3xl p-8 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
                  >
                    {feature.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[15px] max-w-sm mt-2 dark:text-neutral-400 leading-relaxed"
                  >
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            )
          }
      })}
    </div>
  )
}

export default FeatureGrid