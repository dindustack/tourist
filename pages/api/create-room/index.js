import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { createNewRoom } from 'controllers/roomControllers'

const handler = nc();

dbConnect();

handler.post(createNewRoom)

export default handler;