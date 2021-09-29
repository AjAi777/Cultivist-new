import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    phone: '9996663330',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    phone: '9996663331',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    phone: '9996663332',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
