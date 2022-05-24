import React, { useState, useEffect } from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import clsx from 'clsx'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import StopIcon from '@material-ui/icons/Stop'
import { useStyles } from './style'
import Chart5 from '../../assets/chart5.png'
import Card from '../../component/card'
import { Items } from './Mockup'

function MyPage() {
  const classes = useStyles()
  const [tab, setTab] = useState(0)
  const handleTab = (e: any) => {
    setTab(e)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>MY PAGE</Typography>

      <div className={classes.container}>
        <div className={classes.subConainter1}>
          <div className={classes.container}>
            <div style={{ alignSelf: 'center' }}>
              <Typography className={classes.h1}>TOTAL VALUE</Typography>
              <Typography className={classes.h2}>
                2,665,750.99<span style={{ fontSize: 20 }}>USD</span>
              </Typography>
            </div>
            <Button className={classes.swapBtn}>
              <SwapHorizIcon style={{ verticalAlign: 'middle' }} />
              Swap
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: 30,
            }}
          >
            <div style={{ alignSelf: 'center' }}>
              <Typography className={classes.h4}>
                <StopIcon
                  style={{ color: '#F9D85E', verticalAlign: 'middle' }}
                />
                Total Balance
              </Typography>
              <Typography className={classes.h5}>$ 40,859,532,875</Typography>
              <div style={{ marginTop: 15 }}>
                <Typography className={classes.h4}>
                  <StopIcon
                    style={{ color: '#000', verticalAlign: 'middle' }}
                  />
                  Stable Balance
                </Typography>
                <Typography className={classes.h5}>$ 40,859,532,875</Typography>
              </div>
              <div style={{ marginTop: 15 }}>
                <Typography className={classes.h4}>
                  <StopIcon
                    style={{ color: '#000', verticalAlign: 'middle' }}
                  />
                  Volatile Asset Balance
                </Typography>
                <Typography className={classes.h5}>$ 666,453.74</Typography>
              </div>
            </div>
            <div>
              <img src={Chart5} alt="chart" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className={classes.subConainter2}>
          <div>
            <Typography className={classes.h1}>TOTAL PAYED INTEREST</Typography>
            <Typography className={classes.h2}>
              98,332.75<span style={{ fontSize: 20 }}>USD</span>
            </Typography>
            <Typography className={classes.h5}>USD $98,332.75</Typography>
          </div>
          <div style={{ marginTop: 35 }}>
            <Typography className={classes.h1}>TOTAL DAYS STAKED</Typography>
            <Typography className={classes.h2}>
              17<span style={{ fontSize: 20 }}>DAYS</span>
            </Typography>
          </div>
          <Button className={classes.saveBtn}>SAVE MORE</Button>
        </div>
      </div>

      <div className={classes.tab}>
        <Button
          className={clsx(classes.tabItem, {
            [classes.activeTabItem]: tab === 0,
          })}
          onClick={() => handleTab(0)}
        >
          ALL
        </Button>
        <Button
          className={clsx(classes.tabItem, {
            [classes.activeTabItem]: tab === 1,
          })}
          onClick={() => handleTab(1)}
        >
          STABLE
        </Button>
        <Button
          className={clsx(classes.tabItem, {
            [classes.activeTabItem]: tab === 2,
          })}
          onClick={() => handleTab(2)}
        >
          VOLATILE
        </Button>
      </div>

      <Grid container spacing={6} style={{ marginTop: 30 }}>
        {Items?.map((item: any, key: any) => (
          <Grid item key={key} xs={6}>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MyPage
