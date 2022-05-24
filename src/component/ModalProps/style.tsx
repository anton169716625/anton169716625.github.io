import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))
