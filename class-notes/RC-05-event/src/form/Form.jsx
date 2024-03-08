import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [isim, setIsim] = useState('')
    const [pass, setPass] = useState('')
    const [country, setCountry] = useState('')

    const getDatabase = (e) => {
        e.preventDefault()
        //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
        //? const res = axios.post("url", { isim, pass, country })

        alert(
            `name:${isim}
        password:${pass}
        ülkeler:${country}
        `)

        //*database'e yolladıktan sonra degişkenlerin içini temizledik.Bunu ekranda temiz görmek için inputlarda value değişkeni tanımladık
        setIsim("")
        setPass("")
        setCountry("")

    }
    return (
        <div className='container text-center mt-4'>
            <h1>****************************</h1>
            <h1>FORM(EVENTS)</h1>
            <form onSubmit={getDatabase}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="isim">USERNAME: <span className='text-danger'>{isim}</span> </label>
                    <input className='form-control' id='isim' type="text" onInput={(e) => setIsim(e.target.value)}
                        value={isim}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="password">PASSWORD</label>
                    <input className='form-control' id='password' type="text" onChange={(e) => setPass(e.target.value)}
                        value={pass}

                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="country">COUNTRY: <span>{country}</span></label>
                    <select onChange={(e) => setCountry(e.target.value)}
                        className='form-select'>
                        <option selected>COUNTRIES</option>
                        <option value="Türkiye">TURKEY</option>
                        <option value="Almanya">GERMANY</option>
                        <option value="Amerika">USA</option>
                    </select>
                </div>
                <button className='btn btn-primary' type='submit'>SEND</button>
            </form>

        </div>
    );
}

export default Form;
