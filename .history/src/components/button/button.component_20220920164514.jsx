/*
default

inverted

google sign-in

*/
const BUTTON_TYPE_CLASSES = {
    google:
}


const Button = ({ children, buttonType }) => {
  return <button className="button-container">{children}</button>;
};

export default Button;
