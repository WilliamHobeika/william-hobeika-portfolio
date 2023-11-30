import { useFormStatus } from "react-dom";

import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="contact-button group" disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send
          <div className="contact_button-icon">
            <FaPaperPlane />
          </div>
        </>
      )}
    </button>
  );
};

export default SubmitButton;
