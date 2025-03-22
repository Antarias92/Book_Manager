import React, { useState } from "react";

function ItemForm({ initialData , onSubmit})
{

    const [formData, setFormData] = useState(initialData)

    function handleChange(event)
    {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        onSubmit(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <label className="form-label">Genre</label>
            <input
              type="type"
              name="genre"
              className="form-control"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>
          <div class="dropdown">
            <label className="form-label">Status</label>
                <input
                type="checkbox"
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
                />
            </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      );
}

export default ItemForm;