import React from "react";
import {Link} from "react-router-dom";

function ListItems({items , onDelete})
{
    return (
        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.genre}</td>
                  <td>{item.status}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/edit/${item.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ListItems;