import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
function Showcase() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          marginRight: "16px",
          justifyContent: "space-evenly"
        }}>



        <div className="shape card">
          <div className="wrapper">

            <p className="title">觉知App</p>

          </div>

        </div>
        <div className="shape card">
          <div className="wrapper">

            <p className="title">Life Habit</p>

          </div>

        </div>
        <div className="shape card">
          <div className="wrapper">

            <p className="title">Light</p>

          </div>

        </div>
        <div className="shape card">
          <div className="wrapper">

            <p className="title">Google Sheet</p>

          </div>

        </div>
        
      </div>

    </Layout>
  );
}

export default Showcase;