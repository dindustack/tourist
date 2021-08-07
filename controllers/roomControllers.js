import Room from "models/room";

import handleError from 'utils/handleError'
import catchAsyncErrors from "middlewares/catchAsyncErrors";

// Fetch all rooms => /api/rooms
const fetchAllRooms = catchAsyncErrors(async (req, res) => {

    const rooms = await Room.find();
    const numberOfRooms = await Room.countDocuments();

    res.status(200).json({
      success: true,
      numberOfRooms,
      rooms
    });
});

// Create new room => /api/create_room
const createNewRoom = catchAsyncErrors(async (req, res) => {

    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
});

// Create new room => /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {

    const room = await Room.findById(req.query.id)

    if (!room) {
      return next(new handleError('Room not found with this ID', 404))
    }

    res.status(200).json({
      success: true,
      room,
    }); 
});

// Update Room Details => /api/update-room-details/:id
const updateRoomDetails = catchAsyncErrors(async (req, res,next) => {

  let room = await Room.findById(req.query.id)

    if (!room) {
      return next(new handleError('Room not found with this ID', 404))
    }

     room = await Room.findByIdAndUpdate(req.query.id, req.body, {
       new: true,
       runValidators: true,
       useFindAndModify: false
     })


    res.status(200).json({
      success: true,
      room,
    });
});

// Update Room Details => /api/delete-room/:id
const deleteRoom = catchAsyncErrors(async (req, res, next) => {

  const room = await Room.findById(req.query.id)

    if (!room) {
      return next(new handleError('Room not found with this ID', 404))
    }

    await room.remove()

    res.status(200).json({
      success: true,
      message: 'Room deleted successfully',
    });
});

export { fetchAllRooms, createNewRoom, getSingleRoom, updateRoomDetails, deleteRoom };
