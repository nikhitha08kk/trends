import Axios from 'axios'
const userInstance=Axios.create(
    {baseURL:"http://localhost:8000",
  headers: {
      'Content-Type': 'application/json'
    }
  });
  const adminInstance=Axios.create(
    {baseURL:"http://localhost:8000/admin",
  headers: {
      'Content-Type': 'application/json'
    }
  });
  export{userInstance,adminInstance}