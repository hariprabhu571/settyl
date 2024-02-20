// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions/userActions';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import '../styles/Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const toggleAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <button onClick={toggleAddUserForm}>Toggle Add User Form</button>
      {showAddUserForm && <AddUserForm />}
      <UserList users={users} />
    </div>
  );
};

export default Dashboard;
