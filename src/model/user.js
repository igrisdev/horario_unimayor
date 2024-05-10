import mongoose from 'mongoose'

const User = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
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

export default mongoose.models.User || mongoose.model('User', User)
