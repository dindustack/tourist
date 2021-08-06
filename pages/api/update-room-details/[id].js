import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { updateRoomDetails } from 'controllers/roomControllers'

const handler = nc();

dbConnect();

handler.put(updateRoomDetails)

export default handler;