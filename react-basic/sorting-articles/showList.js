export default function ShowList({ list }) {
  return (
    <table border="1">
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.upvotes}</td>
              <td>{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
