import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
const GotoTop = () => {
    const gotobtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <div className='top-btn' onClick={gotobtn}>
            <FileUploadIcon style={{ fontSize: "60px", float: "right", color: "#fff" }} />
        </div>
    )
}

export default GotoTop
