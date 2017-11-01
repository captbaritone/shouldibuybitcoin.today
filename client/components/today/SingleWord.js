import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'
import Typography from 'material-ui/Typography'

const propTypes = {
  classes: object.isRequired,
  intl: intlShape.isRequired,
  shouldBuy: bool,
}
const defaultProps = {
  shouldBuy: null,
}
const styleSheet = {
  text: {
    color: '#fff',
  },
}

/*
* Is responsible for rendering the answer in a form of a single word.
*/
const SingleWord = ({ classes, intl, shouldBuy }) => {
  let answerId
  if (shouldBuy === null) {
    answerId = 'app.text.answer.singleWord.unknown'
  } else if (shouldBuy) {
    answerId = 'app.text.answer.singleWord.yes'
  } else {
    answerId = 'app.text.answer.singleWord.no'
  }
  return (
    <Typography className={classes.text} type="display4">
      {intl.formatMessage({ id: answerId })}
    </Typography>
  )
}

SingleWord.propTypes = propTypes
SingleWord.defaultProps = defaultProps

export default withStyles(styleSheet)(injectIntl(SingleWord))