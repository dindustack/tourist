import nc from 'next-connect'
import dbConnect from 'config/dbConnect'

import { fetchAllRooms } from 'controllers/roomControllers'

const handler = nc();

dbConnect();

handler.get(fetchAllRooms)

export default handler;