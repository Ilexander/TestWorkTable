import { useAppSelector } from "../../reducer/hooks";
import { BankDate } from "../BankData/BankData";
import { Contact } from "../Contact/Contact";
import { InvoiceAdress } from "../InvoiceAdress/InvoiceAdress";

function Modals() {
  const { status } = useAppSelector((state) => state.modalStatus);

  return (
    <div
      className="modal__wrapper"
      style={{ background: status === "none" ? "white" : "#E5B1B1" }}
    >
      <InvoiceAdress></InvoiceAdress>
      <BankDate></BankDate>
      <Contact></Contact>
    </div>
  );
}

export { Modals };
