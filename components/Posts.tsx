import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'Offensive Hollywood',
    userImg:
      'https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img: 'https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    caption: 'Smash that like button',
  },
  {
    id: '123',
    username: 'Offensive Hollywood',
    userImg:
      'https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img: 'https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    caption: 'Smash that like button Smash that like button Smash that like button Smash that like button Smash that like button',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username} 
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}         
        />
      ))}
      {/* Post */}
    </div>
  )
}

export default Posts