import { Typography } from '@mui/material'
import React, { useState } from 'react'

const Hello = () => {

const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div>
        {isAdmin && <Typography>I am admin</Typography>}
    </div>
  )
}

export default Hello