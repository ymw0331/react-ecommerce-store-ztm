import { CardElement } from "@stripe/react-stripe-js"
import Button, { BUTTON_TYPE } from "../button/button.component"

const PaymentForm = () => {

  return (<div>
    <CardElement />

    <Button buttonType={BUTTON_TYPE}>Pay now</Button>

  </div>)
}

export default PaymentForm

