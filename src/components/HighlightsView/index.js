import React from 'react'
import './index.css'

const HighlightsView = ({data}) => {
  return (
    <div className='highlight-item'>
      {data.title}
    </div>
  )
}

export default HighlightsView
