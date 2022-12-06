import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div id="aboutPage">
      <div className="mainFont">

        <h2>Background</h2>
        <p>
          This website is my final project submission for my Chinese Philosophy Class. Gened 1091. 
        </p>
        <p>
          I combined my skillset in web development and the knowledge I've gained in this class to create this website. This website
          matches your Spotify listening genres with the most prominent Chinese philosophers covered in this class.
        </p>

        <h2>How it Works</h2>
        <p>
        The four philosophers that I've chosen to match with are <Link to="/kongzi">Kongzi</Link>, <Link to="/Zhuangzi">Zhuangzi</Link>, <Link to="/hanfeizi">Han Feizi</Link>, and <Link to="/mozi">Mozi</Link>.
        Refer to the linked pages on an overview of each philosopher and their corresponding music genres. This website uses the Spotify API to get your listening data, determines your favorite genre of music, and matches them to one of 
        the four philosphers whose views would best resonate with that genre. 
        </p>
        <p> 
        </p>
        <h2>References</h2>
        <p>
          I would like to thank jenetic for providing a template project <a href = "https://github.com/jenetic/licensify">licensify</a>, which I used as a baseline for this website. I would also like to thank the texts used in this course, which were used to better understand the themes of the philosophers used in this web application.
        </p>

      </div>
    </div>
  )
}

export default About;