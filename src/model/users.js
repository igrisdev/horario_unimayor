import mongoose from 'mongoose'

const Users = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Users || mongoose.model('Users', Users)
