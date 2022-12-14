require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")("sk_test_51MEW1jDBND95ikmL1wNUOGydjKyTcuh2ZUKDk0i92P39C3kp9u5BJyxs50QChtuLCbzjefOqJ7NbgkmASgrdH2Hu00kuISnmhr"
);


exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "myr",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
