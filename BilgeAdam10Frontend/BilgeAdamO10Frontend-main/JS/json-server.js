function getData(url, init = {}) {
  return fetch(url, init)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
}
// * GET
async function getPosts() {
  const posts = await getData("http://localhost:5001/posts");
  console.log(posts);
}

// getPosts();
//*POST
async function postPosts() {
  const newPost = {
    userId: 8,
    title: "necessitatibus quasi exercitationem odio",
    body: "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
  };

  const posts = await getData("http://localhost:5001/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(posts);
}
