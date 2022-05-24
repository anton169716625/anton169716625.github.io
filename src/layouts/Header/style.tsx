import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1220,
    margin: '0px auto',
    padding: '50px 0px',
  },
  btnDiv: {
    display: 'flex',
  },
  btn: {
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '24px',
    color: '#fff',
    background: 'transparent',
    padding: '10px 20px',
    borderRadius: 15,
    marginRight: 12,
    '&:hover': {
      background: '#21212180',
    },
  },
  activeBtn: {
    fontWeight: 800,
    fontSize: 20,
    lineHeight: '24px',
    color: '#fff',
    background: '#212121',
    borderRadius: 15,
    padding: '10px 20px',
    marginRight: 12,
    '&:hover': {
      background: '#21212180',
    },
  },
}))
