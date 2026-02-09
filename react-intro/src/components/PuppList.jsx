
export function PuppyList(props) {

  const puppyImgUrl = "/img/puppy.jpg"

  return (
    <div className="card-deck">
      <div>
        <img src={puppyImgUrl} alt="a cute puppy" />
        <h3>Hypertext Markup Language</h3>
      </div>

      <div>
        <img src={puppyImgUrl} alt="a cute puppy" />
        <h3>Cascading Style Sheets </h3>
      </div>

      <div>
        <img src={puppyImgUrl} alt="a cute puppy" />
        <h3>JavaScript</h3>
      </div>
    </div>
  )
}
