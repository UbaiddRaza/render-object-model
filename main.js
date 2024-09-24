

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
 
    

  })



  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let users = data;
    let currentIndex = 0;

    document.querySelector("#btn").addEventListener("click", () => {
      const root = document.querySelector("#root");
      const userName = document.querySelector("#user-name");
      userName.innerHTML = users[currentIndex].name;
      currentIndex = currentIndex + 1;
    });

    const userName = document.querySelector("#user-name");
    userName.innerHTML = users[0].name;
  });