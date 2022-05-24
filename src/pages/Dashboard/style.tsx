import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { Select, Slider } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1220,
    margin: '0px auto',
    padding: '50px 0px',
  },
  title: {
    fontSize: 40,
    lineHeight: '120%',
    color: '#fff',
    fontWeight: 800,
  },
  headerContainer: {
    background: '#212121',
    borderRadius: 25,
    marginTop: 53,
    padding: '60px 50px',
  },
  container: {
    background: '#212121',
    borderRadius: 25,
    marginTop: 53,
    padding: '60px 50px',
    display: 'flex',
  },
  container2: {
    background: '#212121',
    borderRadius: 25,
    marginTop: 53,
    padding: '60px 50px',
  },
  h1: {
    color: '#fff',
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '120%',
    fontFamily: 'SF UI Text',
  },
  h2: {
    color: '#fff',
    fontWeight: 800,
    fontSize: 30,
    lineHeight: '36px',
    fontFamily: 'SF UI Text',
  },
  h3: {
    color: '#00B929',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
    fontFamily: 'SF UI Text',
  },
  h4: {
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '24px',
    fontFamily: 'SF UI Text',
  },
  h5: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '36px',
    fontStyle: 'italic',
    fontFamily: 'SF UI Text',
  },
  inputField: {
    marginTop: '30px',
    marginBottom: '10px',
    fontWeight: 800,
    fontSize: '9px',
    boxSizing: 'border-box',
  },
  input: {
    background: 'transparent',
    borderBottom: '2px solid #5C5353',
    color: '#fff',
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '24px',
    border: 'none',
    width: '100%',
    '&:focus-visible': {
      outline: 'none',
    },
  },
  h6: {
    fontSize: 9,
    lineHeight: '10.8px',
    fontWeight: 800,
    color: '#CEC0C0',
    maringTop: 10,
    fontFamily: 'SF UI Text',
  },
  h7: {
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '120%',
    color: '#fff',
    fontFamily: 'SF UI Text',
  },
}))

export const StyledSelect = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      borderBottom: '2px solid #5C5353',
      '&.MuiSelect-icon': {
        borderRadius: '50%',
        border: '1px solid #fff',
      },
    },
    icon: {
      borderRadius: '50%',
      border: '1px solid #fff',
      height: 15,
      width: 15,
      marginTop: 5,
      maringRight: 7,
      color: '#fff',
    },
  }),
)(Select)

export const CoolSlider = withStyles({
  root: {
    color: '#F9D85E',
    height: 3,
    padding: '0',
    marginLeft: 5,
    marginTop: '-30px',
    marginBottom: '20px',
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
