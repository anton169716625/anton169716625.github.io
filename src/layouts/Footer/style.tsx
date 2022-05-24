import { makeStyles, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

export const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const StyledContainer = withStyles((theme) => ({
  root: {
    padding: '0 40px 0px 40px',
  },
}))(Container)
