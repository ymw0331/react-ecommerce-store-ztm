const { async } = require("@firebase/util");
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntent.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    })

    return {
      statusCode
    }

  } catch (error) {

  }

}
