import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, handleDelete } from "../../api/api";
import { useEffect, useState } from "react";
import styles from "./userlist.module.css";
import { Modal } from "./components/modal";
import AddUser from "./components/addUser";
import EditUser from "./components/editUser";
export const UserList = () => {
  const [isAddUserVisible, setAddUserVisible] = useState(false);
  const [isEditUserVisible, setEditUserVisible] = useState(false);
  const [userId, setUserId] = useState(null)

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleEdit =(id)=>{
    setEditUserVisible(true)
    setUserId(id)
  }
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  
  return (
    <div>
      <h1>Users</h1>

      <table className={styles["styled-table"]}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>position</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.position}</td>
              <td>
                <button onClick={()=>handleEdit(user.id)} >edit</button>
                {isEditUserVisible &&  userId == user.id && <EditUser onClose={()=>setEditUserVisible(false)} id ={userId}/>}
                <button onClick={() => dispatch(handleDelete(user.id))}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={()=>setAddUserVisible(true)}> add user</button>
      {isAddUserVisible && <AddUser onClose={()=>setAddUserVisible(false)}  />}
      

    </div>
  );
};
