import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from '@material-ui/core'
import { useStyles } from './style'

function Header() {
  const classes = useStyles()
  const history = useHistory()
  const [curTab, setCurTab] = useState(0)

  const handleTab = (data: number) => {
    setCurTab(data)
  }

  useEffect(() => {
    if (curTab === 0) {
      history.push('./')
    } else if (curTab === 1) {
      history.push('./my-page')
    } else if (curTab === 2) {
      history.push('./earn')
    } else {
      history.push('./utility')
    }
  }, [curTab])

  return (
    <div className={classes.root}>
      <div className={classes.btnDiv}>
        <Button
          onClick={() => handleTab(0)}
          className={clsx(classes.btn, {
            [classes.activeBtn]: curTab === 0,
          })}
        >
          DASHBOARD
        </Button>
        <Button
          onClick={() => handleTab(1)}
          className={clsx(classes.btn, {
            [classes.activeBtn]: curTab === 1,
          })}
        >
          MY PAGE
        </Button>
        <Button
          onClick={() => handleTab(2)}
          className={clsx(classes.btn, {
            [classes.activeBtn]: curTab === 2,
          })}
        >
          ERAN
        </Button>
        <Button
          onClick={() => handleTab(3)}
          className={clsx(classes.btn, {
            [classes.activeBtn]: curTab === 3,
          })}
        >
          UTILITY+
        </Button>
      </div>
    </div>
  )
}

export default Header
