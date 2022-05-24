import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Box, InputBase } from '@material-ui/core'
import { useStyles, StyledContainer } from './style'

function Footer() {
  var classes = useStyles()

  return (
    <footer>
      <div className={classes.root}></div>
    </footer>
  )
}

export default Footer
