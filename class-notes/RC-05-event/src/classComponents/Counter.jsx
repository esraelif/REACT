//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================

import { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props)
        //! State'e baslangıc degeri atadık
        this.state = { sayac: props.count || 0, baslik: "Hello" }



    }
    arttir() {
        this.setState({ sayac: this.state.sayac + 1 })
        this.setState({ baslik: "Good Morning" })
    }
    //!Burada error func tercih ettiğimiz için buton kısmında fonk. bind etmeye gerek yok
    azalt = () => {
        this.setState({ sayac: this.state.sayac - 1 })
    }



    render() {

        return (
            <div className="container text-center mt-4">
                <h1>{this.state.sayac}</h1>
                <h2>{this.state.baslik}</h2>
                <button onClick={this.arttir.bind(this)} className="btn btn-warning">Increase</button>
                <button onClick={this.azalt.bind(this)} className="btn btn-dark">Decrease</button>
            </div>

        )



    }






}
export default Counter