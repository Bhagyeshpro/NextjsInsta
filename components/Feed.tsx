import Stories from "./Stories"


function Feed() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-2 xl:max-w-6xl max-auto">
          {/* Stories */}
            <Stories/>

          {/* Posts */}
      </section>

      {/*  */}
      <section>
      </section>
    </main>
  )
}

export default Feed