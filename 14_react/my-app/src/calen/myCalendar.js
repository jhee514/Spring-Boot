import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './myCalendar.css';
import { Calendar, Badge } from 'antd';



class myCalendar extends Component {
  
  state = {
    times : [],
    listData : [],
  }
  
  getClasses(date) {
    const classeses = [
      { "id":"1", "year": "2020", "month": "2", "date": "20200201", "time": "08001000" },
      { "id":"2", "year": "2020", "month": "2", "date": "20200201", "time": "13001400" },
    ]
    return classeses
  }
  
  
  // list 를 바꿔주는 함수
  getListData(value) {
    // let listData = [];
    // const datedata = value.date()
    // const monthdata = value.month()
    // const yeardata = value.year()
    // console.log("what is value??", value);
    // console.log("datedata", datedata)
    // console.log("monthdata", monthdata)
    // console.log("yeardata", yeardata)
    
    // listData = this.getClasses(value.date())
    
    // return listData || [];
    return this.listData;
  }



  // 하루 일정을 나타내는 함수
  dateCellRender(classes) {
    const listData = [
      { "id":"1", "year": "2020", "month": "2", "date": "20200201", "time": "08001000" },
      { "id":"2", "year": "2020", "month": "2", "date": "20200201", "time": "13001400" },
    ]

    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.id}>
            <Badge 
            status="warning" 
            text={item.time} 
            onClick={() => {
              this.setState(() => (
                { listData: [...this.state.listData, item.time] }
              ))
            }}
            />
          </li>))
        }
      </ul>
    );
  }
  
  getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  monthCellRender(value) {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  

  render() {
    return (
      <div>
        <div>
        <Calendar 
          dateCellRender={this.dateCellRender} 
          monthCellRender={this.monthCellRender} 
          onSelect={this.onSelectDate}
          />
        </div>
        <div>
          { this.state.times }
        </div>

      </div>
    )
  };
};

export default myCalendar;