export const Footer = () => {

    return (
        <>
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
                    d="M0,288L26.7,293.3C53.3,299,107,309,160,272C213.3,235,267,149,320,106.7C373.3,64,427,64,480,69.3C533.3,75,587,85,640,112C693.3,139,747,181,800,208C853.3,235,907,245,960,256C1013.3,267,1067,277,1120,266.7C1173.3,256,1227,224,1280,224C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                />
            </svg>
            <p className="text-center" style={{ marginTop: '-50px' }}>Develop with ❤️ by <strong><a href="https://linkedin.com/in/rechenique" target="_blank" rel="noreferrer">Or4ngeH4t</a></strong></p>
        </>
    )
}
