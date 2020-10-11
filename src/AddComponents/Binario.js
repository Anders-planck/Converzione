import React, {Component} from 'react';
import '../scss/binario.scss'




class Binario extends Component {

  state=
      {
          'NumberBinaire': 0,
          'NumberDecimale':[],
          'Resultato':0,
          'message':'',
          'B':0,
          'N':0
      }


    Vedi=(e)=> {
        e.preventDefault();
        let modulo = 0;
        let list = [];
        let List = [];
        if (this.state.NumberBinaire == 0 || this.state.NumberDecimale == '') {
            this.Risultato(this.state.Resultato)
        }
        if (parseInt(this.state.NumberBinaire) != 0 && this.state.message.length==0) {
            let i = 0;
            let rest = parseInt(this.state.NumberBinaire)
            while (rest > 0) {
                modulo = rest % 2;
                rest = parseInt(rest / 2);
                list[i] = modulo;
                i++;
                console.log(list)
            }

            for (let s = 0; s < list.length; s++) {
                List[s] = list[list.length - s - 1]
            }
            this.setState(this.state, () => {
                this.state.Resultato = List;
                console.log(" risult   " + this.state.Resultato)
            })
            console.log("List  " + List.join(''))
            this.Risultato(List.join(''))
        }

        function esp(number, e) {
            let product=1;
            for (let i = 0; i < e; i++) {
                product*=number;
            }
            return product;
        }

        if (this.state.NumberDecimale.length !== 0  && this.state.message.length==0) {
             console.log(this.state.NumberDecimale)
            let Dec=this.state.NumberDecimale;
            let some=0;
            for (let i = 0; i < Dec.length; i++) {
                some+=(Dec[i]*esp(2,Dec.length-i-1));
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

    GetValueBin=(e)=>{


      let nouveau =e.target.value
     this.setState(this.state,()=> {
         console.log(isNaN(parseInt(nouveau)))
           if (isNaN(parseInt(nouveau))===false){
               this.state.NumberBinaire=parseInt(nouveau);
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


    GetValueDic=(e)=> {
        let nouveau = e.target.value;
        this.setState(this.state, () => {
                if (nouveau) {
                    this.state.NumberDecimale=[];
                    for (let i = 0; i < nouveau.length; i++) {
                        if (isNaN(parseInt(nouveau[i])) === false && (parseInt(nouveau[i])===1 || parseInt(nouveau[i])==0)) {
                            this.state.NumberDecimale.push(parseInt(nouveau[i]));
                            this.state.message = '';
                            this.state.D = 0;
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
            <div className='binario blocco'>
               <h3> conversion <br />base [ 10 --> 2 ] &&  [ 2 --> 10 ]</h3>
               <div className='forms'>
                  <div className='form'>

                      <div className='space'>
                          <h5>convert  Decimal To binario</h5>
                          <div className='errore'>
                              {this.Item(this.state.message)}
                          </div>
                          <form onSubmit={this.Vedi} className='form_10_2 '>
                              <input type="text" placeholder="Your Number..." className="txtb" name='base10' onChange={this.GetValueBin} />
                              <button className='convert' ><i className="fas fa-arrow-right"></i>  </button>
                          </form>

                      </div>
                      <div className='space'>
                          <h5>convert Binario To decimal</h5>
                          <div className='errore'>
                              {this.Item(this.state.message)}
                          </div>
                          <form onSubmit={this.Vedi} className='form_2_10' >
                              <input type="text" placeholder="Your Number..." className="txtb" name='base10' onChange={this.GetValueDic}/>
                              <button className='convert' ><i className="fas fa-arrow-right"></i> </button>
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

export default Binario;