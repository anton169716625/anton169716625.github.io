import React from 'react'
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

export const CoolSlider = withStyles({
  root: {
    color: '#F9D85E',
    height: 3,
    padding: '0',
    marginLeft: 5,
    marginTop: '-30px',
    marginBottom: '20px',
    width: '98%',
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#F9D85E',
    border: '1px solid currentColor',
    marginTop: -9,
    marginLeft: -13,
    '&:focus, &:hover, &$active': {},
    '& .bar:first-child': {
      height: '6px',
      width: 1,
      backgroundColor: 'currentColor',
      color: '#493C3C',
      marginTop: '-4px',
      marginLeft: '-7px',
      transform: 'rotate(45deg)',
      position: 'absolute',
    },
    '& .bar:nth-child(2)': {
      height: '6px',
      width: 1,
      backgroundColor: 'currentColor',
      color: '#493C3C',
      marginTop: '5px',
      marginLeft: '-7px',
      transform: 'rotate(-45deg)',
      position: 'absolute',
    },
    '& .bar:nth-child(3)': {
      height: '6px',
      width: 1,
      backgroundColor: 'currentColor',
      color: '#493C3C',
      marginTop: '-3px',
      marginRight: '-7px',
      transform: 'rotate(-45deg)',
      position: 'absolute',
    },
    '& .bar:nth-child(4)': {
      height: '6px',
      width: 1,
      backgroundColor: 'currentColor',
      color: '#493C3C',
      marginTop: '5px',
      marginRight: '-7px',
      transform: 'rotate(45deg)',
      position: 'absolute',
    },
  },
  active: {},
  track: {
    height: 3,
    marginLeft: '-5px',
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
    marginLeft: '-5px',
  },
})(Slider)
