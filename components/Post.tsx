import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeroIconFilled } from '@heroicons/react/solid'

function Post({ id, img, key, username, userImg, caption }) {
  return (
    <div className="border-rounded-sm my-7 bg-white">
      {/* Header */}
      <div className="flex items-center p-3">
        <img
          src={userImg}
          className="mr-3 h-10 w-10 rounded-full border object-contain p-1"
          alt=""
        />
        <p className="flex-1 text-sm font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Img */}
      <img src={img} className="w-full object-cover" alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1" >{username}</span> {caption}
      </p>

      {/* Comments */}

      {/* Input */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="btn" />
        <input type="text" 
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">post</button>
      </form>

    </div>
  )
}

export default Post
