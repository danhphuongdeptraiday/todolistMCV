const handleCreateTask = () => {
  //e nhìn n post cái user lên không mà ở controller thì
  fetch("http://localhost:3000/task/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        name: "John",
        email: "john@example.com",
      },
    }),
  });
};
