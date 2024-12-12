import { useNavigate } from "react-router-dom";
import ContactContent from "../components/ContactContent";

function Contact() {
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    navigate("/contact-success", { state: data });
  }

  return <ContactContent onSubmit={onSubmit} />;
}

export default Contact;
