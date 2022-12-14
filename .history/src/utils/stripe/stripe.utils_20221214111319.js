import { loadStripe } from '@stripe/stripe-js';


export const stripePromise = loadStripe("pk_test_51MEW1jDBND95ikmLV5XvxCEzl3QjW2Ne3l6kDk9nHJSjPNufnWqz6xKYIRQlg9g4j323UGi7RZxjqhxNTkbOplPd00ltkvagJb")


// export const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`)