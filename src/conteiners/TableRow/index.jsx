const TableRow = ({ user, deleteUserHandler, editUserHandler }) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.username}</td>
      <td>{user.age}</td>
      <td>{user.salary}</td>
      <td>
        <button onClick={() => editUserHandler(user.id)}>Edit</button>
      </td>
      <td>
        <button onClick={() => deleteUserHandler(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
