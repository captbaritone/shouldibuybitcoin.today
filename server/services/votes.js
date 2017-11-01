import { create } from 'server/queries/votes'
import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'

const logger = getLogger()
const Raven = setUpRavenClient()

export const createVote = async () => {
  try {
    const saveResult = await create()
    logger.info(null, 'Started a new vote')

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}
