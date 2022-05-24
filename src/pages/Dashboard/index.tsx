import React, { useEffect, useState, useMemo } from 'react'
import { Typography, Grid, MenuItem, Input } from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import StopIcon from '@material-ui/icons/Stop'
import { useStyles, StyledSelect, CoolSlider } from './style'
import Chart from '../../assets/chart1.png'
import Chart2 from '../../assets/chart2.png'
import Chart3 from '../../assets/chart3.png'
import Chart4 from '../../assets/chart4.png'
import InfoTable from './components/Table'

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

function Dashboard() {
  const classes = useStyles()

  const [age, setAge] = React.useState<string | number>('')
  const [open, setOpen] = React.useState(false)
  const [choice, setChoice] = useState<any[]>([0.000509863, 'LUNA'])
  const [years, setYears] = useState<any>(10)
  const [interestEarnedResult, setInterestEarnedResult] = useState<any>(5433.67)
  const [amountEarnedResult, setAmountEarnedResult] = useState<any>(6433.67)
  const [amount, setAmount] = useState<any>(1000)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (event.target.value === 0.000955342) {
      setChoice([event.target.value, 'UST'])
    }
    if (event.target.value === 0.000509863) {
      setChoice([event.target.value, 'LUNA'])
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const onChangeSlider = (newValue: number | number[]) => {
    let i = 0
    const days = Number(newValue) * 365
    const start = amount
    var lunaResult = []
    var runningTotal = amount
    runningTotal += runningTotal * Number(choice[0])
    while (i <= days) {
      runningTotal += runningTotal * choice[0]
      i++
    }
    setAmountEarnedResult(runningTotal.toFixed(2))
    setInterestEarnedResult((runningTotal - start).toFixed(2))

    setYears(newValue)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>DASHBORAD</Typography>

      <Grid container spacing={2} className={classes.headerContainer}>
        <Grid xs={5} item style={{ borderRight: '1px solid #5C5353' }}>
          <div>
            <Typography className={classes.h1}>TOTAL VALUE LOCKED</Typography>
            <Typography className={classes.h2}>
              165,859,532<span style={{ fontSize: 20 }}>USD</span>
              <span className={classes.h3}>
                <ArrowDropUpIcon style={{ verticalAlign: 'middle' }} />
                125%
              </span>
            </Typography>
          </div>
          <div style={{ display: 'flex', marginTop: 40 }}>
            <div style={{ width: '40%', alignSelf: 'center' }}>
              <img src={Chart} alt="chart" style={{ width: '100%' }} />
            </div>
            <div style={{ width: '65%', alignSelf: 'center', marginLeft: 20 }}>
              <div>
                <Typography className={classes.h4}>
                  <StopIcon
                    style={{ color: '#F9D85E', verticalAlign: 'middle' }}
                  />
                  STABLE COINS
                </Typography>
                <Typography className={classes.h5}>$ 40,859,532,875</Typography>
                <div style={{ marginTop: 15 }}>
                  <Typography className={classes.h4}>
                    <StopIcon
                      style={{ color: '#000', verticalAlign: 'middle' }}
                    />
                    STABLE COINS
                  </Typography>
                  <Typography className={classes.h5}>
                    $ 40,859,532,875
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <img
            src={Chart2}
            alt="chart"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>

      <div className={classes.headerContainer}>
        <InfoTable />
      </div>

      <div className={classes.container}>
        <div
          style={{
            width: '30%',
            boxSizing: 'border-box',
            paddingRight: '40px',
            borderRight: '1px solid #5C5353',
          }}
        >
          <Typography className={classes.h7}>HOW MUCH CAN I EARN?</Typography>
          <div style={{ alignSelf: 'center' }}>
            <div className={classes.inputField}>
              <StyledSelect
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={choice[0]}
                onChange={handleChange}
                defaultValue={0.000509863}
                style={{
                  fontSize: '20px',
                  width: '100%',
                  color: '#fff',
                  fontWeight: 800,
                }}
              >
                <MenuItem value={0.000509863}>Luna</MenuItem>
                <MenuItem value={0.000955342}>UST</MenuItem>
              </StyledSelect>
              <Typography className={classes.h6}>Your Deposit</Typography>
            </div>

            <div className={classes.inputField}>
              <input defaultValue={1000} className={classes.input}></input>
              <Typography className={classes.h6}>Amount in USD</Typography>
            </div>

            <div className={classes.inputField}>
              <Typography className={classes.h7}>10 Years</Typography>
              <CoolSlider
                ThumbComponent={ThumbComponent}
                // size="small"
                aria-label="Small"
                valueLabelDisplay="auto"
                step={1}
                max={10}
                min={1}
                onChange={(e: any) => onChangeSlider(e.target.value)}
                defaultValue={10}
                style={{ marginTop: 12 }}
              />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <div style={{ padding: '0px 45px' }}>
            <div>
              <Typography className={classes.h2}>$148,377</Typography>
              <Typography className={classes.h6}>Interest Earned</Typography>
            </div>
            <div style={{ marginTop: 17 }}>
              <Typography className={classes.h2}>$448,700</Typography>
              <Typography className={classes.h6}>Total</Typography>
            </div>
            <div style={{ marginTop: 17 }}>
              <Typography className={classes.h6}>
                <StopIcon
                  style={{ color: '#F9D85E', verticalAlign: 'middle' }}
                />
                NT performance
              </Typography>
              <Typography className={classes.h6}>
                <StopIcon style={{ color: '#000', verticalAlign: 'middle' }} />
                Tradition Market
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <img src={Chart3} alt="chart" style={{ width: '100%' }} />
        </div>
      </div>

      <div className={classes.container2}>
        <Typography className={classes.h7}>
          TVL OF THE ENTIRE ECOSYSTEM
        </Typography>
        <Typography className={classes.h2}>
          525,859,532,875<span className={classes.h7}>USD</span>
        </Typography>
        <img
          src={Chart4}
          alt="chart"
          style={{ width: '100%', height: '253px' }}
        />
      </div>
    </div>
  )
}

export default Dashboard
