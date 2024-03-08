// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.


import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";


const MouseKeyboard = () => {
    const [xEkseni, setXekseni] = useState(0)
    const [yEkseni, setYekseni] = useState(0)

    const [inputData, setInputData] = useState("")
    const MouseEvent = (e) => {
        setXekseni(e.pageX)
        setYekseni(e.pageY)

    }
    const keyboardEvent = (e) => {
        if (e.keyCode <= 57 && e.keyCode >= 48) {
            alert("tebrikler rakam girdiniz")
        } else {
            alert("hatalı giriş yaptınız")
        }

    }
    return (
        <div
            onMouseMove={MouseEvent}
            className="container text-center mt-4 d-flex flex-column align-items-center"
        >
            <h2 className="text-danger">MOUSE EVENTS</h2>
            <p>X ve Y</p>
            <p className="text-danger fw-bold">
                {xEkseni} - {yEkseni}
            </p>
            <div
                className="bg-success text-light w-50 p-4"
                id="coord" onMouseMove={MouseEvent}

            >
                KOORDİNATLAR <FaReact /><FaGooglePlus /><HiOutlineDesktopComputer />
            </div>
            <div>
                <h2 className="text-danger mt-4">
                    Keyboard-Clipboard Events{" "}
                    <span className="text-primary">{inputData}</span>
                </h2>

                <input
                    onChange={(e) => setInputData(e.target.value)}
                    onKeyDown={keyboardEvent}
                    type="text"
                    className="form-control"

                />
            </div>
            <div
                id="todo-1"
                className="bg-success text-light w-50 p-4"

            >
                todo item 1
            </div>

        </div>
    );
};

export default MouseKeyboard;
