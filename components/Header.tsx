import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="mx-5 flex max-w-4xl justify-between lg:mx-auto">
        {/* Header Left */}
        <div className="relative hidden w-24 lg:inline-grid">
          <Image
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjV_zzS438UKyOuDC3Sqtq2etM-lbLNTSW8fZFL801UqXm47-U3KSYCuk5f52Urlk6GOzSjU-E7tG9LIod8GaTnze_pL2jBbsp9xhcqLaLO-NHSiiOC3ZhEUcseXd2FrUyYJPZMf1PApFYnZXTulVRJB4P6pL8Pa1T7LQ2di9UTXdLTccFCDK5jqdmb=s320"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjS5WdCkpikRw9FwijBE61JvgC-umuW1roOhDzFDqkLq0UALUYyXwtbsTwzPbEpndj1MZz3-97Tjw0vSQ9GCGXj_sonBSvpS3SuNm69_NweM7WNQlHzQLRVOSDsXPG5sS3VkZGanvdmS8elIWX48xkyH8aqQ-5IYIPm2A08NPEY3QELXZ6rF96h-dXm=s500"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Header Search */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="sm:text-sm-border-gray-300 block w-full rounded-md bg-gray-50 pl-10 focus:border-black focus:ring-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Container */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-0 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              5
              </div>
          </div>
          <UserGroupIcon className="navBtn" />
          <PlusCircleIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          <img
            src="https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="profile pic"
            className="h-10 w-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
