import React, { useEffect } from 'react'
import PageHeaderGallery from '../Component/GalleryComponent/PageHeaderGallery'
import MarbleGallery from '../Component/GalleryComponent/MarbleGallery';

function GalleryPage() {

  return (
    <div className='overflow-hidden'>
      <PageHeaderGallery/>
      <MarbleGallery />
    </div>
  )
}

export default GalleryPage
