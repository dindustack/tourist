import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { fetchAllRooms } from 'controllers/roomControllers'

import onError from 'middlewares/error'

const handler = nc({ onError });

dbConnect();

handler.get(fetchAllRooms)

export default handler;