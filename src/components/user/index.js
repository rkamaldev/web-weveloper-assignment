import React, { useEffect } from 'react';
import style from './userSection.module.scss';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { AppDispatch } from '@/store/store';
import { getUserData, fetchUsers } from '@/features/user/userSlice';
import { getGoogleAuthData } from '@/features/login/loginSlice';

function User() {
  const userData = useSelector(getUserData);
  const authData = useSelector(getGoogleAuthData);
  const router = useRouter();

  const handleUseEffect = async () => {
    try {
      await AppDispatch(fetchUsers()).unwrap();
    } catch (e) {
      router.push('/error');
    }
  };

  useEffect(() => {
    handleUseEffect();
  }, [authData]);

  return (
    <>
      <div className={style.body}>
        <div className={style.tableWrapper}>
          <div className={style.title}>User Data</div>

          <table className="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {userData && userData.length ? (
                userData.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <img src={user.avatar} alt="user-avatar" />
                    </td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
