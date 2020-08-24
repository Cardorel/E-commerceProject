import React from 'react'
import FaqContent from './faqContent'
import RapidFire from './rapidFire'

export default function ContainerFaq() {
    return (
        <div className="container w-50 m-auto container__faq">
            <FaqContent
              header="How long does shipping take?"
              paragraph="Now that's frequent one all right, ain't it? Your answer to this should manage customer expectations. Just like a good checkout flow should. Tell them the truth;"
              list1="Us shipping will take between 3 to 5 busness days."
              list2="Internation shipping will take between 5 and 10 bunsiness days."
              list3="Mars shipping will be automatically redirected to Elon Mush's Twitter account"
              exist={true}
            />
            <FaqContent
            header="How do refunds and returns work?"
            paragraph="It happens. Even the most beautiful of plants will disapoint someone. Again, tell it like it is:"
            list1="All discounted items sales are final."
            list2="If you'd like another version of item, please use the return label. Instuctions are printed on its back."
            list3="If your item is damaged or not functioning correctly, email us at cardorelngassaki@gmail.com, and we''ll refund you + send you a new one ASAP!"
            exist={true}
          />
          <FaqContent
            header="How do refunds and returns work?"
            paragraph="GDPR, am i right? Make sure you're as transparent as possible with your data handing process. Or, if you're using Stripe, jus refer to our ToS and DPA."
          />
          <RapidFire/>
        </div>
    )
}
