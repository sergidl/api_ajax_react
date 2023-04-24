import axios from "axios";

// axios.get("http://192.168.1.192:8080/users").then(response => {
//     console.log(response.data)
//   })

// axios.post('http://192.168.1.192:8080/users', {
//     name: 'True Name',
//     username: 'notfake',
//     email: "notfake@example.com"
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

axios.put('http://192.168.1.192:8080/users/1d73c9dc-d578-448c-8569-c35039903096', {
    email: "absolutlynotfake@example.com",
})

// axios.delete('http://192.168.1.192:8080/users/100935b3-e4b3-4e00-873e-b1e763c6e903')