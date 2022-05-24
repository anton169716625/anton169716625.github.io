import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import DepositModal from './depositModal'
import WithdrawModal from './withdrawModal'

const useStyles = makeStyles({
  container: {
    // width: '100%',
    padding: '50px 60px 60px 50px',
    background: '#212121',
    borderRadius: 25,
  },
  depositBtn: {
    width: 200,
    background: '#493C3C',
    height: 45,
    borderRadius: 25,
    border: '1px solid transparent',
    fontSize: 13,
    lineHeight: '15.6px',
    fontWeight: 800,
    color: '#fff',
    '&:hover': {
      background: '#493C3C90',
    },
  },
  withdrawBtn: {
    background: 'transparent',
    width: 200,
    height: 45,
    borderRadius: 25,
    border: '1px solid #CEBFBF',
    fontSize: 13,
    marginLeft: 25,
    lineHeight: '15.6px',
    fontWeight: 800,
    color: '#CEBFBF',
  },
  h1: {
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '36px',
  },
  h2: {
    color: '#CEC0C0',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '15.6px',
  },
  h3: {
    color: '#CEBFBF',
    fontWeight: 800,
    fontSize: 13,
    lineHeight: '15.6px',
  },
  h4: {
    color: '#CEC0C0',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '15.6px',
  },
})

function Card({ item }: any) {
  const classes = useStyles()
  const [depositOpen, setDepositOpen] = useState(false)
  const [withdrawOpen, setWithdrawOpen] = useState(false)

  const handleDeposit = () => {
    setDepositOpen(!depositOpen)
  }

  const handleWithdraw = () => {
    setWithdrawOpen(!withdrawOpen)
  }

  return (
    <div className={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', width: '50%' }}>
          <img
            src={item.icon}
            alt="mark"
            width={35}
            height={35}
            style={{ marginRight: 16, alignSelf: 'center' }}
          />
          <div>
            <Typography className={classes.h1}>{item.name}</Typography>
            <Typography className={classes.h2}>{item.sName}</Typography>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography className={classes.h3}>Saving Balance</Typography>
            <Typography className={classes.h4}>
              {item.value1} {item.name}{' '}
            </Typography>
            <Typography className={classes.h4}>
              ${item.value2} USD Value
            </Typography>
          </div>
          <div>
            <Typography className={classes.h3}>APY</Typography>
            <Typography className={classes.h4}>{item.apy}%</Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          margin: '30px auto 0px auto',
          width: 'fit-content',
        }}
      >
        <Button className={classes.depositBtn} onClick={handleDeposit}>
          Deposit
        </Button>
        <Button className={classes.withdrawBtn} onClick={handleWithdraw}>
          Withdraw
        </Button>
      </div>

      <DepositModal
        open={depositOpen}
        item={item}
        handleClose={() => setDepositOpen(false)}
      />
      <WithdrawModal
        open={withdrawOpen}
        item={item}
        handleClose={() => setWithdrawOpen(false)}
      />
    </div>
  )
}

export default Card
