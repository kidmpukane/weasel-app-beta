
export default function StorieCards(props) {
    return (
      <div className="storie-cards">

        <img 
          style={{
            display: "block",
            backgroundColor: "#2ECBE9"
          }}
          src={`../assets/${props.img}`} 
          className="storie-card-image" 
        alt="Stories"/>

      </div>
    );
  }

  