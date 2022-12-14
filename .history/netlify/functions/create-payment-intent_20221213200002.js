const { async } = require("@firebase/util");
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


exports.handler = async (event) => {
  try {
    const {amount} = 

  } catch (error) {

  }

}
