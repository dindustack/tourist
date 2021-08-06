import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { deleteRoom } from 'controllers/roomControllers'

const handler = nc();

dbConnect();

handler.delete(deleteRoom)

export default handler;