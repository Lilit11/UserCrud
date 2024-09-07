import React from "react";
import { Modal } from "./modal";
import { useForm } from "react-hook-form";
import { addUser, randomNumber } from "../../../api/api";
import { useDispatch } from "react-redux";

const AddUser = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (!data.name) {
      setError("name", { message: "name is required" });
    } else if (!data.age) {
      setError("age", { message: "age is required" });
    } else if (!data.position) {
      setError("position", { message: "position is required" });
    }
    const newUser = {
      id: String(randomNumber()),
      name: data.name,
      position: data.position,
      age: data.age,
    };

    dispatch(addUser(newUser));

    onClose();
  };

  return (
    <Modal isVisible={true} onClose={onClose} title="Add New User">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter age"
            {...register("age", { required: "Age is required" })}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter position"
            {...register("position", { required: "position is required" })}
          />
          {errors.position && (
            <p style={{ color: "red" }}>{errors.position.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddUser;
