import React from "react";

const AddNew = () => {
  const handleAddNew = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const URL = form.URL.value;
    const authorName = form.authorName.value;
    const authorImageURL = form.authorImageURL.value;
    const numberOfDownloads = form.numberOfDownloads.value;

    const newAdding = {
      title: title,
      imageURL: URL,
      authorName,
      authorImageURL,
      download: numberOfDownloads,
    };
    console.log(newAdding);

    fetch("http://localhost:5000/photos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAdding),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="min-h-screen mt-20">
        <div className="border border-gray-500 w-11/12 lg:w-4/12 mx-auto rounded-xl pt-10 pb-20">
          <h2 className="text-3xl font-semibold mb-5 pb-10">Add New Item</h2>
          {/* <p className="text-red-500 mb-5">{error.slice(10, 300)}</p> */}
          <form onSubmit={handleAddNew} className="w-9/12 mx-auto">
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl"
                type="text"
                name="title"
                placeholder="Title Here"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="text"
                name="URL"
                placeholder="Upload Link or URL Here"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="text"
                name="authorName"
                placeholder="Author Name Here"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="text"
                name="authorImageURL"
                placeholder="Author Image Link or URL Here"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="text"
                name="numberOfDownloads"
                placeholder="Number of Downloads Here"
                required
              />
            </div>
            <input type="submit" value="Add New Item" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
