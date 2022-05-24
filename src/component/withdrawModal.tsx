import React from 'react'
// import { useWindowSize } from 'usehooks-ts'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from './ModalProps/ModalProps'
import clsx from 'clsx'
import { Typography } from '@material-ui/core'
import { CoolSlider } from './slider'

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
]

function ThumbComponent(props: any) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  )
}

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    borderRadius: '25px',
    width: '550px',
    maxHeight: 'calc(100vh - 0px)',
    maxWidth: 'calc(100% - 32px)',
    marginTop: '80px',
    overflow: 'unset',
    background: '#212121',
  },
  dialogContainer: {
    height: 'auto',
    maxHeight: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  root: {
    margin: 0,
    padding: theme.spacing(3),
    textAlign: 'center',
    '& p': {
      fontSize: 20,
      fontWeight: 600,
      wordBreak: 'break-word',
      color: '#04111d',
      lineHeight: '110%',
    },
  },
  h1: {
    fontWeight: 860,
    color: '#fff',
    fontSize: 20,
    lineHeight: '120%',
  },
  h2: {
    color: '#CEC0C0',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '120%',
  },
  h3: {
    color: '#CEC0C0',
    fontSize: 13,
    fontWeight: 860,
    lineHeight: '120%',
  },
  h4: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 860,
    lineHeight: '120%',
  },
  h5: {
    fontWeight: 400,
    fontSize: 9,
    lineHeight: '120%',
    color: '#CEC0C0',
    marginTop: 6,
    textAlign: 'right',
  },
  inputDiv: {
    display: 'flex',
    background: '#493C3C',
    border: '0.5px solid #000000',
    borderRadius: 15,
    height: 45,
    alignItems: 'center',
    padding: '0px 20px',
  },
  input: {
    border: 'none',
    color: '#fff',
    fontWeight: 800,
    fontSize: 14,
    width: '100%',
    background: 'transparent',
    '&:focus-visible': {
      outline: 'none',
    },
  },
  container3: {
    borderTop: '1px dashed #5C5353',
    borderBottom: '1px dashed #5C5353',
    padding: '13px 0px',
  },
  proceedBtn: {
    background: '#493C3C',
    borderRadius: 25,
    height: 45,
    width: '100%',
    fontSize: 13,
    fontWeight: 860,
    color: '#fff',
    marginTop: 26,
    '&:hover': {
      background: '#493C3C90',
    },
  },
}))

interface props {
  item: any
  open: boolean
  handleClose: () => void
}

function WithdrawModal({ item, open, handleClose }: props) {
  const classes = useStyles()
  //   const { width } = useWindowSize()

  const handleClickAccept = () => {}

  return (
    <>
      <Dialog
        // fullScreen={width < 600 ? true : false}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{
          paper: classes.dialogPaper,
          container: classes.dialogContainer,
        }}
      >
        <DialogTitle onClose={handleClose}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              margin: 'auto',
            }}
          >
            <Typography
              style={{
                fontWeight: 860,
                color: '#fff',
                fontSize: 20,
                lineHeight: '120%',
              }}
            >
              Deposit
            </Typography>
            <img src={item.icon} alt="mark" style={{ margin: '0px 18px' }} />
            <div>
              <Typography
                style={{
                  fontWeight: 860,
                  color: '#fff',
                  fontSize: 20,
                  lineHeight: '120%',
                }}
              >
                {item.name}
              </Typography>
              <Typography
                style={{
                  color: '#CEC0C0',
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: '120%',
                }}
              >
                {item.sName}
              </Typography>
            </div>
          </div>
        </DialogTitle>

        <DialogContent>
          <div className={classes.inputDiv}>
            <Typography className={classes.h3}>AMOUNT</Typography>
            <input className={classes.input} />
            <Typography className={classes.h4}>{item.name}</Typography>
          </div>
          <Typography className={classes.h5}>MAX: 245.346 USDC</Typography>

          <CoolSlider
            ThumbComponent={ThumbComponent}
            // size="small"
            aria-label="Small"
            valueLabelDisplay="auto"
            step={1}
            max={10}
            min={1}
            // onChange={(e: any) => onChangeSlider(e.target.value)}
            defaultValue={10}
            style={{ marginTop: 12 }}
          />

          <div className={classes.container3}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography className={classes.h5}>Tx Fee</Typography>
              <Typography className={classes.h5}>0.25 NEAR</Typography>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 13,
              }}
            >
              <Typography className={classes.h5}>Send Amount</Typography>
              <Typography className={classes.h5}>100,346.25 USDC</Typography>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClickAccept} className={classes.proceedBtn}>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default WithdrawModal
