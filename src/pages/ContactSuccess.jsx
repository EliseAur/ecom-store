import { useLocation } from "react-router-dom";
import { ContactSuccessContent } from "../components";

function ContactSuccess() {
  const location = useLocation();
  const { fullName, subject, email, message } = location.state || {};

  return (
    <ContactSuccessContent
      fullName={fullName}
      subject={subject}
      email={email}
      message={message}
    />
  );
}

export default ContactSuccess;
