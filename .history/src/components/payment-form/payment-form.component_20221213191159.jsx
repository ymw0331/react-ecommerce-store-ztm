import { CardElement } from "@stripe/react-stripe-js"
import Button from "../button/button.component"

const PaymentForm = () => {

  return (<div>
    <CardElement />

    <Button buttonType={BUTTOn}>Pay now</Button>

  </div>)
}

export default PaymentForm

