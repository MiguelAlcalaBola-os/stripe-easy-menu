import { Stripe, loadStripe} from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe("pk_test_51N3ZNNCfe2vkcWgLwVQtSyDOjxolVxLH6G1MxQP4JpO7EKamdSxpQIO60e8rO9sNB2hOXmTAfgZy5aHn3irFL5jw00nz0rEuBZ");
  }
  return stripePromise;
};

export default initializeStripe;
