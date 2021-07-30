const base64 = require('base-64');
const fetch = require('node-fetch');

async function App() {
  const email = "shanmuk.abhishek@gmail.com";
  const password = "Omsairam#1234";
  //GET - https://zccshanmukabhishek.zendesk.com/api/v2/tickets/1.json
  try{
    let response  = await fetch("https://zccshanmukabhishek.zendesk.com/api/v2/tickets.json", {
        method: "GET",
        headers: {
          //Accept: "application/json",
          //"Content-Type": "application/json",
          "Authorization": `Basic ${base64.encode(`${email}:${password}`)}`
        },
        // body: JSON.stringify({
        //   email,
        //   password
        // })
      });
      console.log(response);

    }
    catch(e) {
        console.log(e);
    }
//   fetch("https://zccshanmukabhishek.zendesk.com/api/v2/tickets.json", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       email,
//       password
//     })
//   }).then(res => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw Error(res.statusText);
//       }
//     }).then(json => {
//       this.setState({
//         isLoaded: true,
//         token: json
//       });
//     }).catch(error => console.error(error));

}

App();


