import { useForm } from "react-hook-form";
import { addInfo, FormDataType } from "../../reducer/formSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { changeModal } from "../../reducer/modalSlice";
import "../InvoiceAdress/style.css";


function BankDate() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();
  const onSubmit = (data: object) => {
    dispatch(addInfo(data))
    dispatch(changeModal("contact"));
  }
  const { status } = useAppSelector((state) => state.modalStatus);

  return (
    <form
      className={status === "bank" ? "form form__current" : "form"}
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="form__title">Bank Data</p>
      <button
        className="form__close"
        type="button"
        onClick={() => dispatch(changeModal("none"))}
      ></button>
      <label className="form__label" htmlFor="">
        IBAN *
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.iban && "red" }}
          {...register("iban", { required: true })}
        />
        {errors.iban && <span>This field is required</span>}
      </label>
      <label className="form__label" htmlFor="">
        BIC *
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.bic && "red" }}
          {...register("bic", { required: true })}
        />
        {errors.bic && <span>This field is required</span>}
      </label>
      <label className="form__label" htmlFor="">
        Bank name *
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.bank_name && "red" }}
          {...register("bank_name", { required: true })}
        />
        {errors.bank_name && <span>This field is required</span>}
      </label>
      <div className="form__wrapper">
        <button
          className="form__back"
          type="button"
          onClick={() => dispatch(changeModal("none"))}
        >
          Cancel
        </button>
        <button
          className="form__back"
          type="button"
          onClick={() => dispatch(changeModal("invoice"))}
        >
          Previous
        </button>
        <button className="form__next" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export { BankDate };
