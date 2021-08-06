import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { updateRoomDetails } from 'controllers/roomControllers'

import onError from 'middlewares/error'

const handler = nc({ onError });

dbConnect();

handler.put(updateRoomDetails)

export default handler;