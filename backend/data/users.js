import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    phone: '9996663330',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@cultivist1', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    phone: '9996663331',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('john@cultivist2', 10),
  },
  {
    name: 'Jane Doe',
    phone: '9996663332',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('jane@cultivist3', 10),
  },
  {
    name: 'Prajwal Tikhe',
    phone: '7276698091',
    email: 'prajwaltikhe10@gmail.com',
    password: bcrypt.hashSync('prajwal@cultivist4', 10),
  },
];

export default users;
