// components/AddUserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userActions';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      age,
    };
    dispatch(addUser(newUser));
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Add User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
