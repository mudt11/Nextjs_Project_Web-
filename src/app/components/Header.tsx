export default function Header() {
    return (
        <header className="header">
            <div className="back-next-search">
                <div className="back chevron">
                    <button>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
                <div className="next chevron">
                    <button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass i-search"></i>
                    <input
                        className="input-text"
                        placeholder="Bạn muốn phát nội dung gì?"
                    />
                </div>
            </div>

            <div className="header-right">
                <button className="sign-up head">
                    <a href="/signup" className="a-sign-up">
                        Sign up
                    </a>
                </button>
                <button className="login head">
                    <a href="/signin">Sign in</a>
                </button>
            </div>
        </header>
    );
}
