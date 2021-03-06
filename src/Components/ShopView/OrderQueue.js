import React,{Component,Fragment} from 'react';
import axios from 'axios';
import ColumnTitles from './ColumnTitles'
import OrderItems from './OrderItems';

import Img from '../../Assets/profile.png';

class OrderQueue extends Component{
    state={
        WaitingOrders:[
            {
            id:1,
            createdAt:'max', 
            orderStatus:'25',
            totalPrice:'500.0',
            Products:[
                {
                    id:'100',
                    name:'Milk Powder',
                    unitPrice:'100',
                    image:null,
                    quantity:'200',
                    rating:'',
                    like:'',
                    discount:'',
                    sellerId:''
                },
                
            ]},
        ],
    }

    componentDidMount(){
        axios.get('')
            .then(response=>{
                this.setState({WaitingOrders:response.data})
            });
    }

    render(){
        console.log(this.state.WaitingOrders);
        const WaitingOrders=this.state.WaitingOrders.map(orders=>{
           return <OrderItems value={orders} OrderId={orders.id} time={orders.createdAt} total={orders.totalPrice} 
           OrderDetails={orders.Products.map((c,i)=>(
                    <div key={i} style={{MozBoxAlign:'center',paddingLeft:'50%'}}>
                        <div className='row'>
                            <div className='col'style={{paddingRight:'5%'}}>{c.name} :  </div>
                            <div className='col'>{c.quantity}</div>                            
                        </div>                        
                    </div>))}/>
             });        
        return(
            <div>
                <section>
                    <Fragment>
                        <ColumnTitles/> 
                        {WaitingOrders}                     
                    </Fragment>
                </section>
                
            </div>
            
   
        );
    };
}
export default OrderQueue;