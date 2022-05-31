import React from "react";
import { Modals } from "./components/Modals/Modals";
import { Table } from "./components/Table/Table";
import { useAppDispatch, useAppSelector } from "./reducer/hooks";
import { changeModal } from "./reducer/modalSlice";

function App() {
  const {modalStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Modals></Modals>
      <div
        className="container"
        style={{
          zIndex: modalStatus.status === "none" ? "10" : "-1",
        }}
      >
        <button
          className="container__btn"
          onClick={() => dispatch(changeModal("invoice"))}
        >
          Add
        </button>
        <Table></Table>
      </div>
    </React.Fragment>
  );
}

export default App;
