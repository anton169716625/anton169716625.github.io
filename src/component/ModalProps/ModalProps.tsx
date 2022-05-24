import React from 'react'

import { withStyles, Theme } from '@material-ui/core/styles'
import {
  Typography,
  IconButton,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
} from '@material-ui/core'

import { Close as CloseIcon } from '@material-ui/icons'

import { useStyles } from './style'

export interface DialogTitleProps {
  children: React.ReactNode
  onClose?: () => void
}

export const DialogTitle = (props: DialogTitleProps) => {
  const classes = useStyles()
  const { children, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
}

export const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingBottom: '0px',
  },
}))(MuiDialogContent)

export const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
    paddingTop: '0px',
    display: 'flex',
    justifyContent: 'center',
  },
}))(MuiDialogActions)
