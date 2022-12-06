import { 
  getCurrentDate, 
  getLastName, 
  getFirstName,
} from '../utils';
import noProfilePic from '../img/noProfilePic.jpg';

const Card = ({
    profile,
    topArtist,
    topTrackName,
    topTrackArtists,
    topTrackAlbumCover,
    topGenres
  }) => {
    let mozi = false;
    let kongzi = false;
    let zhuangzi = false;
    let hanfeizi = false;
    for (var i = 0; i < topGenres.length; i++) {
      if (topGenres[i] === "RAP" || topGenres[i] === "HIP HOP" || topGenres[i] === "ROCK" || topGenres[i] === "METAL") {
        hanfeizi = true;
        break;
      }
      if (topGenres[i] === "EDM" || topGenres[i] === "HOUSE" || topGenres[i] === "TRAP") {
        mozi = true;
        break;
      }
      if (topGenres[i] === "POP" || topGenres[i] === "R&B" || topGenres[i] === "SOUL" | topGenres[i] === "COUNTRY" || topGenres[i] === "FOLK" || topGenres[i] === "INDIE" || topGenres[i] === "PUNK" ) {
        zhuangzi = true;
        break;
      }
      if (topGenres[i] === "CLASSICAL" || topGenres[i] === "JAZZ" || topGenres[i] === "BLUES" || topGenres[i] === "OPERA") {
        kongzi = true;
        break;
      }
    }
  return (
    <div id="card">
      <div id="cardRectangle"></div>
      <div id="loadingRectangle">
        <p id="loadingMessage">loading...</p>
        <p id="refreshPageMessage">(refresh page if this takes too long)</p>
      </div>
      <div id="backgroundCoverArt" style={{backgroundImage: `url(${topTrackAlbumCover})`}}></div>
      
      <div id="mainProfilePicAndSignature">

        {(profile.images.length && profile.images[0].url) ? (
          <div id="mainProfilePic" style={{backgroundImage:`url('${profile.images[0].url}')`}}></div>
        ) : (
          <div id="mainProfilePic" style={{backgroundImage:`url('${noProfilePic}')`}}></div>
        )}

        <div id="signatureWrapper">
          <p id="signature">{profile.display_name}</p>
        </div>
      </div>
      
      <p id="licensify">1091</p>
      <p id="country">{profile.country}</p>
      <p id="driverLicense">PHILOSOPHER'S LICENSE</p>
      <p id="displayTimeRange">FROM LAST MONTH</p>

      <hr id="topGreenLine"/>
      <hr id="bottomGreenLine"/>

      <div id="topSection" className="flexWrapper">
        <div id="dl" className="flexWrapper">
          <p id="dlKey" className="sectionKey">DL</p>
          <p id="dlValue">{profile.id.toUpperCase()}</p>
        </div>
        
        <div id="expAndFollowersWrapper" className="flexWrapper">
          <p id="expKey" className="sectionKey">EXP</p>
          <p id="expValue">{getCurrentDate()}</p>

          <p id="followersKey" className="sectionKey">FOLLOWERS</p>
          <p id="followersValue" className="sectionValue">{profile.followers.total}</p>
        </div>

        <div id="nameWrapper" className="flexWrapper">
          <div id="ln" className="flexWrapper">
            <p id="lnKey" className="sectionKey">LN</p>
            <p id="lnValue" className="sectionValue">{getLastName(profile.display_name).toUpperCase()}</p>
          </div>

          <div id="fn" className="flexWrapper">
            <p id="fnKey" className="sectionKey">FN</p>
            <p id="fnValue" className="sectionValue">{getFirstName(profile.display_name).toUpperCase()}</p>
          </div>
        </div>

        {(mozi && !kongzi && !zhuangzi && !hanfeizi) ? (
          <div id="track" className="flexWrapper">
            <p id="trackKey" className="sectionKey">PHILOSOPHER</p>
            <p id="trackValue" className="sectionValue">MOZI</p>
          </div>
        ) : (kongzi && !mozi && !zhuangzi && !hanfeizi) ? (
          <div id="track" className="flexWrapper">
            <p id="trackKey" className="sectionKey">PHILOSOPHER</p>
            <p id="trackValue" className="sectionValue">KONGZI</p>
          </div>
        ) : (zhuangzi && !mozi && !kongzi && !hanfeizi) ? (
          <div id="track" className="flexWrapper">
            <p id="trackKey" className="sectionKey">PHILOSOPHER</p>
            <p id="trackValue" className="sectionValue">ZHUANGZI</p>
          </div>
        ) : (hanfeizi && !mozi && !kongzi && !zhuangzi) ? (
          <div id="track" className="flexWrapper">
            <p id="trackKey" className="sectionKey">PHILOSOPHER</p>
            <p id="trackValue" className="sectionValue">HAN FEIZI</p>
          </div>
        ) : (
          <div id="track" className="flexWrapper">
            <p id="trackKey" className="sectionKey">PHILOSOPHER</p>
            <p id="trackValue" className="sectionValue">KONGZI</p>
          </div>
        )}
      </div>
    
      <div id="genres" className="flexWrapper">
        <p id="genresKey" className="sectionKey">TOP GENRES</p>
        <p id="genresValue" className="sectionValue">
          <span>{topGenres[0]},      </span>    
          <span>{topGenres[1]},      </span>
          <span>{topGenres[2]}</span>
        </p>
      </div>

      {(profile.images.length && profile.images[0].url) ? (
        <img id="smallProfilePic" src={profile.images[0].url} alt="small profile pic"></img>
      ) : (
        <img id="smallProfilePic" src={noProfilePic} alt="small default profile pic"></img>
      )}
      <p id="websiteName">PHILOSOPHIZE.HEROKUAPP.COM</p>
    </div>
  )
}

export default Card;