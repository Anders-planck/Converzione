import React, {Component} from 'react';
import '../scss/altro.scss'



class Altro extends Component {
    state=
        {
            'Number': [],
            'Base1':10,
            'Resultato':0,
            'Base2':2,
            'message':'',
            'B':0,
            'N':0
        }


    Vedi=(e)=> {
        e.preventDefault();
        let modulo = 0;
        let list = [];
        let List = [];
        if (this.state.Base1 == 0 ||this.state.Base2 == 0 || this.state.Number == 0) {
            this.Risultato(this.state.Resultato)
        }
        function esp(number, e) {
            let product=1;
            for (let i = 0; i < e; i++) {
                product*=number;
            }
            return product;
        }

        if (parseInt(this.state.Base1) != 0 &&parseInt(this.state.Base2) != 0 && this.state.message.length==0) {
console.log(this.state.Base2,this.state.Base1,this.state.Number)
            let Dec=this.state.Number;
            let some=0;
            for (let i = 0; i < Dec.length; i++) {
                console.log(this.state.Base2,this.state.Base1,this.state.Number[i])
                some+=(Dec[i]*esp(this.state.Base1,Dec.length-i-1));
            }
            this.Risultato(some)
        }


    }
    span(Resultato){
        return("<h6>"+"Risultato : "+"<span>"+Resultato+"</span>"+"</h6>");
    }

    Risultato(Resultato) {
        if(this.state.message.length==0) {
            let elements = document.getElementsByClassName('Resultato')
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = this.span(Resultato)
            }
        }
    }

    GetValueBase1=(e)=>{


        let nouveau =e.target.value
        this.setState(this.state,()=> {

                if (isNaN(parseInt(nouveau))===false){
                    this.state.Base1=parseInt(nouveau);
                    this.state.message='';
                    this.state.B=0;

                }else{
                    this.state.message='Veuillez Inserer Un Numbre';
                    this.state.B=1;
                }

            }
        )
        if(nouveau) {
            return this.Item(this.state.message)
        }
    }

    GetValueBase2=(e)=>{


        let nouveau =e.target.value
        this.setState(this.state,()=> {

                if (isNaN(parseInt(nouveau))===false){
                    this.state.Base2=parseInt(nouveau);
                    this.state.message='';
                    this.state.B=0;

                }else{
                    this.state.message='Veuillez Inserer Un Numbre';
                    this.state.B=1;
                }

            }
        )
        if(nouveau) {
            return this.Item(this.state.message)
        }
    }


    GetValue=(e)=> {
        let nouveau = e.target.value;
        this.setState(this.state, () => {
                if (nouveau) {
                    this.state.Number=[];
                    for (let i = 0; i < nouveau.length; i++) {
                        if (isNaN(parseInt(nouveau[i])) === false ) {
                            this.state.Number.push(parseInt(nouveau[i]));
                            this.state.message = '';
                            this.state.D = 0;
                            console.log(this.state.Number)
                        } else {
                            this.state.message = 'Veuillez Inserer Un Numbre  '
                            this.state.D = 1;
                        }
                    }

                } else {
                    this.state.message = 'Veuillez Inserer Un Numbre ';
                    this.state.D = 1;
                }
            }
        )
        if(nouveau) {
            return this.Item(this.state.message)
        }
    };

    Item=(message)=>{
        let element = document.getElementsByClassName('Resultato');
        element.innerHTML = message;

        if(this.state.B===1 && message) {
            return <h6>{message}</h6>;

        }else if(this.state.D===1 && message){
            return <h6>{this.state.message}</h6>;

        }else{
            return null;
        }
    };

    render() {
        return (
            <div className='altro blocco'>
                <h3> Generaly  conversion </h3>
                <div className='forms'>
                    <div className='form'>
                        <div className='space'>
                            <h5>convert Your base for Your base</h5>
                            <div className='errore'>
                                {this.Item(this.state.message)}
                            </div>
                            <form onSubmit={this.Vedi} className='form_10_2 '>
                                <div className='content1'>
                                <input type="text" placeholder="Your Number..." className="txtb" name='base10'
                                       onChange={this.GetValue}/>
                                </div>
                                <div className='content'>
                                    <input className='base' type="text" placeholder="Your base..." className="txtb" name='base10'
                                           onChange={this.GetValueBase1}/>
                                    <i className="fas fa-arrow-right"></i>
                                    <input  className='base'  type="text" placeholder="for base..." className="txtb" name='base10'
                                           onChange={this.GetValueBase2}/>
                                </div>
                                <button className='convert'><i className="fas fa-arrow-right"></i></button>
                            </form>
                        </div>
                        <div className='Resultato space'>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Altro;