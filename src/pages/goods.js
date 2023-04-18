import React,{Component} from 'react';
import styles from './goods.css';
import {connect} from 'dva';
import {Card, Button} from 'antd'

@connect(
  state=>({
    goodsList:state.goods, //get namespace's state
    loading:state.loading  //get loading status from loading namespace
  }),
  {
    getList:()=>(
      {type:'goods/getList'} //action's type need namespace+reducer
    ),
    addGood:title=>(
      {
        type:'goods/addGood',
        payload:{title}
      }
    )
  }
)
export default class extends Component {
  componentDidMount(){
    this.props.getList()
  }
  render(){
    if(this.props.loading.models.goods){
      return <div>loading</div>
    }
    return (
      <div>
        <h1 className={styles.title}>Page goods</h1>
        {/* goods list */}
        <div>
          {
            this.props.goodsList.map((good,ind)=>{
              return <Card title={`Course${ind+1}`} key={good.title}>
                <div>{good.title}</div>
              </Card>
            })
          }
        </div>
        <div>
          <Button onClick={()=>this.props.addGood("Good3"+new Date().getTime())}>
            Add good
          </Button>
        </div>
      </div>
    );

  }

}
