import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon
} from "@heroicons/react/outline"

import { HeartIcon as HeroIconFilled} from "@heroicons/react/solid";

function Post({id, img, key, username, userImg, caption }) {
  return (
    <div className="bg-white my-7 border-rounded-sm">
        {/* Header */}
        <div className="flex items-center p-3" >
          <img src={userImg} className="rounded-full h-10 w-10 object-contain border p-1 mr-3"  alt="" />
          <p className="flex-1 font-bold text-sm" >{username}</p>
          <DotsHorizontalIcon className="h-5"/>
        </div>
    </div>
  )
}

export default Post