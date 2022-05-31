import { useForm } from "react-hook-form";
import { addInfo, FormDataType } from "../../reducer/formSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { changeModal } from "../../reducer/modalSlice";
import "./style.css";

function InvoiceAdress() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();
  const onSubmit = (data: object) => {
    dispatch(addInfo(data));
    dispatch(changeModal("bank"));
  };
  const { status } = useAppSelector((state) => state.modalStatus);

  return (
    <form
      className={status === "invoice" ? "form form__current" : "form"}
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="form__title">Invoice Address</p>
      <button
        className="form__close"
        type="button"
        onClick={() => dispatch(changeModal("none"))}
      ></button>
      <label className="form__label" htmlFor="">
        Company *
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.company && "red" }}
          {...register("company", { required: true })}
        />
        {errors.company && <span>This field is required</span>}
      </label>
      <label className="form__label" htmlFor="">
        Name *
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.name && "red" }}
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label className="form__label" htmlFor="">
        Additional
        <input
          className="form__input"
          type="text"
          {...register("additional", { required: false })}
        />
      </label>
      <label className="form__label" htmlFor="">
        Street
        <input
          className="form__input"
          type="text"
          {...register("street", { required: false })}
        />
      </label>
      <label className="form__label" htmlFor="">
        Postal code
        <input
          className="form__input"
          type="text"
          {...register("postal_code", { required: false })}
        />
      </label>
      <label className="form__label" htmlFor="">
        Country
        <select
          className="form__select"
          {...register("country", { required: false })}
        >
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="USA">USA</option>
          <option value="Chezh">Czech</option>
        </select>
      </label>
      <div className="form__wrapper">
        <button
          className="form__back"
          type="button"
          onClick={() => dispatch(changeModal("none"))}
        >
          Cancel
        </button>
        <button className="form__next" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export { InvoiceAdress };
