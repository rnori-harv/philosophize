// Purpose: Kongzi page
// return a const called Kongzi that returns a div with a class of "aboutPage" and a div with a class of "mainFont"
// inside the mainFont div, return a h2 with the text "Kongzi" and an img with a src of "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0C-sABHaj-jbkfW0AU20x4HFd4ZORypmpuw&usqp=CAU" and an alt of "Kongzi" and a class of "center-img"
// make the image centered by using the center-img class. Make the Kongzi h2 centered by using the center-text class.
// export the Kongzi const


const Kongzi = () => {
  return (
    <div id="aboutPage">
      <div className="mainFont">

        <h1 className="center">Kongzi</h1>
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0C-sABHaj-jbkfW0AU20x4HFd4ZORypmpuw&usqp=CAU" alt = "Kongzi" class = "center-img" />

      </div>
      <div className = "mainFont">
        <h2>Overview</h2>
        <p>
        Kongzi, also known as Confucious, was primarily concerned with the mastery of the Way (or Dao) through strict ritualistic practices, filial piety, cultivation of the arts, and a gentleman demeanor. Kongzi sought to create rules and methods that humans could use to strive to become worthy gentlemen of society. 
        </p>
        <h2>Kongzi's Genres</h2>
        <p>
        Some genres that would resemble Kongzi’s ideology are classical, opera, and jazz. These categories are refined and heavily structured, which mirrors Confucian ideology. People who love classical, opera, and jazz tend to see beauty in structure in a similar manner to how Confucians worship the rituals needed to become a gentleman. 
        Pop also falls into Kongzi's realm as it is the most popular genre, and Confucian thought was historically the most popular.
        </p>
      </div>
    </div>
  )
}

export default Kongzi;


