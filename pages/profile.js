import React from 'react'
import { withRouter } from 'next/router'

export default withRouter(({ router: { query: { id } } }) => (
  <div className='main'>
    <h1 className='heading'>
      User profile:
      {' '}
      <b className='username'>{id}</b>
    </h1>
    <style jsx>{`
      .main {
        padding: 100px;
      }

      .heading {
        font: 15px Monaco;
      }

      .username {
        color: blue;
      }
    `}</style>
  </div>
))
