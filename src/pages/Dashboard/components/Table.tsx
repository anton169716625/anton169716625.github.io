import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@material-ui/core'
import USDC from '../../../assets/usdc.png'
import USDT from '../../../assets/tether.png'
import DAI from '../../../assets/dai.png'
import USN from '../../../assets/usn.png'
import ETH from '../../../assets/eth.png'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  depositBtn: {
    background: '#493C3C',
    color: '#fff',
    width: 135,
    borderRadius: 25,
    fontSize: 9,
    fontWeight: 800,
    lineHeight: '10.8px',
    border: '1px solid #493C3C',
  },
  withdrawBtn: {
    background: 'transparent',
    color: '#CEBFBF',
    width: 135,
    borderRadius: 25,
    fontSize: 9,
    fontWeight: 800,
    lineHeight: '10.8px',
    border: '1px solid #CEBFBF',
    marginLeft: 20,
  },
  h1: {
    color: '#fff',
    lineHeight: '36px',
    fontWeight: 800,
    fontSize: 20,
  },
  h2: {
    color: '#CEC0C0',
    lineHeight: '120%',
    fontSize: 13,
    fontWeight: 400,
  },
  h3: {
    color: '#CEC0C0',
    lineHeight: '120%',
    fontSize: 13,
    fontWeight: 800,
  },
})

const StyledTableCell = withStyles((theme) => ({
  root: {
    background: '#212121',
    borderBottom: '1px solid #434040',
    '&.MuiTableCell-root': {
      borderBottom: '1px solid #434040',
    },
  },
  head: {
    backgroundColor: '#212121',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const data = [
  {
    icon: USDC,
    name: 'USDC',
    sName: 'USD coin',
    apy: '14.87',
    tvl: '12,523,213,574',
  },
  {
    icon: USDT,
    name: 'USDT',
    sName: 'USD Tether',
    apy: '14.87',
    tvl: '12,523,213,574',
  },
  {
    icon: DAI,
    name: 'DAI',
    sName: 'Dai',
    apy: '14.87',
    tvl: '12,523,213,574',
  },
  {
    icon: USN,
    name: 'USN',
    sName: 'USD Near',
    apy: '14.87',
    tvl: '12,523,213,574',
  },
  {
    icon: ETH,
    name: 'ETH',
    sName: 'Ethereum',
    apy: '14.87',
    tvl: '12,523,213,574',
  },
]

function InfoTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">
              <Typography className={classes.h3}>Name</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography className={classes.h3}>APY</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography className={classes.h3}>TVL</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography className={classes.h3}>Actions</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={row.icon}
                    style={{ height: '100%', marginRight: 18 }}
                    alt="mark"
                  />
                  <div>
                    <Typography className={classes.h1}>{row.name}</Typography>
                    <Typography className={classes.h2}>{row.sName}</Typography>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography className={classes.h2}>{row.apy}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div
                  style={{
                    textAlign: 'left',
                    width: 'fit-content',
                    marginLeft: '30%',
                  }}
                >
                  <Typography className={classes.h2}>
                    {row.tvl}
                    {row.name}
                  </Typography>
                  <Typography className={classes.h2}>
                    ${row.tvl}
                    {row.sName}
                  </Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div>
                  <Button className={classes.depositBtn}>Deposit</Button>
                  <Button className={classes.withdrawBtn}>Withdraw</Button>
                </div>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InfoTable
