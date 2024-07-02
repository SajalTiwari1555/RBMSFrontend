
// import "./navbar.css"
import Dark from "./darkmode"
export default function Button({menu, submenu1, submenu2, submenu3, submenu4, submenu5, submenu6}) {
    return (
        <div className="flex gap-5 text-black">
                {/* <Dark/> */}
                    <div className="sec-center">
                        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                        <label className="for-dropdown  " for="dropdown">{menu}<i className="uil uil-arrow-down"></i></label>
                        <div className="section-dropdown text-white w-auto">
                            <a href="#">{submenu1}<i className="uil uil-arrow-right"></i></a>
                            <input className="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
                            <label className="for-dropdown-sub" for="dropdown-sub">{submenu2} <i className="uil uil-plus"></i></label>
                            <div className="section-dropdown-sub">
                                <a href="#">{submenu3} <i className="uil uil-arrow-right"></i></a>
                                <a href="#">{submenu4} <i className="uil uil-arrow-right"></i></a>
                            </div>
                            <a href="#">{submenu5} <i className="uil uil-arrow-right"></i></a>
                            <a href="#">{submenu6} <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
        </div>
    )
}
