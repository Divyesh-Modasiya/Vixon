import React, { useEffect } from 'react'
import PageHeaderBrochure from '../Component/EBrochureComponent/PageHeaderBrochure';
import EBrochure from '../Component/EBrochureComponent/EBrochure';

function EbrochurePage() {
 
  return (
    <div className='overflow-hidden'>
      <PageHeaderBrochure />
      <EBrochure />
    </div>
  )
}

export default EbrochurePage
