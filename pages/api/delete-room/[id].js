import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { deleteRoom } from 'controllers/roomControllers'

import onError from 'middlewares/error'

const handler = nc({ onError });

dbConnect();

handler.delete(deleteRoom)

export default handler;