export default function NotFoundPage({darkTheme}) {
    return (
        <main className="py-24">
            <div className="animate-bounce w-1/2 mx-auto flex justify-center items-center my-5 text-3xl border-2 border-black rounded-xl py-2 bg-gradient-to-r from-stone-600 via-stone-400 to-stone-600 text-stone-200">
                <p className="font-courier font-bold">&lt;ERROR/&gt;</p>
            </div>
            <svg width="375" height="200" viewBox="0 0 375 200" xmlns="http://www.w3.org/2000/svg">
                {/* cactus 1 far */}
                <polygon points='145,110 150,110 150,95 160,95 160,75 155,75 155,90 150,90 150,60 145,60 145,90 140,90 140,70 135,70 135,95 145,95' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                {/* cactus 2 far */}
                <polygon points='175,110 180,110 180,93 185,93 185,63 179,63 179,88 176,88 176,74 170,74 170,93 175,93' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                {/* rocks 1 far */}
                <polygon points='164,99 173,101 180,112 163,112' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                <polygon points='161,112 169,112 165,105 162,105' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                {/* rocks 2 far */}
                <polygon points='360,99 369,101 376,112 359,112' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                <polygon points='357,112 365,112 361,105 358,105' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                {/* bubble */}
                <rect x='32' y='40' width='60' height='40' rx='10' ry='10' fill='#cccccc' stroke='#000000'/>
                <text x="62" y="62" fill="#000000" fontSize="32" textAnchor="middle" dominantBaseline="middle">
                    ?
                </text>
                <rect x='65' y='83' width='6' height='6' rx='3' ry='3' fill='#cccccc' stroke='#000000'/>
                <rect x='62' y='92' width='6' height='6' rx='3' ry='3' fill='#cccccc' stroke='#000000'/>
                {/* head */}
                <rect x='50' y='105' width='20' height='20' fill='#cccccc' rx='10' ry='10' stroke='#000000'/>
                {/* eyes */}
                <rect x='63' y='110' width='3' height='3' fill='#000000'/>
                <rect x='58' y='110' width='3' height='3' fill='#000000'/>
                {/* neck */}
                <rect x='57' y='125' width='6' height='3' fill='#cccccc' stroke='#000000'/>
                {/* torso */}
                <rect x='48' y='128' width='24' height='33' fill='#cccccc' rx='6' ry='8' stroke='#000000'/>
                {/* right arm */}
                <polygon points='48,135 48,143 38,143 38,126 33,122 43,124 43,126 43,135' fill='#cccccc' stroke='#000000'/>
                {/* left arm */}
                <polygon points='72,135 72,143 82,143 82,126 87,122 77,124 77,126 77,135' fill='#cccccc' stroke='#000000'/>
                {/* legs */}
                <rect x='52' y='160' width='7' height='25' fill='#cccccc' stroke='#000000'/>
                {/* mountains far */}
                <rect x='62' y='160' width='7' height='25' fill='#cccccc' stroke='#000000'/>
                {/* mountains far */}
                <polyline points='0,60 60,0 120,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                <polyline points='100,40 140,0 200,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                <polyline points='180,40 220,0 280,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                <polyline points='260,40 300,0 360,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                <polyline points='340,40 380,0' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                {/* cactus near */}
                <polygon points='245,180 255,180 255,160 270,160 270,120 260,120 260,150 255,150 255,110 245,110 245,150 240,150 240,130 230,130 230,160 245,160' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                {/* rocks near */}
                <polygon points='315,180 320,180 317,170 316,170' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                <polygon points='285,180 315,180 308,160 290,163' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
            </svg>
            <div className="w-11/12 mx-auto my-12">
                <p className={`${!darkTheme ? 'text-stone-800' : 'text-stone-200'} font-courier`}>Oops! It looks like we've encountered an error. Please check for any spelling errors in your URL, and for any connectivitiy issues with your Internet. If the problem persists, please feel free to contact the website administrator.</p>
            </div>
        </main>

    )
}