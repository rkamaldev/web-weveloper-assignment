/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import style from './userSection.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import { setUserMetaData, setUserData, getUserData, getUserMetaData } from '@/features/user/userSlice';
import Loader from '@/components/loader';

function User() {
  const { publicRuntimeConfig } = getConfig();
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const router = useRouter();
  const userMetaData = useSelector(getUserMetaData);
  const totalPage = userMetaData.total_pages || 0;
  const { FETCH_USERS_API } = publicRuntimeConfig;

  const [currentPage, setCurrentPage] = useState(1);
  const [loaderState, setLoaderState] = useState(false);

  // Added this timeout to remove the loading to make it looks nice
  const displayLoading = status => {
    if (status) {
      setLoaderState(true);
    } else {
      setTimeout(() => {
        setLoaderState(false);
      }, 2000);
    }
  };

  const fetchUser = pageNumber => {
    displayLoading(true);
    fetch(`${FETCH_USERS_API}?page=${pageNumber}`)
      .then(res => res.json())
      .then(data => {
        displayLoading(false);
        dispatch(setUserMetaData(data));
        dispatch(setUserData({ ...userData, [data.page]: data.data }));
      })
      .catch(() => {
        displayLoading(false);
        router.push('/error');
      });
  };

  const paginationClick = pageNumber => {
    setCurrentPage(pageNumber);
    fetchUser(pageNumber);
  };

  useEffect(() => {
    fetchUser(currentPage);
  }, []);

  const filterUserDataBasedOnName = (userData = []) => {
    return (
      userData.filter(user => {
        if (!user || !user.first_name || !user.last_name) {
          return false;
        }

        return user.first_name.toUpperCase().startsWith('G') || user.last_name.toUpperCase().startsWith('W');
      }) || []
    );
  };

  return (
    <>
      <Loader loader={loaderState} />
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
              {((userData[currentPage] && filterUserDataBasedOnName(userData[currentPage])) || []).map(
                (user, index) => (
                  <tr key={index}>
                    <td>
                      <img src={user.avatar} alt="user-avatar" />
                    </td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <nav className={style.paginationNav} aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className={currentPage <= 1 ? 'page-link disabled' : 'page-link'}
                  href="#"
                  tabIndex="-1"
                  onClick={() => paginationClick(currentPage - 1)}
                >
                  Previous
                </a>
              </li>
              {Array(totalPage || 0)
                .fill('')
                .map((i, index) => (
                  <li key={index} className="page-item">
                    <a className="page-link" href="#" onClick={() => paginationClick(index + 1)}>
                      {index + 1}
                    </a>
                  </li>
                ))}
              <li className="page-item">
                <a
                  className={currentPage === totalPage ? 'page-link disabled' : 'page-link'}
                  href="#"
                  onClick={() => paginationClick(currentPage + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default User;
