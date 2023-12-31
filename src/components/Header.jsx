
export const Header = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4b000d' }} />
          <stop offset="25%" style={{ stopColor: '#74003c' }} />
          <stop offset="50%" style={{ stopColor: '#bf004d' }} />
          <stop offset="75%" style={{ stopColor: '#ff6f61' }} />
          <stop offset="100%" style={{ stopColor: '#ffd23f' }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        fillOpacity="1"
        d="M0,288L26.7,293.3C53.3,299,107,309,160,272C213.3,235,267,149,320,106.7C373.3,64,427,64,480,69.3C533.3,75,587,85,640,112C693.3,139,747,181,800,208C853.3,235,907,245,960,256C1013.3,267,1067,277,1120,266.7C1173.3,256,1227,224,1280,224C1333.3,224,1387,256,1413,272L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
      />
    </svg>
  )
}
