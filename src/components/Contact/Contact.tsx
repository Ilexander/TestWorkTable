import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addData } from "../../reducer/dataSlice";
import { addInfo, FormDataType } from "../../reducer/formSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { changeModal } from "../../reducer/modalSlice";
import "../InvoiceAdress/style.css";

function Contact() {
  const [readyToPost, setReadyToPost] = useState(false);
  const { status } = useAppSelector((state) => state.modalStatus);
  const postData = useAppSelector((state) => state.formData.data);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onSubmit = (data: object) => {
    dispatch(addInfo(data));
    dispatch(changeModal("none"));
    setReadyToPost(true);
  };

  useEffect(() => {
    if (readyToPost) {
      dispatch(addData(postData));
      setReadyToPost(false);
    }
  }, [readyToPost, dispatch, postData]);

  return (
    <form
      className={status === "contact" ? "form form__current" : "form"}
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="form__title">Contact</p>
      <button
        type="button"
        className="form__close"
        onClick={() => dispatch(changeModal("none"))}
      ></button>
      <label className="form__label" htmlFor="">
        Fax
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.fax && "red" }}
          {...register("fax")}
        />
      </label>
      <label className="form__label" htmlFor="">
        E-mail
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.email && "red" }}
          {...register("email")}
        />
      </label>
      <label className="form__label" htmlFor="">
        Birthday
        <input
          className="form__input"
          type="date"
          style={{ borderColor: errors.birthday && "red" }}
          {...register("birthday")}
        />
      </label>
      <label className="form__label" htmlFor="">
        Homepage
        <input
          className="form__input"
          type="text"
          style={{ borderColor: errors.homepage && "red" }}
          {...register("homepage")}
        />
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
          onClick={() => dispatch(changeModal("bank"))}
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

export { Contact };
