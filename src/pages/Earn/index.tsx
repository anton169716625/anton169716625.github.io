import React, { useState, useEffect } from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import clsx from 'clsx'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import StopIcon from '@material-ui/icons/Stop'
import { useStyles } from './style'
import Chart5 from '../../assets/chart5.png'
import Card from '../../component/card'
import { Items } from './Mockup'

function Earn() {
  const classes = useStyles()
  const [tab, setTab] = useState(0)
  const handleTab = (e: any) => {
    setTab(e)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>EARN</Typography>

      <div className={classes.headerContainer}>
        <Typography className={classes.h1}>TOTAL BALANCE</Typography>
        <Typography className={classes.h2}>
          532.875<span style={{ fontSize: 20 }}>USD</span>
        </Typography>
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            justifyContent: 'end',
          }}
        >
          <Button className={classes.depositBtn}>Deposit</Button>
          <Button className={classes.withdrawBtn}>Withdraw</Button>
        </div>
      </div>

      <Grid container spacing={6} style={{ marginTop: 30 }}>
        {Items?.map((item: any, key: any) => (
          <Grid item key={key} xs={6}>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>

      <div className={classes.headerContainer}>
        <Typography className={classes.h1}>
          EXPECTED INTEREST BASED ON YOUR DEPOSIT
        </Typography>
        <Typography className={classes.h2}>
          423,875<span style={{ fontSize: 20 }}>USD</span>
        </Typography>

        <div className={classes.tab}>
          <Button
            className={clsx(classes.tabItem, {
              [classes.activeTabItem]: tab === 0,
            })}
            onClick={() => handleTab(0)}
          >
            YEAR
          </Button>
          <Button
            className={clsx(classes.tabItem, {
              [classes.activeTabItem]: tab === 1,
            })}
            onClick={() => handleTab(1)}
          >
            MONTH
          </Button>
          <Button
            className={clsx(classes.tabItem, {
              [classes.activeTabItem]: tab === 2,
            })}
            onClick={() => handleTab(2)}
          >
            WEEK
          </Button>
          <Button
            className={clsx(classes.tabItem, {
              [classes.activeTabItem]: tab === 3,
            })}
            onClick={() => handleTab(3)}
          >
            DAY
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Earn
