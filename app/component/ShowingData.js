"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Collapse } from 'react-bootstrap';
import styles from '@/app/component/ShowingData.module.css';

const ShowingData = ({ data }) => {
  const [selectedItemId, setSelectedItemId] = useState('');
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    scrollToTop();
  };

  const selectedContent = data?.find((item) => item._id === selectedItemId);

  const scrollToTop = () => {
    window.scrollTo({
      top: 69,
      behavior: 'smooth',
    });
  };

  const handleOutsideClick = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.text}>
        <h1 className={styles.title}>{selectedContent?.newTitle || data[0]?.newTitle}</h1>
        <pre className={styles.pre}>{selectedContent?.newContent || data[0]?.newContent}</pre>
      </div>
      <button
        className={!open ? styles.btn1 : styles.btn2}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: '29px'}}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: '29px'}}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </button>
      <Collapse in={open}>
        <div ref={listRef} className={styles.list} id="example-collapse-text">
          <ul className={styles.customScrollbar}>
            {data.map((item) => (
              <li
                key={item._id}
                onClick={() => handleItemClick(item._id)}
                className={selectedItemId === item._id ? styles.selected : ''}
              >
                {item.newTitle}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default ShowingData;
