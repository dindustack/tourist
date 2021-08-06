import Room from "models/room";

import handleError from 'utils/handleError'

// Fetch all rooms => /api/rooms
const fetchAllRooms = async (req, res) => {
  try {

    const rooms = await Room.find();
    const numberOfRooms = await Room.countDocuments();

    res.status(200).json({
      success: true,
      numberOfRooms,
      rooms
    });

  } catch (error) {
    res.status(400).json({
        success: false,
        error: error.message,
      });
  }
};

// Create new room => /api/create_room
const createNewRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create new room => /api/rooms/:id
const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id)

    if (!room) {
      return next(new handleError('Room not found with this ID', 404))
    }

    res.status(200).json({
      success: true,
      room,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update Room Details => /api/update-room-details/:id
const updateRoomDetails = async (req, res) => {
  try {
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

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update Room Details => /api/delete-room/:id
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id)

    if (!room) {
      return next(new handleError('Room not found with this ID', 404))
    }

    await room.remove()

    res.status(200).json({
      success: true,
      message: 'Room deleted successfully',
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { fetchAllRooms, createNewRoom, getSingleRoom, updateRoomDetails, deleteRoom };
