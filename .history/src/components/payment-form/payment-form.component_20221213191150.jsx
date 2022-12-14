import { CardElement } from "@stripe/react-stripe-js"
import Button from "../button/button.component"

const PaymentForm = () => {

  return (<div>
  <CardElement/>

  <Button>Pay now</Button>

  </div>)
}

export default PaymentForm

