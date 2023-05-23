import axios from 'axios';

const checkToken:any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJhZ2FzIiwicm9sZV9pZCI6MSwiaWF0IjoxNjg0ODI0NjUwLCJleHAiOjE2ODQ4MzU0NTB9.y-0L9fbWInDUPlXY9ML5uaI3qQoGMrtYT7Q8f7MOEHQ'

export default axios.create({
  baseURL: 'http://localhost:7300',
  headers: {
    Authorization: `${checkToken}`,
  },
});
