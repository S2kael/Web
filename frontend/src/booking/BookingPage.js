import React from 'react'

export default function BookingPage() {
    return (
        <div id="sidebar">
            <ul className="sidebar-menu">
                <li className="active" style={{borderTop: '1px solid #d0d8df'}}> <a className href="index.php"> <i className="icon_house_alt" /> <span>Trang Chủ</span> </a> </li>
                <li className="sub-menu" style={{borderTop: '1px solid #d0d8df'}} id="sub-1"> 
                    <a href="javascript:;" className> 
                    <i className="icon_document_alt" /> 
                    <span>Quản lí tài khoản</span> 
                    <span className="menu-arrow arrow_carrot-right" /> 
                    </a>
                    <ul className="sub">
                    <li className="sub" style={{borderTop: '1px solid #d0d8df'}}> 
                        <a href="index.php?page=list-admin" className>
                        <span>Admin</span> 
                        </a> 
                    </li>
                    <li className="sub"> 
                        <a href="index.php?page=list-user" className>
                        <span>User</span> 
                        </a> 
                    </li>
                    </ul>
                </li>
                <li className="sub-menu" id="sub-2">
                    <a href="javascript:;" className> 
                    <i className="icon_document_alt" /> 
                    <span>Quản lí bài viết</span> 
                    <span className="menu-arrow arrow_carrot-right" /> 
                    </a>
                    <ul className="sub">
                    <li className="sub" style={{borderTop: '1px solid #d0d8df'}}> <a href="index.php?page=list-news" className><span>Tất cả bài viết</span> </a> </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
