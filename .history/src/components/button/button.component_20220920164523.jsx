/*
default

inverted

google sign-in

*/
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in'
}


const Button = ({ children, buttonType }) => {
  return <button className="button-container">{children}</button>;
};

export default Button;