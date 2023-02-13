// const handleCreateTask = () => {
//   //e nhìn n post cái user lên không mà ở controller thì
//   fetch("http://localhost:3000/task/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         name: "John",
//         email: "john@example.com",
//       },
//     }),
//   });
// };

let toggleBtn = document.querySelector(".navbar-toggler");
let navbarSupportedContent = document.querySelector("#navbarSupportedContent");
toggleBtn.addEventListener("click", () => {
  if (navbarSupportedContent.style.display == "none") {
    navbarSupportedContent.style.display = "block";
  } else {
    navbarSupportedContent.style.display = "none";
  }
});
