import React from 'react';
import { useProfileHook } from '../Profile';
import { useAccountHook } from '../Account';
import { useCardHook } from '../Card';

export const useSubscriptionHook = ({ ...someProps }) => {
  const { profile } = useProfileHook({ ...someProps });
  const { account } = useAccountHook({ profile, ...someProps });
  return { account };
};

export const useBillingHook = ({ ...someProps }) => {
  const { account } = useSubscriptionHook({ ...someProps });
  const { cards } = useCardHook({ account, ...someProps });
  return { cards };
};

// finally we have a view

export const CardsView = (props) => {
  const { cards } = useBillingHook(props);
  return (
    <>
      {cards &&
        cards.map((card, ii) => (
          <div key={`${card.name}${ii}`}>
            {card.name} - ${card.last4}
          </div>
        ))}
    </>
  );
};
