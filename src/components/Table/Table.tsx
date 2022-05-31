import { removeData } from "../../reducer/dataSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import "./style.css";

function Table() {
  const { dataObject, modalStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <table
      style={{
        display: modalStatus.status === "none" ? "block" : "none"
      }}
    >
      <tr>
        <th></th>
        <th>Company</th>
        <th>Name</th>
        <th>Additional</th>
        <th>Street</th>
        <th>Country</th>
        <th>Postal Code</th>
        <th>IBAN</th>
        <th>BIC</th>
        <th>Bank name</th>
        <th>Fax</th>
        <th>E-mail</th>
        <th>Birthday</th>
      </tr>
      {dataObject.data.map((item, index) => (
        <tr className="user__table" key={index}>
          <th onClick={() => dispatch(removeData(item.name))}>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.85868 4.49188H0.141365V11.9777C0.141365 12.5951 0.604403 13.1353 1.14462 13.1353H6.9326C7.47281 13.1353 7.93585 12.5951 7.93585 11.9777L7.85868 4.49188ZM2.61091 10.5886C2.61091 10.8201 2.37939 11.0516 2.14787 11.0516C1.91635 11.0516 1.68483 10.8201 1.68483 10.5886V6.7299C1.68483 6.49838 1.91635 6.26686 2.14787 6.26686C2.37939 6.26686 2.61091 6.49838 2.61091 6.7299V10.5886ZM4.46306 10.5886C4.46306 10.8201 4.23154 11.0516 4.00002 11.0516C3.7685 11.0516 3.53698 10.8201 3.53698 10.5886V6.7299C3.53698 6.49838 3.7685 6.26686 4.00002 6.26686C4.23154 6.26686 4.46306 6.49838 4.46306 6.7299V10.5886ZM6.39239 10.5886C6.39239 10.8201 6.16087 11.0516 5.92935 11.0516C5.69783 11.0516 5.46631 10.8201 5.46631 10.5886V6.7299C5.46631 6.49838 5.69783 6.26686 5.92935 6.26686C6.16087 6.26686 6.39239 6.49838 6.39239 6.7299V10.5886Z"
                fill="#376B8D"
              />
              <path
                d="M7.16408 2.25386H5.3891V1.48213C5.3891 1.17344 5.15758 0.864746 4.92606 0.864746H2.99674C2.76522 0.864746 2.5337 1.09627 2.5337 1.48213V2.25386H0.758713C0.0641553 2.25386 0.0641556 3.17994 0.0641556 3.64298H7.85864C7.85864 3.17994 7.85864 2.25386 7.16408 2.25386ZM4.77172 2.25386H3.22825V1.79082C3.22825 1.5593 3.22825 1.5593 3.61412 1.5593H4.38585C4.77172 1.5593 4.77172 1.5593 4.77172 1.79082V2.25386Z"
                fill="#376B8D"
              />
            </svg>
          </th>
          <th>{item.company}</th>
          <th>{item.name}</th>
          <th>{item.additional}</th>
          <th>{item.street}</th>
          <th>{item.country}</th>
          <th>{item.postal_code}</th>
          <th>{item.iban}</th>
          <th>{item.bic}</th>
          <th>{item.bank_name}</th>
          <th>{item.fax}</th>
          <th>{item.email}</th>
          <th>{item.birthday}</th>
        </tr>
      ))}
    </table>
  );
}

export { Table };
