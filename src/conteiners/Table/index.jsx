import TableRow from "../TableRow";

const Table = ({ userData, deleteUserHandler, editUserHandler }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => {
          return (
            <TableRow
              user={user}
              key={user.id}
              deleteUserHandler={deleteUserHandler}
              editUserHandler={editUserHandler}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
