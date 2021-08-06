const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter room price'],
        maxLength: [5, 'Room name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter room description'],
    },
    address: {
        type: String,
        required: [true, 'Please enter room address'],
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity'],
    },
    numberOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds'],
    },
    internet: {
        type: Boolean,
        default: false,
    },
    parking: {
        type: Boolean,
        default: false,
    },
    petsAllowed: {
        type: Boolean,
        default: false,
    },
    foodAndDrink: {
        type: Boolean,
        default: false,
    },
    generalAmenities: {
        type: Boolean,
        default: false,
    },
    roomService: {
        type: Boolean,
        default: false,
    },
    cleaningServices: {
        type: Boolean,
        default: false,
    },
    businessFacilities: {
        type: Boolean,
        default: false,
    },
    safetyAndSecurity: {
        type: Boolean,
        default: false,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    numberOfReviews: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: [
                'Single',
                'Double',
                'Triple',
                'Quad',
                'Queen',
                'King',
                'Twin',
                'Studio',
                'Executive Suite',
                'Mini Suite',
                'Presidential Suite',
                'Cabana',
                'Villa'
            ],
            message: 'Please select correct category for room'
        }
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);