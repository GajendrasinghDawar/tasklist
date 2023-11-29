export default function verifyRequest(props) {
    const { url, theme } = props
    console.log(props)
    return (
        <div>
            <h1>email sent!</h1>
            <p>check your mail box</p>
            <div className="card">
                {/* {theme.logo && <img src={theme.logo} alt="Logo" className="logo" />} */}
                <h1>Check your email</h1>
                <p>A sign in link has been sent to your email address.</p>
                <p>
                    <a className="site"
                    // href={url.origin}
                    >
                        {/* {url.host} */}
                    </a>
                </p>
            </div>
        </div>
    )
}