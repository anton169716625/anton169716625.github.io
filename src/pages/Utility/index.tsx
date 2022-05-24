import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { useStyles } from './style'
import RepeatIcon from '@material-ui/icons/Repeat'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

function Utility() {
  const classes = useStyles()
  const [tab, setTab] = useState(0)
  const handleTab = (e: any) => {
    setTab(e)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>UTILITY +</Typography>
      <Typography className={classes.h12}>COMMUNITY FARMING EVENT</Typography>

      <div className={classes.headerContainer2}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h1}>CURRENT Near PRICE</Typography>
            <Typography className={classes.h2}>
              0.25<span style={{ fontSize: 20 }}>USD</span>
            </Typography>
          </div>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h11}>PROJECT Near PRICE</Typography>
            <Typography className={classes.h22}>
              1.25<span style={{ fontSize: 20 }}>USD</span>
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '25px',
          }}
        >
          <Button className={classes.depositBtn}>
            DEPOSIT NOW & GET FREE NearT
          </Button>
        </div>
      </div>

      <div className={classes.headerContainer}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h1}>
              YOUR FARMED NearT TOKENS
            </Typography>
            <Typography className={classes.h2}>
              52,875.97<span style={{ fontSize: 20 }}>NearT</span>
            </Typography>
          </div>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h11}>
              YOUR PROJECTED SHARE OF NearT TOKENS
            </Typography>
            <Typography className={classes.h22}>
              1,152,875.97<span style={{ fontSize: 20 }}>NearT</span>
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.headerContainer}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h1}>
              YOUR CURRENT ALLOCATION VALUE
            </Typography>
            <Typography className={classes.h2}>
              $10,355<span style={{ fontSize: 20 }}>NearT</span>
            </Typography>
          </div>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h11}>
              YOUR PROJECTED ALLOCATION VALUE
            </Typography>
            <Typography className={classes.h22}>
              $122,875<span style={{ fontSize: 20 }}>USD</span>
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.headerContainer}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h1}>
              HOW MUCH NearT CAN I EARN?
            </Typography>
            <div
              style={{
                display: 'flex',
                marginTop: '25px',
              }}
            >
              <Button className={classes.depositBtn}>
                DEPOSIT NOW & GET FREE NearT
              </Button>
            </div>
          </div>
          <div style={{ width: '50%', display: 'flex', alignSelf: 'center' }}>
            <div>
              <Typography className={classes.h8}>$150,000 (INPUT)</Typography>
              <Typography className={classes.h9}>
                Your Total Deposit in USD
              </Typography>
            </div>
            <div>
              <RepeatIcon style={{ margin: '8px 50px' }} />
            </div>
            <div>
              <Typography className={classes.h8}>1,272,891 (OUTPUT)</Typography>
              <Typography className={classes.h9}>
                Your expected NearT Allocation
              </Typography>
              <Typography className={classes.h10}>
                The Projected Allocation Value:{' '}
                <span style={{ fontWeight: 800 }}>323,121.75USD</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <Typography className={classes.h12}>COMMUNITY FARMING EVENT</Typography>

      <div className={classes.headerContainer2}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h1}>
              NEAR TREASURY REWARDS PLUS PROGRAM
            </Typography>
            <div style={{ marginTop: 88 }}>
              <Typography className={classes.h1}>
                YOUR QUALFIED DEPOSIT VALUE
              </Typography>
              <Typography className={classes.h2}>
                532,875<span style={{ fontSize: 20 }}>USD</span>
              </Typography>
            </div>
            <div style={{ marginTop: 30 }}>
              <Button className={classes.depositBtn}>SAVE NOW</Button>
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <Typography className={classes.h11}>
              QULIFYING PHASE STATUS
            </Typography>
            <Button className={classes.activeBtn}>ACTIVE</Button>
            <div className={classes.container3}>
              <ErrorOutlineIcon style={{ marginRight: 14 }} />
              <div>
                <Typography className={classes.h91}>
                  IF THE BUTTON IS GREEN, THIS MEANS EVERY DEPOSIT DURING THIS
                  PERIOD QUALIFIES YOU FOR THE MONTHLY REWARDS+ PROGRAM.
                </Typography>
                <Typography className={classes.h91}>
                  IF THE BUTTON IS RED, THIS MEANS YOU NEED TO KEEP YOUR BALANCE
                  DEPOSITED TO BECOME ELIGIBLE FOR THE NEXT QUALIFIYNG PHASE.
                </Typography>
                <Typography className={classes.h91}>
                  ALL PAYOUTS OF THE REWARDS+ PROGRAM ARE AUTOMATED.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utility
